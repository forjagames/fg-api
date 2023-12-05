---
sidebar_position: 2
---

# Identity

The `Identity Service` allows your users to authenticate their accounts through different mechanisms.

With this service you can also manage accounts, suspend, unsuspend, and delete them.

Users will be able to register, login, change their password, delete their account, view and edit their profile.

## Set up using Portal

### Login modes
- Closeable window mode.
- Redirect mode.

### Settings
- **E-mail Authentication**: Login with an e-mail address.
- **Wallet Authentication**: Login with a [Metamask](../misc/glossary.md#Metamask) [Wallet](../misc/glossary.md#Wallet).
- **Success URL**: Return URL for successfull cases. It's required if you are working in redirect mode.
- **Fail URL**: Return URL for unsuccessfull cases. It's required if you are working in redirect mode.
- **Sign Up**: Shows or hides the sign up option.
- **Sign Up URL** _(optional)_: Allows you to use a custom sign up URL. It only works in redirect mode.
- **Guest Accounts**: The Guest Accounts feature allows users to access your project without the need to register their personal information. 
When enabled, a temporary account is created for the user to access the platform's features. 
If you have `wallet authentication` enabled, the guest accounts will be automatically created when users log in with their wallet and don't have an account. 
Otherwise, users can manually create a guest account by clicking on the 'Create a guest account' button. 
Please note that Guest Accounts are unconfirmed and temporary, and we recommend encouraging users to confirm their accounts for data permanence.
- **Terms URL**: Your project terms & conditions.
- **Privacy URL**: Your project privacy policy.

### Front-End
- **Open Page**: Opens the login website. In order to view your `identity page`, you need to select a credential and use your credential secret.
- **Customize Style**: It allows you to change the style of your `identity page`, by writing css code.

Customized style example:

```css
@import url(https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap);
body,
html {
  background-color: #191919!important;
  font-family: 'Yusei Magic',sans-serif
}
* {
  font-family: 'Yusei Magic',sans-serif
}
#terms-text a,
#terms-text span,
h3,
label {
  color: #ecdbba!important;
  text-shadow: 1px 1px 2px #000
}
button {
  text-shadow: 1px 1px 2px #000;
  transition: all .3s ease-in-out
}
button.bg-transparent {
  text-shadow: unset
}
#pages-container > div:first-child {
  background-color: #2d4263!important;
  box-shadow: 0 0 10px 2px #fff
}
.text-red-600 {
  color: #c84b31
}
.bg-yellow-600 {
  background-color: #de834d!important
}
.bg-blue-600 {
  background-color: #406882!important
}
.bg-gray-500 {
  background-color: #6b7280!important
}
button:hover {
  opacity: .8
}
```

## Security
* Captcha.
* E-mail confirmation.
* Field locks: Fields with "field lock" (`username`) when modified are blocked for a certain amount of time, to avoid problems of a different nature.
* Password validation: The password requires a minimum of 8 characters, and does not have to be included in the list of common passwords (listed with the top 10000 most used passwords). Password is stored as a hashusing the PBKDF2 algorithm.
* Temporary account blocking: If the account has many failed login attempts, the account is temporarily locked to prevent unwanted access.
* Wallet confirmation: The owner of the wallet is confirmed by signing a value linked to his/her account.

## Account Types
* **Guest Account.** Guest Accounts are created without requiring any personal information from the user. These accounts are temporary, and if the user logs out, they might lose access to these accounts. They are designed to allow users to play without the need for registration; they can simply click a button to get started. Users have the option to convert these accounts into permanent ones at any time, as long as they don't close or lose the session.
* **Unconfirmed Account.** Unconfirmed Accounts are permanent accounts that are created when users register but have not yet completed the confirmation process. The confirmation process typically involves verifying ownership of a phone number, email address, or Blockchain Wallet. Until the confirmation is complete, the account remains in an unconfirmed state.
* **Confirmed Account.** Confirmed Accounts are fully verified and permanent accounts. Users with Confirmed Accounts have successfully completed the confirmation process, confirming ownership of their phone number, email address, or Blockchain Wallet. These accounts offer data permanence and full access to the platform's features.

## Account Deletion
* Users have the option to delete their accounts.
* To do so, they must enter their password and successfully complete a captcha verification. Once this is done, the account will be deactivated for 30 days. 
* If the user does not log in during this time, the account will be permanently deleted.
* For guest accounts without a password, deletion is immediate.
* If users wants to cancel the deletion, they can log in to their account before the 30-day period ends, and the deletion will be automatically cancelled.
