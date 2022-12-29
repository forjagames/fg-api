---
sidebar_position: 2
---

# Kevin DB Documentation

> KEVIN DB: **Ke**y **V**alue **I**dentity-I**n**tegrated **D**ata**b**ase

<small>Revision: 4 | 2022-12-02, by Luciano R.</small>

The DB is intended to store data from users.

## <u>DB Definition</u>
The DB is an entity. It needs the Project ID.

## <u>Users</u>
* $global: All users.
* $admin: Administrator credentials (example the Game Server).
* $me: Logged User ID.
* [User ID]: User ID (from Identity Service).

## <u>Keys</u>

### Format
The format of the keys is:

`[User ID]/[System Route]/[Key name]`

If you want to store a bigger key, you need to use the size postfix `.mk` (Mega Key).

`[User ID]/[System Route]/[Key name].mk`

### Key name
The key name must be a slug. Its length cannot exceed 40 characters. Postfixes do not affect the length of the name.

### System Routes
* **Private**: only the user can write and read. *Useful for storing user settings*.
* **ReadOnly**: the admin can write and read. The user can only read.
* **Shared/[Target]**: user can write and read. Other users can read.
  * **$global**: all users can read.
  * **$admin**: all admins can read.
  * **[User ID]**: only the specific `User ID` can read.
* **Temp/[Connection ID]/[Target]**: only the user can write and read. All the data is deleted when connection closes. This route don't accept big keys.
  * **$me**: only the creator can read and write.
  * **$global**: all users can read.
  * **$admin**: all admins can read.
  * **[User ID]**: only the specific `User ID` can read.

### Special routes (Shared and Temp)
The [Target] of route accept modifiers:
* **Postfix `.awd`**: Admins can read, write and delete the key.
* **Postfix `.ad`**: Admins can read and delete the key.
* **Postfix `.aw`**: Admins can read and write the key.

### Special route Temp
TODO

### Special user $global for routes
The `$global` path is useful for sharing data and values between all users, ie, saving values globally.

The format of the keys is:
`$global/[System Route]/[Key name]`

#### System Routes for $global
* **ReadOnly**: the admin can write and read. The user can only read.
* **Shared/[Target]**: admin can write and read. Other users can read.
  * **$global**: all users can read.
  * **$admin**: all admins can read.
  * **[User ID]**: only the specific `User ID` can read.

## <u>Values</u>
* Keys: The values are strings (max length: 255 bytes).
* Mega Keys: The values are strings (max length: 1 MB).

## <u>User permissions</u>
User permissions can be view, write, read, and delete. If you don't specify the permissions, they all will be `true` by default.
You can set permissions for specific routes, or you can use routes with wilcards.

### Main structure
Permissions are restrictive. In other words, if the user does not have permissions on a route, due to the [structure](#system-routes) defined above, they cannot be forced to have them. Permissions only allows you to increase restrictions. 

### Priorities
Permissions have a priority system. This will be executed only if permissions respects the [main structure](#system-routes) are approved.
The more specific is the route, the more important will be the permission.
This is very useful because it allows you to make exclusions.

For example, if you want a user or group to have all folders locked except for a specific one, we can achieve it in the following way:

| Route                            | W | R | V | D | Comment                                            |
|----------------------------------|---|---|---|---|----------------------------------------------------|
| **                               | X | V | V | X | All routes are read-only.                          |
| */private/preferences/**         | V | V | V | V | Each user can read and write their preferences.    |

### Identity integration
If you want to affect only the routes of the user that is calling the action, you can use the `$me` keyword.

## <u>How it works?</u>
1. The `User` connects to the DB using some credentials. 
2. The `User` sends requests through the DB session.
3. The `User` closes the connection.
4. The `System` deletes the temp route.

## <u>Operations</u>:
* **Add [Key Path] = [Value]**: Adds a value. If the key already exists, it fails.
* **Set [Key Path] = [Value]**: Sets a value. If the key already exists, it overwrites it.
* **Get [Key Path]**: Gets a value. If the key doesn't exists, returns null.
* **Find [Key Path]**: Searchs for a routes that matches the specified path. If it finds it, it returns the routes found and its values. Wildcards are allowed.
* **FindOne [Key Path]**: Searchs for a routes that matches the specified path. If it finds it, it returns the route found and its value. Wildcards are allowed.
* **FindKeys [Key Path]**: Searchs for a routes that matches the specified path. If it finds it, it returns the routes found. Wildcards are allowed.
* **Del [Key Path]**: Deletes the key. Returns true if the key existed.
* **Ren [Key Path] = [New name]**: Rename the key within the same route.
* **Mv [Key Path] = [New Key Path]**: Moves the key to another route. Fails if the origin key doesn't exists, or if the destination key already exists.
