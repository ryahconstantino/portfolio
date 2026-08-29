# Personal Portfolio 2025

## Microsoft Clarity

The Microsoft Clarity tracking code is injected into every page only when `CLARITY_PROJECT_ID` contains a valid alphanumeric Project ID. It remains disabled when the variable is empty or invalid.

Copy `.env.example` to `.env.local` for local validation, or configure the same variable in the production environment:

```dotenv
CLARITY_PROJECT_ID=abc123defg
```

Before enabling Microsoft Clarity in production, configure Clarity Consent Mode and ensure the website's consent and privacy configuration matches the applicable requirements.
