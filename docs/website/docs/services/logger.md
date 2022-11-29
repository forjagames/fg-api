---
sidebar_position: 3
---

# Logger

The `Logger Service` allows you to collect information about the project.

## Logs and sessions
Logs are grouped into `sessions`. To add logs, you must first create a new session. We recommend creating a new session when starting the game or application, and closing the session before stopping the application or game.

## Log levels
A `log level` or `log severity` is a piece of information telling how important a given log message is. It is a way of distinguishing log events from each other. Severity of all levels is assumed to be numerically ascending from most important to least important.
```javascript
Error = 0
Warn = 1
Info = 2
Http = 3
Verbose = 4
Debug = 5
Silly = 6
```

## Session lifetime
After being created, Log sessions have a maximum life of `90 days`. After this time, the session is finished.

However, if a session does not receive a log for at least `3 days`, it will automatically be finished.

Finished sessions are not deleted, allowing you to analize the logs. Only empty finished sessions will be automatically deleted.
You as administrator have the power to delete finished sessions.
