# How to use AI in web systems

A language model helps a product only when the task is clear, the answer can be evaluated and the call stays behind your API. Otherwise the chat becomes cost, a data risk and an experience you cannot explain to the customer.

## Define the task before choosing a model

AI in a web system works best on repeatable jobs: classifying a lead, extracting fields from text, summarizing a conversation, suggesting the next action or filling a JSON document under rules. If you cannot write a sample input, an expected output and an error criterion, the feature is not ready for production.

Also draw a hard line around what the model must not do. Price calculation, user permissions, stock, contracts and any decision that needs a single source of truth stay in code and in the database.

## Call the model from the backend

The API key, the prompt and the conversation history should not go to the browser. In Laravel, keep the integration in a service and read the secret from the environment:

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

The same contract works with OpenAI-compatible providers. Switching models becomes configuration, not a rewrite of the page.

## Require a structured response

Ask for JSON with named fields and reject the payload if a key, type or allowed value is missing. That lets you store the result, show an error state and compare prompt versions.

A short system prompt is usually more stable than a long, vague one. Include the role, the format, what to ignore and a minimal example. Version the prompt in the repository so yesterday’s behaviour has a history.

## Protect data, cost and failure

Do not send a full document, a password, a medical record or personal data when a fragment already solves the task. Apply per-user rate limits, token caps, timeouts and a fallback: a retry queue, a human message or a deterministic rule.

Log the model, tokens, latency, prompt version and whether validation passed. Without that, you cannot tell whether the AI is expensive, slow or making things up.

When the decision affects money, health, legal work or data deletion, keep a human in the loop. Privacy law still applies: the model is a processor, not an excuse to leak context.

## Checklist before launch

- The task has a written input, output and quality criterion.
- The API key lives only on the server, with a timeout and a rate limit.
- The response goes through a schema; invalid content never reaches the user as truth.
- Logs show cost and failure without storing sensitive data.
- A fallback exists when the provider is down or quality drops below the threshold.

## More

See the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat) and treat the model as an infrastructure dependency, with the same queue, cache and observability discipline you already use in the rest of the system.
