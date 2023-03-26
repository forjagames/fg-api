---
sidebar_position: 3
---

# Project Dashboard

## Dashboard
The project dashboard allows users to view project details, project status, services, and settings.

![Sections](/img/dashboard/project_dashboard_areas.png)

## Navigation Bar
* __Back to dashboard button (top-left)__: Closes the current page and returns to the [main dashboard](../sections).
* __Menu button (dots at top-right)__: Allows you to add new credentials or access to the project settings.
  Options:
  * __Add credential__: Add new credentials.
  * __Settings__: Project settings.
  * __Cancel__: Closes the menu.

## Sections
### Overview _Area_
#### Overview _Section_
In the Projects section, you can see an overview of your project's resource consumption, including the storage space reserved, the number of requests made, and the bandwidth consumed. This information can help you track your usage and optimize your project's performance and costs.

### Settings _Area_
#### Credentials _Section_
List of all credentials. You can view and edit a list of all credentials by clicking on them.

### Services _Area_
#### Services _Section_
This section allows you to view and manage all of your services. You can access each service's settings, logs, and usage data from here, as well as perform actions such as setting up your services. This centralized location simplifies the management process, allowing you to quickly and easily access all the tools you need to maintain your services.

## FAQ
### Overview area
#### 1. I reserved 1gb size in storage service, but in overview I see `1 GB used`. Why?
This happens because the reserved space on the drives counts as used, because you block a portion of the ssd from our servers.

#### 2. I reserved 1gb of storage, but in overview I see `1 GB used / 1.1 GB`. Why is the `1.1 GB` shown?
To understand this, there are two concepts to consider.

2.1. First, we use a partitioning system where storage space is reserved in 0.1 GB increments. For example, if you use 1 GB of space and then require an additional 10 MB, an extra 0.1 GB portion will be reserved for you to store those 10 MB. If you then require another 10 MB, it will use the remaining space in that reserved portion until it is used up.

2.2. Second, the storage size we display includes not only databases and drives that you create in our services, but also the space required by each entity associated with your projects, such as registered users, logs, products, etc. These entities typically require only a few bytes or kilobytes of storage.

Therefore, the additional space you see reserved is due to these entities, and it's normal to see a small amount of additional space shown in the overview.
