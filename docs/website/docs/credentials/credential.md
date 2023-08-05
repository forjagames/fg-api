---
sidebar_position: 1
---

# Credential

The `Credentials` are crucial for facilitating the interaction between your application (or game) and the `API`.

The first step to using the API is to access it from your app (or game) using the key and secret of your credential.

Each project can have up to 3 credentials.

## Key, Secret, and Alias

The `Key` is the unique identifier of your credential and cannot be changed.

The `Secret` serves as a password for the credential. This value can be changed by the administrator, but you will need to update your game with the new secret in order to restore the access to the `API`.

The `Alias` is an optional field, visible only on this Portal. It provides a user-friendly name to identify your credentials. In the future, the alias will be utilized to generate friendlier URLs.

## Security

To enhace the security of your `Credentials`, you can use the [Restrictions](restrictions.md).

Restrictions allow you to apply access rules to your credentials.

## Actions

### Save alias
This option enables you to modify the alias of the credentials. Changing the alias has no impact on the functionality; it is purely a visual change.

### Regenerate secret
It is recommended to use this option if you suspect someone else has your secret or if you have lost it. 
When you generate a new secret, the old one will no longer work. This implies that you must update the secret for any applications using this credential.

### Delete
This action permanently deletes the credential.
