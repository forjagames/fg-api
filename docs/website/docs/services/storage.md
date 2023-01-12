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
File Storage is an object storage solution for the cloud. File Storage is optimized for storing massive amounts of unstructured data. Unstructured data is data that doesn't adhere to a particular data model or definition, such as text or binary data.
This storage engine is designed for:
* Storing files for distributed access.
* Writing to log files.
* Storing data for backup and restore, disaster recovery, and archiving.

## Dashboard
![Sections](/img/storage/storage_dashboard_2.png)

### Navigation Bar
* __Back button (top-left)__: Returns to the project page.
* __Help icon (top-right)__: Opens this documentation.

### Overview _Area_
It shows four boxes with useful information.
* The first indicates the total number of databases in the project.
* The second shows the number of rows or values currently stored in the databases.
* The third shows the occupied size in Megabytes.
* The last one shows a summary of the last requests.

### Storage Engines _Area_
The engines are divided into three tabs with their own names.
In the image we appreciate the view when choosing the first tab, that is, the KevinDB tab.
Inside it we can see an action bar, and a table with the existing databases for this engine.
* __Action bar__: Allows you to create a new database and manage backups.

![Sections](/img/storage/storage_new_db.png)

The new database name must be a slug.
_A URL slug is the part of the URL after the last backslash. For example, the article you’re reading now has a URL that looks like this:_
`https://forjagames.github.io/fg-api/docs/dashboard/new-database`. 
_the slug would be `new-database`._

* __DBs Table__: Shows the metadata of the databases. By clicking on each row, a menu is displayed that will allow us to perform a series of actions.

![Sections](/img/storage/storage_menu.png)

* __Menu items__
  1. __Explorer (new window)__: Opens the [Explorer](../storage/db-explorer.md) in a new window.
  2. __Explorer__: Opens the [Explorer](../storage/db-explorer.md).
  3. __Edit__: Allows you to rename the database.
  4. __Copy UUID__: Copies the UUID of the database to the clipboard.
  5. __Delete__: Deletes the database permanently.
  6. __Cancel__: Close the menu without performing any action.

## Explorer
* [DB Explorer](../storage/db-explorer.md) is a tool for browsing the service's databases, query rows, view and modify data, manage users, groups, and backups.
* [Files Explorer](../storage/files-explorer.md) is a tool for browsing the service's drives, manage files and backups.
