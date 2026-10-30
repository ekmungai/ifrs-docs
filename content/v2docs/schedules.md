---
title: 'Account Schedules'
date: 2018-11-28T15:14:39+10:00
weight: 18
---

Account Schedules are similar to statements in that the present chronological records of transactions that have been posted to an account, the difference being that only transactions with outstanding balances, i.e. those that have not been cleared completely are displayed. Schedules can only be created for `Account::RECEIVABLE` and `Account::PAYABLE` account types.

### Construction
An AccountSchedule constructor takes the following parameters:
+ `$account_id`: The Id of the Account object whose schedule is being constructed.
+ `$currency_id`: The Id of the currency of the transactions to be included in the schedule. Defaults to the reporting currency of the entity of the logged in user.
+ `$endDate`: The last date on which transactions posted to the account should be included in the schedule. Defaults to the current date.

### Attributes
+ `$schedule->account`: The Account object associated with the schedule.
+ `$schedule->entity`: The Entity object associated with the schedule.
+ `$schedule->currency`: The Currency object associated with the schedule.
+ `$schedule->period`: The period (startDate, endDate) covered by the schedule.
+ `$schedule->balances`: The opening and closing balances for the schedule.
+ `$schedule->transactions`: An array of the transactions included in the schedule each having the transactions attributes in addition to its original amount, cleared amount and uncleared amount.

### Methods
+ `$schedule->getTransactions():` Fetches the transactions from the database and populates the schedule's transactions array. 
+ `$schedule->attributes():` Presents the line item's attributes as an object. Useful for debugging. 

### Constraints
+ `MissingAccount`: A schedule must have an account. 
+ `InvalidAccountType`: The schedule account must be one of `Account::RECEIVABLE`, `Account::PAYABLE`. 