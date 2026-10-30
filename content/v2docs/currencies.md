---
title: 'Currencies'
date: 2018-11-28T15:14:39+10:00
weight: 5
---

The International Financial Reporting Standards require that every reporing entity disclose the Currency in which it is reporting. Currencies in the package are independent of entities and can be created seperately.

### Attributes
+ `name`: The name of the Currency 
+ `currency_code`: The 3 digit currency code in accordance with [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).

### Relations
+ `$currency->exchangeRates:` All exchange rates associated with the currency. 

### Methods
+ `$currency->attributes():` Presents the currency's attributes as an object. Useful for debugging. 

***
