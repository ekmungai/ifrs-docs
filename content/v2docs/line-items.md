---
title: 'Line Items'
date: 2018-11-28T15:14:39+10:00
weight: 16
---

Line Items constitute the second part of the double entry after transactions establish the first part. A transaction can have multiple line items each with a different account, vat and amount.

### Attributes
+ `entity_id`: The Id of the Entity object associated with the line item. Defaults to the entity of the logged in user.
+ `vat_id`: The Id of the Vat object associated with the line item.
+ `transaction_id`: The Id of the Transaction object associated with the line item. Defaults to `null`.
+ `account_id`: The Id of the account associated with the line item.
+ `vat_account_id`: If the rate of the Vat object is greater than 0, this is the id of the account to which the vat charge will be posted. Defaults to `null`.
+ `description`: A short discription of the purpose of the line item.
+ `quantity`: A multiple to be applied to the amount of the line item.
+ `amount`: The line item amount.

### Relations
+ `$lineItem->ledgers:` Ledger objects associated with the line item. 
+ `$lineItem->transaction:` The Transaction associated with the line item. 
+ `$lineItem->account:` The Account associated with the line item. 
+ `$lineItem->vat:` The Vat object associated with the line item. 
+ `$lineItem->vatAccount:` The Account object for posting vat charges associated with the line item. 

### Methods
+ `$lineItem->attributes():` Presents the line item's attributes as an object. Useful for debugging. 

### Constraints
+ `NegativeAmount`: Line item amounts cannot be negative. 
+ `MissingVatAccount`: Line items with Vat objects whose rate is greater than 0 must have a vat account.
