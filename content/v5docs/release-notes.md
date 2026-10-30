---
title: 'Release Notes'
date: 2018-11-28T15:14:39+10:00
weight: 1
heading: 'Prologue'
---

Eloquent-IFRS 5.0 is an enhancement of the the final active development release 4.0, which introduces some critical features that were missing namely support for compound Journal Entries and the ability to apply Multiple Taxes to line items. This release also supports the lates version of Laravel (9x) and requires PHP 8.

### Versioning Scheme

Like Laravel, Eloquent-IFRS follows [Semantinc Versioning](https://semver.org). This means that only Major releases introduce breaking changes to the package.


### Upgrade Guide

Eloquent IFRS 5.0 requires Eloquent minimum 8.4+ and PHP 8.0.1 to work. Update your `emungai/eloquent-ifrs` dependency to ^5.0 in your `composer.json file`. You also need to update your database schema for the Major changes mentioned below.

#### Major Changes (Affecting Existing Database Schema)

These changes require you to update your database schema to be compatible with the new version of the package. Details about column types can be obtained from the respective migration files. (There is the implied assumption here that you are upgrading from version 3. To upgrade from version 2, Please go through the upgrade guide for version 3 before following the setps below)

+ Transaction Model - Add `main_account_amount` and `compound` attribute.
+ Line Item Model - Add `credited` and `compound_vat` attributes and remove the `vat_id` attribute.
+ Create a new `applied_vats` table.

#### Minor Changes
+ Configuration - Remove `user_mode` array as Laravel 7 is no longer supported.
+ User Model - Add `ModelTablePrefix` Trait to resolve the user models database table name.
***
