
### fetch example

```js

const fetch = require('node-fetch')

module.exports = async () => {
  const request = await fetch("https://api.github.com/emojis")
  const data = await request.json()

  return data
}

```

### bitcoin async

```js

import request from 'request-promise';

const URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';

export default async function (req, res) {

  const price = await request(URL, { json: true });
  return `The price is ${price.last} as of ${price.timestamp}`;
}
```