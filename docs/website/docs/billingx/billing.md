---
sidebar_position: 1
---

# Billing

In this section we will explain Nexus billing.

## Resources
- Bandwidth: bandwidth consumed by each request.
- Requests: calls to different services.
- Storage: storage used both in files by the [Storage Service](../services/storage.md) and in records in our databases.
- Store fee: fee charged for sales made within the blockchain [Store Service](../services/store.md).

## Services

The services are provided with a resource reservation system on demand.

Based on how projects are used, the Nexus system reserves resources so your project can work.

The total of the resources reserved is registered day by day. The costs are applied to the sum of the records since the last payment made.

## FAQ

### How do we calculate daily consumption?
For the calculation to be independent of the number of days in the month, we use the following formula:

```
Precise daily cost (PDC) = (Total monthly cost of all projects) * 12 / 365
```

Then, we get a number with a lot of decimals.

To round up the value, we use this last formula:

```
Final daily cost (FDC) = Round(PDC * (10 ^ 8)) / (10 ^ 8)
```

For example, if the monthly cost of all your projects is 2.5 dollars:

```
PDC = 2.5 * 12 / 365 = 0.08219178082191780821917808219178
FDC = Round(PDC * 10 ^ 8) / (10 ^ 8) = 8219178 / (10 ^ 8) = 0.08219178

Final daily cost = 0.08219178
```

At the end of the month, the monthly cost of each project is obtained by adding the consumption measured on each day. Then each project's total is rounded to two decimal places, and added, to determine the total cost of the invoice.

