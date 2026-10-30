---
title: 'Recycling'
date: 2018-11-28T15:14:39+10:00
weight: 12
---

Recycling referes to the temporary deletion and subsequent restoration of objects in the package. All objects in the package are recyclable. Recycled objects may also be permanently destroyed, but this action does not no remove them from the database but instead only marks them as having been destroyed.

### Attributes
+ `user`: The User associated with the recycledObject. Defaults to the logged in user.
+ `recyclable`: The object that has been recycled. 
+ `recyclable_type`: The type the object that has been recycled.
+ `entity`: The Entity associated with the recycledObject. Defaults to the entity of the logged in user.

### Methods
+ `$recycled->attributes():` Presents the recycledObject's attributes as an object. Useful for debugging. 

### Usage
This class is not intended to be used directly, it is hooked into Eloquents events system specifically the `deleting` and `restoring` events. To recycle an object, simply call delete on it as you would any Eloquent model.

```
$user = User::create(["email"=>"test@example.com","password"=>"testpassword"]);

$user->delete();
```

This marks the object as deleted, making the object unavailable vie regular querying functions. It may however be retrieved using the Eloquent `withTrashed()` function. It also creates a `RecycledObject`instance in the database to record the action.

```
$user = User::withTrashed()->where("id",$user_id)->first();
```

You can then inspect details of all the recycling actions such as the time they happened and the users responsible by calling the `recycled()` method on the object, which returns a collection of `RecycledObject` belonging to the object.
```
$user->recycled(); // Eloquent Collection
```
Restoring the item with the `restore()` function deletes the `RecycledObject`.
```
$user->restore();
```
Calling `forceDelete()` function on an object marks it as destroyed, which means that whereas the object is still visible by using `withTrashed()` it cannot be restored.
```
$user->forceDelete();
```

***