# Mobile User Agent

A Node.js module to generate random mobile user agent strings for Android (>= 10) and iOS (>= 17).

## Installation

```bash
npm i mobile-user-agent
```

## Usage
```javascript
const mobileUserAgent = require('mobile-user-agent');

// Get a random mobile user agent for either Android or iOS
const randomUA = mobileUserAgent();
console.log(randomUA);

// Get a random Android user agent
const androidUA = mobileUserAgent('android');
console.log(androidUA);

// Get a random iOS user agent
const iosUA = mobileUserAgent('ios');
console.log(iosUA);
```
## API
---

### `mobileUserAgent(category = 'Random')`

-   `category` (opsional): A string specifying the desired operating system. Can be `'android'`, `'ios'`, or `'Random'` (default). If set to `'Random'` or any other value, it will return a user agent for either Android or iOS randomly.

-   Returns: A string containing a random mobile user agent.

### Supported Operating Systems and Browsers
----------------------------------------

-   **Android:** Versions >= 10, Chrome, Firefox
-   **iOS:** Versions >= 17, Safari, Chrome

License
-------

[MIT](https://github.com/cmalf/mobile-user-agent?tab=MIT-1-ov-file)
