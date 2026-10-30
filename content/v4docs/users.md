---
title: 'Users'
date: 2018-11-28T15:14:39+10:00
weight: 5
heading: 'System Setup'
---

Eloquent IFRS relies on authenticated users to identify the entity to which transactions belong. As such, there must be at least one registered user before the package can be used.

The users being referred to here are the same as the Laravel User Eloquent model that ships with a new laravel application as scaffolding. If your `User` model is different from `App\User`, you need to run `vendor:publish` and update the namespace of your `User` model in the configuration file.

Whatever your `User` model is, edit it to implement the below interfaces and also include the trait as well so as to enable the model to function propoerly with the rest of the package.

```php
<?php

use IFRS\Traits\IFRSUser;
use IFRS\Interfaces\Recyclable;
...

class User ... implements Recyclable {
  ...
  use IFRSUser;
  use Recycling;
  ...
}
...
?>
```

***