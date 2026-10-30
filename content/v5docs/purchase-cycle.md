---
title: "Purchase Cycle"
date: 2020-05-02T14:14:53+02:00
weight: 25
---

The purchase cycle is the process by which the entity acquires goods and services either as raw material for production or for the purpose of administration. This example will demonstrate A Cash Purchase and a Refund (for goods returned for instance).

## Cash Purchase

A Cash Purchase requires a Bank Account.

```php
use IFRS\Models\Account;

$bankAccount = Account::create([
    'name' => "Sales Account",
    'account_type' => Account::BANK,
]);

use IFRS\Transactions\CashPurchase;

$cashPurchase = CashPurchase::create([
    'account_id' => $bankAccount->id,
    'date' => Carbon::now(),
    'narration' => "Example Cash Purchase",
]);

```

For the line item of the Cash purchase, we'll need an Expense Account, Input VAT Account and an input VAT object

```php
use IFRS\Models\Account;

$opexAccount = Account::create([
    'name' => "Operations Expense Account",
    'account_type' => Account::OPERATING_EXPENSE,
]);

$inputVatAccount = Account::create([
    'name' => "Input VAT Account",
    'account_type' => Account::CONTROL,
]);

use IFRS\Models\Vat;

$inputVat = Vat::create([
    'name' => "Standard Input Vat",
    'code' => "I",
    'account_id' => $inputVatAccount->id,
    'rate' => 10,
]);

```

Now we can create the line item, add the input vat and attach it to the cash purchase and post it.

```php
use IFRS\models\LineItem;

$cashPurchaseLineItem = LineItem::create([
	'account_id' => $opexAccount->id,
	'description' => "Example Cash Purchase Line Item",
	'amount' => 100,
]);

$cashPurchaseLineItem->addVat($inputVat);
$cashPurchase->addLineItem()->post();
```

To further this example, lets assume that we returned 50 (excluding vat) worth of the goods we purchased. We need to effect a refund from the supplier, and we do so by making a journal entry to reverse the original transaction by that much.
```php

use IFRS\Transactions\JournalEntry;

$journalEntry = JournalEntry::create([
    'account_id' => $opexAccount->id,
    'date' => Carbon::now(),
    'narration' => "Example refund for goods returned",
]);

$journalEntry->addLineItem(
	LineItem::create([
		'account_id' => $bankAccount->id,
	    'description' => "Example refund for goods returned",
	    'amount' => 55,
	])
)->post();

```

Checking the results of the above transactions would yield the following balances.
```php

$currencyId = Auth::user()->entity->currency_id;

print_r([
	$bankAccount->closingBalance()[$currencyId],
	$opexAccount->closingBalance()[$currencyId],
	$inputVat->closingBalance()[$currencyId],
]);

// printout
Array
(
    [0] => -55 // 100 + 10 (vat) - 55 (refund)
    [1] => 50
    [2] => 5
)

```
### Credit Purchases 
The Credit Purchase cycle follows the same process as the Credit Sales cycle only replacing the Receivable and Operating Revenue with a Payable and Expense accounts respectively.