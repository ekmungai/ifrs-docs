---
title: 'VAT'
date: 2018-11-28T15:14:39+10:00
weight: 10
---

Value Added Taxes are levies imposed by governments on businesses operating within their jurisdictions. Most Jurisdictions define both an Output (Sales) VAT as well as an Input (Purchase) VAT.

### Attributes
+ `name`: The name of the vat object.
+ `code`: A short identification string for the vat .
+ `rate`: An integer representing the rate of the vat as a percentage.
+ `entity_id`: The Id of the entity associated with the vat object. Defaults to the the id of entity of the logged in user.

### Relations
+ `$vat->entity:` The entity associated with the vat. 

### Methods
+ `$vat->attributes():` Presents the vat object's attributes as an object. Useful for debugging. 
***