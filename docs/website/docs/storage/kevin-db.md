---
sidebar_position: 2
---

# Kevin DB Documentation

> KEVIN DB: **Ke**y **V**alue **I**dentity-I**n**tegrated **D**ata**b**ase

<small>Revision: 2 | 2022-11-27, by Luciano R.</small>

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
Permits are restrictive. In other words, if the user does not have permissions on a route, due to the structure defined above, they cannot be forced to have them. Permissions only serve to increase restrictions.
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
* **Del [Key Path]**: Deletes the key. Returns true if the key existed.
* **Ren [Key Path] = [New name]**: Rename the key within the same route.
* **Mv [Key Path] = [New Key Path]**: Moves the key to another route. Fails if the origin key doesn't exists, or if the destination key already exists.
