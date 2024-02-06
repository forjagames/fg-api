---
sidebar_position: 1
---

# Billing

In this section we will explain Nexus billing.

## Subpages

![Overview](/img/billing/billing_overview.png)

Navigate through the following subsections to efficiently manage your payments, and gain valuable insights into your project consumption.

### Navigation

- **Overview**: Explore your usage patterns, manage funds, review outstanding balances, and make informed decisions about your current plan and automatic payments.
- **Invoices**: Effortlessly view and settle your billing invoices directly from this section.
- **Orders**: Track the status of payment orders.
- **Analytics**: Tools for estimating costs and monitoring consumption trends, with visual charts providing a clear overview.
- **Subscription**: Discover available plans, explore plan changes or upgrades, and tailor your subscription to meet your evolving needs.

### Overview

Explore your usage patterns with daily and monthly consumption details for projects or your subscribed plan. Key actions include:

- **Balance:** Manage funds with options to add more.
- **Account Debt:** Review the status of outstanding balances.
- **Current Plan:** Details about your existing plan with the option to change.
- **Automatic Payments:** Enable or disable automatic payments using account credit.

### Invoices

View and manage your billing invoices conveniently.

### Orders

Track the status of payment orders, providing visibility into processing or rejection status.

### Analytics

Access tools for estimating costs and monitoring consumption trends. Charts include daily project consumption and cumulative consumption for the current month, with the ability to explore historical data from previous months.

### Subscription

Explore available plans and manage plan changes or upgrades.

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

