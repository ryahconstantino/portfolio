# Como usar IA em sistemas web

Um modelo de linguagem só ajuda o produto quando a tarefa é clara, a resposta pode ser avaliada e a chamada fica atrás da sua API. Sem isso, o chat vira custo, risco de dados e uma experiência difícil de explicar para o cliente.

## Defina a tarefa antes de escolher o modelo

IA em sistema web funciona melhor em trabalhos repetíveis: classificar um lead, extrair campos de um texto, resumir um atendimento, sugerir a próxima ação ou preencher um JSON com regras. Se você não consegue escrever um exemplo de entrada, saída esperada e critério de erro, o recurso ainda não está pronto para produção.

Separe também o que o modelo não deve fazer. Cálculo de preço, permissão de usuário, estoque, contrato e qualquer decisão que precise de fonte única de verdade continuam no código e no banco.

## Chame o modelo pelo backend

A chave da API, o prompt e o histórico da conversa não devem ir para o navegador. No Laravel, isole a integração em um serviço e leia o segredo do ambiente:

```php
use Illuminate\Support\Facades\Http;

class LanguageModel
{
    public function complete(string $system, string $user): array
    {
        $response = Http::withToken(config('services.openai.key'))
            ->timeout(30)
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => config('services.openai.model', 'gpt-4o-mini'),
                'temperature' => 0.2,
                'response_format' => ['type' => 'json_object'],
                'messages' => [
                    ['role' => 'system', 'content' => $system],
                    ['role' => 'user', 'content' => $user],
                ],
            ]);

        $response->throw();

        return json_decode($response->json('choices.0.message.content'), true, 512, JSON_THROW_ON_ERROR);
    }
}
```

O mesmo contrato funciona com provedores compatíveis com OpenAI. Trocar de modelo vira configuração, não uma reescrita da página.

## Exija uma resposta estruturada

Peça JSON com campos nomeados e rejeite o payload se faltar chave, tipo ou valor permitido. Isso permite gravar o resultado no banco, mostrar um estado de erro e comparar versões do prompt.

Um prompt de sistema curto costuma ser mais estável do que um texto longo e vago. Inclua o papel, o formato, o que ignorar e um exemplo mínimo. Versionar o prompt no repositório evita o “funcionava ontem” sem histórico.

## Proteja dados, custo e falha

Não envie documento completo, senha, prontuário ou dado pessoal se um trecho já resolve a tarefa. Aplique rate limit por usuário, limite de tokens, timeout e um fallback: fila para retry, mensagem humana ou regra determinística.

Registre modelo, tokens, latência, prompt versionado e se a validação passou. Sem isso, é impossível saber se a IA está cara, lenta ou inventando.

Quando a decisão afeta dinheiro, saúde, jurídico ou exclusão de dados, mantenha revisão humana no caminho. LGPD continua valendo: o modelo é um processador, não uma desculpa para vazar contexto.

## Checklist antes de publicar

- A tarefa tem entrada, saída e critério de qualidade escritos.
- A chave da API vive só no servidor, com timeout e limite de taxa.
- A resposta passa por schema; conteúdo inválido não chega ao usuário como verdade.
- Logs mostram custo e falha sem gravar dado sensível.
- Existe fallback quando o provedor cai ou a qualidade fica abaixo do limiar.

## Mais

Consulte a [API de Chat Completions da OpenAI](https://platform.openai.com/docs/api-reference/chat) e trate o modelo como uma dependência de infraestrutura, com a mesma disciplina de fila, cache e observabilidade que você já usa no restante do sistema.
