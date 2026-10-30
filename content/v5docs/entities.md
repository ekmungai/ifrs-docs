---
title: 'Entities'
date: 2018-11-28T15:14:39+10:00
weight: 7
---

The entity is the centerpiece around which the transactions in the package are recorded and for which reports are generated. All models with the exception of User and Currency are scoped to a particular entity. The entity scope is established automatically during object creation which is why a user must be logged in to perform any operation other than on the User and Currency Models.

### Attributes
+ `name`: Legal name of the entity.
+ `currency`: The reporting Currency object of the entity.
+ `currencies`: All the currencies associated with the Entity.
+ `parent`: The parent Entity object of the entity (if any).
+ `daughters`: All the entities to which with the Entity is a parent.
+ `users`: All the users associated with the Entity.
+ `reportingPeriods`: All the reporting periods associated with the Entity.
+ `year_start`: The month during which the financial year for the entity begins expressed as an integer between 1 and 12. Defaults to `1` (January).
+ `multi_currency`: A boolean indicating whether the entity engages in transactions denominated in currencies other than the reporting currency. Defaults to `false`.
+ `defaultRate`: The Entity's default exchange rate object with a rate of 1.
+ `currentReportingPeriod`: The Entity's current reporing period object.
+ `reportingCurrency`: The Entity's reporing currency. Defaults to the parents currency if none is set.

### Methods
+ `$entity->attributes()`: Presents the entity's attributes as an object. Useful for debugging. 
+ `$entity->toString():` The string representation of the Entity object instance. 
+ `$entity->localizeAmount():` Convert the given amount to the given currency and locale. 

### Constraints
+ `MissingReportingCurrency`: The Entity does not have a reporing currency. 
+ `UnconfiguredLocale`: The Entity's locale does not exist in the configuration. 
***