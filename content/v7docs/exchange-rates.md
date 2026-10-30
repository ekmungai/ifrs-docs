---
title: 'Exchange Rates'
date: 2018-11-28T15:14:39+10:00
weight: 10
---

If the entity engages in foreign currency transactions, the relative value between the different currencies is managed via exchange rates.

### Attributes
+ `valid_from`: The date from which the exchange rate is valid.
+ `valid_to`: The date at which the exchange rate ceases to be valid. Defaults to `null`.
+ `currency`: The Currency object for the foreign currency.
+ `entity`: The Entity associated with the exchange rate. Defaults to the the entity of the logged in user.
+ `rate`: Rate of exchange between the foreign currency and the reporting currency. Defaults to `1.00`

### Methods
+ `$exchangeRate->attributes():` Presents the exchange rate's attributes as an object. Useful for debugging. 
+ `$exchangeRate->toString():`The string representation of the Exchange Rate object instance. 
***