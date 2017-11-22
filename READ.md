
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

const fetch = require("node-fetch");

async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const user = await response.json();
    console.log(user.name);
    console.log(user.location);
}

showGitHubUser("PerStirpes");

```

* async func called within a promise chain — returns a promise

```js 
const fetch = require("node-fetch");

async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
}

showGitHubUser("PerStirpes")
    .then(user => {
        console.log(user.name);
        console.log(user.location);
    });

 ```   
* shows how regular control flow statements such as try/catch blocks can be used to properly handle errors in asynchronous functions. Oftentimes, the resulting code is easier to read than complex promise chains with .catch() methods.

```js
 const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    const json = await response.json();

    if (response.status !== 200)
        throw Error(json.message);

    return json;
}

async function showGitHubUser(handle) {
    try {
        const user = await fetchFromGitHub(`/users/${handle}`);
        console.log(user.name);
        console.log(user.location);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

showGitHubUser("PerStirpes");
```

* You can await multiple promises either sequentially or concurrently, depending on where you put the await operators. This lesson shows both approaches and compares the performance characteristics.

```js
const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function showUserAndRepos(handle) {
    const userPromise = fetchFromGitHub(`/users/${handle}`);
    const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

showUserAndRepos("PerStirpes");
```