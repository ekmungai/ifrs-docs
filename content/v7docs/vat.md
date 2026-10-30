---
title: 'VAT'
date: 2018-11-28T15:14:39+10:00
weight: 11
---

Value Added Taxes are levies imposed by governments on businesses operating within their jurisdictions. Most Jurisdictions define both an Output (Sales) VAT as well as an Input (Purchase) VAT.

### Attributes
+ `name`: The name of the vat object.
+ `code`: A short identification string for the vat .
+ `rate`: The rate of the vat as a percentage. A rate of `0` is a zero rated vat, which has no account and posts no ledger entries.
+ `valid_from`: The date from which the rate is valid.
+ `valid_to`: The date after which the rate ceases to be valid.
+ `entity`: The Entity associated with the vat object. Defaults to the the entity of the logged in user.
+ `account`: The Account associated with the vat object.

### Methods
+ `$vat->attributes():` Presents the vat object's attributes as an object. Useful for debugging. 
+ `$vat->toString():`The string representation of the Vat object instance. 

### Constraints
+ `MissingVatAccount`: A Vat object with a rate above `0` requires an Account. 
+ `InvalidAccountType`: A Vat Account must be of type `Account::CONTROL`.
***