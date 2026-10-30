---
title: 'Balance Sheet'
date: 2018-11-28T15:14:39+10:00
weight: 20
---

The Balance Sheet, also known as the Statement of Financial position shows the financial health of the entity by comparing the combined balances of asset accounts to those of liability and equity accounts. 

### Construction
An BalanceSheet constructor takes the following parameters:

+ `$endDate`: The last date on which account balances should be included in the report. Defaults to the current date.

### Attributes
+ `$balanceSheet->entity`: The Entity object associated with the report.
+ `$balanceSheet->reportingPeriod`: The ReportingPeriod object associated with the report.
+ `$balanceSheet->period`: The period (endDate) covered by the report.
+ `$balanceSheet->balances`: The balances for the sections report.
+ `$balanceSheet->accounts`: An array of the accounts included in the report grouped by their categories.

### Methods
+ `$balanceSheet->toString():` Prints out a summarized version of the report as a string. !!IMPORTANT!! this method is only intended for debugging and should never be used in production. 
+ `$balanceSheet->getSections():` Retrieves the balances of the sections of the report, grouped by the categories therein. 
+ `$balanceSheet->attributes():` Presents the report's attributes as an array. Useful for debugging. 

### Constants
+ `BalanceSheet::TITLE`: The title of the report. Defaults to Balance Sheet.
+ `BalanceSheet::ASSETS`: The Assets section of the report. Includes both Current and Non-current assets. 
+ `BalanceSheet::LIABILITIES`: The Liabilities section of the report. Includes both Current and Non-current liabilities.
+ `BalanceSheet::EQUITY`: The Equity section of the report. 
+ `BalanceSheet::RECONCILIATION`: The Reconciliation section of the report. 
