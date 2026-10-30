---
title: 'Installation'
date: 2018-11-28T15:14:39+10:00
weight: 2
---

### Requirements
Eloquent IFRS requries php version 7.2 and Laravel or Lumen version 5.0 and above  

### Installation
Use composer to Install the package into your application.
```
composer require "ekmungai/eloquent-ifrs"
composer install --no-dev
```

Then run migrations to create the database tables.

```
php artisan migrate
```

***