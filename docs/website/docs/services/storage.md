---
sidebar_position: 6
---

# Storage

The `Storage Service` provides you with different tools to store information.

**IMPORTANT: We are developing this service. It will be available very soon.**


## Storage Engines
1. KevinDB (Key Value Identity-Integrated DB)
2. KevsimDB (Key Value Simple DB)
3. File Storage

### 1. Key Value Identity-Integrated DB
[Official docs](../storage/kevin-db.md)

This non-relational database engine allows data to be stored as key-value tuples.

The advantage of this engine is that it allows managing multiple users, and it has a solid route structure that allows you to play with access, reading and writing permissions, depending on the type of user.

#### Route structure
The routes are integrated with [Identity Service](./identity.md).
Examples of keys for user ID ABC123:

```
Private routes:

ABC123/Private/Settings/fullscreen
ABC123/Private/Settings/in-game-name
ABC123/Private/Settings/language

Shared routes:

ABC123/Shared/$global/user-status
ABC123/Shared/$admin/user-location
ABC123/Shared/XYZ456/chat

Temporal routes:

ABC123/(Connection ID)/$me/message-draft
ABC123/(Connection ID)/$me/match-start-date
```

#### Structure:
**Note: You will find this updated structure in the official KevinDB documentation**
* **Private**: only the user can write and read. *Useful for storing user settings*.
* **ReadOnly**: the admin can write and read. The user can only read. *Useful for configuring game variables, for example, factors that affect the calculation of RPG game formulas through multiplication, to achieve a better balance.*
* **Shared/[Target]**: user can write and read. Other users can read.
  * **$global**: all users can read.
  * **$admin**: all admins can read.
  * **[User ID]**: only the specific `User ID` can read.
* **Temp/[Connection ID]/[Target]**: only the user can write and read. All the data is deleted when connection closes. This folder don't accept big keys.
  * **$me**: only the creator can read and write.
  * **$global**: all users can read.
  * **$admin**: all admins can read.
  * **[User ID]**: only the specific `User ID` can read.

### 2. Key Value Simple DB
This engine is being developed.

### 3. File Storage
This engine is being developed.

## Explorer
[Explorer](../storage/explorer.md) is a tool for browsing the service's databases, query rows, view and modify data, manage users, manage groups, and manage backups.
