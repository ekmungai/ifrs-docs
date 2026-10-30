---
title: 'Line Items'
date: 2018-11-28T15:14:39+10:00
weight: 17
---

Line Items constitute the second part of the double entry after transactions establish the first part. A transaction can have multiple line items each with a different account, vat and amount.

### Attributes
+ `entity`: The Entity object associated with the line item. Defaults to the entity of the logged in user.
+ `vat`: The Vat types and amounts associated with the line item.
+ `transaction`: The Transaction object associated with the line item. 
+ `account`: The Account associated with the line item.
+ `narration`: A short discription of the purpose of the line item.
+ `quantity`: A multiple to be applied to the amount of the line item.
+ `credited`: A boolean indicating whether the line item amount should be posted in the credit side of the account. Only relevant for compound Journal Entries, all other transactions post to the opposite side of the transaction's main account.
+ `amount`: The line item amount.
+ `ledgers:` Ledger objects associated with the line item. 
+ `vat_inclusive:` A boolean indicating if the amount of the item includes the vat amount. 


### Methods
+ `$lineItem->attributes():` Presents the line item's attributes as an object. Useful for debugging. 
+ `$lineItem->toString():` The string representation of the LineItem object instance. 
+ `$lineItem->addVat():` Add a Vat object to the line item. 
+ `$lineItem->getVats():` Return a list of Vat objects associated with the line item. 
+ `$lineItem->addVat():` Remove a Vat object from the line item. 

### Constraints
+ `NegativeAmount`: Line item amounts cannot be negative. 
+ `NegativeQuantity`: Line item quantity cannot be negative. 
+ `PostedTransaction`: Line items cannot be added or removed from a posted transaction.
+ `MultipleVatError`: Line items that are vat inclusive, cannot have multiple Vats and cannot have compound Vat. Additionally line items with compound vat cannot have a zero rated Vat object.
