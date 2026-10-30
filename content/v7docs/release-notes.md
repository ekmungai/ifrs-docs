---
title: 'Release Notes'
date: 2018-11-28T15:14:39+10:00
weight: 1
heading: 'Prologue'
---

Eloquent-IFRS 7.2 corrects stored Balances and clearances, and reports that came back empty, stale or with the wrong sign. See [Upgrading to 7.2]({{< relref "#upgrading-to-72" >}}).

Eloquent-IFRS 7.1 makes reports honour their dates, and adds a command to repair Balances attached to the wrong year. See [Upgrading to 7.1]({{< relref "#upgrading-to-71" >}}).

Eloquent-IFRS 7.0 corrects the balances of entities whose financial year does not start in January, stores exchange rates with a configurable precision, stops the package creating or owning the application's users table, and declares nullable parameters explicitly so that it loads without deprecation notices on PHP 8.4 and above.

Version 6.0, which had no documentation of its own, added Laravel 13 and raised the minimum requirements. If you are upgrading from version 5, read its changes below as well.

### Versioning Scheme

Like Laravel, Eloquent-IFRS follows [Semantic Versioning](https://semver.org). This means that only Major releases introduce breaking changes to the package.

### Upgrade Guide

Update your `ekmungai/eloquent-ifrs` dependency to ^7.0 in your `composer.json` file.

#### Reported figures change

If your entity's `year_start` is not `1`, reports from earlier versions were wrong, and the same data will now give different figures. A year was resolved from its 1 January, which belongs to the previous financial year, so opening balances were read from the wrong reporting period and usually came back as zero. `$account->openingBalance()`, `closingBalance()`, the Balance Sheet, Trial Balance and Account Statement were all affected. Compare your reports after upgrading.

`$entity->currentReportingPeriod` now follows `year_start` too. Between January and the month before `year_start`, it returns the period that started the previous calendar year, where it used to return, or create, a period for the current calendar year. Transactions were not affected, but Balances saved in those months without an explicit period were attached to the next financial year. See [Repairing Balances]({{< relref "balances.md#repairing-balances" >}}).

Account Statements now open with everything posted before `$startDate` in the year, not only the opening balance for the year. Passing a currency to `$account->openingBalance()` now returns that year's balance rather than the sum of every year's.

#### Breaking changes

+ Users table - The `ifrs_create_or_update_users_table` migration no longer creates an application `users` table as a fallback. The table for `user_model` must exist before the package's migrations run. See [Users]({{< relref "users.md" >}}).
+ Exceptions - `InvalidVatRate`, `UnauthorizedUser` and `VatPeriodOverlap` have been removed, as nothing threw them any more. Catch `IFRSException` instead.

#### Exchange rate precision

Rates are now stored with `forex_scale` decimal places. The default of `4` changes nothing. Raising it for an existing installation needs a migration of the rate columns in the exchange rates and ledgers tables. See [Configuration]({{< relref "configuration.md" >}}).

#### Other changes
+ Zero rated Vat - Posting a Line Item with a zero rated Vat no longer fails. It posts no Vat ledger entries.
+ Reporting Period - Add `ReportingPeriod::yearStart()`.
+ Recycled objects - The `user_id` column now matches the type of the users table's primary key, and `recyclable_id` is always a big integer.

### Upgrading to 7.2

Update your `ekmungai/eloquent-ifrs` dependency to ^7.2 in your `composer.json` file. There are no migrations, but reported figures change, and code that relied on the old figures or on empty results may need updating.

#### Check your data

Run `php artisan ifrs:audit-balances`, which changes nothing, and go through what it lists. Foreign currency Balances that were edited after they were created may have been multiplied by their exchange rate, and transactions may have been over cleared. See [Auditing Balances]({{< relref "balances.md#auditing-balances" >}}).

#### Reported figures change

+ End date without a start date - `AccountStatement`, `AccountSchedule` and `IncomeStatement` now start from the year of their end date. They came back empty for an earlier end date, and `AgingSchedule` was always empty before the current year.
+ Schedules - `AccountSchedule` and `AgingSchedule` count only what had been cleared by their end date, so a schedule for a past date may show more outstanding.
+ `IncomeStatement::getResults()` - Results keep their sign, so a loss is negative rather than positive. `GROSS_PROFIT` no longer includes non operating revenue, so it is lower for anyone who has any, and agrees with `getSections()`.
+ `BalanceSheet::TOTAL_EQUITY` - Negative equity is reported as negative.
+ `$category->getAccountBalances()` - Opening balances are included when no start date is given.

#### Errors that were silent

+ `EntityMismatch` - Passing an `$entity` other than that of the logged in user now throws this, where it used to come back empty or throw `MissingReportingPeriod`. See [Entities]({{< relref "entities.md" >}}).
+ `OverClearance` - It now applies to fractions, where it only compared whole numbers.
+ `InvalidBalanceDate` - A new or re-dated Balance is now checked against its own reporting period rather than the current one.
+ `ClosedReportingPeriod` - It now applies to new Balances, and to changes to the amount or period of a Balance. Other edits to existing Balances are unaffected.

#### Other changes

+ `Balance::save()` translates only a new amount, so editing a Balance no longer changes it. A new value given to `balance` must be in the Balance's own currency.
+ `clearances` and `cleared_amount` are now correct on Transaction subclasses such as `ClientInvoice`, where they came back empty.
+ `Account::sectionBalances()` keeps Categories that share a name apart. The second is keyed `Name (id)`, so code looking a Category up by name gets the first.
+ `$reportingPeriod->transactionCurrencies()` is limited to the entity and ignores deleted transactions.
+ `Transaction::transactionNo()` counts only its own reporting period. If you have backdated transactions, a later number in that year could repeat one issued before this change.
+ `Assignment::bulkAssign()` no longer saves an Assignment of zero.
+ The reports declare their properties, removing the deprecation notices on PHP 8.2 and above.

### Upgrading to 7.1

Update your `ekmungai/eloquent-ifrs` dependency to ^7.1 in your `composer.json` file. There are no breaking changes to the API and no migrations, but reported figures change.

+ Cash Flow Statement - It now honours its dates, where it always covered the current year, and it may span two financial years. Its profit is that of the period rather than the year to date.
+ End dates - `$account->currentBalance()`, `closingBalance()`, `Account::sectionBalances()` and `$category->getAccountBalances()` include the whole of the end date. Transactions later than midnight on that day were left out, by default including the last day of the year.
+ Start dates - `Account::sectionBalances()` counts a transaction on the start date once, and opens with the balances of the year it starts in.
+ Closing Transactions - They now belong to the reporting period they were prepared for, whatever their date, and deleted ones are ignored. An account reopens when its closing transaction is deleted.

Closing Transactions that versions before 7.0 stored with the wrong date are now recognised, so they are not duplicated, but they are not repaired. Reversing a posted one is a decision for the entity's accountant.

If your entity's `year_start` is not `1`, run `php artisan ifrs:repair-balances`. See [Repairing Balances]({{< relref "balances.md#repairing-balances" >}}).

### Upgrading from Version 5 to 6

+ PHP - The minimum version is now 8.2.
+ Laravel - Laravel 10 is no longer supported. The supported versions are Laravel 11, 12 and 13.

***
