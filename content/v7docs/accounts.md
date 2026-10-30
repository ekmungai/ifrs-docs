---
title: 'Accounts'
date: 2018-11-28T15:14:39+10:00
weight: 13
heading: 'Accounts'
---

Accounts are records in the General Ledger that agreggate the transactions relating to a financial aspect of the entity. The types of accounts in the package follow the classifications requied to produce reports compatible with the IFRS.

### Attributes
+ `name`: The account name.
+ `account_type`: The type of the account. Must follow IFRS guildines respect to reporting. (See [Constants]({{< relref "#constants" >}})). 
+ `currency`: The Currency the account is denominated in. Defaults to the reporting currency.
+ `category`: The Category the account is a member of. (See [Categories]({{< relref "categories.md" >}})).
+ `balances`: The Balance objects associated with the Account. (See [Balances]({{< relref "balances.md" >}})).
+ `code`: The nominal code of the account. Defaults to a serially incremented value starting at the lower edge of the range specified by the configuration for the account type. (See [Configuration]({{< relref "configuration.md" >}})).
+ `entity`: The Entity associated with the account. Defaults to the entity of the logged in user.
+ `description`: Details of the transactions to be posted into the account.

### Methods
+ `Account::getType($type):` The human readable type name of the given account type. 
+ `Account::getTypes($types):` The human readable type names of the account types in the given array. 
+ `Account::sectionBalances($types, $startDate, $endDate, $fullBalance):` Returns an array containing accounts of the given `$types` their opening, current and closing balances for the period between the `$startDate` and the `$endDate`, as well as the movement in the balance within the period. The array also includes the conbined total of the closing balances of all the accounts.
+ `Account::openingBalances($year):` Returns an array containing accounts with opening balances for the given year, as well as the total debit and credit balances for the year.
+ `$account->openingBalance($year, $currencyId):` Retrieve the opening balance for the account for the given year for the (optionally) given currency. The year is the calendar year that the financial year starts in. (See [Reporting Periods]({{< relref "reporting-periods.md" >}})).
+ `$account->isClosed($year):` Check if an account has been closed (Its foreign currency balances have been translated at the reporing period's closing rates). 
+ `$account->closingTransactions($year):` The accounts transactions translating its foreign currency balances to the period's closing rate. 
+ `$account->currentBalance($startDate, $endDate, $currencyId):` Retrieve the sum of transactions for the account for the period between the given dates for the (optionally) given currency. 
+ `$account->closingBalance($endDate, $currencyId):` Retrieve the closing balance for the account as at the given date for the (optionally) given currency. 
+ `$account->transactionsQuery($startDate, $endDate, $currencyId):` Produce a query builder to retrieve all transactions posted to the account for the given period for the (optionally) given currency. 
+ `$account->getTransactions($startDate, $endDate):` Retrieve an array of all transactions posted to the account for the given period. 
+ `$account->attributes():` Presents the account's attributes as an object. Useful for debugging. 
+ `$account->toString():`The string representation of the Account object instance. 

### Constants
###### Asset Accounts
+ `Account::NON_CURRENT_ASSET`: Also called fixed asset accounts, there track transactions that affect the long term assets of the entity such as machinery and motor vehicles.
+ `Account::CONTRA_ASSET`: Contra assets are accounts whose balances reduce a specific asset account balannce. Examples are Provision for Bad Debts and Accumulated Depreciation
+ `Account::INVENTORY`: The value of stocks held for sale is kept in accounts of this type.
+ `Account::BANK`: Accounts of this type contain liquid cash assets of the entity.
+ `Account::CURRENT_ASSET`: Current assets accounts contain assets that are expected to be realized and received within a year. 
+ `Account::RECEIVABLE`: Accounts of this type keep track of amounts owed to the entity arising from sales made on credit.

###### Liability Accounts
+ `Account::NON_CURRENT_LIABILITY`: Accounts in this category usually have to do with long term financing such as loans.
+ `Account::CONTROL`: Control accounts serve as checks for reconciling recurring short term liabilities. Examples include Salaries Account and Vat account.
+ `Account::CURRENT_LIABILITY`: Current liabilities are amounts owed to external parties that are expected to be settled within one year.
+ `Account::PAYABLE`: Payable accounts track amounts owed bs the entity to suppliers for purchases made on credit.
+ `Account::EQUITY`: Balances in equity accounts represent the in interests of the owners of the entity.

###### Operations Accounts
+ `Account::OPERATING_REVENUE`: Accounts of this type are used to track amounts arising from sales from the core business of the entity.
+ `Account::OPERATING_EXPENSE`: Operating expense accounts track purchases for for use in the core business of the entity.

###### Non-Operations Accounts
+ `Account::NON_OPERATING_REVENUE`: These accounts also record transactions for income, but from sources not the core business of the entity. An example of such income is profit on disposal of fixed assets.
+ `Account::DIRECT_EXPENSE`: Other expense accounts are usually used for expenses that have a direct relationship with the selling of the entities products such advertising.
+ `Account::OVERHEAD_EXPENSE`: Overhead expenses refer to utilities and other running costs of the entity.
+ `Account::OTHER_EXPENSE`: Other expenses are those that do not fit either of the above classes such as depreciation.

###### Miscellaneous Accounts
+ `Account::RECONCILIATION`: These are accounts used to reconcile the balances of all other accounts. An example is a suspense account.

###### Purchasable Accounts
+ `Account::PURCHASABLES`: These are accounts for which purchase transactions can be created.

### Constraints (Exceptions)
+ `MissingAccountType`: Accounts must have an account type. 
+ `InvalidCategoryType`: Accounts category must have the same account type as the account. 
+ `HangingTransactions`: Accounts with transactions in the current year cannot be recycled. 

***