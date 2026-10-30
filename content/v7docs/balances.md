---
title: 'Balances'
date: 2018-11-28T15:14:39+10:00
weight: 9
---

Balances represent amounts on Balance Sheet accounts carried over from previous reporting periods. Consequently there can only be Balance Sheet account balances. Balances provide a way of decoupling reports between different reporting periods from each other.

### Attributes
+ `entity`: The Entity associated with the balance. Defaults to the entity of the logged in user.
+ `exchangeRate`: The Exchange Rate of the Transaction object that originated the balance amount. Defaults to associated entity's default exchange rate.
+ `currency`: The Currency of the Transaction object that originated the balance amount. Defaults to the entity's reporting currency.
+ `account`: The Account associated with the balance.
+ `reportingPeriod`: The Reporting Period the balance pertains to.
+ `transaction_no`: The transaction number from the Transaction object that originated the balance amount.
+ `type`: The string representation of the Balance model `balance_type` attribute.
+ `transaction_date`: The date of the Transaction object that originated the  balance amount.
+ `transaction_type`: The type of the Transaction object that originated the  balance amount. Defaults to `Transaction::JN`.
+ `reference`: More information about the Transaction object that originated the balance amount.
+ `balance_type`: The side of the double entry the balance should be posted. Defaults to `Balance::DEBIT`.
+ `balance`: The balance amount. This may or may not be the amount of the originating Transaction depending on its clearance in its reporting period.
+ `is_posted`: A boolean to mirror the Transaction model isPosted attribute because like some Transactions Balances are Clearable.
+ `is_credited`: A boolean to mirror the Transaction model isCredited attribute because like some Transactions Balances are Clearable.
+ `cleared_type`: The string representation of the Balance model because like some Transactions Balances are Clearable.

### Constants
+ `Balance::DEBIT`: The debit side of the double entry in the sense of the balance of an asset. 
+ `Balance::CREDIT`: The credit side of the double entry in the sense of the balance of an liability. 

### Methods
+ `Balance::getType($type):` The human readable type name of the given balance type. 
+ `Balance::getTypes($types):` The human readable type names of the balance types in the given array.  
+ `$balance->toString():`The string representation of the Balance object instance. 
+ `$balance->attributes():` Presents the balance's attributes as an object. Useful for debugging.

### Repairing Balances

Before version 7.0, a Balance saved without a `reporting_period_id` could be attached to the next financial year. This affects entities whose `year_start` is not `1`, for Balances saved between January and the month before `year_start`. Such a Balance is missing from the reports of its own year, and appears in those of the year after.

To list them, run:

```php
php artisan ifrs:repair-balances
```

Add `--entity=` to check a single Entity. Listing changes nothing. A Balance that was given that reporting period on purpose looks the same, so review the list before moving them:

```php
php artisan ifrs:repair-balances --apply
```

A Balance is left where it is, and shown as blocked, if either reporting period is closed or the year it belongs to has no reporting period.

### Constraints
+ `NegativeAmount`: Balance amounts cannot be negative. 
+ `InvalidBalanceTransaction`: Transaction type must be one of `Transaction::IN`, `Transaction::BL` or `Transaction::JN`. See [Transactions]({{< relref "transactions.md" >}}) for details of Transaction Types.
+ `InvalidBalanceType`: Balance type must be one of `Balance::DEBIT` or `Balance::CREDIT`.
+ `InvalidAccountClassBalance`: Income Statement Account cannot have balances.
+ `InvalidCurrency`: Account type can only accept balances of the same currency as their own.
+ `InvalidBalanceDate`: Balance transaction date cannot be later than the first day of the current reporting period unless the entity has `mid_year_balances` set to true. (See [Entities]({{< relref "entities.md" >}})).

***