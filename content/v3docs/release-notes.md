---
title: 'Release Notes'
date: 2018-11-28T15:14:39+10:00
weight: 1
heading: 'Prologue'
---

Eloquent-IFRS 3.0 brings several major changes in the codebase to enable support for the Cash Flow Statement, as well as refactoring the relationships between Currencies, Entities and Users to broaden the range of commercial environments it can be deployed to.

### Versioning Scheme

Like Laravel, Eloquent-IFRS follows [Semanting Versioning](https://semver.org). This means that only Major releases introduce breaking changes to the package.


### Upgrade Guide

Eloquent IFRS 3.0 requires Eloquent minimum 6.0+ and PHP 7.2 to work. Update your `emungai/eloquent-ifrs` dependency to ^3.0 in your `composer.json file`. You also need to update your database schema for the Major changes mentioned below.

#### Major Changes (Affecting Database Schema)

These changes require you to update your database schema to be compatible with the new version of the package. Details about column types can be obtained from the respective migration files.

+ VAT Model - Add `account_id` attribute.
+ LineItem Model - Add vat inclusive flag, remove `vat_id` attribute.
+ Ledger Model - Change `date` attribute to `posting_date`.
+ Entity Model - Add `parent_id` attribute to facilitate daughter entities, Make `currency_id` nullable because Currencies require Entities, not vice versa.
+ Currency Model - Add `entity_id` attribute to enable different Entities to have multiple currencies.


#### Minor Changes
+ Business Object Models - Add `toString()` method to identify instances.
+ Business Object Models - Replace single attribute methods with getters.
+ End Year Reports - Move account types to static methods.
+ End Year Reports - Add Cash Flow Statement.
+ End Year Reports - Add Section (Sub)Totals.
+ Balance Model - Add option for mid year opening balances.
+ Account Model - Rename `CONTROL_ACCOUNT` account type to `CONTROL`.
+ Account Model - Move `getTransactions()` from AccountStatement Report to Account Model.
+ Account Model - Add `openingBalances()` method.
+ Assignment Model - Add assignable transaction types constant.
+ Assignment Model - Add staging to facilitate bulk assignments.
+ Assignment Model - Add mixed assignments validation.
+ Category Model - Add Account/Category type match check.
+ Transaction Model - Add `assignable` and `clearable`attribute.
+ Transaction Model - Add `getClass()` method to retrieve the transaction instance's child class name.
+ Entity Model - Add `reportingCurrency` attribute. Daughter Entities return the reporting currency of their parent Entity. 
***
