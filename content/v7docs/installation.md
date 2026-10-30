---
title: 'Installation'
date: 2018-11-28T15:14:39+10:00
weight: 3
---

### Requirements
Eloquent IFRS requires PHP 8.2 or above and Laravel (Eloquent) 11, 12 or 13.

Your application's users table must exist before the package's migrations run. (See [Users]({{< relref "users.md" >}})).

### Installation
Use composer to Install the package into your application.
```php
composer require "ekmungai/eloquent-ifrs"
composer install --no-dev
```

If using Lumen, make sure to register the package with your application by adding the `IFRSServiceProvider` to the `app.php` in the bootstrap folder.

```php
<?php

use IFRS\IFRSServiceProvider;

require_once __DIR__.'/../vendor/autoload.php';
...

/*
|--------------------------------------------------------------------------
| Register Service Providers
|--------------------------------------------------------------------------
|
| Here we will register all of the application's service providers which
| are used to bind services into the container. Service providers are
| totally optional, so you are not required to uncomment this line.
|
*/

// $app->register(App\Providers\AppServiceProvider::class);
// $app->register(App\Providers\AuthServiceProvider::class);
// $app->register(App\Providers\EventServiceProvider::class);
$app->register(IFRSServiceProvider::class);
  ...
}
...
?>
```

If your `User` model is not `App\Models\User`, publish the configuration and set `user_model` first. (See [Configuration]({{< relref "configuration.md" >}})).

Then run migrations to create the database tables. If you will deal in currencies whose rates need more than four decimal places, set `forex_scale` before you do.

```php
php artisan migrate
```


***