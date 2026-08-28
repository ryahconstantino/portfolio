# Laravel authentication and authorization

Authentication answers “who is this person?”. Authorization answers “what are they allowed to do?”. Treat both as product concerns, not merely as a login screen.

## Start with an official starter kit

When creating a new application with `laravel new`, choose a starter kit that fits the user interface you intend to build. Official kits provide a starting point for login, registration, password reset, email verification and account settings.

After configuring the database, run:

```bash
php artisan migrate
composer run dev
```

Test the complete flow: registration, login, logout, password reset and email verification. In production, email flows require a configured `MAIL_MAILER` and an inbox you can access for testing.

## Protect private routes

Group routes that require an authenticated session. Add `verified` when the action must only happen after email confirmation:

```php
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('projects', ProjectController::class);
});
```

Middleware decides whether someone may enter an area; a policy decides whether they may act on a specific record.

## Use policies for domain rules

Create a policy for records that belong to an organization, team or user:

```bash
php artisan make:policy ProjectPolicy --model=Project
```

In the policy, check the real relationship between the user and the record, such as organization, role or ownership. Never trust identifiers supplied by the browser without confirming that they belong to the authenticated user.

## Pre-release checklist

- Require strong passwords and never log passwords or tokens.
- Keep rate limiting enabled for login and recovery endpoints.
- Enable email verification for flows that depend on confirmed identity.
- Review administrative-resource permissions with an unprivileged test account.
- Configure HTTPS, secure cookies and environment variables outside the repository.

## More

Read the official [Laravel starter kits](https://laravel.com/starter-kits) and [authentication documentation](https://laravel.com/docs/authentication).
