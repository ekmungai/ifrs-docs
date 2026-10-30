---
title: 'Aging Schedule'
date: 2018-11-28T15:14:39+10:00
weight: 19
---

The Aging Schedule shows amounts receivable frome clients and payable to suppliers categorized by how long they have been outstanding. The time period brackets can be configured to any arbitrary number of days each. (See [Configuration]({{< relref "configuration.md" >}})).

### Construction
An AgingSchedule constructor takes the following parameters:
+ `$accountType`: The type of account to retrieve outstanding balances for. Defaults to `Account::RECEIVABLE`.
+ `$currencyId`: The it of the currency object whose transactions should be included in the report. Defaults to the id of the Entity's reporting currency.
+ `$endDate`: The last date on which outstanding balances should be included in the report. Defaults to the current date.

### Attributes
+ `$agingSchedule->entity`: The Entity object associated with the report.
+ `$agingSchedule->currency`: The Currency object associated with the report.
+ `$agingSchedule->balances`: The total outstanding balances in the time segments in the report.
+ `$agingSchedule->accounts`: An array of the accounts included in the report with thier contribution to the outstanding balances in the time segments in the report.

### Methods
+ `$agingSchedule->attributes():` Presents the report's attributes as an array. Useful for debugging. 
