---
title: 'Release Notes'
date: 2018-11-28T15:14:39+10:00
weight: 1
heading: 'Prologue'
---

Eloquent-IFRS 4.0 is the final active development release which addresses the last part of the accounting process, Foreign Exchange differences management.

### Versioning Scheme

Like Laravel, Eloquent-IFRS follows [Semantinc Versioning](https://semver.org). This means that only Major releases introduce breaking changes to the package.


### Upgrade Guide

Eloquent IFRS 4.0 requires Eloquent minimum 7.0+ and PHP 7.3 to work. Update your `emungai/eloquent-ifrs` dependency to ^4.0 in your `composer.json file`. You also need to update your database schema for the Major changes mentioned below.

#### Major Changes (Affecting Existing Database Schema)

These changes require you to update your database schema to be compatible with the new version of the package. Details about column types can be obtained from the respective migration files. (There is the implied assumption here that you are upgrading from version 3. To upgrade from version 2, Please go through the upgrade guide for version 3 before following the setps below)

+ Entity Model - Add `locale` attribute.
+ Balance Model - Rename `amount` attribute to `balance`.
+ Ledger Model - Add `rate` attribute.
+ Ledger Model - Add `currency_id` attribute.
+ Reporting Period Model - Add `closing_date` attribute.


#### Minor Changes
+ Configuration - Add `single_currency`, array for account types that should only allow transactions with the account's currency.
+ Assignment Model - Add `transactionRate`, `clearedRate`, `transactionType`, `clearedType`, parameter to the `validate()` method to facilitate realized forex differences transactions validation.
+ Ledger Model - Add `currencyId` parameter to the `contribution()` method to filter transactions by currency.
+ Ledger Model - Add `postForex()` method to post foreign exchange differences to the ledger at transaction assignment.
+ Transactions Model - Add `getVatAttribute()` method to retrieve the VAT amount of a transaction.
+ AccountStatement Model - Add filtering by currency.
+ AccountSchedule Model - Add filtering by currency.
+ ReportingPeriod Model - Add `balanceAccount()` method to calculate foreign exchange differences at period closing.
+ ReportingPeriod Model - Add `transactionCurrencies()` method to retrieve all foreign currencies used in transactions for the period.
+ ReportingPeriod Model - Add `prepareBalancesTranslation()` method to create the foreign currency translation transactions for the period.
+ ReportingPeriod Model - Add `getTranslations()` method to retrieve all foreign currency translation transactions for the period.
+ ReportingPeriod Model - Add `postTranslations()` method to commit all foreign currency translation transactions for the period to the ledger.
+ Account Model - Add `currencyId` parameter to the `openingBalance()` method to filter opening balances by currency.
+ Account Model - Add `currencyId` parameter to the `currentBalance()` method to filter transactions by currency.
+ Account Model - Add `currencyId` parameter to the `closingBalance()` method to filter closing balances by currency.
+ Account Model - Add `currencyId` parameter to the `transactionsQuery()` method to filter transactions by currency.
+ Balance Model - Replace `getAmount()` method with `getAmountAttribute()` to corerspond to the transactions model amount attribute.
***
