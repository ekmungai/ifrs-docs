---
title: 'Exchange Rates'
date: 2018-11-28T15:14:39+10:00
weight: 9
---

If the entity engages in foreign currency transactions, the relative value between the different currencies is managed via exchange rates.

### Attributes
+ `valid_from`: The date from which the exchange rate is valid.
+ `valid_to`: The date at which the exchange rate ceases to be valid. Defaults to `null`.
+ `currency_id`: The Id of the currency object for the foreign currency.
+ `entity_id`: The Id of the entity associated with the exchange rate. Defaults to the the id of entity of the logged in user.
+ `rate`: Rate of exchange between the foreign currency and the reporting currency. Defaults to `1.00`

### Relations
+ `$exchangeRate->entity:` The entity associated with the exchange rate. 
+ `$exchangeRate->currency:` The currency associated with the exchange rate. 

### Methods
+ `$exchangeRate->attributes():` Presents the exchange rate's attributes as an object. Useful for debugging. 
***