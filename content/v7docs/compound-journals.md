---
title: "Compound Journal Entries"
date: 2020-05-02T14:14:53+02:00
weight: 26
---

Compound Journal Entries are JournalEntry transactions in which the line items can be posted to arbitrary sides of the ledger. As such, they require a few extra parameters.

## Basic Journal Entry

In a normal Journal Entry, all the Line Items are automatically posted to the opposite side of the main account.

```php
use Carbon\Carbon;
use IFRS\Models\Account;

$account1 = Account::create([
    'name' => "Main Account",
    'account_type' => Account::BANK,
]);

$account2 = Account::create([
    'name' => "Line Account 1",
    'account_type' => Account::BANK,
]);
$account3 = Account::create([
    'name' => "Line Account 2",
    'account_type' => Account::BANK,
]);
$account4 = Account::create([
    'name' => "Line Account 3",
    'account_type' => Account::BANK,
]);

use IFRS\Transactions\JournalEntry;

$journalEntry = JournalEntry::create([
    'account_id' => $account1->id,
    'transaction_date' => Carbon::now(),
    'narration' => "Basic Journal Entry",
]);

```

Adding the line items and posting the journal.

```php
use IFRS\Models\LineItem;

$journalEntry->addLineItem(
	LineItem::create([
		'account_id' => $account2->id,
		'narration' => "Line Item 1",
		'amount' => 100,
	])
);

$journalEntry->addLineItem(
	LineItem::create([
		'account_id' => $account3->id,
		'narration' => "Line Item 2",
		'amount' => 100,
	])
);

$journalEntry->addLineItem(
	LineItem::create([
		'account_id' => $account4->id,
		'narration' => "Line Item 3",
		'amount' => 100,
	])
);

$journalEntry->post();
```

The above transaction will result in the following entries in the ledger.
```php

Dr: Line Account 1	100
Dr: Line Account 2	100
Dr: Line Account 3	100
	Cr: Main Account	300 // The main account is credited by default
			300	300
```

## Compound Journal Entry

For a compound Journal Entry we can specify which side the line item amount should be posted to the line item account. To ensure that the transaction balanaces however, we also need to input the amount to be posted to the main account in addition to the side of the ledger.
```php

$journalEntry = JournalEntry::create([
    'account_id' => $account1->id,
    'transaction_date' => Carbon::now(),
    'narration' => "Compound Journal Entry",
    'credited' => false, // main account should be debited
    'compound' => true,
    'main_account_amount' => 10
]);

$journalEntry->addLineItem(
	LineItem::create([
		'account_id' => $account2->id,
		'narration' => "Line Item 1",
		'amount' => 25,
		'credited' => true
	])
);

$journalEntry->addLineItem(
	LineItem::create([
		'account_id' => $account3->id,
		'narration' => "Line Item 2",
		'amount' => 30,
		'credited' => false
	])
);

$journalEntry->addLineItem(
	LineItem::create([
		'account_id' => $account4->id,
		'narration' => "Line Item 3",
		'amount' => 15,
		'credited' => true
	])
);

$journalEntry->post();
```

The above transaction will result in the following entries in the ledger.
```php

Dr: Main Account 		10
	Cr: Line Account 1 		25 
Dr: Line Account 2		30
	Cr: Line Account 3		15
				40	40

```