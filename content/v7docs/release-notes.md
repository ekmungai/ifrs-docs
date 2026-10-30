---
title: 'Release Notes'
date: 2018-11-28T15:14:39+10:00
weight: 1
heading: 'Prologue'
---

Eloquent-IFRS 7.0 corrects the balances of entities whose financial year does not start in January, stores exchange rates with a configurable precision, stops the package creating or owning the application's users table, and declares nullable parameters explicitly so that it loads without deprecation notices on PHP 8.4 and above.

Version 6.0, which had no documentation of its own, added Laravel 13 and raised the minimum requirements. If you are upgrading from version 5, read its changes below as well.

### Versioning Scheme

Like Laravel, Eloquent-IFRS follows [Semantic Versioning](https://semver.org). This means that only Major releases introduce breaking changes to the package.

### Upgrade Guide

Update your `ekmungai/eloquent-ifrs` dependency to ^7.0 in your `composer.json` file.

#### Reported figures change

If your entity's `year_start` is not `1`, reports from earlier versions were wrong, and the same data will now give different figures. A year was resolved from its 1 January, which belongs to the previous financial year, so opening balances were read from the wrong reporting period and usually came back as zero. `$account->openingBalance()`, `closingBalance()`, the Balance Sheet, Trial Balance and Account Statement were all affected. Compare your reports after upgrading.

`$entity->currentReportingPeriod` now follows `year_start` too. Between January and the month before `year_start`, it returns the period that started the previous calendar year, where it used to return, or create, a period for the current calendar year. Look for periods created that way, and for transactions or balances attached to them.

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

### Upgrading from Version 5 to 6

+ PHP - The minimum version is now 8.2.
+ Laravel - Laravel 10 is no longer supported. The supported versions are Laravel 11, 12 and 13.

***
