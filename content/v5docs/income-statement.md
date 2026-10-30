---
title: 'Income Statement'
date: 2018-11-28T15:14:39+10:00
weight: 21
---

The Income Statement, also known as the Profit and Loss statement shows the performance of the entity by subtracting the combined balances of expense accounts from that of income accounts. The end result is the profit made by the entity for the given period.

### Construction
An IncomeStatement constructor takes the following parameters:
+ `$period`: An array containing the The first date on which account balances should be included in the report. Defaults to the first day of the current reporting period for the entity of the logged in user and the last date on which account balances should be included in the report, which defaults to the current date.

### Attributes
+ `$incomeStatement->entity`: The Entity object associated with the report.
+ `$incomeStatement->reportingPeriod`: The ReportingPeriod object associated with the report.
+ `$incomeStatement->period`: The period (startDate, endDate) covered by the report.
+ `$incomeStatement->balances`: The closing balances of the accounts in the report.
+ `$incomeStatement->accounts`: An array of the accounts included in the report grouped by their categories.

### Methods
+ `IncomeStatement::getAccountTypes`: Retrieve the account types associated with the income statement.
+ `IncomeStatement::getBalance`: Retrieve the total balance for the given account types for the given period.
+ `IncomeStatement::getResults`: Retrieve the income statement result for the given month and year.
+ `$incomeStatement->toString():` Prints out a summarized version of the report as a string. [!! IMPORTANT !!]({{< relref "#" >}}) this method is only intended for debugging and should never be used in production. 
+ `$incomeStatement->getSections():` Retrieves the balances of the sections of the report, grouped by the categories therein. 
+ `$incomeStatement->attributes():` Presents the report's attributes as an array. Useful for debugging. 

### Constants
+ `IncomeStatement::TITLE`: The title of the report. Defaults to Income Statement.
+ `IncomeStatement::OPERATING_REVENUES`: The Operating Revenues section of the report. 
+ `IncomeStatement::NON_OPERATING_REVENUES`: The Non Operating Revenues section of the report. 
+ `IncomeStatement::OPERATING_EXPENSES`: The Operating Expenses (Cost of Sales) section of the report. 
+ `IncomeStatement::NON_OPERATING_EXPENSES`: The Non Operating Expenses (Administration Expenses) section of the report. 
+ `IncomeStatement::TOTAL_REVENUE`: The revenues result. 
+ `IncomeStatement::TOTAL_EXPENSES`: The expenses result. 
+ `IncomeStatement::GROSS_PROFIT`: The gross profit result. 
+ `IncomeStatement::NET_PROFIT`: The net profit result. 
