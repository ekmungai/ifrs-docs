---
title: 'Account Statements'
date: 2018-11-28T15:14:39+10:00
weight: 18
heading: 'Reports'
---

Account Statements are chronological records of transactions that have been posted to an account and their effects on its balance. Statements can be created for all accounts in the chart.

### Construction
An AccountStatement constructor takes the following parameters:
+ `$accountId`: The Id of the Account object whose statement is being constructed.
+ `$currencyId`: The Id of the currency of the transactions to be included in the statement. Defaults to the Id of the reporting currency of the entity of the logged in user.
+ `$startDate`: The first date on which transactions posted to the account should be included in the statement, from the start of that day. Defaults to the first day of the current reporting period for the entity of the logged in user.
+ `$endDate`: The last date on which transactions posted to the account should be included in the statement, to the end of that day. Defaults to the current date.

### Attributes
+ `$statement->account`: The Account object associated with the statement.
+ `$statement->entity`: The Entity object associated with the statement.
+ `$statement->currency`: The Currency object associated with the statement.
+ `$statement->period`: The period (startDate, endDate) covered by the statement.
+ `$statement->balances`: The opening and closing balances for the statement. The opening balance is the account's opening balance for the year plus everything posted to it between the start of the year and `$startDate`.
+ `$statement->transactions`: An array of the transactions included in the statement each having the transactions attributes in addition to whether the amount was debited or credited to the account as well as the runnning balance.

### Methods
+ `$statement->getTransactions():` Fetches the transactions from the database and populates the statement's transactions array. 
+ `$statement->attributes():` Presents the line item's attributes as an object. Useful for debugging. 

### Constraints
+ `MissingAccount`: A statement must have an account. 