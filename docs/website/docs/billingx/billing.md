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

#### Refunds

To initiate the refund process, follow these steps:

1. Locate the order you wish to refund in the order history.

2. Click the "Refund" button in the action column associated with the order, and follow the steps.

Please note the following:

* Refund requests can be submitted up to a maximum of 15 days from the creation date of the order. After this period, refund requests will no longer be accepted.

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

> _**Disclaimer**: The calculation method described in this document, specifically regarding daily consumption, is provided for informational purposes and may be subject to updates or changes. While we strive for accuracy, the information presented here may not be 100% precise or reflect the current calculation methods. We recommend consulting the billing page or reaching out to our support team for the latest and most accurate information regarding cost calculations._

To ensure the calculation remains independent of the number of days in the month, we employ the following formula:

```
Precise Daily Cost (PDC) = (Total Monthly Cost of all Projects) * 12 / 365
```

This yields a decimal-rich result.

To round the value, we utilize the following formula:

```
Final Daily Cost (FDC) = Round(PDC * (10 ^ 8)) / (10 ^ 8)
```

For example, if the monthly cost of all your projects is $2.5:

```
PDC = 2.5 * 12 / 365 = 0.08219178082191780821917808219178
FDC = Round(PDC * (10 ^ 8)) / (10 ^ 8) = 8219178 / (10 ^ 8) = 0.08219178

Final Daily Cost = 0.08219178
```

At the end of the month, the monthly cost of each project is determined by summing the consumption measured on each day. Then, the total for each project is rounded to two decimal places, and added, to determine the total invoice cost.
