---
title: 'Configuration'
date: 2019-02-11T19:30:08+10:00
draft: false
weight: 4
---

### Default Configuration

The package installs with the default settings as regards the names of Accounts/Transactions Types, Report Titles and Section names as well as Accounts Codes. To adjust these settings use the Laravel artisan publish command to install the ifrs configuration to your applications config folder where you can edit it.

```php
php artisan vendor:publish
```

### User Model

`user_model` is the model the package treats as the application's user. It defaults to `App\Models\User`, and its table must exist before the package's migrations run. (See [Users]({{< relref "users.md" >}})).

### Locales

Locales determine the languages to which currency amounts are to be translated.

### Forex Scale

This setting determines the number of decimal places to consider when calculating the difference between two exchange rates, and the number of decimal places with which exchange rates are stored. It defaults to `4`.

Four decimal places lose precision between currencies of very different value: HUF to USD (about 0.0028) is stored with an error of up to 2%, and IDR to EUR (about 0.0000578) becomes 0.0001. If the entity deals in such pairs, raise this setting, for example to `10`, **before running the migrations**. The migrations read it, so changing it later needs a migration of the existing columns. Amounts keep four decimal places whatever this is set to.

### Single Currency account types

Accounts of the types defined in this setting will reject balances and transactions of a currency different from the their own.

### DB table prefix

This setting adds a database table prefix to prevent collision with existing tables during migration. It defaults to `ifrs_`.

### Loading Migrations and Factories

`load_migrations` and `load_factories` control whether the package loads its migrations and its model factories automatically. Both default to `true`. Set `load_migrations` to `false` if you publish and manage the migrations yourself.

### Ledger Hashing Algorithm

Eloquent IFRS hashes the contents of the Ledger to maintain transactional integrity. The algorithm used for this process can be set by changing the value of `hashing_algorithm`. This value is read from the `HASHING_ALGORITHM` environment variable and defaults to `sha256`.

### Aging Schedule Brackets

These are the time chunks into which the outstanding balances for client receivables and supplier paybles are split. A default segmentation is included in the configuration file.

### Account Codes

Account codes are the numerical representation of the Account object type. Some countries have a reccommended scheme for allocating account codes that is aimed at improving the comparability between financial reports of different entities. For example, revenue accounts codes are numbers between 4000 and 5000 according to the German SKR04 scheme. A default scheme is included in the configuration file.

### Financial Terms

Standard accounting terms such as `Balance::DEBIT` and `Balance::CREDIT` as well as Reporting period status `[ReportingPeriod::OPEN, ReportingPeriod::CLOSED, ReportingPeriod::ADJUSTING]` are also defined in the configuration files.

### Object Names

Names refer to the human readable lables attached to Account and Transaction types, Report Titles and their Sections. By default, the account and transaction type and report title  names are equivalent to their object types. 

For example, the name for the `Account::INVENTORY` account type is *Inventory* while that for `Account::BANK` is *Bank*. Similarly for Transactions, the name of the `Transaction::CS` transaction type is *Cash Sale* while the name that referes to the `IncomeStatement::TITLE` is *Income Statement*.

Names do not always follow the object type however, for instance the name for a `Transaction::IN` is *Client Invoice* and that for `Transaction::JN` is *Journal Entry* so you should always check the configuration file to be sure.

### Financial Statement Sections

The financial statement reports created by the package are organized into sections roughly corresponding to the IFRS Financial Statement templates. For example the Balance Sheet  is separated into `BalanceSheet::ASSETS`, `BalanceSheet::LIABILITIES`, `BalanceSheet::EQUITY` and `BalanceSheet::RECONCILIATION`. These sections, as well as the accounts that belong in them are defined in the configuration file and may be managed or extended as needed. 

***