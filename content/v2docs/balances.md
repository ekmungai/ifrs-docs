---
title: 'Balances'
date: 2018-11-28T15:14:39+10:00
weight: 8
---

Balances represent amounts on Balance Sheet accounts carried over from previous reporting periods. Consequently there can only be Balance Sheet account balances. Balances provide a way of decoupling reports between different reporting periods from each other.

### Attributes
+ `entity_id`: The Id of the entity associated with the balance. Defaults to the entity of the logged in user.
+ `exchange_rate_id`: The Id of the Exchange Rate of the Transaction object that originated the balance amount. Defaults to associated entity's default exchange rate id.
+ `currency_id`: The Id of the currency of the Transaction object that originated the balance amount. Defaults to the entity's reporting currency id.
+ `account_id`: The Id of the account associated with the balance.
+ `year`: An integer representing the calendar year of the reporting period the balance pertains to.
+ `transaction_no`: The transaction number from the Transaction object that originated the balance amount.
+ `transaction_type`: The type of the Transaction object that originated the  balance amount. Defaults to `Transaction::JN`.
+ `reference`: More information about the Transaction object that originated the balance amount. Defaults to `null`.
+ `balance_type`: The side of the double entry the balance should be posted. Defaults to `Balance::DEBIT`.
+ `amount`: The balance amount. This may or may not be the amount of the originating Transaction depending on its clearance in its reporting period.

### Constants
+ `Balance::DEBIT`: The debit side of the double entry in the sense of the balance of an asset. 
+ `Balance::CREDIT`: The credit side of the double entry in the sense of the balance of an liability. 

### Relations
+ `$balance->entity:` The entity associated with the balance. 
+ `$balance->currency:` The currency associated with the balance. 
+ `$balance->account:` The account associated with the balance. 
+ `$balance->exchangeRate:` The exchangeRate associated with the balance. 

### Methods
+ `Balance::getType($type):` The human readable type name of the given balance type. 
+ `Balance::getTypes($types):` The human readable type names of the balance types in the given array.  
+ `$balance->isPosted():` Boolean indicating if balance exists. Used by the Assignment model. 
+ `$balance->isCredited():` Boolean indicating if balance is of type `Balance::CREDIT`. Used by the Assignment model. 
+ `$balance->getClearedType():` The full name (including path) of the model. Used by the Assignment model. 
+ `$balance->attributes():` Presents the balance's attributes as an object. Useful for debugging.

### Constraints
+ `NegativeAmount`: Balance amounts cannot be negative. 
+ `InvalidBalanceTransaction`: Transaction type must be one of `Transaction::IN`, `Transaction::BL` or `Transaction::JN`. See [Transactions]({{< relref "transactions.md" >}}) for details of Transaction Types.
+ `InvalidBalance`: Balance type must be one of `Balance::DEBIT` or `Balance::CREDIT`.
+ `InvalidAccountClassBalance`: Income Statement accounts cannot have opening balances.

***