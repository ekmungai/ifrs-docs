---
title: 'Categories'
date: 2018-11-28T15:14:39+10:00
weight: 14
---
Categories are a means of grouping together several accounts of the same type. This is useful for further subividing the financial reports beyond the classifications defined by IFRS.

### Attributes
+ `name`: The name of the category 
+ `type`: The category type must be one of the account types defined in Account. (See [Accounts]({{< relref "accounts.md" >}})).
+ `entity`: The Entity associated with the category. Defaults to the entity of the logged in user.
+ `accounts`: All the accounts belonging to the category.

### Methods
+ `$category->getAccountBalances($startDate, $endDate):` Retrieve an array of the balances of the accounts belonging to the category. 
+ `$category->attributes():` Presents the category's attributes as an object. Useful for debugging. 
+ `$category->toString():` The string representation of the Category object instance. 

***