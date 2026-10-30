---
title: 'Cash Flow Statement'
date: 2018-11-28T15:14:39+10:00
weight: 24
---

The Cash Flow Statement shows how the entity's cash balance moved over a period, by reconciling the profit for the period to the movement in its bank accounts across operating, investing and financing activities.

### Construction
A CashFlowStatement constructor takes the following parameters:
+ `$startDate`: The first date on which account balances should be included in the report. Defaults to the first day of the current reporting period.
+ `$endDate`: The last date on which account balances should be included in the report. Defaults to the current date.
+ `$entity`: The Entity the report is for. Defaults to the entity of the logged in user.

### Attributes
+ `$cashFlowStatement->entity`: The Entity object associated with the report.
+ `$cashFlowStatement->reportingPeriod`: The ReportingPeriod object associated with the report.
+ `$cashFlowStatement->period`: The period (startDate, endDate) covered by the report.
+ `$cashFlowStatement->balances`: The balances of the sections of the report.

### Methods
+ `$cashFlowStatement->toString():` Prints out a summarized version of the report as a string. [!! IMPORTANT !!]({{< relref "#" >}}) this method is only intended for debugging and should never be used in production. 
+ `$cashFlowStatement->getSections():` Retrieves the balances of the sections of the report. 
+ `$cashFlowStatement->attributes():` Presents the report's attributes as an array. Useful for debugging. 

### Constants
+ `CashFlowStatement::TITLE`: The title of the report. Defaults to Cash Flow Statement.
+ `CashFlowStatement::OPERATIONS_CASH_FLOW`: The Operations section of the report. 
+ `CashFlowStatement::INVESTMENT_CASH_FLOW`: The Investment section of the report. 
+ `CashFlowStatement::FINANCING_CASH_FLOW`: The Financing section of the report. 
+ `CashFlowStatement::NET_CASH_FLOW`: The net movement in cash for the period. 
+ `CashFlowStatement::PROVISIONS`, `RECEIVABLES`, `PAYABLES`, `CURRENT_ASSETS`, `CURRENT_LIABILITIES`, `TAXATION`, `NON_CURRENT_ASSETS`, `NON_CURRENT_LIABILITIES`, `EQUITY`, `PROFIT`: The movements that make up those sections. 
+ `CashFlowStatement::START_CASH_BALANCE`, `END_CASH_BALANCE`: The cash balances at the start and end of the period. 
+ `CashFlowStatement::CASHBOOK_BALANCE`: The balance of the bank accounts according to the ledger, for reconciling against the end cash balance. 

***
