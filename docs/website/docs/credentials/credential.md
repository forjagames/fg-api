---
sidebar_position: 1
---

# Credential

The `Credentials` allows the interaction between your application (or game) and the `API`.

The first step to use the API is to access from the app (or game) using the key and secret of your credential.

You can have up to 3 credentials per project.

## Key, Secret and Alias

The `Key` is the identifier of your credential. This value cannot be changed.

The `Secret` is like a password. This value can be changed by the administrator, but you will need to update your game with the new secret in order to restore the access to the `API`.

The `Alias` is an optional field. It is only visibile on this Portal. It is useful to identify your credentials with a friendly name. In the future, the alias will be used to generate friendlier URLs.

## Security

To increase the security of your `Credentials`, you can use the [Restrictions](restrictions.md).

The Restrictions will limit access to your credentials by applying rules.

## Actions

### Save alias
This option allows you to change the alias of the credentials. The change will not affect the use of the service, it is simply a visual change.

### Regenerate secret
It is recommended to use this option in case you suspect someone else has your secret, or in case you have lost it.
If you generate a new secret, the old one will stop working forever. This implies that you must update the secret of the application that is using this credential.

### Delete
This action deletes the credential permanently.

