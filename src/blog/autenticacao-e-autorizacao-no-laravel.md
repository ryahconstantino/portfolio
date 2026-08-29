# Autenticação e autorização no Laravel

Autenticação responde “quem é esta pessoa?”. Autorização responde “o que ela pode fazer?”. Trate as duas como parte do produto, não apenas como uma tela de login.

## Comece com um starter kit oficial

Ao criar uma aplicação nova com `laravel new`, escolha um starter kit compatível com a interface que será usada. Os kits oficiais já oferecem base para login, cadastro, redefinição de senha, verificação de e-mail e configurações da conta.

Depois de configurar o banco de dados, execute:

```bash
php artisan migrate
composer run dev
```

Teste o fluxo completo: cadastro, login, logout, recuperação de senha e verificação de e-mail. Em ambiente real, o envio de e-mail depende de um `MAIL_MAILER` configurado e de uma caixa de entrada acessível para o teste.

## Proteja rotas privadas

Agrupe as rotas que exigem sessão autenticada. Caso a ação só possa acontecer após a confirmação do e-mail, inclua `verified`:

```php
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('projects', ProjectController::class);
});
```

O middleware decide se a pessoa pode entrar na área; a policy decide se ela pode atuar sobre um registro específico.

## Use policies para regras do domínio

Crie uma policy para recursos que pertencem a uma organização, equipe ou usuário:

```bash
php artisan make:policy ProjectPolicy --model=Project
```

Na policy, compare a relação real entre usuário e registro, como organização, papel ou propriedade. Evite confiar em IDs enviados pelo navegador sem verificar se pertencem ao usuário autenticado.

## Checklist antes de publicar

- Exija senhas fortes e não registre senhas ou tokens nos logs.
- Mantenha rate limiting ativo nos endpoints de login e recuperação.
- Ative verificação de e-mail para fluxos que dependem de identidade confirmada.
- Revise permissões de recursos administrativos e teste uma conta sem privilégios.
- Configure HTTPS, cookies seguros e variáveis de ambiente fora do repositório.

## Mais

Consulte os [starter kits oficiais do Laravel](https://laravel.com/starter-kits) e a [documentação de autenticação](https://laravel.com/docs/authentication).
