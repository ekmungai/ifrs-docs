---
title: 'Entities'
date: 2018-11-28T15:14:39+10:00
weight: 6
---

The entity is the centerpiece around which the transactions in the package are recorded and for which reports are generated. All models with the exception of User and Currency are scoped to a particular entity. The entity scope is established automatically during object creation which is why a user must be logged in to perform any operation other than on the User and Currency Models.

### Attributes
+ `name`: Legal name of the entity.
+ `currency_id`: The Id of the reporting currency object of the entity.
+ `year_start`: The month during which the financial year for the entity begins expressed as an integer between 1 and 12. Defaults to `1` (January).
+ `multi_currency`: A boolean indicating whether the entity engages in transactions denominated in currencies other than the reporting currency. Defaults to `false`.

### Relations
+ `$entity->users:` All users associated with the entity. 
+ `$entity->currency:` The reporting currency of the entity. 
+ `$entity->reportingPeriods:` All reporting periods associated with the entity. 

### Methods
+ `$entity->defaultRate():` Retrieves (or creates) the entity's reporing currency exchange rate `(1.00)`. 
+ `$entity->attributes():` Presents the entity's attributes as an object. Useful for debugging. 

***