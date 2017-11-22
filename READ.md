
### fetch example

```js

const fetch = require('node-fetch')

module.exports = async () => {
  const request = await fetch('https://api.github.com/emojis')
  const data = await request.json()

  return data
}

```

### bitcoin async with request-promise

```js

import request from 'request-promise';

const URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';

export default async function (req, res) {

  const price = await request(URL, { json: true });
  return `The price is ${price.last} as of ${price.timestamp}`;
}
```

### async example

```js
import fetch from "node-fetch";

export default async () => {
  const request = await fetch(
    "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD"
  );
  const price = await request.json();
  return `The price is ${price.last} as of ${price.timestamp}`;
};

```


```js

import fetch from 'node-fetch'

async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`
  const response = await fetch(url)
  const user = await response.json()
  console.log(user.name)
  console.log(user.location)
}

showGitHubUser('PerStirpes')


```

* async func called within a promise chain — returns a promise

```js
import fetch from 'node-fetch'

async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`
  const response = await fetch(url)
  return await response.json()
}

showGitHubUser('PerStirpes')
  .then(user => {
    console.log(user.name)
    console.log(user.location)
})

 ```   
*  try/catch blocks handling errors in async functions.

```js
import fetch from 'node-fetch'

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`
  const response = await fetch(url)
  const json = await response.json()

  if (response.status !== 200) throw Error(json.message)

  return json
}

async function showGitHubUser(handle) {
  try {
    const user = await fetchFromGitHub(`/users/${handle}`)

  } catch (err) {
    console.error(`Error: ${err.message}`)
  }
}

showGitHubUser('PerStirpes')
```

* Awaiting multiple promises either sequentially depending on where you put the await operators.

```js
import fetch from 'node-fetch'

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`
  const response = await fetch(url)
  return await response.json()
}

async function showUserAndRepos(handle) {
  const userPromise = await fetchFromGitHub(`/users/${handle}`)
  const reposPromise = await fetchFromGitHub(`/users/${handle}/repos`)

  const user = await userPromise
  const repos = await reposPromise

  console.log(user.name)
  console.log(`${repos.length} repos`)
}

showUserAndRepos('PerStirpes')
```
