---
title: 'Assignments'
date: 2018-11-28T15:14:39+10:00
weight: 16
---

Assignments are the package's mechanism for relating transactions which have opposite effects on an accounts balance with each other. For example, A Client Receipt can be assigned to a Client Invoice, thereby clearing it either partially or fully. This enables the Account Schedule report to display only the outstanding transactions that contribute to an accounts closing balance for a given period.

### Attributes
+ `assignment_date`: The date the assignment was made. 
+ `cleared`: The transaction being cleared. 
+ `transaction`: The transaction being assigned, i.e. clearing another transaction. 
+ `cleared`: The transaction being cleared. 
+ `cleared_type`: The full name (including path) of the model of the (Transaction/Balance) object being cleared. 
+ `amount`: The amount being cleared. 
+ `entity`: The entity associated with the assignment. Defaults to the entity of the logged in user.
+ `forexAccount`: The account to which exchange rate differences between the clearing and the cleared transactions should be posted.

### Constants
+ `Assignment::CLEARABLES`: Transactions that can be cleared.
+ `Assignment::ASSIGNABLES`: Transactions that can be assigned (can clear other transactions).

### Methods
+ `Assignment::bulkAssign($transaction):` Assign all clearable transactions that are outstanding for the main account of the given transaction on a FIFO basis until the balance of the account is exhausted. 
+ `$assignment->attributes():` Presents the assignment's attributes as an object. Useful for debugging. 
+ `$assignment->validate():` Validate the assignment. 
+ `$assignment->toString():` The string representation of the Assignment object instance. 

### Constraints (Exceptions)
+ `UnassignableTransaction`: The transaction cannot be assigned. 
+ `UnclearableTransaction`: The transaction cannot be cleared.
+ `NegativeAmount`: An Assignment cannot have a negative amount.
+ `SelfClearance`: A transaction cannot clear itself.
+ `UnpostedAssignment`: Transactions must be posted to be cleared or assigned.
+ `InvalidClearanceAccount`: The assigned and cleared transactions must have the same main account.
+ `InvalidClearanceCurrency`: The assigned and cleared transactions must have the same currency.
+ `InvalidClearanceEntry`: The assigned and cleared transactions must have the same credit entry type.
+ `InsufficientBalance`: The assigned transaction does not have sufficient balance to clear the amount given.
+ `OverClearance`: The cleared transaction has less uncleared balance remaining than the amount given.
+ `MixedAssignment`: A previously cleared transaction cannot be assigned, and vice versa.
+ `MissingForexAccount`: An assignment with differences in exchange rates between the clearing and cleared transactions must have a forex account.
+ `InvalidTransaction`: Compound Journal Entry Transactions can neither be assigned nor cleared.
***