---
title: 'Installation'
date: 2018-11-28T15:14:39+10:00
weight: 3
---

### Requirements
Eloquent IFRS requries php version 8.0.2 and Eloquent 8.4 and above  

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

Then run migrations to create the database tables.

```php
php artisan migrate
```


***