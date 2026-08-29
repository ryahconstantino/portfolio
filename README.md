# Personal Portfolio 2025

## Microsoft Clarity

The Microsoft Clarity Project ID is exposed to the consent component only when `CLARITY_PROJECT_ID` contains a valid alphanumeric value. Clarity is loaded after the visitor accepts cookies and telemetry, and remains disabled when the variable is empty, invalid, or consent is denied.

Copy `.env.example` to `.env.local` for local validation, or configure the same variable in the production environment:

```dotenv
CLARITY_PROJECT_ID=abc123defg
```

The consent choice is stored under `ryan.telemetry-consent.v1`. Accepted telemetry is communicated through Clarity Consent API V2 with advertising storage denied.
