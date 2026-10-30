---
title: 'Users'
date: 2018-11-28T15:14:39+10:00
weight: 5
heading: 'System Setup'
---

Eloquent IFRS relies on authenticated users to identify the entity to which transactions belong. As such, there must be at least one registered user before the package can be used.

The users being referred to here are the same as the Laravel User Eloquent model that ships with a new laravel application as scaffolding. The package does not create this table: it must exist before the package's migrations run, or they fail with an explicit message. The migrations then add only the columns the package needs to it, and rolling them back drops only those columns. Integer and UUID primary keys are both supported, as is a custom primary key name.

If your model is not `App\Models\User`, set `user_model` in the configuration. (See [Configuration]({{< relref "configuration.md" >}})).

Whatever your `User` model is, edit it to implement the below Traits so as to enable the model to function propoerly with the rest of the package.

```php
<?php

use IFRS\Interfaces\Recyclable;
use IFRS\Traits\IFRSUser;
use IFRS\Traits\ModelTablePrefix;
use IFRS\Traits\Recycling;
...

class User ... implements Recyclable {
	...
    use IFRSUser;
    use ModelTablePrefix;
    use Recycling;
	...
}
...
?>
```

***