---
sidebar_position: 4
---

# Files storage: Add or edit permissions

![Main](/img/storage/storage_permissions_add.png)

Permissions will allow or restrict end users to perform actions on files and folders.

## Form fields
- **Path**: Path of the permission. It accepts [wildcards](../misc/glossary.md#wildcard).
- **Name**: Name or description of the permission. This will help you to identify it easily.
- **Type**: Permission type.
- **Priority**: Priority of the permission. Permissions work like hierarchies. All of them are linked. The priority is used to know in which position the permission should be, since permissions with higher priority can override those with lower priority. The higher the number, the higher the priority.
- **Security**: Restrictions and allowances that will apply to the permission (read, create, edit, delete).

## Permission types
Permission types are filters that are used when applying allowances and restrictions. They are combined with a [wildcard](../misc/glossary.md#wildcard) to determine which `users` or `credentials` the different permissions correspond to.

* Credentials
* Users
