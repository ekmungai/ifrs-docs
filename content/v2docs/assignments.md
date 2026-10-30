---
title: 'Assignments'
date: 2018-11-28T15:14:39+10:00
weight: 15
---

Assignments are the package's mechanism for relating transactions which have opposite effects on an accounts balance with each other. For example, A Client Receipt can be assigned to a Client Invoice, thereby clearing it either partially or fully. This enables the Account Schedule report to display only the outstanding transactions that contribute to an accounts closing balance for a given period.

### Attributes
+ `transaction_id`: The Id of the transaction being assigned, i.e. clearing another transaction. 
+ `cleared_id`: The Id of the transaction being cleared. 
+ `cleared_type`: The full name (including path) of the model of the transaction being cleared. 
+ `amount`: The amount being cleared. 
+ `entity_id`: The Id of the entity associated with the assignment. Defaults to the entity of the logged in user.

### Relations
+ `$assignment->transaction:` The clearing transaction. 
+ `$assignment->cleared:` The clearing transaction/balance being cleared. 
+ `$assignment->entity:` The entity associated with the assignment. 

### Methods
+ `$assignment->attributes():` Presents the assignment's attributes as an object. Useful for debugging. 

***