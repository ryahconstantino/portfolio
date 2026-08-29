# Personal Portfolio 2025

## Microsoft Clarity

The Microsoft Clarity Project ID `y9rpbafhbw` is configured as the website default. Clarity is loaded only after the visitor accepts cookies and telemetry, and remains disabled when consent is denied.

To replace the public Project ID for another environment, copy `.env.example` to `.env.local` or configure the same variable in the deployment platform:

```dotenv
CLARITY_PROJECT_ID=y9rpbafhbw
```

The consent choice is stored under `ryan.telemetry-consent.v1`. Accepted telemetry is communicated through Clarity Consent API V2 with advertising storage denied.
