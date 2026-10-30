---
title: 'Line Items'
date: 2018-11-28T15:14:39+10:00
weight: 17
---

Line Items constitute the second part of the double entry after transactions establish the first part. A transaction can have multiple line items each with a different account, vat and amount.

### Attributes
+ `entity`: The Entity object associated with the line item. Defaults to the entity of the logged in user.
+ `vat`: The Vat object associated with the line item.
+ `transaction`: The Transaction object associated with the line item. 
+ `account`: The Account associated with the line item.
+ `description`: A short discription of the purpose of the line item.
+ `quantity`: A multiple to be applied to the amount of the line item.
+ `amount`: The line item amount.
+ `ledgers:` Ledger objects associated with the line item. 


### Methods
+ `$lineItem->attributes():` Presents the line item's attributes as an object. Useful for debugging. 
+ `$lineItem->toString():` The string representation of the LineItem object instance. 

### Constraints
+ `NegativeAmount`: Line item amounts cannot be negative. 
+ `PostedTransaction`: Line items cannot be added or removed from a posted transaction.
