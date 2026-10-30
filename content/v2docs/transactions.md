---
title: 'Transactions'
date: 2018-11-28T15:14:39+10:00
weight: 14
heading: 'Transactions'
---

### Model vs Transaction namespace
 The Classes in the `IFRS\Transactions` extend the Transaction class in the `IFRS\Models` namespace and have validation specific to their types to enforce IFRS classification rules. For example, the main account for a `CashSale` transaction must be of type `Account::BANK`.

 Whereas it is possible to create transactions directly from the model, this is not recommended as it would bypass the validation logic.

### Attributes
+ `account_id`: This Id of the Main Account of the Transaction. This account will get the total amount of the transaction posted to it.
+ `date`: The Date(time) of the transaction
+ `narration`: A short description of the purpose of the transaction.
+ `currency_id`: The Id of the currency of the transaction, defaults to the reporting currency of the logged in user's entity.
+ `exchange_rate_id`: The Id of the rate of exchange between the reporting currency and the transaction currency valid at the time the transaction was made. Defaults to `1.00 
+ `reference`: Optional further idenitifying information about the transaction. For example the LPO Number for a Client Invoice. Defaults to `null`.
+ `transaction_no`: The transaction number of the transaction. Defaults to a serially generated number of the form `TTYY/XXXXX`, where `TT` represents the transaction type, `YY` is the period count for the reporting period in which the transaction date falls, and `XXXXX`is a zero padded count of previously recorded transactions of the same type.
+ `transaction_type`: The two character string representing the transaction type as defined by the Transaction class. (See [Constants]({{< relref "#constants" >}})).
+ `credited`: A boolean indicating whether the transaction should be posted in the credit side of the main account.
+ `entity_id`: The Id of the entity associated with the transaction. Defaults to the id of entity of the logged in user.

NB: A transaction is not posted to the Ledger when it is saved. It still has only one side of the double entry and so it requires Line Items to be added to it before it can be posted. (See [Line Items]({{< relref "line-items.md" >}})).

### Relations
+ `$transaction->entity:` The entity associated with the transaction. 
+ `$transaction->ledgers:` The Ledger objects associated with the transaction. 
+ `$transaction->currency:` The transaction's currency. 
+ `$transaction->account:` The transaction's main account. 
+ `$transaction->exchangeRate:` The transaction's exchange rate. 
+ `$transaction->assignments:` Transactions that have been cleared by (assigned to) this transaction. 
+ `$transaction->clearances:` Transactions that have been cleared by this transaction. 
+ `$transaction->lineItems:` The LineItem objects associated with the transaction. 

### Methods
+ `Transaction::transactionNo($type, $date):` Gets the next transaction number for the given the `$type`and the reporting period within which `$date` falls. 
+ `Transaction::getType($type):` The human readable type name of the given transaction type. 
+ `Transaction::getTypes($types):` The human readable type names of the transaction types in the given array. 
+ `$transaction->isPosted():` Returns a boolean indicating whether the transaction has been posted to the ledger. 
+ `$transaction->isCredited():` Returns a boolean indicating whether the transaction amount was posted to the credit side of the main account.  
+ `$transaction->getClearedType():` The full name (including path) of the model. Used by the Assignment model.  
+ `$transaction->getAmount():` Returns the total amount of the transaction. 
+ `$transaction->getLineItems():` Retrieves LineItem objects associated with the transaction and loads them to its items array. 
+ `$transaction->addLineItem():` Adds a LineItem object to the transaction's items array. 
+ `$transaction->removeLineItem():` Removes a LineItem object from the transaction's items array and dissociates it from the transaction. 
+ `$transaction->post():` Saves all LineItem objects in the transaction's items array, associating them with the transaction and creating the Ledger objects for the transaction. 
+ `$transaction->checkIntegrity():` Confirms that all Ledger objects for the transaction have not been altered. 
+ `$transaction->attributes():` Presents the transactions's attributes as an object. Useful for debugging. 

### Constants
+ `Transaction::MODELNAME`: The full name (including path) of the Transaction model. 
+ `Transaction::CS`: The Cash Sale Transaction type. 
+ `Transaction::IN`: The Client Invoice Transaction type. 
+ `Transaction::CN`: The Credit Note Transaction type. 
+ `Transaction::RC`: The Client Receipt Transaction type. 
+ `Transaction::CP`: The Cash Purchase Transaction type. 
+ `Transaction::BL`: The Supplier Bill Transaction type. 
+ `Transaction::DN`: The Debit Note Transaction type. 
+ `Transaction::PY`: The Supplier Payment Transaction type. 
+ `Transaction::CE`: The Contra Entry Transaction type. 
+ `Transaction::JN`: The Journal Entry Transaction type. 

### Constraints
+ `MissingLineItem`: A transaction cannot be posted without at least one Line Item. 
+ `HangingClearances`: A transaction that has been assigned to clear other transactions cannot be recycled.
+ `RedundantTransaction`: The main account of a transaction cannot be among the accounts in its line items.
+ `PostedTransaction`: Line items cannot be added or removed from a posted transaction.
+ `ClosedReportingPeriod`: Transactions cannot be created for a reporting period that has been closed.

# Transaction Types

## Cash Sale
A Cash Sale transaction is used when a sale is made and settled immediately.

### Constraints
+ `MainAccount`: Cash Sale Main account must be of type `Account::BANK`.
+ `LineItemAccount`: Cash Sale Line Item accounts must all be of type `Account::OPERATING_REVENUE`.

## Client Invoice
A Cash Sale transaction is used when a sale is made to be settled later i.e. made on credit.

### Constraints
+ `MainAccount`: Client Invoice Main account must be of type `Account::RECEIVABLE`.
+ `LineItemAccount`: Client Invoice Line Item accounts must all be of type `Account::OPERATING_REVENUE`.

## Credit Note
A Credit Note transaction is used to reverse a sale made on credit, either in full or partially.

### Constraints
+ `MainAccount`: Credit Note Main account must be of type `Account::RECEIVABLE``.
+ `LineItemAccount`: Credit Note Line Item accounts must all be of type `Account::OPERATING_REVENUE`.

## Client Receipt
A Client Receipt transaction is used to record payments from clients for sales made on credit.

### Constraints
+ `MainAccount`: Client Receipt Main account must be of type `Account::RECEIVABLE`.
+ `LineItemAccount`: Client Receipt Line Item accounts must all be of type `Account::BANK`.
+ `VatCharge`: Client Receipt Line Items Vat object rate must be `0`.

## Cash Purchase
A Cash Purchase transaction is used when a purchase is made and settled immediately.

### Constraints
+ `MainAccount`: Cash Purchase Main account must be of type `Account::BANK`
+ `LineItemAccount`: Cash Purchase Line Item accounts must all be one of `Account::OPERATING_EXPENSE`, `Account::DIRECT_EXPENSE`, `Account::OVERHEAD_EXPENSE`, `Account::OTHER_EXPENSE`, `Account::NON_CURRENT_ASSET`, `Account::CURRENT_ASSET`, `Account::INVENTORY`.

## Supplier Bill
A Supplier Bill transaction is used when a purchase is made to be settled later i.e. made on credit.

### Constraints
+ `MainAccount`: Client Supplier Bill account must be of type `Account::PAYABLE`.
+ `LineItemAccount`: Supplier Bill Line Item accounts must all be one of `Account::OPERATING_EXPENSE`, `Account::DIRECT_EXPENSE`, `Account::OVERHEAD_EXPENSE`, `Account::OTHER_EXPENSE`, `Account::NON_CURRENT_ASSET`, `Account::CURRENT_ASSET`, `Account::INVENTORY`.

## Debit Note
A Debit Note transaction is used to reverse a purchase made on credit, either in full or partially.

### Constraints
+ `MainAccount`: Debit Note Bill account must be of type `Account::PAYABLE`.
+ `LineItemAccount`: Debit Note Line Item accounts must all be one of `Account::OPERATING_EXPENSE`, `Account::DIRECT_EXPENSE`, `Account::OVERHEAD_EXPENSE`, `Account::OTHER_EXPENSE`, `Account::NON_CURRENT_ASSET`, `Account::CURRENT_ASSET`, `Account::INVENTORY`.

## Supplier Payment
A Supplier Payment transaction is used to record payments from clients for sales made on credit.

### Constraints
+ `MainAccount`: Supplier Payment Main account must be of type `Account::PAYABLE`.
+ `LineItemAccount`: Supplier Payment Line Item accounts must all be of type `Account::BANK`.
+ `VatCharge`: Supplier Payment Line Items Vat object rate must be `0`.

## Contra Entry
A Contra Entry transaction is used to record transfers between bank accounts.

### Constraints
+ `MainAccount`: Contra Entry Main account must be of type `Account::BANK`.
+ `LineItemAccount`: Contra Entry Line Item accounts must all be of type `Account::BANK`.
+ `VatCharge`: Contra Entry Line Items Vat object rate must be `0`.

## Journal Entry
A Journal Entry transaction is used to create double entries between any arbitrary accounts.

### Constraints
Journal Entries have no constraints beyond those of the parent transaction object.
