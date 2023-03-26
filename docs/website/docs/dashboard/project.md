---
sidebar_position: 3
---

# Project Dashboard

The project dashboard allows users to view project details, project status, services, and settings.

![Sections](/img/dashboard/project_dashboard_areas.png)

# FAQ
## 1. I reserved 1gb size in storage service, but in overview I see `1 GB used`. Why?
This happens because the reserved space on the drives counts as used, because you block a portion of the ssd from our servers.

## 2. I reserved 1gb of storage, but in overview I see `1 GB used / 1.1 GB`. Why is the `1.1 GB` shown?
To understand this, you will need to understand two concepts.

2.1. The first is partition concept. Each time you require space, it is reserved in 0.1 GB modules. That is, if you used 1GB and for some reason you require an additional 10MB, an extra 0.1GB portion will be reserved for you to store those 10MB. If it then requires another 10 MB, it will use the remaining space in that reserved portion until it is used up.

2.2. The second is how we charge the storage. The storage size includes databases (for example those that you create in KevinDB), drives that you create in the `Storage Service`, but also the space required by each entity associated with your projects (for example, the users registered in `Identity Service`, the `Logger Service` logs, the `Store Service` products, etc). These additional entities typically require a few bytes of storage (or kilobytes, depending on the amount).

For this reason, a small additional space is reserved.
