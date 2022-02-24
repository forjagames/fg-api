---
sidebar_position: 2
---

# Restrictions

The `Restrictions` will limit access to your [Credentials](credential.md) by applying rules.

## Restriction types

* API
* Request Origin

### API Restriction

Using this restriction, the credential will only have access to specific services.

You can add one or multiple services.

Example 1: Only identity services (comma separated, without spaces).
```
identity
```

Example 2: Credentials, Identity, Logger and Leaderboard.
```
credential,identity,logger,leaderboards,store,storage
```

### Request Origin Restriction

Using this restriction, the credential will only accept request from specific origins (addresses).

Example 1: Itch.io
```
v6p9d9t4.ssl.hwcdn.net
```

Example 2: Specific IP and Localhost
```
192.168.1.15,127.0.0.1,localhost
```
