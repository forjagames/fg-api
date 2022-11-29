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
- **Wallet Authentication**: Login with a [Metamask](../misc/glossary.md) wallet.
- **Success URL**: Return URL for successfull cases. It's required if you are working in redirect mode.
- **Fail URL**: Return URL for unsuccessfull cases. It's required if you are working in redirect mode.
- **Sign Up**: Shows or hides the sign up option.
- **Sign Up URL** _(optional)_: Allows you to use a custom sign up URL. It only works in redirect mode.
- **Guest Accounts**: Automatically creates an (unconfirmed) account if it doesn't exists and signs in to it. It only works if Sign UP is enabled.
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
* Captcha
* E-mail confirmation
* Field locks: Fields with "field lock" (`username`) when modified are blocked for a certain amount of time, to avoid problems of a different nature.
* Password validation: The password requires a minimum of 8 characters, and does not have to be included in the list of common passwords (listed with the top 10000 most used passwords). Password is stored as a hashusing the PBKDF2 algorithm.
* Temporary account blocking: If the account has many failed login attempts, the account is temporarily locked to prevent unwanted access.
* Wallet confirmation: The owner of the wallet is confirmed by signing a value linked to his/her account.

