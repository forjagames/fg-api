---
sidebar_position: 3
---

# Logger and Metrics

## Logger

The `Logger Service` allows you to collect information about the project.

### Logs and sessions
Logs are grouped into `sessions`. To add logs, you must first create a new session. We recommend creating a new session when starting the game or application, and closing the session before stopping the application or game.

### Log levels
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

### Session lifetime
After being created, Log sessions have a maximum life of `90 days`. After this time, the session is finished.

However, if a session does not receive a log for at least `3 days`, it will automatically be finished.

Finished sessions will be stored for a duration of `one year` from the session's end date, allowing you to analyze the logs. After this period, the finished sessions will be automatically removed. 
As an administrator, you can manually delete completed sessions.

## Metrics

Metrics are fundamental entities that enable the measurement of various actions of your projects.

### Metric types

#### Accumulators
Metrics falling under this category only accept value increments. Accumulators can only increment values by 1.

*Example:* Total number of individuals who have won the game.

#### Counters
Metrics in this category allow both value additions and subtractions.

*Example:* Count of users within level 5.

#### Springs
These metrics incorporate a time-sensitive element. If a specific time window elapses without an update, the metric value is automatically subtracted.

*Example:* Count of identified users actively engaging with the game.

### Metric properties

#### Common properties
- **Type:** Indicates the type of the metric.
- **Divisible (default: no):** Determines if the metric can be subdivided into smaller components based on tags.
- **Identifiable (default: no):** Specifies whether the metric supports division by identifiers.
- **Accepts Negative Values? (default: no):** Defines whether the metric can incorporate negative values.
- **Maximum Value (default: no limits):** Sets the upper limit for metric values.

#### Additional spring properties
- **Value duration en minutes (default: 5):** Sets the expiration of the values.

### Common use-cases

#### Users by Version
- **Type:** Counter.
- **Divisible:** Yes (version number).
- **Identifiable:** Yes (user ID).

*Example:* Tracking user distribution across different software versions.

#### Total Times Played
- **Type:** Accumulator.
- **Divisible:** No.
- **Identifiable:** No.

*Example:* Recording the overall frequency of gameplay sessions.

#### Total Times Played per Version
- **Type:** Accumulator.
- **Divisible:** Yes (version number).
- **Identifiable:** No.

*Example:* Analyzing gameplay frequency based on software version.

#### Total Accesses to a Specific Level
- **Type:** Accumulator.
- **Divisible:** Yes (level ID).
- **Identifiable:** No.

*Example:* Monitoring the engagement with a particular game level.

#### Total Game Time
- **Type:** Accumulator.
- **Divisible:** No.
- **Identifiable:** No.

*Example:* Capturing the overall duration of gameplay.

#### Total Game Time per Version
- **Type:** Accumulator.
- **Divisible:** Yes (version number).
- **Identifiable:** No.

*Example:* Analyzing total gameplay duration based on software version.

#### Total Game Time per Level
- **Type:** Accumulator.
- **Divisible:** Yes (level ID).
- **Identifiable:** No.

*Example:* Examining total gameplay duration for each game level.

#### Total Game Time per Level per User
- **Type:** Accumulator.
- **Divisible:** Yes (level ID).
- **Identifiable:** Yes (user ID).

*Example:* Detailed analysis of individual user gameplay duration across different game levels.




