# Getting Started

The text of this page has been extracted from https://github.com/forjagames/fg-api. We recommend that you use this link for an up-to-date reference.

## Setup
Download `fg-api.js` or `fg-api.min.js` and use it into your website.

```html
<script src="./fg-api.min.js"></script>
```

## Setup (using CDN)
If you want to use a CDN, you have the next options:

### Development library (latest version)
```html
<script src="https://cdn.jsdelivr.net/gh/forjagames/fg-api@main/libs/js-browser/fg-api.min.js"></script>
```

### Specific version
```html
<script src="https://cdn.jsdelivr.net/gh/forjagames/fg-api@v0.0.1/libs/js-browser/fg-api.min.js"></script>
```

### Version v0.0.1 with integrity check
```html
<script src="https://cdn.jsdelivr.net/gh/forjagames/fg-api@0.0.1/libs/js-browser/fg-api.min.js" integrity="sha256-vUljAo1ZGXwlnal9PAOUEYPCJk1lSxVtRDB6VvjVz4E=" crossorigin="anonymous"></script>
```

## Getting Started (vanilla javascript)

We encourage you to run the code on a new javascript file.

### Step 1. Initialize the Engine.
The first step is to initialize the API. To do this, once you have done the Setup, you will have access to the global class called `fgApi`.

So, you need to call the `initialize` method, and fill it with your project credentials.

```javascript
var promise = fgApi.initialize('PUBLIC KEY', 'SECRET');
```

The `initialize` method can also take additional parameters.

Alternative:

```javascript
//  @param publicKey: string
//  @param secret: string
//  @param requestDriver: 'fetch' | 'axios'

const promise = fgApi.initialize('PUBLIC KEY', 'SECRET', { requestDriver: 'fetch' });
```

### Step 2. Subscribe to the initialization callback.
```javascript
promise.then(() => {
  
  //  Here you can call all services

});
```

Example: 

```javascript
promise.then(async () => {
  
  //  Logger service

  var logSession = new fgApi.LogSession();

  logSession.initialize();
  logSession.info("Log initialized");

  //  Identity service

  var identityManager = new fgApi.getInstance().getIdentitySessionManager();
  
  /**
   * You can call this function after click on a "login" button.
   * */
  function loginClick() {
    identityManager.openLoginWindow().then(async function () {
      //  Read user information
      const { user } = await identityManager.api.getLoggedProfile(['email']);

      //  Log
      console.log('User data', user);
      logSession.info('Login success');

    }).catch(err => {
      //  Log the error
      console.error(err);
      logSession.error('Login failed');
    });
  }

  /**
   * You can call this function after click on a "logout" button.
   * */
  function logoutClick() {
    identityManager.logout().finally(() => {
      //  Log
      console.log('Logged out');
      logSession.info('Logged out');
    });
  }

  /**
   * You can call this function after click on a "view profile" button.
   * */
  function showProfileClick() {
    if (identityManager.isLoggedIn) {
      identityManager.api.openProfileWindow();
    }
  }

  /**
   * You can call this function after click on a "change password" button.
   * */
  function changePasswordClick() {
    if (identityManager.isLoggedIn) {
      identityManager.api.openChangePasswordWindow();
    }
  }

  //  Leaderboards service

  /**
   * You can call this function after click on a "show highscores" button.
   * */
  async function listLeaderboards() {
    const leaderboardAPI = await fgApi.getInstance().getLeaderboard();
    const tables = await leaderboardAPI.listBoards();
    return tables;
  }

  //  Store service

  /**
   * You can call this function after click on a "open store" button.
   * */
  async function listProjectProducts() {
    /** @type {FgStoreAPI} */
    const storeAPI = await fgApi.getInstance().getStore();
    const projectProducts = await storeAPI.listProducts();
    return projectProducts;
  }
});
```