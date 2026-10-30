---
title: 'Sales Cycle'
date: 2018-11-28T15:14:39+10:00
weight: 24
heading: 'Examples'
---


The sales cycle relates to the process through which a company records transactions dealing with customers. These include Sales, discounts, and receipts. This Example handles each of the cases described above.

## Sales
Sales can occur in one of two ways, cash sales in which the transaction is paid for immediately or credit sales in which case an invoice is raised for the client to be cleared at a later time.

### Cash Sales
Cash Sales require a Bank Account and an Operarting Revenue account.


```php
use IFRS\Models\Account;

$bankAccount = Account::create([
    'name' => "Sales Account",
    'account_type' => Account::BANK,
]);

$revenueAccount = Account::create([
    'name' => "Bank Account",
    'account_type' => Account::OPERATING_REVENUE,
]);
```
 With these, a Cash Sale object can be created.
 ```php
use IFRS\Transactions\CashSale;

$cashSale = CashSale::create([
    'account_id' => $bankAccount->id,
    'date' => Carbon::now(),
    'narration' => "Example Cash Sale",
]);
```
This represents only one side of the double entry, so to complete the transaction we need a Line Item. Line Items require an associated VAT object, even if the transaction does not attract VAT, a VAT object with a rate of 0 must be associated with the line item. If the VAT rate is more than 0%, the VAT object requires an associated account to which the output VAT amounts will be posted. Lets start with the VAT Account.

```php
use IFRS\Models\Account;

$salesVatAccount = Account::create([
    'name' => "Sales VAT Account",
    'account_type' => Account::CONTROL,
]);
```
Next we can setup the Output (Sales) VAT object.
```php
use IFRS\Models\Vat;

$outputVat = Vat::create([
    'name' => "Standard Output Vat",
    'code' => "S",
    'account_id' => $salesVatAccount->id,
    'rate' => 20,
]);
```
We now have all that we need to create the line item for our Cash Sale transaction.

```php
use IFRS\models\LineItem;

$cashSaleLineItem = LineItem::create([
    'vat_id' => $outputVat->id,
    'account_id' => $revenueAccount->id,
    'description' => "Example Cash Sale Line Item",
    'amount' => 100,
]);
```
We then need to associate the line item with the cash sale transaction and post it.

```php
$cashSale->addLineItem($cashSaleLineItem)->post();
```
### Discounts
In the event that the sale had a discount associated with it, the entries required to record the fact would need a discounts allowed account.
```php
use IFRS\Models\Account;

$discountsAllowedAccount = Account::create([
    'name' => "Discounts Allowed Account",
    'account_type' => Account::EXPENSE,
]);
```

That way after the discounted sale a journal entry can be made to move the lost income from the cash account into the proper expense account like so for a 10% discount on the net price:
```php

use IFRS\Transactions\JournalEntry;

$journalEntry = JournalEntry::create([
    'account_id' => $bankAccount->id,
    'date' => Carbon::now(),
    'narration' => "Example Discount Allowed entry",
]);

$journalEntry->addLineItem(
	LineItem::create([
		'account_id' => $discountsAllowedAccount->id,
	    'description' => "Example Discount Allowed entry",
	    'amount' => 10,
	])
)->post();

```

Checking the results of the above transactions would yield the following balances.
```php

print_r([
	$bankAccount->closingBalance(),
	$revenueAccount->closingBalance(),
	$salesVatAccount->closingBalance(),
	$discountsAllowedAccount->closingBalance()
]);

// printout
Array
(
    [0] => 110 // 100 + 20 (vat) - 10 (discount)
    [1] => -100
    [2] => -20
    [3] => 10
)

```

### Credit Sales (With VAT inclusive amount)
Unlike the Cash Sale transaction, a Credit Sale transaction needs a Recievable account in place of a Bank Account.
```php

$clientAccount = Account::create([
    'name' => "Example Client Account",
    'account_type' => Account::RECEIVABLE,
]);
```
Now we can create a Client Invoice object for a sale of 100 with vat being inclusive in the amount.

```php

use IFRS\Transactions\ClientInvoice;

$clientInvoice = ClientInvoice::create([
    'account_id' => $clientAccount->id,
    'date' => Carbon::now(),
    'narration' => "Example Credit Sale",
]);

$clientInvoice->addLineItem(
	LineItem::create([
		'vat_id' => $outputVat->id,
		'account_id' => $revenueAccount->id,
		'description' => "Example Credit Sale Line Item",
		'vat_inclusive' => true,
		'amount' => 1,
	])
)->post();
```
Assuming that the transactions above do not count, checking the results of the credit sale yields the following balances.
```php

print_r([
	$clientInvoice->closingBalance(),
	$revenueAccount->closingBalance(),
	$salesVatAccount->closingBalance()
]);

// printout
Array
(
    [0] => 100 // full invoice amount
    [1] => -83.3333
    [2] => -16.6667 // 100 - (100 / 1.2) (inclusive vat)
)

```
At some later point in time the client will pay for the invoice, which we record by way of a client receipt. Client Receipts require a Zero rated VAT object.
```php

use IFRS\Models\Vat;

$zeroVat = Vat::create([
    'name' => "Zero Rated Vat",
    'code' => "Z",
    'rate' => 0,
]);

use IFRS\Transactions\ClientReceipt;

$clientReceipt = ClientReceipt::create([
    'account_id' => $clientAccount->id,
    'date' => Carbon::now(),
    'narration' => "Example Client Payment",
]);

$clientReceipt->addLineItem(LineItem::create([
    'vat_id' => $zeroVat->id,
    'account_id' => $bankAccount->id,
    'description' => "Payment for Client Invoice",
    'amount' => 100,
])
)->post();
```
With this change the account balances would now look as follows:
```php

print_r([
	$clientInvoice->closingBalance(),
	$revenueAccount->closingBalance(),
	$salesVatAccount->closingBalance(),
	$bankAccount->closingBalance()
]);

// printout
Array
(
    [0] => 0
    [1] => -83.3333
    [2] => -16.6667 
    [2] => 100 
)
```
This marks the conclusion of the Credit Sales cycle.
