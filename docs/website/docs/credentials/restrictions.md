---
sidebar_position: 2
---

# Restrictions

The `Restrictions` feature allows you to control access to your [Credentials](credential.md) by applying rules.

Applying restrictions helps you to enhance the security of your credentials and allows you to control their usage more effectively.

## Restriction types

* API
* Request Origin

### API Restriction
With the API Restriction, you can limit the access of a credential to specific services.

You can add one or multiple services to the restriction.

Possible values: `credential`, `identity`, `logger`, `leaderboards`, `store`, `storage`.

Example 1: Allow access to only the Identity service (comma-separated, without spaces).
```
identity
```

Example 2: Credentials, Identity, Logger, and Leaderboard.
```
credential,identity,logger,leaderboards
```

### Request Origin Restriction
With the Request Origin Restriction feature, you can specify from which origins (addresses) the credential will accept requests.

Additionally, you have the flexibility to use [wildcards](../misc/glossary.md#wildcard) in the addresses, allowing for more versatile configurations. 
For example, instead of specifying `http-classic.itch.zone`, you can use wildcards such as `*.itch.zone` to broaden the scope of accepted origins.

Example 1: Itch.io
```
v6p9d9t4.ssl.hwcdn.net,html-classic.itch.zone
```

Example 2: Itch.io (using wildcards)
```
*.ssl.hwcdn.net,*.itch.zone
```

Example 3: Specific IP and Localhost
```
192.168.1.15,127.0.0.1,localhost
```


