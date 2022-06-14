---
sidebar_position: 5
---

# Store

The `Store Service` allows you to sell virtual goods on [🔗BNB Smart Chain](https://academy.binance.com/en/) _(also known as Binance Smart Chain)_ and [🔗Polygon](https://polygon.technology/) easily and safely.

## Requirements (to setup your Store)
* [Metamask](../misc/glossary.md#metamask).
* One or two wallets on a `Supported Blockchain`. _[🔗How to connect a wallet](https://docs.pancakeswap.finance/get-started/connection-guide)._

## Supported Cryptocurrencies
* BUSD (Only on _BNB Smart Chain_) - [🔗Binance USD](https://coinmarketcap.com/currencies/binance-usd)
* USDT - [🔗Tether](https://coinmarketcap.com/currencies/tether)
* USDC - [🔗USD Coin](https://coinmarketcap.com/currencies/usd-coin)
* DAI - [🔗Dai](https://coinmarketcap.com/currencies/multi-collateral-dai)

## Supported Blockchains
* BNB Smart Chain
* Polygon (in the future)

## Sections

### Admin _Section_
In this section you will find the action to connect to your wallet.

### Project _Area_
#### Project _Section_
In this section you can see the status of the project in the selected blockchain.

### Payments _Area_
#### Attached Wallets _Section_
This section allows you to link blockchain wallets to the Store. The action of linking the wallets allows them to be used to receive payments in the different blockchains.

### Products _Area_
#### Products _Section_
In this section you can manage the virtual goods and link them to the different blockchains.

## Store Setup
### I. Enable your Project Store
1. Enable the Store for the selected project.<br />
![Step11](/img/store/store_setup_step_enable.png)<br />
2. Fill the `Store Service settings` and save it.<br />
![Step12](/img/store/store_setup_step_fill.png)<br />
   - **Success URL**: Return URL for successfull cases.
   - **Fail URL**: Return URL for unsuccessfull cases.
   - **Terms URL**: Your project terms & conditions.
   - **Privacy URL**: Your project privacy policy.

3. Read and confirm the `Terms & Conditions`, and the `Disclaimer`.
4. Go to `Attached Wallets` section, and attach a wallet.
5. Connect your `Blockchain Wallet`.
6. In the `Project` section, `Enable and Sync` your project.
![Step16](/img/store/store_setup_step_sync.png)<br />

### II. Publish your Product
1. Go to `Products` section, and add a new product.<br />
![Step21](/img/store/store_setup_step_add_product.png)<br />
   - **Name**: Visible name of the product. _It can be changed._
   - **Cost**: Cost in USD. _It can be changed, but may require resynchronization_.
   - **Quantifiable**: If a product is quantifiable, the user can have one or more units. _Example: apples, glasses, glasses_.
If a product is not quantifiable, your purchase is unique per user, and is forever. _Example: "no ads"._ _It cannot be changed._
   - **Consumable**: A consumable product is one that once purchased by the customer, when using it, he loses a unit. _Example: if the person has 3 apples and eats one (consumes one), 2 remain._ _It can be changed._
   - **Transferable**: Allows users to exchange the product (using a [ERC1155](../misc/glossary.md#ERC1155) [Smart Contract](../misc/glossary.md#smart-contract)). _It cannot be changed._
2. Open the product page.
3. In the `Blockchain` section of your product page, set its `Initial Stock` (if it is stockable) and `Link` it to the Blockchain.<br />
![Step23](/img/store/store_setup_step_sync_product.png)<br />
4. Customize your product page (icon, urls, css styles).<br />
![Step24](/img/store/store_setup_step_preview_product.png)<br />
5. When you are ready, `Publish` your product.
