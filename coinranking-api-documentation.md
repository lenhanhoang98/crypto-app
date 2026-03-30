# Coinranking API Documentation

This simple documentation shows you how to get a list of coins, crypto prices and much more crypto market data. Explore all endpoints and learn how to add them to your website or app.

Base url:
```
<span class="link">https://api.coinranking.com/v2</span>
<copy-button text-to-copy="https://api.coinranking.com/v2" button-text='Copy' :light="true"></copy-button>
```

## Getting started
Follow the next steps to get started with Coinranking API. Happy building!

## 1. Create an account

To get started with Coinranking API, you first need to [create an account](https://account.coinranking.com/create-developer-account). Sign up for free with your name and email address.

## 2. Your dashboard

After signing up you will directly get access to your own [dashboard](https://account.coinranking.com/dashboard).

Here you find your API key and your current subscription plan, which is by default the [free one](https://coinranking.com/api/pricing).

The dashboard also contains:

 * Your monthly API usage and how much requests you have left
 * Account information
 * Billing details

## 3. Your API key
On the [overview page](https://account.coinranking.com/dashboard) of your dashboard, you’ll find your API key. This key is your unique identifier allowing you to make API calls.

Go to [authentication](#authentication) to read how to start using your API key.

## 4. Authentication

The Coinranking API uses API keys to authenticate requests. You can only do a very limited amount of requests without authenticating. Read on to learn more about our [rate-limits](/api/documentation/rate-limit).

All API requests must be made over HTTPS. Calls made over plain HTTP will redirect to HTTPS.

Example:
```bash
curl https://api.coinranking.com/v2/coins \
  -H x-access-token: 53a0b0a7e4f2fa59519e4
```

## 5. Get data from endpoints
Well done, you set up your authentication! Let's get some data from an endpoint. You could start by getting [data about Bitcoin.](/api/documentation/coins/coin-details)

For example, try this request in Javascript to fetch the latest data for Bitcoin:
```javascript
const options = {
  headers: {
    'Content-Type': 'application/json',
    // 'x-access-token': 'your-access-token-here',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

##  Need help?
Check out the [FAQ](https://support.coinranking.com/category/60-coinranking-api). Or try our API first using the [Playground](/api/documentation/playground).

---

# Rate limits
The amount of requests you can do before you run into our rate limit depends on your subscription.
With our free API key, you can make 10K requests per month. If you need more you can
[upgrade very easily](https://coinranking.com/api/pricing).

Without a key, you can still make a very limited amount of requests, so you can quickly test if our
endpoints fit your needs, or debug a little bit during development. The unauthenticated requests
are not guaranteed to work, so we advise you to get a key to not unexpectedly run into the rate
limiter.

## Types of rate limiting

We have rate limits for several time intervals. We protect against burst requests by limiting the
free keys to about five requests per second. Our free key is limited to 10K requests per month.
Unauthenticated requests are limited much more per month, and have limits per minute and hour as
well. The current unauthenticated rate limits might change in the future to whatever we see fit; for
guaranteed rate limits [get one of our free keys](https://account.coinranking.com/create-developer-account).

## Rate limit response headers

Every request you do returns information about the rate-limit, so your application can adapt before reaching the limit.

| Header                       | Description                                                                                                                                              |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-RateLimit-Limit-Second     | <p>The maximum amount of requests in a second</p>                                                                                                        |
| X-RateLimit-Limit-Minute     | <p>The maximum amount of requests in a minute</p>                                                                                                        |
| X-RateLimit-Limit-Hour       | <p>The maximum amount of requests in an hour</p>                                                                                                         |
| X-RateLimit-Limit-Month      | <p>The maximum amount of requests in a month</p>                                                                                                         |
| X-RateLimit-Remaining-Second | <p>The amount of requests you can still do in a second</p>                                                                                               |
| X-RateLimit-Remaining-Minute | <p>The amount of requests you can still do in a minute</p>                                                                                               |
| X-RateLimit-Remaining-Hour   | <p>The amount of requests you can still do in a hour</p>                                                                                                 |
| X-RateLimit-Remaining-Month  | <p>The amount of requests you can still do in an hour</p>                                                                                                |
| RateLimit-Limit              | <p>This is the rate-limit that is the first to run out. E.g. when you can still do 10000 requests this month, but only 5 this minute, it will show 5</p> |
| RateLimit-Reset              | <p>This will tell you the amount of seconds remain until the quota of your lowest rate-limit will be restored to its maximum</p>                        |
| RateLimit-Remaining          | <p>The amount of requests remaining for the lowest remaining limit</p>                                                                                   |

---

<div class="rounded p-3 info-container">
  This search function is made with our <a href='https://coinranking.com/api/documentation/search-suggestions'> Search suggestions endpoint</a>.
</div>

# Find UUIDs & slugs

<p>Find the UUID or slug for any coin, fiat currency, asset, exchange, market, or category.</p>

<search-uuid-component></search-uuid-component>

---

# Coins

Coins are all the cryptocurrencies listed with us, like Bitcoin, Ethereum, Dogecoin, and thousands
more. Do you miss a particular coin you’d like to see in the API? Submit it via our
<a target=_blank href="https://docs.google.com/forms/d/e/1FAIpQLSdbFFCrNgy_wD04ahdpxOkROhQCTfI4Rlt5oKD0m9FdL1UbrQ/viewform">listing form</a>
and we’ll add it within two working days.

## Endpoints

- [List of coins](/api/documentation/coins/coins)</br> If you need to fetch multiple coins, this is the endpoint you need. It provides the most crucial data of coins in a handy filterable list.
- [Trending coins](/api/documentation/coins/trending-coins)</br> Returns a list of trending coins  based on user engagement and popularity.
- [Coin details](/api/documentation/coins/coin-details)<br> When you need data about a specific coin, you need our coin details endpoint. This provides more specific data then the list endpoint, such as links to socials and supply information.
- [Coin price](/api/documentation/coins/coin-price)<br> Simple endpoint, to fetch a single price point for a coin. You can specify a timestamp to get the price for some earlier date.
- [Coin price history](/api/documentation/coins/coin-price-history)<br> Gets you a series of pricepoints going back in time a day, a year or some other period of time. We use this enpdoint ourselves for the charts on coinranking.com.
- [Coin fiat prices](/api/documentation/coins/coin-fiat-prices)<br> Provides real-time cryptocurrency pricing data, converted into all supported fiat currencies, including USD, EUR, GBP, and more.
- [Coin OHLCV](/api/documentation/coins/coin-ohlcv)<br> Similar to coin price history, but with OHLCV (Open High Low Close Volume) data, which is often used to make candlestick charts.
- [Coin exchanges listings](/api/documentation/coins/coin-exchange-listings)<br> Returns a list of exchanges for a specific coin. Meaning that if you want to know what exchanges a coin is being traded on, this endpoint helps you out.
- [Coin market listings](/api/documentation/coins/coin-market-listings)<br> Similar to coin exchange listings, but a level deeper; you can find what markets a coin is trade on.
- [Coin blockchains](/api/documentation/coins/coin-blockchains)<br> DEPRECATED: this endpoint is meant to find the blockchain or blockchains a coin is minted on.
- [Coin supply modifiers](/api/documentation/coins/coin-supply-modifiers)<br> The market cap for a coin is calculated by the price of a single unit (e.g. 1 BTC) multiplied by the "circulating supply". The circulating part of the supply is the amount of coins that are not only minted, but also in circulation (not locked up in some wallet accessible to noone). The wallets accessible to noone are what we call supply modifiers, and their balances are subtracted from the total supply.
- [Coin market cap history](/api/documentation/coins/coin-market-cap-history)<br> The market cap for every coin fluctuates throughout time by differing supply and price values. You can find the history in this endpoint.
- [Coin rank history](/api/documentation/coins/coin-rank-history)<br> How a coin ranked throughout time.
- [Coin supply history](/api/documentation/coins/coin-supply-history)<br> The supply for a coin rises when new coins are mined, and decreases when they are burned or otherwise rendered useless (this last part only counts for circulating supply, not total). You can track the history of a coins supply amount with this enpdoint.

---

# Pagination

<p>Most endpoints that return lists of items support pagination. You can use pagination to retrieve results in smaller chunks, which is especially useful when working with large datasets.</p>

## Pagination methods

The Coinranking API supports two pagination methods:

### 1. Offset-based pagination (legacy)

The traditional way to paginate using `offset` and `limit` parameters:

```
...coins?limit=50&offset=100
```

This method works well for small datasets but becomes inefficient for large offsets, as the database still needs to scan through all the skipped rows.

### 2. Cursor-based pagination (recommended)

Cursor-based pagination uses an opaque cursor string to mark your position in the result set:

```
...coins?limit=50&cursor=eyJ0IjoxLCJyIjoxMjM0NTY3ODkwLC...
```

This method is more efficient and provides consistent results even when data changes between requests.

## How cursor pagination works

### Navigating forward

1. **First request**: Make a request without a cursor to get the first page of results
2. **Get the cursor**: The response includes a `pagination` object with a `nextCursor` value
3. **Next request**: Use the `nextCursor` value as the `cursor` parameter for the next page
4. **Repeat**: Continue until `hasNextPage` is `false` or `nextCursor` is `null`

### Navigating backward

You can also navigate backward through results using the `previousCursor`:

1. **Check availability**: The response includes `hasPreviousPage` and `previousCursor` fields
2. **Go back**: Use the `previousCursor` value as the `cursor` parameter to return to the previous page
3. **Repeat**: Continue until `hasPreviousPage` is `false` or `previousCursor` is `null`

### Example flow

**First request:**
```
GET /v2/coins?limit=10
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "coins": [...]
  },
  "pagination": {
    "limit": 10,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextCursor": "eyJ0IjoxLCJyIjoxMjM0NTY3ODkwLC...",
    "previousCursor": null
  }
}
```

**Second request (forward):**
```
GET /v2/coins?limit=10&cursor=eyJ0IjoxLCJyIjoxMjM0NTY3ODkwLC...
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "coins": [...]
  },
  "pagination": {
    "limit": 10,
    "hasNextPage": true,
    "hasPreviousPage": true,
    "nextCursor": "eyJ0IjoyLCJyIjo5ODc2NTQzMjEwLC...",
    "previousCursor": "eyJ0IjoxLCJyIjoxMjM0NTY3ODkwLC..."
  }
}
```

**Go back (backward):**
```
GET /v2/coins?limit=10&cursor=eyJ0IjoxLCJyIjoxMjM0NTY3ODkwLC...
```

This returns you to the previous page of results.

## Pagination response object

All paginated endpoints return a `pagination` object in their response:

| Property | Type | Description |
|----------|------|-------------|
| `limit` | Number | The number of items per page (as requested) |
| `hasNextPage` | Boolean | Whether there are more results available after the current page |
| `hasPreviousPage` | Boolean | Whether there are results available before the current page |
| `nextCursor` | String/null | The cursor to use for the next page, or `null` if there are no more results |
| `previousCursor` | String/null | The cursor to use for the previous page, or `null` if on the first page |

## Important notes

<div class="rounded p-3 info-container mb-3">
  <strong>Cursor consistency:</strong> The cursor is tied to the <code>orderBy</code> and <code>orderDirection</code> parameters used in the original request. If you change these parameters, you must start pagination from the beginning without a cursor.
</div>

<div class="rounded p-3 info-container mb-3">
  <strong>No mixing:</strong> You cannot use <code>cursor</code> and <code>offset</code> parameters together. If both are provided, you will receive a <code>PAGINATION_CONFLICT</code> error.
</div>

<div class="rounded p-3 info-container mb-3">
  <strong>Cursor expiration:</strong> Cursors do not expire, but they may become invalid if the underlying data structure changes significantly. In such cases, start pagination from the beginning.
</div>

## Error responses

| Error | Description |
|-------|-------------|
| `INVALID_CURSOR` | The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor. |
| `CURSOR_MISMATCH` | The cursor was created with different `orderBy` or `orderDirection` parameters than the current request. Either match the original parameters or start pagination from the beginning. |
| `PAGINATION_CONFLICT` | Both `cursor` and `offset` parameters were provided. Use only one pagination method per request. |

## Supported endpoints

Cursor-based pagination is available on the following endpoints:

**Coins:**
- [Get list of coins](/api/documentation/coins/coins)
- [Get coin market listings](/api/documentation/coins/coin-market-listings)
- [Get coin exchange listings](/api/documentation/coins/coin-exchange-listings)
- [Get coin blockchains](/api/documentation/coins/coin-blockchains)

**Exchanges:**
- [Get list of exchanges](/api/documentation/exchanges/exchanges)
- [Get exchange coin listings](/api/documentation/exchanges/exchange-coin-listings)
- [Get exchange list of markets](/api/documentation/exchanges/exchange-list-of-markets)

**Markets:**
- [Get list of markets](/api/documentation/markets/markets)

**Tags:**
- [Get list of tags](/api/documentation/tags/tags)

**Other:**
- [Get reference currencies](/api/documentation/reference-currencies)
- [Get global trading volume history](/api/documentation/stats/global-trading-volume-history)

---

# List of coins

Get a list of coins. On Coinranking, we use this endpoint on our
<a href="https://coinranking.com/">home page</a>.

Be aware that by default the list includes coins with
<a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">tier 1, 2 and 3</a>.
This results in little-known coins with large market caps ranking on top. If you only want to show
'quality coins', then you should filter on tier 1.

Coins are by default ordered by their rank, which - somewhat simplified - means that they are
ordered on market cap. See more details about are ranking in our <a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">ranking methodology</a>. The response not only returns a list of coins, but also statistics regarding
the requested list, such as the volume in the last 24 hours. If you need all our coins at once,
check out our <a href="/api/documentation/bulk">bulk endpoint</a>.

```
<span class="link">https://api.coinranking.com/v2<strong>/coins</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coins" button-text='Copy' :light="true"></copy-button>
```

## Query parameters

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span><br>
        </br>
        <span class="docs-badge">Example:</span><br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          By setting the timePeriod the change percentage and sparkline in the response will be
          calculated accordingly.
        </p>
        <p>The maximum timePeriod you can use is <code>5y</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value:</span>
        <span class="docs-badge__item">24h</span>
        <br><span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        </br></br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?timePeriod=7d">
            https://api.coinranking.com/v2/coins?timePeriod=7d
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?timePeriod=7d"></copy-button>
      </td>
    </tr>
    <tr>
      <td>symbols <span class="optional">(optional)</span> <code>Array</code></td><td>
        <p>
          Symbols to filter the list on. Do note that symbols are not unique. Should you need a
          specific coin, then you should use the UUIDs filter.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?symbols[]=BTC&symbols[]=ETH&symbols[]=XRP">
            https://api.coinranking.com/v2/coins?symbols[]=BTC&symbols[]=ETH&symbols[]=XRP
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?symbols[]=BTC&symbols[]=ETH&symbols[]=XRP"></copy-button>
      </td>
    </tr>
    <tr>
      <td>contractAddresses <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>
          Contract Addresses to filter the list on. These are the addresses currencies get on their
          respective blockchains. Smart Contract Addresses are a common name for addresses on
          blockchains, but some chains might call them AssetID, Token Address or something else. We
          use the term Contract Address to cover all these cases. Note that tokens might be issued
          on several blockchains, so the same token might have several addresses
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?contractAddresses[]=0xdac17f958d2ee523a2206206994597c13d831ec7&contractAddresses[]=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48">
            https://api.coinranking.com/v2/coins?contractAddresses[]=0xdac17f958d2ee523a2206206994597c13d831ec7&contractAddresses[]=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?contractAddresses[]=0xdac17f958d2ee523a2206206994597c13d831ec7&contractAddresses[]=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"></copy-button>
      </td>
    </tr>
    <tr>
      <td>blockchains <span class="optional">(optional)</span> <code>Array</code></td><td>
        <p>
          Blockchains to filter the list on. With this filter you can for example fetch only coins
          that are minted on the Ethereum blockchain. You can filter on multiple blockchains at
          once.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?blockchains[]=ethereum&blockchains[]=eos">
            https://api.coinranking.com/v2/coins?blockchains[]=ethereum&blockchains[]=eos
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?blockchains[]=ethereum&blockchains[]=eos"></copy-button>
      </td>
    </tr>
    <tr>
      <td>uuids <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>
          UUIDs to filter the list on. If you know the UUIDs of the coins you want to fetch, you
          can use this filter to get the specific coins.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?uuids[]=razxDUgYGNAdQ&uuids[]=Qwsogvtv82FCd">
            https://api.coinranking.com/v2/coins?uuids[]=razxDUgYGNAdQ&uuids[]=Qwsogvtv82FCd
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?uuids[]=razxDUgYGNAdQ&uuids[]=Qwsogvtv82FCd"></copy-button>
      </td>
    </tr>
    <tr>
      <td>tiers <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>
          We separate coins into three tiers. With this parameter you can filter coins on the tiers
          you need. Read more about our tiers in our
          <a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">ranking methodology</a>.
        </p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1</span>
        <span class="docs-badge__item">2</span>
        <span class="docs-badge__item">3</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?tiers[]=1&tiers[]=2">
            https://api.coinranking.com/v2/coins?tiers[]=1&tiers[]=2
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?tiers[]=1&tiers[]=2"></copy-button>
      </td>
    </tr>
    <tr>
      <td>tags <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>Tags to filter the list on.</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">defi</span>
        <span class="docs-badge__item">stablecoin</span>
        <span class="docs-badge__item">nft</span>
        <span class="docs-badge__item">dex</span>
        <span class="docs-badge__item">exchange</span>
        <span class="docs-badge__item">staking</span>
        <span class="docs-badge__item">dao</span>
        <span class="docs-badge__item">meme</span>
        <span class="docs-badge__item">privacy</span>
        <span class="docs-badge__item">metaverse</span>
        <span class="docs-badge__item">gaming</span>
        <span class="docs-badge__item">wrapped</span>
        <span class="docs-badge__item">layer-1</span>
        <span class="docs-badge__item">layer-2</span>
        <span class="docs-badge__item">fan-token</span>
        <span class="docs-badge__item">football-club</span>
        <span class="docs-badge__item">web3</span>
        <span class="docs-badge__item">social</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?tags[]=defi">
            https://api.coinranking.com/v2/coins?tags[]=defi
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?tags[]=defi"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Index to order by. All sortings excluding listedAt still take our different tiers of coins
          into account, read more about it in our
          <a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">ranking methodology</a>.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">marketCap</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">price</span>
        <span class="docs-badge__item">marketCap</span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">change</span>
        <span class="docs-badge__item">listedAt</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?orderBy=price">
            https://api.coinranking.com/v2/coins?orderBy=price
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?orderBy=price"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Applies direction to the orderBy query, which can be in ascending or descending order.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?orderDirection=asc">
            https://api.coinranking.com/v2/coins?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span>
        <br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?limit=10">
            https://api.coinranking.com/v2/coins?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?offset=50">
            https://api.coinranking.com/v2/coins?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/coins?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Code examples

<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&symbols[]=BTC&symbols[]=ETH&symbols[]=XRP&limit=50&offset=0' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&symbols[]=BTC&symbols[]=ETH&symbols[]=XRP&limit=50&offset=0', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&symbols[]=BTC&symbols[]=ETH&symbols[]=XRP&limit=50&offset=0",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&symbols[]=BTC&symbols[]=ETH&symbols[]=XRP&limit=50&offset=0", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response

```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "total": 2273,
      "totalCoins": 971310,
      "totalMarkets": 50511,
      "totalExchanges": 182,
      "totalMarketCap": "1376",
      "total24hVolume": "44245860077"
    },
    "coins": [
      {
        "uuid": "Qwsogvtv82FCd",
        "symbol": "BTC",
        "name": "Bitcoin",
        "color": "#f7931A",
        "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        "marketCap": "1779096815287",
        "price": "89086.46601791566",
        "listedAt": 1279324800,
        "tier": 1,
        "change": "1.57",
        "rank": 1,
        "sparkline": [
          "87718.8185434618",
          "87831.39433828383",
          "87836.10177573239",
          "87912.74493308847",
          "87977.64124779409",
          "87954.06958585513",
          "87902.17541952957",
          "87991.8873160424",
          "87954.18221848007",
          "88217.27415928514",
          "88182.16973342402",
          "88208.09873175608",
          "88309.85722338042",
          "88336.9764258353",
          "88518.80305035008",
          "88722.70658713221",
          "88724.27935862185",
          "88686.60718391473",
          "88494.28083727155",
          "88867.71449962979",
          "88805.76669118676",
          "88678.39255061348",
          "88899.3524002099",
          "88933.14664142062"
        ],
        "allTimeHigh": {
          "price": "126077.50026839285",
          "timestamp": 1759777080
        },
        "lowVolume": false,
        "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        "24hVolume": "14545165374",
        "btcPrice": "1",
        "contractAddresses": [],
        "isWrappedTrustless": false,
        "wrappedTo": null
      },
      {
        "uuid": "razxDUgYGNAdQ",
        "symbol": "ETH",
        "name": "Ethereum",
        "color": "#3C3C3D",
        "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        "marketCap": "365416480388",
        "price": "3027.6051673910147",
        "listedAt": 1438905600,
        "tier": 1,
        "change": "1.58",
        "rank": 2,
        "sparkline": [
          "2980.7093448538035",
          "2984.3177952979577",
          "2983.574966964519",
          "2986.9614020462695",
          "2986.431020097484",
          "2985.605255653924",
          "2981.6559156798207",
          "2985.8651716513355",
          "2984.352437768829",
          "2989.8717819210347",
          "2989.320200751151",
          "2990.589780403958",
          "2991.566939536146",
          "2990.4993421748177",
          "2992.936561567808",
          "3003.46376443117",
          "3002.5348825667547",
          "3003.5666225838786",
          "2998.349421388807",
          "3015.7495392109827",
          "3017.700562537228",
          "3013.3112528163515",
          "3023.711269385133",
          "3024.369021905459"
        ],
        "allTimeHigh": {
          "price": "4945.666895424594",
          "timestamp": 1756062720
        },
        "lowVolume": false,
        "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
        "24hVolume": "9602051748",
        "btcPrice": "0.03398501818202274",
        "contractAddresses": [],
        "isWrappedTrustless": false,
        "wrappedTo": null
      }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextCursor": "eyJ0IjoxLCJyIjoyLCJ1IjoiSElWc1JjR0trUEZ0VyIsIm8iOiJtYXJrZXRDYXAiLCJkIjoiZGVzYyJ9",
    "previousCursor": null
  }
}
```

#### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span> <code>Object</code></td>
      <td>
        <p>
          A series of statistics regarding the requested list. Note that the stats its scope
          includes coins outside the limit. E.g. the response of a query with a limit of 50 coins
          returns 50 coins (obviously), while the stats depicts the amount of coins available, 24
          hour volume, etc. without this limit, which may be a much higher number.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> <code>Number</code></td>
      <td><p>Total number of coins within the query</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.totalCoins</span> <code>Number</code></td>
      <td><p>Total number of coins without the filters</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.totalMarkets</span> <code>Number</code></td>
      <td><p>Total number of markets without the filters</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.totalExchanges</span> <code>Number</code></td>
      <td><p>Total number of exchanges without the filters</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.totalMarketCap</span> <code>String</code></td>
      <td><p>The market capital of coins without the filters</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total24hVolume</span> <code>String</code></td>
      <td><p>The volume over the last 24 hours of coins without the filters</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span> <code>Object[]</code></td>
      <td><p>List of coins</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.uuid</span> <code>String</code></td>
      <td><p>UUID of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.symbol</span> <code>String</code></td>
      <td><p>Currency symbol</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.name</span> <code>String</code></td>
      <td><p>Name of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.color</span> <code>String</code></td>
      <td><p>Main HEX color of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.iconUrl</span> <code>String</code></td>
      <td><p>Location of the icon</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.24hVolume</span> <code>String</code></td>
      <td><p>24h trade volume</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.marketCap</span> <code>String</code></td>
      <td><p>Market capitalization. Price times circulating supply</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.price</span> <code>String</code></td>
      <td><p>Price of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.btcPrice</span> <code>String</code></td>
      <td><p>Price of the coin expressed in Bitcoin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.listedAt</span> <code>Number/null</code></td>
      <td><p>Epoch timestamp of when we started listing the coin.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.tier</span> <code>Number/null</code></td>
      <td><p>Tier of the coin. We separate coins into three tiers. <a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">Learn more about our ranking methodology</a>.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.change</span> <code>String</code></td>
      <td><p>Percentage of change over the given time period</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.rank</span> <code>Number</code></td>
      <td><p>The position in the ranks</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.sparkline</span> <code>String</code></td>
      <td><p>Array of prices based on the time period parameter, useful for a sparkline</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.allTimeHigh</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.allTimeHigh</span><span class="doc__field">.price</span> <code>String/null</code></td>
      <td><p>The highest price that the coin has reached, expressed in the reference currency. Returns null if no all-time high data is available.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.allTimeHigh</span><span class="doc__field">.timestamp</span> <code>Number/null</code></td>
      <td><p>An Epoch timestamp in seconds when the coin reached its highest price. Returns null if no all-time high data is available.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.coinrankingUrl</span> <code>String</code></td>
      <td><p>Where to find the coin on coinranking.com</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.contractAddresses</span> <code>Object[]</code></td>
      <td>
        <p>
          List of contract addresses for this coin. The format is
          <code>blockchain/contractAddress</code>. A single coin can be minted on multiple
          blockchains. For example, Tether (USDT) is available on Ethereum
          <span v-b-tooltip.hover class="font-italic" title="ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7">
            (ethereum/0xda...)
          </span> Bitcoin Cash
          <span v-b-tooltip.hover class="font-italic" title="bitcoin-cash/9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11">
            (bitcoin-cash/9fc...)
          </span> and seven other blockchains.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.isWrappedTrustless</span> <code>Boolean</code></td>
      <td><p>Indicates whether this coin is a wrapped version of another asset where the wrapping relationship is enforced by smart contracts without requiring trust in a third party.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.wrappedTo</span> <code>String/null</code></td>
      <td><p>UUID of the coin that this coin is wrapped to. Returns null when this coin is not a wrapped version of another asset.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span> <code>Object</code></td>
      <td><p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.limit</span> <code>Number</code></td>
      <td><p>The number of results per page</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> <code>Boolean</code></td>
      <td><p>Whether there are more results available after the current page</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> <code>Boolean</code></td>
      <td><p>Whether there are results available before the current page</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> <code>String/null</code></td>
      <td><p>Cursor to use for the next page, or null if there are no more results</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> <code>String/null</code></td>
      <td><p>Cursor to use for the previous page, or null if on the first page</p></td>
    </tr>
  </tbody>
</table>

## Error response

```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency with UUID of HxDUgYGNAdQz not available"
}
```

#### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error                          | Description                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| VALIDATION_ERROR `Object`      | <p>The request could not be validated. The response should provide more details.</p>     |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |
| INVALID_CURSOR `Object` | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH `Object` | <p>The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT `Object` | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# List of trending coins

Get a list of trending coins. On Coinranking, we use this endpoint on our
<a href="https://coinranking.com/coins/trending">trending coins page</a>.

Be aware that by default the list includes coins with
<a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">tier 1, 2 and 3</a>.
Users can choose which tiers to include in the list and rank coins based on their selected filters.

Trending coins are ranked dynamically based on user engagement and popularity.
By default, the API returns the top 50 trending coins along with the price of each trending coin in USD.
The response not only returns a list of coins, but also statistics regarding the requested list, such as the volume in the last 24 hours.

```
<span class="link">https://api.coinranking.com/v2<strong>/coins/trending</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coins/trending" button-text='Copy' :light="true"></copy-button>
```

## Query parameters

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span><br>
        </br>
        <span class="docs-badge">Example:</span><br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins/trending?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coins/trending?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins/trending?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          By setting the timePeriod the change percentage and sparkline in the response will be
          calculated accordingly.
        </p>
        <p>The maximum timePeriod you can use is <code>5y</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value:</span>
        <span class="docs-badge__item">24h</span>
        <br><span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        </br></br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins/trending?timePeriod=7d">
            https://api.coinranking.com/v2/coins/trending?timePeriod=7d
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins/trending?timePeriod=7d"></copy-button>
      </td>
    </tr>
    <tr>
      <td>tiers <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>
          We separate coins into three tiers. With this parameter you can filter coins on the tiers
          you need. Read more about our tiers in our
          <a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">ranking methodology</a>.
        </p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1</span>
        <span class="docs-badge__item">2</span>
        <span class="docs-badge__item">3</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins/trending?tiers[]=1&tiers[]=2">
            https://api.coinranking.com/v2/coins/trending?tiers[]=1&tiers[]=2
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins/trending?tiers[]=1&tiers[]=2"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span>
        <br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins/trending?limit=50">
            https://api.coinranking.com/v2/coins/trending?limit=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins/trending?limit=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coins/trending?offset=50">
            https://api.coinranking.com/v2/coins/trending?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coins/trending?offset=50"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples

<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coins/trending?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&limit=50&offset=0' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coins/trending?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&limit=50&offset=0', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coins/trending?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&limit=50&offset=0",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coins/trending?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&limit=50&offset=0", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response

```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "coins": [
      {
        "uuid": "x1naMqhnQ",
        "symbol": "AI16Z",
        "name": "ai16z",
        "color": "#b56d47",
        "iconUrl": "https://cdn.coinranking.com/d1Cq1QRia/ai16z.png",
        "marketCap": "216162596",
        "price": "0.19651159766076215",
        "listedAt": 1730096051,
        "tier": 1,
        "change": "13.93",
        "rank": 1,
        "sparkline": [
          "0.1734302093738471",
          "0.1722441249843424",
          "0.17206841234970932",
          ...
        ],
        "lowVolume": false,
        "coinrankingUrl": "https://coinranking.com/coin/x1naMqhnQ+ai16z-ai16z",
        "24hVolume": "55044627",
        "btcPrice": "0.000002290513667438",
        "contractAddresses": [
          "solana/HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC"
        ]
      },
      {
        "uuid": "VDSp0_jlF",
        "symbol": "FARTCOIN",
        "name": "Fartcoin",
        "color": "#141414",
        "iconUrl": "https://cdn.coinranking.com/mWrHIRttj/fart.png",
        "marketCap": "384211556",
        "price": "0.38421222643273306",
        "listedAt": 1729808507,
        "tier": 1,
        "change": "26.52",
        "rank": 2,
        "sparkline": [
          "0.30212807097709193",
          "0.3012665015434585",
          "0.302866142569032",
          ...
        ],
        "lowVolume": false,
        "coinrankingUrl": "https://coinranking.com/coin/VDSp0_jlF+fartcoin-fartcoin",
        "24hVolume": "104234071",
        "btcPrice": "0.000004478327825516",
        "contractAddresses": [
          "solana/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump"
        ]
      },
      {
        "uuid": "54I_A3MXKhHjZ",
        "symbol": "PI",
        "name": "Pi Network Coin",
        "color": "#402867",
        "iconUrl": "https://cdn.coinranking.com/dEJWskWni/pi-network-logo.png",
        "marketCap": "7368941912",
        "price": "1.1681250256177722",
        "listedAt": 1494288000,
        "tier": 1,
        "change": "1.01",
        "rank": 3,
        "sparkline": [
          "1.1559768754179904",
          "1.146620130952483",
          "1.141923934383675",
          ...
        ],
        "lowVolume": false,
        "coinrankingUrl": "https://coinranking.com/coin/54I_A3MXKhHjZ+pinetworkcoin-pi",
        "24hVolume": "408118286",
        "btcPrice": "0.000013615513630255",
        "contractAddresses": []
      }
    ]
  }
}
```

### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span> <code>Object[]</code></td>
      <td><p>List of trending coins</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.uuid</span> <code>String</code></td>
      <td><p>UUID of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.symbol</span> <code>String</code></td>
      <td><p>Currency symbol</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.name</span> <code>String</code></td>
      <td><p>Name of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.color</span> <code>String</code></td>
      <td><p>Main HEX color of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.iconUrl</span> <code>String</code></td>
      <td><p>Location of the icon</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.marketCap</span> <code>String</code></td>
      <td><p>Market capitalization. Price times circulating supply</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.price</span> <code>String</code></td>
      <td><p>Price of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.listedAt</span> <code>Number/null</code></td>
      <td><p>Epoch timestamp of when we started listing the coin.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.tier</span> <code>String</code></td>
      <td><p>Tier of the coin. <a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">Learn more about our ranking methodology</a>.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.change</span> <code>String</code></td>
      <td><p>Percentage of change over the given time period</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.rank</span> <code>Number</code></td>
      <td><p>The position in the ranks</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.sparkline</span> <code>String</code></td>
      <td><p>Array of prices based on the time period parameter, useful for a sparkline</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.lowVolume</span> <code>Boolean</code></td>
      <td><p>If the coin is not much traded on listed exchanges it is marked as having a low volume. The threshold is currently set at the equivalent of 500.000 US Dollar in 24 hours</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.coinrankingUrl</span> <code>String</code></td>
      <td><p>Where to find the coin on coinranking.com</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.24hVolume</span> <code>String</code></td>
      <td><p>24h trade volume</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.btcPrice</span> <code>String</code></td>
      <td><p>Price of the coin expressed in Bitcoin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.contractAddresses</span> <code>Object[]</code></td>
      <td>
        <p>
          List of contract addresses for this coin. The format is
          <code>blockchain/contractAddress</code>. A single coin can be minted on multiple
          blockchains. For example, Tether (USDT) is available on Ethereum
          <span v-b-tooltip.hover class="font-italic" title="ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7">
            (ethereum/0xda...)
          </span> Bitcoin Cash
          <span v-b-tooltip.hover class="font-italic" title="bitcoin-cash/9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11">
            (bitcoin-cash/9fc...)
          </span> and seven other blockchains.
        </p>
    </tr>
  </tbody>
</table>

## Error response

```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency with UUID of HxDUgYGNAdQz not available"
}
```

#### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error                          | Description                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| VALIDATION_ERROR `Object`      | <p>The request could not be validated. The response should provide more details.</p>     |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get coin details

<p>Find information about a specific coin. On Coinranking we use this endpoint on our <a href="https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc">coin detail page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid" button-text='Copy' :light="true"></copy-button>
```

## Path parameters

| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the coin you want to request. UUIDs of coins can be found using the Get coins endpoint or by checking the URL on coinranking.com, e.g. https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc is the URL for Bitcoin, and the part before the + (Qwsogvtv82FCd) is the UUID. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Time period where the change and sparkline are based on</p>
        <p>The maximum timePeriod you can use is <code>5y</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24h</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?timePeriod=1y">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?timePeriod=1y
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?timePeriod=1y"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "coin": {
      "uuid": "Qwsogvtv82FCd",
      "symbol": "BTC",
      "name": "Bitcoin",
      "description": "Bitcoin is the first decentralized digital currency.",
      "color": "#f7931A",
      "iconUrl": "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
      "websiteUrl": "https://bitcoin.org",
      "links": [
        {
          "name": "Bitcoin",
          "url": "https://www.reddit.com/r/Bitcoin/",
          "type": "reddit"
        }
      ],
      "supply": {
        "confirmed": true,
        "supplyAt": 1640757180,
        "circulating": "17009275",
        "total": "17009275",
        "max": "21000000"
      },
      "24hVolume": "6818750000",
      "marketCap": "159393904304",
      "fullyDilutedMarketCap": "196790985529",
      "price": "9370.9993109108",
      "btcPrice": "1",
      "priceAt": 1640757180,
      "change": "-0.52",
      "rank": 1,
      "numberOfMarkets": 9800,
      "numberOfExchanges": 190,
      "sparkline": [
        "9515.0454185372",
        "9540.1812284677",
        "9554.2212643043",
        "9593.571539283",
        "9592.8596962985",
        "9562.5310295967",
        "9556.7860427046",
        "9388.823394515",
        "9335.3004209165",
        "9329.4331700521",
        "9370.9993109108"
      ],
      "allTimeHigh": {
        "price": "19500.471361532",
        "timestamp": 1513555200
      },
      "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
      "tier": 1,
      "lowVolume": false,
      "listedAt": 1483228800,
      "notices": [
        {
          "type": "MESSAGE",
          "value": "Lorem ipsum dolor sit amet"
        }
      ],
      "contractAddresses": [],
      "tags": [
        "staking",
        "layer-1"
       ],
      "isWrappedTrustless": false,
      "wrappedTo": null
    }
  }
}
```


### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.uuid</span> <code>String</code></td>
      <td><p>UUID of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.symbol</span> <code>String</code></td>
      <td><p>Currency symbol</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.name</span> <code>String</code></td>
      <td><p>Name of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.description</span> <code>String</code></td>
      <td><p>Small description of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.color</span> <code>String</code></td>
      <td><p>Main HEX color of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.iconUrl</span> <code>String</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.websiteUrl</span> <code>String</code></td>
      <td><p>URL of the primary website</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.links</span> <code>Object[]</code></td>
      <td><p>List of links, like social media pages</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.links</span><span class="doc__field">.name</span> <code>String</code></td>
      <td><p>Name of the link</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.links</span><span class="doc__field">.url</span> <code>String</code></td>
      <td><p>Url to the specific link</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.links</span><span class="doc__field">.type</span> <code>String</code></td>
      <td>
        <p>The type of link</p>
        <span class="docs-badge">Allowed values: </br>
        </span><span class="docs-badge__item">website</span>
        <span class="docs-badge__item">bitcointalk</span>
        <span class="docs-badge__item">explorer</span>
        <span class="docs-badge__item">discord</span>
        <span class="docs-badge__item">facebook</span>
        <span class="docs-badge__item">github</span>
        <span class="docs-badge__item">instagram</span>
        <span class="docs-badge__item">line-messenger</span>
        <span class="docs-badge__item">linkedin</span>
        <span class="docs-badge__item">medium</span>
        <span class="docs-badge__item">qq</span>
        <span class="docs-badge__item">quora</span>
        <span class="docs-badge__item">reddit</span>
        <span class="docs-badge__item">sina-weibo</span>
        <span class="docs-badge__item">telegram</span>
        <span class="docs-badge__item">tiktok</span>
        <span class="docs-badge__item">twitter</span>
        <span class="docs-badge__item">vkontakte</span>
        <span class="docs-badge__item">wechat</span>
        <span class="docs-badge__item">whitepaper</span>
        <span class="docs-badge__item">youtube</span>
        <span class="docs-badge__item">etc.</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.supply</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.supply</span><span class="doc__field">.confirmed</span> <code>Boolean</code></td>
      <td><p>Coins without a confirmed supply are ranked below coins with a confirmed supply. Read about our <a href="https://support.coinranking.com/article/56-what-is-our-ranking-methodology">methodology</a>.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.supply</span><span class="doc__field">.supplyAt</span> <code>Number/null</code></td>
      <td><p>Epoch timestamp of when the supply was synchronized. If the supply was never synchronized or the supply is manually updated the API will return null.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.supply</span><span class="doc__field">.total</span> <code>String</code></td>
      <td><p>Number of coins that are in existence</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.supply</span><span class="doc__field">.circulating</span> <code>String</code></td>
      <td><p>Number of coins that are circulating in the public market</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.supply</span><span class="doc__field">.max</span> <code>String</code></td>
      <td><p>Maximum amount the coin&#39;s supply can ever be.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.marketCap</span> <code>String</code></td>
      <td><p>Market capitalization. Price times circulating supply</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.fullyDilutedMarketCap</span> <code>String</code></td>
      <td>
        <p>
          Market capitalization. Price times circulating supply Full Market capitalization. Fully
          diluted market cap is a coin&#39;s price multiplied by its max supply. Or total supply if
          the max supply is not known. It shows what the market cap could be if all coins were in
          circulation, with the current price.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.price</span> <code>String</code></td>
      <td><p>Price of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.btcPrice</span> <code>String</code></td>
      <td><p>Price of the coin expressed in Bitcoin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.priceAt</span> <code>Number/null</code></td>
      <td><p>Epoch timestamp of when the price was calculated.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.24hVolume</span> <code>String</code></td>
      <td><p>24h trade volume</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.change</span> <code>String</code></td>
      <td><p>Percentage of change over the given time period</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.rank</span> <code>Number</code></td>
      <td><p>The position in the ranks</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.numberOfMarkets</span> <code>Number</code></td>
      <td><p>The number of markets that contain the this coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.numberOfExchanges</span> <code>Number</code></td>
      <td><p>The number of exchanges that trade this coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.sparkline</span> <code>String</code></td>
      <td><p>Array of prices based on the time period parameter, useful for a sparkline</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.allTimeHigh</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.allTimeHigh</span><span class="doc__field">.price</span> <code>String/null</code></td>
      <td><p>The highest price that the coin has reached, expressed in the reference currency. Returns null if no all-time high data is available.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.allTimeHigh</span><span class="doc__field">.timestamp</span> <code>Number/null</code></td>
      <td><p>An Epoch timestamp in seconds when the coin reached its highest price. Returns null if no all-time high data is available.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.coinrankingUrl</span> <code>String</code></td>
      <td><p>Where to find the coin on coinranking.com</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.tier</span> <code>Number/null</code></td>
      <td><p>Tier of the coin. We separate coins into three tiers. <a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">Learn more about our ranking methodology</a>.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.lowVolume</span> <code>Boolean</code></td>
      <td><p>If the coin is not much traded on listed exchanges it is marked as having a low volume. The threshold is currently set at the equivalent of 500.000 US Dollar in 24 hours</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.listedAt</span> <code>Number/null</code></td>
      <td><p>Epoch timestamp of when we started listing the coin.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.notices</span> <code>Object[]</code></td>
      <td>
        <p>
          List of notices, which signal some important information about the coin. The notices are
          in JSON format, and in most cases consist of a &quot;type&quot; property with an
          important keyword such as &quot;WARNING&quot;, and a more human readable message in a
          &quot;value&quot; property.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.contractAddresses</span> <code>Object[]</code></td>
      <td>
        <p>
          List of contract addresses for this coin. The format is
          <code>blockchain/contractAddress</code>. A single coin can be minted on multiple
          blockchains. For example, Tether (USDT) is available on Ethereum
          <span v-b-tooltip.hover class="font-italic" title="ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7">
            (ethereum/0xda...)
          </span>, Bitcoin Cash
          <span v-b-tooltip.hover class="font-italic" title="bitcoin-cash/9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11">
            (bitcoin-cash/9fc...)
          </span> and seven other blockchains.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.tags</span> <code>Object[]</code></td>
      <td><p>List of tags, like &quot;Staking&quot; or &quot;Meme&quot;</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.isWrappedTrustless</span> <code>Boolean</code></td>
      <td><p>Indicates whether this coin is a wrapped version of another asset where the wrapping relationship is enforced by smart contracts without requiring trust in a third party.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.wrappedTo</span> <code>String/null</code></td>
      <td><p>UUID of the coin that this coin is wrapped to. Returns null when this coin is not a wrapped version of another asset.</p></td>
    </tr>
  </tbody>
</table>



## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Name type | Description                           |
|-----------|---------------------------------------|
| COIN_NOT_FOUND  `Object` | <p>The coin could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Name type | Description                           |
|-----------|---------------------------------------|
| VALIDATION_ERROR  `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE  `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get coin price


<p>The price endpoint allows users to query the price history of a cryptocurrency based on a specified epoch timestamp (in seconds). The system will find the nearest available price point to the provided timestamp, selecting from data aggregated by minute, hour, or day. The granularity of the returned data depends on how far back in time the requested timestamp is.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/price</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/price" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter   | Description                           |
|-------------|---------------------------------------|
| uuid `String` | <p>UUID of the coin you need the price.</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timestamp <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          The timestamp parameter accepts an epoch timestamp in seconds. This timestamp is used to
          find the nearest available price point, selecting the data&#39;s granularity based on the
          age of the request:
        </p>
        <ul>
          <li>Minute-level data for timestamps within the last 24 hours.</li>
          <li>Hourly data for timestamps older than 24 hours but less than 30 days.</li>
          <li>Daily data for timestamps older than 30 days.</li>
          </ul>
        <p>
          If no timestamp is provided, this endpoint will default to the latest price.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?timestamp=1588349307">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?timestamp=1588349307
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?timestamp=1588349307"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=5k-_VTxqtCEI' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=5k-_VTxqtCEI', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=5k-_VTxqtCEI",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=5k-_VTxqtCEI", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "price": "7305.985182338483",
    "timestamp": 1586305740
  }
}
```


### Response fields

| Property     | Description                           |
|-----------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.price</span> `String` | <p>The price of the requested coin at the requested time</p> |
| <span class="doc__field">data</span><span class="doc__field">.timestamp</span> `Number` | <p>An Epoch timestamp in seconds when the coin had the given price. Might differ from the provided timestamp in the request, because it is stripped down to the day, hour or minute.</p> |


## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| PRICE_NOT_FOUND `Object` | <p>No price could be calculated for this request. Try another coin and/or another reference currency</p> |
| COIN_NOT_FOUND `Object` | <p>The coin could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get coin price history


<p>Coinranking keeps track of prices on all listed assets. The history endpoint lists prices and their timestamp for the requested time period, useful for making a chart.</p> <p>On Coinranking, we use this endpoint for the main price chart on our <a href="https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc">coin detail page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/price-history</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/price-history" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the coin you want to request |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Timeperiod where the change and history are based on</p>
        <p>The maximum timePeriod you can use is <code>all</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24h</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        <span class="docs-badge__item">all</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?timePeriod=1y">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?timePeriod=1y
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?timePeriod=1y"></copy-button>
      </td>
    </tr>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used to
          calculate the volume. Defaults to US Dollar, but you can use any coin. You can find UUIDs
          for reference currencies in any coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "x-access-token: your-api-key"
      ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "change": "12",
    "history": [
      {
        "price": "41905.99687434882803047615",
        "timestamp": 1641897900
      },
      {
        "price": "41937.93174219252237197408",
        "timestamp": 1641897600
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.change</span> `String` | <p>Percentage of change over the given time frame</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span> `Object[]` | <p>List of prices</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.price</span> `String` | <p>Price of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.timestamp</span> `Number` | <p>An Epoch timestamp in seconds when the coin had the given price.</p> |


## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| COIN_NOT_FOUND `Object` | The coin could not be found. Try another UUID |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get coin fiat prices

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>The coin fiat prices endpoint provides the price of a coin in all available fiat currencies, including USD, EUR, GBP, and more. These fiat currencies act as reference currencies in our system, forming the basis for conversions. To learn more about how reference currencies work, see our <a href="/api/documentation/reference-currencies">reference currencies endpoint</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/fiat-prices</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/fiat-prices" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter   | Description                           |
|-------------|---------------------------------------|
| uuid `String` | UUID of the coin you need the price. |

## Code examples

<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/fiat-prices' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/fiat-prices', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/fiat-prices",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/fiat-prices", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "prices": [
      {
        "referenceCurrencyUuid": "cYkSLiOlL7Qw",
        "referenceCurrencySymbol": "CNY",
        "referenceCurrencyName": "Chinese Yuan",
        "referenceCurrencyIconUrl": "https://cdn.coinranking.com/__Q5DN_tH/cn.svg",
        "price": "637459.34229400648858905809"
      },
      {
        "referenceCurrencyUuid": "yhjMzLPhuIDl",
        "referenceCurrencySymbol": "USD",
        "referenceCurrencyName": "US Dollar",
        "referenceCurrencyIconUrl": "https://cdn.coinranking.com/FNwFOF8tV/us.svg",
        "price": "87336.01084405759"
      },
      {
        "referenceCurrencyUuid": "UinC7PrlC4hF",
        "referenceCurrencySymbol": "KRW",
        "referenceCurrencyName": "South Korean Won",
        "referenceCurrencyIconUrl": "https://cdn.coinranking.com/b-ARx3e2S/kr.svg",
        "price": "123876504.59582840166794170873"
      },
      {
        "referenceCurrencyUuid": "Ef8u4mwlnsSx",
        "referenceCurrencySymbol": "SGD",
        "referenceCurrencyName": "Singapore Dollar",
        "referenceCurrencyIconUrl": "https://cdn.coinranking.com/c1PE935ks/sg.svg",
        "price": "114475.23953379426512176243"
      }
    ]
  }
}
```


### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.prices</span> <code>Object[]</code></td>
      <td><p>List of coin prices in fiat currencies</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.prices</span><span class="doc__field">.referenceCurrencyUuid</span> <code>String</code></td>
      <td><p>UUID of the reference currency</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.prices</span><span class="doc__field">.referenceCurrencySymbol</span> <code>String</code></td>
      <td><p>Symbol of the reference currency</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.prices</span><span class="doc__field">.referenceCurrencyName</span> <code>String</code></td>
      <td><p>Name of the reference currency</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.prices</span><span class="doc__field">.referenceCurrencyIconUrl</span> <code>String</code></td>
      <td><p>Location of the reference currency icon</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.prices</span><span class="doc__field">.price</span> <code>String</code></td>
      <td><p>Coin price in the reference currency</p></td>
    </tr>
  </tbody>
</table>



## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| PRICE_NOT_FOUND `Object` | <p>No price could be calculated for this request. Try another UUID</p> |
| COIN_NOT_FOUND `Object` | <p>The coin could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |

</b-tab>
</b-tabs>

---

# Get coin OHLCV

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get OHLCV (Open High Low Close Volume) data for the coin throughout time.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/ohlcv</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/ohlcv" button-text='Copy' :light="true"></copy-button>
```

## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the coin you want to request the OHLCV data for. |

## Query parameters
<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>interval <span class="optional">(optional)</span> <code>String</code></td>
            <td>
                <p>The interval determines the time period over which each OHLC item is determined.</p>
                <span class="docs-badge">Default value: </span><span class="docs-badge__item">day</span><br>
                <span class="docs-badge">Allowed values: </br></span>
                <span class="docs-badge__item">minute</span>
                <span class="docs-badge__item">5minutes</span>
                <span class="docs-badge__item">hour</span>
                <span class="docs-badge__item">8hours</span>
                <span class="docs-badge__item">day</span>
                <span class="docs-badge__item">week</span>
                <span class="docs-badge__item">month</span>
                <br><br>
                <span class="docs-badge">Example:</span></br>
                <code>
                  <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?interval=hour">
                    https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?interval=hour
                  </span>
                </code>
                <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?interval=hour"></copy-button>
            </td>
        </tr>
        <tr>
            <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
            <td>
                <p>Limit. Limit the amount of time periods for which the OHLCV data is retrieved. For example, when interval=hour and limit is 10, data will be returned for the last 10 hours. The maximum amount of results you can fetch in one request is 5000 for the Startup and Professional plan, and 100 for the Free plan.</p>
                <span class="docs-badge">Default value: </span><span class="docs-badge__item">50</span><br>
                <span class="docs-badge">Size range: </span><span class="docs-badge__item">0-5000</span><br>
                <br><br>
                <span class="docs-badge">Example:</span></br>
                <code>
                  <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?limit=10">
                    https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?limit=10
                  </span>
                </code>
                <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?limit=10"></copy-button>
            </td>
        </tr>
        <tr>
            <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
            <td>
                <p>
                  UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
                  US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
                  coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
                </p>
                <div class="alert alert-warning">
                  <p>
                    <strong>Note:</strong> When using a reference currency, the OHLC values are converted from USD-based calculations rather
                    than recalculated from raw trading data. Since reference currency exchange rates fluctuate during the time period this means:
                  </p>
                  <ul>
                    <li>The Open or Close values might be higher than the High or lower than the Low</li>
                    <li>
                      For true OHLC data in a specific currency pair, use USD as the reference currency or subscribe to the realtime rates
                      for both the coin and the intended reference currency and calculate the OHLC values yourself
                    </li>
                  </ul>
                </div>
                <span class="docs-badge">Default value: </span>
                <span class="docs-badge__item">yhjMzLPhuIDl</span>
                <br><br>
                <span class="docs-badge">Example:</span></br>
                <code>
                  <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?referenceCurrencyUuid=5k-_VTxqtCEI">
                    https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?referenceCurrencyUuid=5k-_VTxqtCEI
                  </span>
                </code>
                <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
            </td>
        </tr>
    </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?referenceCurrencyUuid=5k-_VTxqtCEI&interval=hour&limit=50' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?referenceCurrencyUuid=5k-_VTxqtCEI&interval=hour&limit=50', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?referenceCurrencyUuid=5k-_VTxqtCEI&interval=hour&limit=50",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "x-access-token: your-api-key"
      ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/ohlcv?referenceCurrencyUuid=5k-_VTxqtCEI&interval=hour&limit=50", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "ohlc": [
      {
        "startingAt": 1733011200,
        "endingAt": 1735689600,
        "open": "96447.1775503152",
        "high": "108201.88415847138",
        "low": "91546.14889956331",
        "close": "92757.25601337428",
        "avg": "98498.05461116068",
        "24hVolume": "46442676990.360725",
        "intervalVolume": "2002368626068.8618"
      },
      {
        "startingAt": 1730419200,
        "endingAt": 1733011200,
        "open": "70322.96990325804",
        "high": "99588.89995964085",
        "low": "66922.19464691161",
        "close": "96449.1102387863",
        "avg": "86276.37524878597",
        "24hVolume": "38017759048.21358",
        "intervalVolume": "3928981914099.0195"
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span> `Object[]` | <p>List of OHLC items</p> |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span><span class="doc__field">.startingAt</span> `Number` | <p>An Epoch timestamp in seconds marking the start of the time period on which the OHLC values are based.</p> |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span><span class="doc__field">.open</span> `String/null` | <p>Opening price of the coin for the time period in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span><span class="doc__field">.high</span> `String/null` | <p>Highest USD price of the coin during the time period in the reference currency. When using non-USD reference currencies, the highest USD price is directly converted to the reference currency. Since the reference currency itself can fluctuate against the US Dollar, the High is not necessarily the highest price in the chosen reference currency.</p> |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span><span class="doc__field">.low</span> `String/null` | <p>Lowest USD price of the coin during the time period in the reference currency. When using non-USD reference currencies, the lowest USD price is directly converted to the reference currency. Since the reference currency itself can fluctuate against the US Dollar, the Low is not necessarily the lowest price in the chosen reference currency.</p> |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span><span class="doc__field">.close</span> `String/null` | <p>Closing price of the coin for the time period in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span><span class="doc__field">.avg</span> `String/null` | <p>Average price of the coin over the time period</p> |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span><span class="doc__field">.24hVolume</span> `String/null` | <p>Total 24h volume of the coin in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.ohlc</span><span class="doc__field">.intervalVolume</span> `String/null` | <p>Total volume of the coin for the specified time interval in the reference currency. This field is only applicable for intervals of <strong>week</strong> and <strong>month</strong>; otherwise, it will be <code>null</code></p> |

## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| COIN_NOT_FOUND `Object` | The coin could not be found. Try another UUID |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | The request could not be validated. The response should provide more details. |
| REFERENCE_UNAVAILABLE `Object` | The reference currency used in the request is not available. Choose another UUID. |

</b-tab>
</b-tabs>

---

# Get coin gains and losses

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Find gains and losses data for a specific coin over different time intervals. On Coinranking we use this endpoint on our <a href="https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc#gains-and-losses" target="_blank">coin detail page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/gains-and-losses</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/gains-and-losses" button-text='Copy' :light="true"></copy-button>
```

## Path parameters

| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the coin you want to request gains and losses for. UUIDs of coins can be found using the Get coins endpoint or by checking the URL on coinranking.com, e.g. https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc is the URL for Bitcoin, and the part before the + (Qwsogvtv82FCd) is the UUID. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>interval <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Time interval for the gains and losses calculation</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">day</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">day</span>
        <span class="docs-badge__item">week</span>
        <span class="docs-badge__item">month</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?interval=week">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?interval=week
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?interval=week"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Number of gains and losses entries to return</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span>
        <span class="docs-badge">Maximum value: </span>
        <span class="docs-badge__item">100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?limit=25">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?limit=25
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?limit=25"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?referenceCurrencyUuid=5k-_VTxqtCEI&interval=week&limit=25' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?referenceCurrencyUuid=5k-_VTxqtCEI&interval=week&limit=25', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?referenceCurrencyUuid=5k-_VTxqtCEI&interval=week&limit=25",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/gains-and-losses?referenceCurrencyUuid=5k-_VTxqtCEI&interval=week&limit=25", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "gainsAndLosses": [
      {
        "timestamp": 1640995200,
        "price": "47156.85",
        "change": "2.34"
      },
      {
        "timestamp": 1640908800,
        "price": "46078.12", 
        "change": "-1.87"
      },
      {
        "timestamp": 1640822400,
        "price": "46952.73",
        "change": "0.92"
      }
    ]
  }
}
```


### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.gainsAndLosses</span> <code>Object[]</code></td>
      <td><p>Array of gains and losses data points</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.gainsAndLosses</span><span class="doc__field">.timestamp</span> <code>Number</code></td>
      <td><p>Epoch timestamp of the data point</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.gainsAndLosses</span><span class="doc__field">.price</span> <code>String</code></td>
      <td><p>Price of the coin at this timestamp</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.gainsAndLosses</span><span class="doc__field">.change</span> <code>String</code></td>
      <td><p>Percentage change from the previous interval</p></td>
    </tr>
  </tbody>
</table>



## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Name type | Description                           |
|-----------|---------------------------------------|
| COIN_NOT_FOUND  `Object` | <p>The coin could not be found. Try another UUID</p> |
| GAINS_AND_LOSSES_NOT_FOUND  `Object` | <p>Gains and losses data could not be found for this coin</p> |

</b-tab>
<b-tab title="422">

| Name type | Description                           |
|-----------|---------------------------------------|
| VALIDATION_ERROR  `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE  `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get coin exchange listings

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get a list of exchanges where a specific coin can be traded. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc/exchanges">coin exchange listings page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/exchanges</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/exchanges" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the coin you want to request exchanges for |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?limit=10">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?offset=50">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Index to order by. Default is 24h volume.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">price</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?orderBy=price">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?orderBy=price
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?orderBy=price"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Order in ascending or descending order</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?orderDirection=asc">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Value to search for within results, i.e. exchange names</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?search=binance">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?search=binance
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?search=binance"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "24hVolume": "27739840257.811882",
      "total": 278
    },
    "exchanges": [
      {
        "uuid": "8NvE23ZAn",
        "name": "CoinW",
        "iconUrl": "https://cdn.coinranking.com/zo-Z705sB/517.png",
        "verified": false,
        "recommended": true,
        "numberOfMarkets": 3,
        "coinrankingUrl": "https://coinranking.com/exchange/8NvE23ZAn+coinw",
        "btcPrice": "1.000346487380855",
        "exchangeType": "Centralized",
        "24hVolume": "64615.24751038069027507495",
        "price": "1.00055691180141505381"
      },
      {
        "uuid": "-zdvbieRdZ",
        "name": "Binance",
        "iconUrl": "https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
        "verified": false,
        "recommended": true,
        "numberOfMarkets": 127,
        "coinrankingUrl": "https://coinranking.com/exchange/-zdvbieRdZ+binance",
        "btcPrice": "0.9998934262850078",
        "exchangeType": "Centralized",
        "24hVolume": "43016.1818176284823540315",
        "price": "0.99989907870210148543"
      }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextCursor": "eyJ0IjpudWxsLCJyIjoxNzkzOTY2MDI1Ljg4ODk0MDMsInUiOiI4SmxZZ1FNSyIsIm8iOiIyNGhWb2x1bWUiLCJkIjoiZGVzYyJ9",
    "previousCursor": null
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.24hVolume</span> `String` | <p>Total 24h volume of exchanges in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.coinrankingUrl</span> `Number` | <p>The url to the page on Coinranking for this exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.name</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.exchangeType</span> `String/null` | <p>Type of exchange: <code>Centralized</code>, <code>Decentralized</code>, or <code>Unknown</code>.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.verified</span> `Boolean` | <p>DEPRECATED Exchanges that are verified to not participate in harmful practices such as wash trading are marked as verified.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the exchange is recommended based on our criteria, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.numberOfMarkets</span> `Number` | <p>Number of markets of the exchange paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.24hVolume</span> `String` | <p>Total volume in 24 hours</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.price</span> `String` | <p>Price of the chosen coin on this exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.btcPrice</span> `String` | <p>Price of the chosen coin expressed in Bitcoin</p> |
| <span class="doc__field">pagination</span> `Object` | <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.limit</span> `Number` | <p>The number of results per page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> `Boolean` | <p>Whether there are more results available after the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> `Boolean` | <p>Whether there are results available before the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> `String/null` | <p>Cursor to use for the next page, or null if there are no more results</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> `String/null` | <p>Cursor to use for the previous page, or null if on the first page</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| COIN_NOT_FOUND `Object` | The coin could not be found. Try another UUID. |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | The request could not be validated. The response should provide more details. |
| REFERENCE_UNAVAILABLE `Object` | The reference currency used in the request is not available. Choose another UUID. |
| INVALID_CURSOR `Object` | The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor. |
| CURSOR_MISMATCH `Object` | The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over. |
| PAGINATION_CONFLICT `Object` | Both cursor and offset parameters were provided. Use only one pagination method per request. |

</b-tab>
</b-tabs>

---

# Get coin market listings

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get markets on different exchanges that trade a specific coin. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc/markets">coin market listings page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/markets</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/markets" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the coin you want to request markets for. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used to
          calculate the volume. Defaults to US Dollar, but you can use any coin. You can find UUIDs
          for reference currencies in any coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used to
          calculate the volume. Defaults to US Dollar, but you can use any coin. You can find UUIDs
          for reference currencies in any coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?limit=10">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?offset=50">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Index to sort on. Default is 24h volume.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">price</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?orderBy=price">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?orderBy=price
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?orderBy=price"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Order in ascending or descending order</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?orderDirection=asc">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Value to search for within results, e.g. exchange names, currency names, or currency symbols</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?search=bitc">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?search=bitc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?search=bitc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price'
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "24hVolume": "2795922.586905519",
      "total": 3
    },
    "markets": [
      {
        "uuid": "xk9M2LuHuID5",
        "base": {
          "uuid": "Qwsogvtv82FCd",
          "symbol": "BTC"
        },
        "quote": {
          "uuid": "yhjMzLPhuIDl",
          "symbol": "USD"
        },
        "exchange": {
          "uuid": "-zdvbieRdZ",
          "name": "Binance",
          "iconUrl": "https://cdn.coinranking.com/d6w2Hj3z0/BitMEX.svg"
        },
        "24hVolume": "771875964.9750752",
        "price": "3842.9444791178726",
        "btcPrice": "1",
        "rank": 1,
        "marketShare": "30.48",
        "recommended": true,
        "filters": []
      },
      {
        "uuid": "bn7nTLHHuIq2",
        "base": {
          "uuid": "Qwsogvtv82FCd",
          "symbol": "BTC"
        },
        "quote": {
          "uuid": "HIVsRcGKkPFtW",
          "symbol": "USDT"
        },
        "exchange": {
          "uuid": "qn5ZJmPFP",
          "name": "Coinbase Pro",
          "iconUrl": "https://cdn.coinranking.com/Ama6htyHL/coinbase.svg"
        },
        "24hVolume": "311344830.86823833",
        "price": "3869.146354559396",
        "btcPrice": "1",
        "rank": 2,
        "marketShare": "12.35",
        "recommended": true,
        "filters": []
      }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": false,
    "hasPreviousPage": false,
    "nextCursor": null,
    "previousCursor": null
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.24hVolume</span> `String` | <p>Total 24h volume of exchanges in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span> `Object[]` |  |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span> `String` | <p>The coin on the left side of the pair, which price is calculated in units of the quote</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span> `String` | <p>The coin on the right side of the pair. The amount in tickers are how much quote you get for one unit of base. E.g. BTC/USD 10.000 means 1 BTC is traded for 10.000 USD.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span> `String` | <p>Exchange this market belongs to</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.name</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.24hVolume</span> `String` | <p>24h volume of the latest ticker in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.price</span> `String` | <p>Price of the latest ticker in reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.btcPrice</span> `String` | <p>Price of the latest ticker expressed in Bitcoin</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the market based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total market volume reprented by this market, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the market is recommended based on the exchange it belongs to, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.filters</span> `String[]` | <p>An array of filters that are applied to the market. Most of the filters will cause the market to not be included in the price calculation of the coins.</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">PREV_FACTOR</span> <span class="docs-badge__item">EXTERNAL_ZSCORE</span> <span class="docs-badge__item">GEO</span> <span class="docs-badge__item">OUTSIDE_TOP_20</span> |
| <span class="doc__field">pagination</span> `Object` | <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.limit</span> `Number` | <p>The number of results per page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> `Boolean` | <p>Whether there are more results available after the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> `Boolean` | <p>Whether there are results available before the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> `String/null` | <p>Cursor to use for the next page, or null if there are no more results</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> `String/null` | <p>Cursor to use for the previous page, or null if on the first page</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error   | Description                           |
|------------------|---------------------------------------|
| COIN_NOT_FOUND `Object` | <p>The coin could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error  | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |
| INVALID_CURSOR `Object` | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH `Object` | <p>The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT `Object` | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# Get coin blockchains

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get the blockchains on which the coin is issued. Most of the time this is only one blockchain, but some coins are issued on multiple blockchains. We call the relation of a coin to a blockchain the issuance blockchain.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/issuance-blockchains</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/issuance-blockchains" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the coin you want to request the blockchains for. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Limit. Used for pagination.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?limit=10">
            https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?offset=50">
            https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?limit=50&offset=0' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="Javascript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?limit=50&offset=0', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?limit=50&offset=0",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/cVaOmQWainv7g/issuance-blockchains?limit=50&offset=0", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
 {
   "status": "success",
   "data": {
     "total": 1,
     "issuanceBlockchains": [
       {
         "name": "Ethereum",
         "referenceName": "Ethereum contract address",
         "reference": "0x1985365e9f78359a9B6AD760e32412f4a445E862",
         "blockExplorerUrl": "https://etherscan.io/token/0x1985365e9f78359a9B6AD760e32412f4a445E862",
         "migratedToReference": "0x221657776846890989a759ba2973e427dff5c9bb",
         "migrationDate": 1640757180
       }
     ]
   },
   "pagination": {
     "limit": 50,
     "hasNextPage": false,
     "hasPreviousPage": false,
     "nextCursor": null,
     "previousCursor": null
   }
 }
```


### Response fields

| Error | Description                           |
|------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.total</span> `Number` | <p>Total number of issuance blockchains for the coin.</p> |
| <span class="doc__field">data</span><span class="doc__field">.issuanceBlockchains</span> `Object[]` |  |
| <span class="doc__field">data</span><span class="doc__field">.issuanceBlockchains</span><span class="doc__field">.name</span> `String` | <p>Name of the blockchain.</p> |
| <span class="doc__field">data</span><span class="doc__field">.issuanceBlockchains</span><span class="doc__field">.referenceName</span> `String/null` | <p>Blockchain specific coin reference name. For instance, 'Ethereum contract address' for a coin's reference on the Ethereum blockchain.</p> |
| <span class="doc__field">data</span><span class="doc__field">.issuanceBlockchains</span><span class="doc__field">.reference</span> `String/null` | <p>Reference address of the coin on the blockchain. Null means it is the blockchain's native coin. For example this is the smart contract address of a coin if it is issued on the Ethereum blockchain and the asset code if the coin is issued on the Stellar blockchain.</p> |
| <span class="doc__field">data</span><span class="doc__field">.issuanceBlockchains</span><span class="doc__field">.blockExplorerUrl</span> `String/null` | <p>The supplies are fetched from third parties, called block explorers. The url links to the website of the block explorer, and if possible to the specific token.</p> |
| <span class="doc__field">data</span><span class="doc__field">.issuanceBlockchains</span><span class="doc__field">.migratedToReference</span> `String/null` | <p>The new reference address that this coin has moved to on the same blockchain. This happens when a coin's smart contract is upgraded or replaced, and the old contract address is no longer used.</p> |
| <span class="doc__field">data</span><span class="doc__field">.issuanceBlockchains</span><span class="doc__field">.migrationDate</span> `Number/null` | <p>Epoch timestamp of when the coin was migrated to the new reference address.</p> |
| <span class="doc__field">pagination</span> `Object` | <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.limit</span> `Number` | <p>The number of results per page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> `Boolean` | <p>Whether there are more results available after the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> `Boolean` | <p>Whether there are results available before the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> `String/null` | <p>Cursor to use for the next page, or null if there are no more results</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> `String/null` | <p>Cursor to use for the previous page, or null if on the first page</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "VALIDATION_ERROR",
  "messages": [
    "Limit can only be between 1 and 100."
  ]
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| VALIDATION_ERROR  | `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| INVALID_CURSOR  | `Object` | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH  | `Object` | <p>The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT  | `Object` | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# Get coin supply modifiers

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get the supply modifiers of a coin. These modifiers are the balances that are subtracted from the total supply in order to get the circulating supply. The balances we use as modifiers are from addresses that are considered not to be in circulation, such as addresses that hold burned or premined coins.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/modifiers</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/modifiers" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the coin you want to request the modifiers for. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Limit. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&limit=10">
            https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&offset=50">
            https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Order of the modifiers can be either when they were added (createdAt) or by amount</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">createdAt</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">amount</span>
        <span class="docs-badge__item">createdAt</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount">
            https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Applies direction to the orderBy query, which can be in ascending or descending order.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&orderDirection=asc">
            https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/cVaOmQWainv7g?orderBy=amount&orderDirection=asc"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/cVaOmQWainv7g/modifiers?orderBy=amount&limit=50&offset=0' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="Javascript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/cVaOmQWainv7g/modifiers?orderBy=amount&limit=50&offset=0', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/cVaOmQWainv7g/modifiers?orderBy=amount&limit=50&offset=0",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/cVaOmQWainv7g/modifiers?orderBy=amount&limit=50&offset=0", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "total": 3,
    "modifiers": [
      {
        "blockchainName": "Neo",
        "blockExplorerUrl": "https://neotracker.io/address/Ae2d6qj91YL3LVUMkza7WQsaTYjzjHm4z1",
        "name": "Foundation",
        "reference": "Ae2d6qj91YL3LVUMkza7WQsaTYjzjHm4z1",
        "syncedAt": 1593436560,
        "amount": "14146080"
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.total</span> `Number` | <p>Total number of modifiers for the coin's supply.</p> |
| <span class="doc__field">data</span><span class="doc__field">.modifiers</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.modifiers</span><span class="doc__field">.blockchainName</span> `String` | <p>Name of the blockchain to which this modifier applies.</p> |
| <span class="doc__field">data</span><span class="doc__field">.modifiers</span><span class="doc__field">.blockExplorerUrl</span> `String` | <p>URL to block explorer.</p> |
| <span class="doc__field">data</span><span class="doc__field">.modifiers</span><span class="doc__field">.name</span> `String` | <p>Name we have given the modifier.</p> |
| <span class="doc__field">data</span><span class="doc__field">.modifiers</span><span class="doc__field">.reference</span> `String` | <p>Address of the modifier.</p> |
| <span class="doc__field">data</span><span class="doc__field">.modifiers</span><span class="doc__field">.syncedAt</span> `Number/null` | <p>Epoch timestamp in seconds when the amount has last been synced.</p> |
| <span class="doc__field">data</span><span class="doc__field">.modifiers</span><span class="doc__field">.amount</span> `String/null` | <p>Balance on the address retrieved at the syncedAt time.</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "VALIDATION_ERROR",
  "messages": [
    "Limit can only be between 1 and 100."
  ]
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | The request could not be validated. The response should provide more details. |

</b-tab>
</b-tabs>

---

# Get coin market cap history

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>
  With the coin market-caps endpoint you can check out a coin's historical market cap. The market cap for each coin is determined by the latest price for one coin, multiplied by the amount of coins in circulation.
</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/market-cap-history</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/market-cap-history" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | <p>UUID of the coin you want to request the market cap data for. A UUID is our unique identifier for each coin. You can find them in all our coin endpoints, or look them up in the <a href="/api/documentation/find-uuids-slugs">find UUID page</a>.</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>The interval determines the time period over which each market cap item is determined.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">day</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">hour</span>
        <span class="docs-badge__item">day</span>
        <span class="docs-badge__item">week</span>
        <span class="docs-badge__item">month</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?interval=hour">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?interval=hour
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?interval=hour"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Limit the amount of time periods for which the marketCaps are retrieved. For
          example, when interval=hour and limit is 10, data will be returned for the last 10 hours.
          The maximum amount of results you can fetch in one request is 5000 for the Startup and
          Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?limit=10">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?limit=10"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?interval=hour&limit=50' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?interval=hour&limit=50', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?interval=hour&limit=50",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "x-access-token: your-api-key"
      ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/market-cap-history?interval=hour&limit=50", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "history": [
      {
        "timestamp": 1698220800,
        "marketCap": "663355719491"
      },
      {
        "timestamp": 1698217200,
        "marketCap": "662740429329"
      },
      {
        "timestamp": 1698213600,
        "marketCap": "666715637188"
      },
    ]
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.history</span> `Object[]` | <p>List of market cap items</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.timestamp</span> `Number` | <p>An Epoch timestamp in seconds</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.marketCap</span> `String/null` | <p>the market cap in US Dollars</p> |


## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| COIN_NOT_FOUND `Object` | The coin could not be found. Try another UUID. |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | The request could not be validated. The response should provide more details. |

</b-tab>
</b-tabs>

---

# Get coin trading volume history

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>
  With the coin trading-volume-history endpoint you can retrieve a coin's historical trading volume. Each value is the total volume traded over the given interval, expressed in the reference currency (e.g. US Dollar or Bitcoin). Use this data to build volume charts, compare activity across periods, or analyze trends.
</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/trading-volume-history</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/trading-volume-history" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | <p>UUID of the coin you want to request trading volume history for. A UUID is our unique identifier for each coin. You can find them in all our coin endpoints, or look them up in the <a href="/api/documentation/find-uuids-slugs">find UUID page</a>.</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of the reference currency (fiat or crypto) in which volumes are expressed. You can find UUIDs in our coin endpoints or the <a href="/api/documentation/reference-currencies">reference currencies</a> endpoint.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span> (US Dollar)
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>interval <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>The interval determines the time period over which each volume item is aggregated.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">day</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">hour</span>
        <span class="docs-badge__item">day</span>
        <span class="docs-badge__item">week</span>
        <span class="docs-badge__item">month</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?interval=hour">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?interval=hour
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?interval=hour"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Maximum number of history entries to return. For example, when interval=day and limit=30, data is returned for the last 30 days. The maximum is 5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?limit=100">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?limit=100
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?limit=100"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?interval=day&limit=50' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?interval=day&limit=50', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?interval=day&limit=50",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "x-access-token: your-api-key"
      ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/trading-volume-history?interval=day&limit=50", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "history": [
      {
        "timestamp": 1770422400000,
        "volume": "42791236212.35"
      },
      {
        "timestamp": 1770508800000,
        "volume": "27425856445.82"
      },
      {
        "timestamp": 1770595200000,
        "volume": "29311576049.00"
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.history</span> `Object[]` | <p>List of trading volume entries</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.timestamp</span> `Number` | <p>An Epoch timestamp in seconds</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.volume</span> `String/null` | <p>Trading volume over the interval in the reference currency. <code>null</code> when unavailable for that period.</p> |


## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| COIN_NOT_FOUND `Object` | The coin could not be found. Try another UUID. |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | The request could not be validated. The response should provide more details. |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get coin rank history

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>
  With the coin ranks endpoint you can check out how a coin was ranked throughout its existence. We
  have different rankings available for coins; by <a href="https://support.coinranking.com/article/104-why-do-we-rank-on-market-cap">market cap</a>
  (which is also the default ranking on coinranking.com), but also by 24 hour volume moving sum, by
  their sheer price in USD or in the <a href="https://support.coinranking.com/article/27-coinranking-terminology">fully diluted market cap.</a> 
</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/rank-history</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/rank-history" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | <p>UUID of the coin you want to request the rank data for. A UUID is our unique identifier for each coin. You can find them in all our coin endpoints, or look them up in the <a href="/api/documentation/find-uuids-slugs">find UUID page</a>.</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>The interval determines the time period over which each rank item is determined.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">day</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">hour</span>
        <span class="docs-badge__item">day</span>
        <span class="docs-badge__item">week</span>
        <span class="docs-badge__item">month</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?interval=hour">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?interval=hour
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?interval=hour"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Limit the amount of time periods for which the ranks are retrieved. For
          example, when interval=hour and limit is 10, data will be returned for the last 10 hours.
          The maximum amount of results you can fetch in one request is 5000 for the Startup and
          Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?limit=10">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?limit=10"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?interval=hour&limit=50' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?interval=hour&limit=50', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?interval=hour&limit=50",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "x-access-token: your-api-key"
      ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/rank-history?interval=hour&limit=50", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "history": [
      {
        "startingAt": 1698310800,
        "tier": "1",
        "marketCapRank": "1",
        "fullyDilutedMarketCapRank": "1",
        "volumeRank": "2",
        "priceRank": "2"
      },
      {
        "startingAt": 1698307200,
        "tier": "1",
        "marketCapRank": "1",
        "fullyDilutedMarketCapRank": "1",
        "volumeRank": "2",
        "priceRank": "2"
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.history</span> `Object[]` | <p>List of rank items</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.startingAt</span> `Number` | <p>An Epoch timestamp in seconds marking the start of the time period on which the rank values are based.</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.tier</span> `String/null` | <p>Tier of the coin. We have <a href="https://support.coinranking.com/article/56-how-do-we-rank-cryptocurrencies">three distinct tiers</a>.</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.marketCapRank</span> `String/null` | <p>The rank of the coin based on market cap. This is the rank we use on our website by default. time period</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.fullyDilutedMarketCapRank</span> `String/null` | <p>The rank of the coin based on fully diluted market cap. Fully diluted market cap is a coin's price multiplied by its max supply. Or total supply if the max supply is not known.</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.volumeRank</span> `String/null` | <p>Market cap based on its trading volume in the past 24 hours.</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.priceRank</span> `String/null` | <p>The rank of the coin based on how much US Dollars just one unit of the coin is worth. This metric greatly favors coins with a low supply.</p> |


## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| COIN_NOT_FOUND `Object` | <p>The coin could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |

</b-tab>
</b-tabs>

---

# Get coin supply history

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>
  With the coin supplies endpoint you can check out a coin's historical amount of supplies. You can
  <a href="https://support.coinranking.com/article/108-what-is-the-coin-supply">read more about supplies in our FAQ.</a>
</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/coin/:uuid/supply-history</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/coin/:uuid/supply-history" button-text='Copy' :light="true"></copy-button>
```


## Path parameters

| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | <p>UUID of the coin you want to request the supply data for. A UUID is our unique identifier for each coin. You can find them in all our coin endpoints, or look them up in the <a href="/api/documentation/find-uuids-slugs">find UUID page</a>.</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>The interval determines the time period over which each supply item is determined.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">day</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">hour</span>
        <span class="docs-badge__item">day</span>
        <span class="docs-badge__item">week</span>
        <span class="docs-badge__item">month</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?interval=hour">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?interval=hour
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?interval=hour"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Limit the amount of time periods for which the supplies are retrieved. For
          example, when interval=hour and limit is 10, data will be returned for the last 10 hours.
          The maximum amount of results you can fetch in one request is 5000 for the Startup and
          Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?limit=10">
            https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?limit=10"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?interval=hour&limit=50' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?interval=hour&limit=50', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?interval=hour&limit=50",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "x-access-token: your-api-key"
      ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/supply-history?interval=hour&limit=50", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "history": [
      {
        "timestamp": 1698624000,
        "circulating": "19527731",
        "total": "19527731"
      },
      {
        "timestamp": 1698537600,
        "circulating": "19526875",
        "total": "19526875"
      },
      {
        "timestamp": 1698451200,
        "circulating": "19525868",
        "total": "19525868"
      }
    ]
  }
}
```


### Response fields

| Parameter | Description                           |
|-----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.history</span> `Object[]` | <p>List of supply items</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.timestamp</span> `Number` | <p>An Epoch timestamp in seconds</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.circulating</span> `String/null` | <p>the circulating supply in US Dollars</p> |
| <span class="doc__field">data</span><span class="doc__field">.history</span><span class="doc__field">.total</span> `String/null` | <p>the total supply in US Dollars</p> |


## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|------------|---------------------------------------|
| COIN_NOT_FOUND `Object` | <p>The coin could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|------------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |

</b-tab>
</b-tabs>

---

# Blockchains

Blockchains are where all the listed coins are minted on. We support a wide range of blockchains,
including Bitcoin, Ethereum, Binance Smart Chain, and many more.

## Endpoints

- [Blockchains](/api/documentation/blockchains/blockchains)<br> Gets you a list of all the blockchains listed by Coinranking.
- [Blockchain details](/api/documentation/blockchains/blockchain-details)<br> Gets you more specific information about a blockchain, such as the amount of coins listed for the requested blockchain.
- [Blockchain contract address](/api/documentation/blockchains/blockchain-contract-address)<br> To directly check if coinranking has listed a specific coin, by its smart contract address. All our coin related endpoints work with uuids, which are random strings to identify coins specifically with coinrankings database. If you just have a smart contract address for a coin minted on Ethereum, you might not know the uuid we use. You can then use this endpoint to get the appropriate uuid.

---

# Get blockchains

<p>Get a list of all blockchains. You can use the names in the list to request more details about a specific blockchain in our blockchain details endpoint, and you can use our Get UUID by contract address endpoint to find out if we have listed a specific token on one of these chains.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/blockchains</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/blockchains" button-text='Copy' :light="true"></copy-button>
```

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl https://api.coinranking.com/v2/blockchains \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/blockchains', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/blockchains",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/blockchains", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "blockchains": [
      "bitcoin",
      "eos",
      "ethereum",
      "tron"
    ]
  }
}
```


### Response fields

| Property | Description                           |
|-------------------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.blockchains</span> `Object[]` | <p>List of blockchains</p> |

---

# Get blockchain details


<p>Find a blockchain</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/blockchain/:name</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/blockchain/:name" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| blockchain `String` | <p>Name of the blockchain you want to request. You can find a list of all possible values by making a request to [blockchains endpoint](/api/documentation/blockchains/blockchains).</p> |

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl https://api.coinranking.com/v2/blockchain/ethereum \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/blockchain/ethereum', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/blockchain/ethereum",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/blockchain/ethereum", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "blockchain": {
        "name": "ethereum",
        "totalCoins": 2
      }
    }
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.blockchain</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.blockchain</span><span class="doc__field">.name</span> `String` | <p>Name of the blockchain</p> |
| <span class="doc__field">data</span><span class="doc__field">.blockchain</span><span class="doc__field">.totalCoins</span> `Number/null` | <p>Amount of coins listed for this blockchain</p> |


## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "BLOCKCHAIN_NOT_FOUND",
  "message": "Blockchain not found. Find a list of possible values at https://api.coinranking.com/v2/blockchains"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|-------|---------------------------------------|
| BLOCKCHAIN_NOT_FOUND `Object` | <p>The blockchain could not be found.</p> |

</b-tab>
</b-tabs>

---

# Get UUID by contract address


<p>Find a specific coin by the contract address on its blockchain. We use the term contract address, but the name differs per ecosystem. For example, in Ethereum, it's called a smart contract address, others call it a token address, assetID, or something else.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/blockchain/:blockchain/:address</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/blockchain/:blockchain/:address" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| blockchain `String` | <p>Name of the blockchain you want to request. You can find a list of all possible values by making a request to our [blockchains endpoint](/api/documentation/blockchains/blockchains).</p> |
| address  `String` | <p>Address of the token you want to request. This is the same address as is used on the blockchain the token is minted on. For example, the Tether (USDT) contract address on Ethereum is 0xdac17f958d2ee523a2206206994597c13d831ec7. In our case, the address is case-insensitive.</p> |

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl https://api.coinranking.com/v2/blockchain/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7 \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/blockchain/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/blockchain/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/blockchain/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "coin": {
      "uuid": "razxDUgYGNAdQ",
      "name": "Ethereum",
      "symbol": "ETH",
      "contractAddresses": [
        "ethereum/0xNative",
        "bitcoin/0xBtc"
      ],
      "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth"
    }
  }
}
```


### Response fields

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.UUID</span> <code>String</code></td>
      <td><p>Uuid of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.name</span> <code>String</code></td>
      <td><p>Name of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.symbol</span> <code>String</code></td>
      <td><p>Symbol of the coin (e.g. BTC, ETH, XRP)</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.contractAddresses</span> <code>Object[]</code></td>
      <td>
        <p>
          List of contract addresses for this coin. The format is
          <code>blockchain/contractAddress</code>. A single coin can be minted on multiple
          blockchains. For example, Tether (USDT) is available on Ethereum
          <span v-b-tooltip.hover class="font-italic" title="ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7">
            (ethereum/0xda...)
          </span> Bitcoin Cash
          <span v-b-tooltip.hover class="font-italic" title="bitcoin-cash/9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11">
            (bitcoin-cash/9fc...)
          </span> and seven other blockchains.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coin</span><span class="doc__field">.coinrankingUrl</span> <code>String</code></td>
      <td><p>Where to find the coin on coinranking.com</p></td>
    </tr>
  </tbody>
</table>



## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "COIN_NOT_FOUND",
  "message": "Coin not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|-------|---------------------------------------|
| COIN_NOT_FOUND `Object` | <p>The coin could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|-------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |

</b-tab>
</b-tabs>

---

# Exchanges

Exchanges refer to centralized exchanges (CEXs) where cryptocurrencies are traded, such as
<a href="https://coinranking.com/exchange/-zdvbieRdZ+binance">Binance</a>,
<a href="https://coinranking.com/exchange/qn5ZJmPFP+coinbase-pro">Coinbase</a>,
and <a href="https://coinranking.com/exchange/TjMe3QlK0+bybit">Bybit</a>.
We calculate the prices of coins based on the tickers coming from these exchanges.

## Endpoints

- [Exchanges](/api/documentation/exchanges/exchanges)<br> Get a list of centralized exchanges. For each of these exchanges coinranking has built a driver and periodically fetches price data.
- [Exchange details](/api/documentation/exchanges/exchange-details)<br> More specific information about a centralized exchange, such as links to its socials.
- [Exchange coin listings](/api/documentation/exchanges/exchange-coin-listings)<br> You can fetch coins listed on a specific centralized exchange through our API.
- [Exchange new coin listings](/api/documentation/exchanges/exchange-new-coin-listings)<br> You can fetch the latest coins listed on a specific centralized exchange through our API.
- [Exchange list of markets](/api/documentation/exchanges/exchange-list-of-markets)<br> You can fetch the markets on a specific centralized exchange with our API.

---

# Get list of exchanges

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get a list of exchanges. Exchanges are ranked based on their trading volume in the last 24 hours.</p> <p>On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchanges/centralized">Centralized exchange ranking page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/exchanges</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/exchanges" button-text='Copy' :light="true"></copy-button>
```


## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. Only usable when no filters are applied. The maximum amount of
          results you can fetch in one request is 5000 for the Startup and Professional plan, and
          100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span><br>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?limit=10">
            https://api.coinranking.com/v2/exchanges?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?offset=50">
            https://api.coinranking.com/v2/exchanges?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Order by either 24h volume, number of markets or latest ticker. Ordering can only be done
          when no filters are applied.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">numberOfMarkets</span>
        <span class="docs-badge__item">lastTickerCreatedAt</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?orderBy=24hVolume">
            https://api.coinranking.com/v2/exchanges?orderBy=24hVolume
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?orderBy=24hVolume"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Applies direction to the orderBy query, which can be in ascending or descending order.
          Only usable when no filters are applied.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?orderDirection=asc">
            https://api.coinranking.com/v2/exchanges?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>uuids <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>Exchange UUIDs to filter the exchanges on.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?uuids[]=-zdvbieRdZ&uuids[]=kKbFzL8Tp70u">
            https://api.coinranking.com/v2/exchanges?uuids[]=-zdvbieRdZ&uuids[]=kKbFzL8Tp70u
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?uuids[]=-zdvbieRdZ&uuids[]=kKbFzL8Tp70u"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Value to search for within results, e.g. exchange names.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?search=binance">
            https://api.coinranking.com/v2/exchanges?search=binance
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?search=binance"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/exchanges?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
    <tr>
      <td>countries <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>Filter exchanges by supported countries using ISO 3166-1 alpha-2 country codes. Returns only exchanges that support trading in at least one of the specified countries. See the <a href="https://coinranking.com/api/documentation/exchanges/exchange-details#country-codes-reference">country codes reference</a> for a full list of supported codes.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?countries[]=US&countries[]=GB">
            https://api.coinranking.com/v2/exchanges?countries[]=US&countries[]=GB
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?countries[]=US&countries[]=GB"></copy-button>
      </td>
    </tr>
    <tr>
      <td>fiatCurrencyUuids <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>Filter exchanges by fiat currencies they support for trading pairs, using each currency's UUID. Returns only exchanges that support at least one of the specified fiat currencies. You can find fiat currency UUIDs in the <a href="/api/documentation/reference-currencies">reference currencies endpoint</a> using <code>?types[]=fiat</code>.</p>
        <span class="docs-badge">Single value example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?fiatCurrencyUuids[]=yhjMzLPhuIDl">
            https://api.coinranking.com/v2/exchanges?fiatCurrencyUuids[]=yhjMzLPhuIDl
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?fiatCurrencyUuids[]=yhjMzLPhuIDl"></copy-button>
        <br/>
        <span class="docs-badge">Multiple values example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchanges?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/exchanges?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchanges?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/exchanges?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "24hVolume": "262456688815",
      "total": 99
    },
    "exchanges": [
      {
          "uuid": "-zdvbieRdZ",
          "rank": 3,
          "name": "Binance",
          "iconUrl": "https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
          "verified": false,
          "recommended": true,
          "numberOfMarkets": 1566,
          "numberOfCoins": 433,
          "marketShare": "5.15",
          "coinrankingUrl": "https://coinranking.com/exchange/-zdvbieRdZ+binance",
          "24hVolume": "19403991893"
        },
        {
          "uuid": "-4x6SL_Cv",
          "rank": 5,
          "name": "KuCoin",
          "iconUrl": "https://cdn.coinranking.com/A-hAjR-hN/kucoin.png",
          "verified": false,
          "recommended": true,
          "numberOfMarkets": 2399,
          "numberOfCoins": 983,
          "marketShare": "3.7",
          "coinrankingUrl": "https://coinranking.com/exchange/-4x6SL_Cv+kucoin",
          "24hVolume": "13922027316"
        }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextCursor": "eyJ0IjoxLCJyIjo2OTM5NzYxNzYuOTA2MzQxLCJ1IjoiWEhwOGVDaklEYyIsIm8iOiIyNGhWb2x1bWUiLCJkIjoiZGVzYyJ9",
    "previousCursor": null
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.24hVolume</span> `String` | <p>Total 24h volume of exchanges in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span> `Object[]` | <p>List of exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.name</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.verified</span> `Boolean` | <p>DEPRECATED Exchanges that are verified to not participate in harmful practices such as wash trading are marked as verified.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the exchange is recommended based on our criteria, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.numberOfMarkets</span> `Number` | <p>Number of markets of the exchange paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.numberOfCoins</span> `Number` | <p>Number of coins of the exchange paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.24hVolume</span> `String` | <p>Total volume in 24 hours</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the exchange based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total exchange volume reprented by this exchange.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.coinrankingUrl</span> `String` | <p>Where to find the exchange on coinranking.com</p> |
| <span class="doc__field">pagination</span> `Object` | <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.limit</span> `Number` | <p>The number of results per page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> `Boolean` | <p>Whether there are more results available after the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> `Boolean` | <p>Whether there are results available before the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> `String/null` | <p>Cursor to use for the next page, or null if there are no more results</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> `String/null` | <p>Cursor to use for the previous page, or null if on the first page</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR  `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |
| INVALID_CURSOR `Object` | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH `Object` | <p>The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT `Object` | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# Get exchange details

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Find information on a specific exchange listed on coinranking. An exchange is a centralized exchange (CEX) where cryptocurrencies are traded.</p> <p>On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchange/-zdvbieRdZ+binance">exchange detail page</a>.</p>


```
<span class="link">https://api.coinranking.com/v2<strong>/exchange/:uuid</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/exchange/:uuid" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the exchange you want to request. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/exchange/-zdvbieRdZ?referenceCurrencyUuid=5k-_VTxqtCEI' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/exchange/-zdvbieRdZ?referenceCurrencyUuid=5k-_VTxqtCEI', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/exchange/-zdvbieRdZ?referenceCurrencyUuid=5k-_VTxqtCEI",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/exchange/-zdvbieRdZ?referenceCurrencyUuid=5k-_VTxqtCEI", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "exchange": {
      "numberOfMarkets": 3,
      "numberOfCoins": 59,
      "24hVolume": "776337030.2052088",
      "uuid": "-zdvbieRdZ",
      "name": "Binance",
      "description": "Binance is a blockchain ecosystem cryptocurrency exchange.",
      "iconUrl": "https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
      "websiteUrl": "https://www.binance.com/",
      "verified": true,
      "recommended": true,
      "lastTickerCreatedAt": 1546959293000,
      "links": [
        {
          "name": "binance.com",
          "url": "https://www.binance.com/en/register?ref=35424440",
          "type": "website"
        },
        {
          "name": "Support",
          "url": "https://www.binance.com/en/support",
          "type": "website"
        },
        {
          "name": "binance",
          "url": "https://www.facebook.com/binance",
          "type": "facebook"
        }
      ],
      "rank": 1,
      "marketShare": "12.2209741947213",
      "coinrankingUrl": "https://coinranking.com/exchange/-zdvbieRdZ+binance",
      "delistedAt": null,
      "notices": [
        {
          "type":"DELISTED",
          "value":"This exchange is inactive on Coinranking. Its data is not up to date."
        }
      ],
      "tags": [
        "cex"
      ],
      "supportedCountries": ["AD", "AL", "AM", "AO", "AG", "AR", "AW", "AT", "AZ", "BS", "BH", "BD", "BB"],
      "supportedFiatCurrencies": {
        "total": 10,
        "fiats": [
          {
            "uuid": "5k-_VTxqtCEI",
            "name": "Euro",
            "symbol": "EUR"
          },
          {
            "uuid": "6mUvpzCc2lFo",
            "name": "Turkish Lira",
            "symbol": "TRY"
          }
        ]
      },
      "trustDetails": {
        "foundingCountry": "CN",
        "foundingDate": 1499990400000
      }
    }
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.name</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.description</span> `String` | <p>Description of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.websiteUrl</span> `String` | <p>Website URL to the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.verified</span> `Boolean` | <p>DEPRECATED A verified exchange is verified to not participate in harmful practices such as wash trading.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the exchange is recommended based on our criteria, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.numberOfMarkets</span> `Number` | <p>Number of markets of the exchange paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.numberOfCoins</span> `Number` | <p>Number of coins listed for this exchange on Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.24hVolume</span> `String` | <p>Total volume in 24 hours</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.lastTickerCreatedAt</span> `Number` | <p>Timestamp of the latest ticker</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.links</span> `Object[]` | <p>List of links, like social media pages</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.links</span><span class="doc__field">.name</span> `String` | <p>Name of the link</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.links</span><span class="doc__field">.url</span> `String` | <p>Url to the specific link</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.links</span><span class="doc__field">.type</span> `String` | <p>The type of link</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">website</span> <span class="docs-badge__item">bitcointalk</span> <span class="docs-badge__item">explorer</span> <span class="docs-badge__item">discord</span> <span class="docs-badge__item">facebook</span> <span class="docs-badge__item">github</span> <span class="docs-badge__item">instagram</span> <span class="docs-badge__item">line-messenger</span> <span class="docs-badge__item">linkedin</span> <span class="docs-badge__item">medium</span> <span class="docs-badge__item">qq</span> <span class="docs-badge__item">quora</span> <span class="docs-badge__item">reddit</span> <span class="docs-badge__item">sina-weibo</span> <span class="docs-badge__item">telegram</span> <span class="docs-badge__item">tiktok</span> <span class="docs-badge__item">twitter</span> <span class="docs-badge__item">vkontakte</span> <span class="docs-badge__item">wechat</span> <span class="docs-badge__item">whitepaper</span> <span class="docs-badge__item">youtube</span> <span class="docs-badge__item">etc.</span> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the exchange based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total exchange volume represented by this exchange.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.coinrankingUrl</span> `String` | <p>Where to find the exchange on coinranking.com</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.delistedAt</span> `String/null` | <p>The date at which an exchange is delisted at Coinranking, which means no new data is being fetched from the exchange. This is done when an exchange ceases to exist or is hard to reach. When the value is null, the exchange is not delisted.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.notices</span> `Object[]` | <p>List of notices, which signal some important information about the exchange. E.g. that the exchange has been delisted and no new price data is being fetched from it. The notices are in JSON format, and in most cases consist of a &quot;type&quot; property with an important keyword such as &quot;DELISTED&quot;, and a more human readable message in a &quot;value&quot; property.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.tags</span> `Object[]` | <p>List of tags, like &quot;DEX&quot; or &quot;CEX&quot;</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedCountries</span> `String[]` | <p>Array of ISO country codes supported by the exchange (e.g., ["US", "GB", "DE"]). Only includes countries where the exchange allows users to trade. See <a href="#country-codes-reference">Country Codes Reference</a> for a complete list of country codes and names.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span> `Object` | <p>Fiat currencies supported by the exchange for trading pairs</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.total</span> `Number` | <p>Total number of supported fiat currencies</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.fiats</span> `Object[]` | <p>List of supported fiat currencies with UUID, name, and symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.fiats</span><span class="doc__field">.uuid</span> `String` | <p>Unique identifier for the fiat currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.fiats</span><span class="doc__field">.name</span> `String` | <p>Full name of the fiat currency (e.g., "Euro", "Turkish Lira")</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.fiats</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol (e.g., "EUR", "TRY")</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.trustDetails</span> `Object` | <p>Trust and founding information about the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.trustDetails</span><span class="doc__field">.foundingCountry</span> `String` | <p>ISO 3166-1 alpha-2 country code where the exchange was founded (e.g., "CN" for China). See <a href="#country-codes-reference">Country Codes Reference</a> for the complete list.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.trustDetails</span><span class="doc__field">.foundingDate</span> `Number` | <p>Timestamp when the exchange was founded</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error    | Description                           |
|----------|---------------------------------------|
| EXCHANGE_NOT_FOUND `Object` | <p>The exchange could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

## Country Codes Reference

The `supportedCountries` field returns an array of [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. Below is the complete reference of all country codes and their corresponding country names:

| Code | Country Name |
|------|-------------|
| AD | Andorra |
| AE | United Arab Emirates |
| AF | Afghanistan |
| AG | Antigua and Barbuda |
| AI | Anguilla |
| AL | Albania |
| AM | Armenia |
| AO | Angola |
| AQ | Antarctica |
| AR | Argentina |
| AS | American Samoa |
| AT | Austria |
| AU | Australia |
| AW | Aruba |
| AX | Aland |
| AZ | Azerbaijan |
| BA | Bosnia and Herzegovina |
| BB | Barbados |
| BD | Bangladesh |
| BE | Belgium |
| BF | Burkina Faso |
| BG | Bulgaria |
| BH | Bahrain |
| BI | Burundi |
| BJ | Benin |
| BL | Saint Barthelemy |
| BM | Bermuda |
| BN | Brunei |
| BO | Bolivia |
| BQ | Bonaire |
| BR | Brazil |
| BS | Bahamas |
| BT | Bhutan |
| BV | Bouvet Island |
| BW | Botswana |
| BY | Belarus |
| BZ | Belize |
| CA | Canada |
| CC | Cocos (Keeling) Islands |
| CD | Democratic Republic of the Congo |
| CF | Central African Republic |
| CG | Republic of the Congo |
| CH | Switzerland |
| CI | Ivory Coast |
| CK | Cook Islands |
| CL | Chile |
| CM | Cameroon |
| CN | China |
| CO | Colombia |
| CR | Costa Rica |
| CU | Cuba |
| CV | Cape Verde |
| CW | Curacao |
| CX | Christmas Island |
| CY | Cyprus |
| CZ | Czech Republic |
| DE | Germany |
| DJ | Djibouti |
| DK | Denmark |
| DM | Dominica |
| DO | Dominican Republic |
| DZ | Algeria |
| EC | Ecuador |
| EE | Estonia |
| EG | Egypt |
| EH | Western Sahara |
| ER | Eritrea |
| ES | Spain |
| ET | Ethiopia |
| FI | Finland |
| FJ | Fiji |
| FK | Falkland Islands |
| FM | Micronesia |
| FO | Faroe Islands |
| FR | France |
| GA | Gabon |
| GB | United Kingdom |
| GD | Grenada |
| GE | Georgia |
| GF | French Guiana |
| GG | Guernsey |
| GH | Ghana |
| GI | Gibraltar |
| GL | Greenland |
| GM | Gambia |
| GN | Guinea |
| GP | Guadeloupe |
| GQ | Equatorial Guinea |
| GR | Greece |
| GS | South Georgia and the South Sandwich Islands |
| GT | Guatemala |
| GU | Guam |
| GW | Guinea-Bissau |
| GY | Guyana |
| HK | Hong Kong |
| HM | Heard Island and McDonald Islands |
| HN | Honduras |
| HR | Croatia |
| HT | Haiti |
| HU | Hungary |
| ID | Indonesia |
| IE | Ireland |
| IL | Israel |
| IM | Isle of Man |
| IN | India |
| IO | British Indian Ocean Territory |
| IQ | Iraq |
| IR | Iran |
| IS | Iceland |
| IT | Italy |
| JE | Jersey |
| JM | Jamaica |
| JO | Jordan |
| JP | Japan |
| KE | Kenya |
| KG | Kyrgyzstan |
| KH | Cambodia |
| KI | Kiribati |
| KM | Comoros |
| KN | Saint Kitts and Nevis |
| KP | North Korea |
| KR | South Korea |
| KW | Kuwait |
| KY | Cayman Islands |
| KZ | Kazakhstan |
| LA | Laos |
| LB | Lebanon |
| LC | Saint Lucia |
| LI | Liechtenstein |
| LK | Sri Lanka |
| LR | Liberia |
| LS | Lesotho |
| LT | Lithuania |
| LU | Luxembourg |
| LV | Latvia |
| LY | Libya |
| MA | Morocco |
| MC | Monaco |
| MD | Moldova |
| ME | Montenegro |
| MF | Saint Martin |
| MG | Madagascar |
| MH | Marshall Islands |
| MK | North Macedonia |
| ML | Mali |
| MM | Myanmar |
| MN | Mongolia |
| MO | Macao |
| MP | Northern Mariana Islands |
| MQ | Martinique |
| MR | Mauritania |
| MS | Montserrat |
| MT | Malta |
| MU | Mauritius |
| MV | Maldives |
| MW | Malawi |
| MX | Mexico |
| MY | Malaysia |
| MZ | Mozambique |
| NA | Namibia |
| NC | New Caledonia |
| NE | Niger |
| NF | Norfolk Island |
| NG | Nigeria |
| NI | Nicaragua |
| NL | Netherlands |
| NO | Norway |
| NP | Nepal |
| NR | Nauru |
| NU | Niue |
| NZ | New Zealand |
| OM | Oman |
| PA | Panama |
| PE | Peru |
| PF | French Polynesia |
| PG | Papua New Guinea |
| PH | Philippines |
| PK | Pakistan |
| PL | Poland |
| PM | Saint Pierre and Miquelon |
| PN | Pitcairn Islands |
| PR | Puerto Rico |
| PS | Palestine |
| PT | Portugal |
| PW | Palau |
| PY | Paraguay |
| QA | Qatar |
| RE | Reunion |
| RO | Romania |
| RS | Serbia |
| RU | Russia |
| RW | Rwanda |
| SA | Saudi Arabia |
| SB | Solomon Islands |
| SC | Seychelles |
| SD | Sudan |
| SE | Sweden |
| SG | Singapore |
| SH | Saint Helena |
| SI | Slovenia |
| SJ | Svalbard and Jan Mayen |
| SK | Slovakia |
| SL | Sierra Leone |
| SM | San Marino |
| SN | Senegal |
| SO | Somalia |
| SR | Suriname |
| SS | South Sudan |
| ST | Sao Tome and Principe |
| SV | El Salvador |
| SX | Sint Maarten |
| SY | Syria |
| SZ | Eswatini |
| TC | Turks and Caicos Islands |
| TD | Chad |
| TF | French Southern Territories |
| TG | Togo |
| TH | Thailand |
| TJ | Tajikistan |
| TK | Tokelau |
| TL | East Timor |
| TM | Turkmenistan |
| TN | Tunisia |
| TO | Tonga |
| TR | Türkiye |
| TT | Trinidad and Tobago |
| TV | Tuvalu |
| TW | Taiwan |
| TZ | Tanzania |
| UA | Ukraine |
| UG | Uganda |
| UM | U.S. Minor Outlying Islands |
| US | United States |
| UY | Uruguay |
| UZ | Uzbekistan |
| VA | Vatican City |
| VC | Saint Vincent and the Grenadines |
| VE | Venezuela |
| VG | British Virgin Islands |
| VI | U.S. Virgin Islands |
| VN | Vietnam |
| VU | Vanuatu |
| WF | Wallis and Futuna |
| WS | Samoa |
| XK | Kosovo |
| YE | Yemen |
| YT | Mayotte |
| ZA | South Africa |
| ZM | Zambia |
| ZW | Zimbabwe |

<div class="border border-info rounded p-3 mt-4">
  <span class="badge badge-info">Note</span>
  <p class="mb-0">The <code>supportedCountries</code> array only includes countries where the exchange allows trading. Countries not listed in the response are either restricted or not supported by that specific exchange.</p>
</div>

---

# Get exchange coin listings

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Find coins listed on a specific exchange. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchange/-zdvbieRdZ+binance/coins">exchange coin listings page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/exchange/:uuid/coins</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/exchange/:uuid/coins" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | <p>UUID of the exchange you want to request</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used to
          calculate the volume. Defaults to US Dollar, but you can use any coin. You can find UUIDs
          for reference currencies in any coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?limit=10">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?offset=50">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Index to sort on. Default is 24h volume</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">price</span>
        <span class="docs-badge__item">numberOfMarkets</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?orderBy=numberOfMarkets">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?orderBy=numberOfMarkets
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?orderBy=numberOfMarkets"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>order in ascending or descending order</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">asc</span>
        <span class="docs-badge__item">desc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?orderDirection=asc">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Filter the results by searching for coin names or symbols.</p>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?search=bitcoin">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?search=bitcoin
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?search=bitcoin"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=numberOfMarkets' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=numberOfMarkets', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=numberOfMarkets",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=numberOfMarkets", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "total": 3
    },
    "coins": [
      {
        "rank": 3,
        "uuid": "ETHxDUgYGNAdQ",
        "symbol": "ETH",
        "name": "Ethereum",
        "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        "price": "203",
        "btcPrice": "0.3",
        "24hVolume": "380",
        "numberOfMarkets": 2,
        "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth"
      },
      {
        "rank": 2,
        "uuid": "USDxDUgYGNAdQ",
        "symbol": "USDT",
        "name": "Tether",
        "iconUrl": "https://cdn.coinranking.com/SJs1nH_OZ/usdt.svg",
        "price": "1",
        "btcPrice": "0.0055573924999568905",
        "24hVolume": "2795542.586905519",
        "numberOfMarkets": 2,
        "coinrankingUrl": "https://coinranking.com/coin/HIVsRcGKkPFtW+tether-usdt"
      }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": false,
    "hasPreviousPage": false,
    "nextCursor": null,
    "previousCursor": null
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of coins</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span> `Object[]` |  |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.rank</span> `String` | <p>The rank for this coin in this exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.name</span> `String` | <p>Name of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.price</span> `String` | <p>Price of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.btcPrice</span> `String` | <p>Price of the coin expressed in Bitcoin.</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.24hVolume</span> `String` | <p>24h trade volume</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.numberOfMarkets</span> `Number` | <p>The amount of markets this coin is exchanged in on this exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.coinrankingUrl</span> `String` | <p>Where to find the coin on coinranking.com</p> |
| <span class="doc__field">pagination</span> `Object` | <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.limit</span> `Number` | <p>The number of results per page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> `Boolean` | <p>Whether there are more results available after the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> `Boolean` | <p>Whether there are results available before the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> `String/null` | <p>Cursor to use for the next page, or null if there are no more results</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> `String/null` | <p>Cursor to use for the previous page, or null if on the first page</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error    | Description                           |
|----------|---------------------------------------|
| EXCHANGE_NOT_FOUND `Object` | <p>The exchange could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |
| INVALID_CURSOR `Object` | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH `Object` | <p>The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT `Object` | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# Get exchange new coin listings

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Retrieve the latest coin listings on a specific exchange. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchange/-zdvbieRdZ+binance/new-coins">exchange new coin listings page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/exchange/:uuid/coins/new</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/exchange/:uuid/coins/new" button-text='Copy' :light="true"></copy-button>
```

## Path parameters

| Parameter     | Description                                     |
| ------------- | ----------------------------------------------- |
| uuid `String` | <p>UUID of the exchange you want to request</p> |

## Query parameters

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the market caps are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples

<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/exchange/-zdvbieRdZ/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response

```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "coins": [
      {
        "listedAt": 1742303129,
        "uuid": "a3IXgFhtN",
        "symbol": "BMT",
        "name": "Bubblemaps",
        "iconUrl": "https://cdn.coinranking.com/R1dKV2Onp/Bubblemaps.png",
        "price": "0.1433805008008976",
        "volume": "13704742.016513946"
      },
      {
        "listedAt": 1741698332,
        "uuid": "MU49Lzl6d",
        "symbol": "EPIC",
        "name": "Epic Chain",
        "iconUrl": "https://cdn.coinranking.com/3Iv5Rus_f/EPIC.png",
        "price": "1.339",
        "volume": "2564091.2873"
      },
      {
        "listedAt": 1741093527,
        "uuid": "1-Ajtrq28",
        "symbol": "GPS",
        "name": "GoPlus Security",
        "iconUrl": "https://cdn.coinranking.com/HZi3rfMQ4/GPS.png",
        "price": "0.03128404558295149",
        "volume": "6235184.12285391"
      }
    ]
  }
}
```

#### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span> <code>Object[]</code></td>
      <td><p>List of coins, ordered by <code>listedAt</code> in descending order</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.listedAt</span> <code>Number</code></td>
      <td><p>An Epoch timestamp in seconds</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.uuid</span> <code>String</code></td>
      <td><p>UUID of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.symbol</span> <code>String</code></td>
      <td><p>Currency symbol</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.name</span> <code>String</code></td>
      <td><p>Name of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.iconUrl</span> <code>String</code></td>
      <td><p>Location of the icon</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.price</span> <code>String</code></td>
      <td><p>Price of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.24hVolume</span> <code>String</code></td>
      <td><p>24h trade volume</p></td>
    </tr>
  </tbody>
</table>

## Error response

```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error                       | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| EXCHANGE_NOT_FOUND `Object` | <p>The exchange could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error                          | Description                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| VALIDATION_ERROR `Object`      | <p>The request could not be validated. The response should provide more details.</p>     |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get exchange list of markets

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Find markets on a specific exchange. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchange/-zdvbieRdZ+binance/markets">exchange markets page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/exchange/:uuid/markets</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/exchange/:uuid/markets" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the exchange. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used to
          calculate the volume. Defaults to US Dollar, but you can use any coin. You can find UUIDs
          for reference currencies in any coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?limit=10">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?offset=50">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Index to sort on. Default is 24h volume.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">price</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?orderBy=price">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?orderBy=price
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?orderBy=price"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Order in ascending or descending order</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?orderDirection=asc">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Value to search for within results, e.g. exchange names, currency names, or currency symbols</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?search=ethereum">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?search=ethereum
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?search=ethereum"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/exchange/-zdvbieRdZ/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "24hVolume": "2795922.586905519",
      "total": 3
    },
    "markets": [
      {
        "uuid": "xk9M2LuHuID5",
        "active": 1,
        "base": {
          "uuid": "Qwsogvtv82FCd",
          "symbol": "BTC"
        },
        "quote": {
          "symbol": "USD",
          "uuid": "yhjMzLPhuIDl"
        },
        "exchange": {
          "name": "Binance",
          "uuid": "-zdvbieRdZ",
          "iconUrl": "https://cdn.coinranking.com/d6w2Hj3z0/BitMEX.svg"
        },
        "24hVolume": "771875964.9750752",
        "price": "3842.9444791178726",
        "btcPrice": "1",
        "rank": 1,
        "marketShare": "30.48",
        "recommended": true,
        "filters": []
      },
      {
        "uuid": "bn7nTLHHuIq2",
        "active": 1,
        "base": {
          "uuid": "Qwsogvtv82FCd",
          "symbol": "BTC"
        },
        "quote": {
          "symbol": "USDT",
          "uuid": "HIVsRcGKkPFtW"
        },
        "exchange": {
          "name": "Coinbase Pro",
          "uuid": "qn5ZJmPFP",
          "iconUrl": "https://cdn.coinranking.com/Ama6htyHL/coinbase.svg"
        },
        "24hVolume": "311344830.86823833",
        "price": "3869.146354559396",
        "btcPrice": "1",
        "rank": 2,
        "marketShare": "12.35",
        "recommended": true,
        "filters": []
      }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": false,
    "hasPreviousPage": false,
    "nextCursor": null,
    "previousCursor": null
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.24hVolume</span> `String` | <p>Total 24h volume of markets in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of markets</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span> `Object[]` |  |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.active</span> `Number` | <p>If the market is enabled or not</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span> `String` | <p>The coin on the left side of the pair, which price is calculated in units of the quote</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span> `String` | <p>The coin on the right side of the pair. The amount in tickers are how much quote you get for one unit of base. E.g. BTC/USD 10.000 means 1 BTC is traded for 10.000 USD.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span> `String` | <p>Exchange this market belongs to</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.name</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.24hVolume</span> `String` | <p>24h volume of the latest ticker in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.price</span> `String` | <p>Price of the latest ticker in reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.btcPrice</span> `String` | <p>Price of the latest ticker expressed in Bitcoin.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the market based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total market volume reprented by this market, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the market is recommended based on the exchange it belongs to, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.filters</span> `String[]` | <p>An array of filters that are applied to the market. Most of the filters will cause the market to not be included in the price calculation of the coins.</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">PREV_FACTOR</span> <span class="docs-badge__item">EXTERNAL_ZSCORE</span> <span class="docs-badge__item">GEO</span> <span class="docs-badge__item">OUTSIDE_TOP_20</span> |
| <span class="doc__field">pagination</span> `Object` | <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.limit</span> `Number` | <p>The number of results per page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> `Boolean` | <p>Whether there are more results available after the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> `Boolean` | <p>Whether there are results available before the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> `String/null` | <p>Cursor to use for the next page, or null if there are no more results</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> `String/null` | <p>Cursor to use for the previous page, or null if on the first page</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error    | Description                           |
|----------|---------------------------------------|
| EXCHANGE_NOT_FOUND `Object` | <p>The exchange could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |
| INVALID_CURSOR `Object` | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH `Object` | <p>The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT `Object` | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# DEX Exchanges

DEXs (Decentralized Exchanges) are platforms where cryptocurrencies are traded without a central authority, such as
<a href="https://coinranking.com/exchange/5Sfs67ZcuOWm+uniswap">Uniswap</a>,
<a href="https://coinranking.com/exchange/oIbmZCdhy+pancakeswap-v2">PancakeSwap</a>,
and <a href="https://coinranking.com/exchange/PkGv7FaJSxFC+aerodrome">Aerodrome</a>.
We calculate the prices of coins based on the tickers coming from these exchanges.

## Endpoints

- [DEXs](/api/documentation/dexs/dexs)<br> Get a list of decentralized exchanges. For each of these exchanges coinranking has built a driver and periodically fetches price data.
- [DEX Protocols](/api/documentation/dexs/dex-protocols)<br> Get a list of DEX protocols (child exchanges). Shows all child DEX exchanges that are part of parent DEX exchanges.
- [DEX details](/api/documentation/dexs/dex-details)<br> More specific information about a decentralized exchange, such as links to its socials.
- [DEX coin listings](/api/documentation/dexs/dex-coin-listings)<br> You can fetch coins listed on a specific decentralized exchange through our API.
- [DEX new coin listings](/api/documentation/dexs/dex-new-coin-listings)<br> You can fetch the latest coins listed on a specific decentralized exchange through our API.
- [DEX list of markets](/api/documentation/dexs/dex-list-of-markets)<br> You can fetch the markets on a specific decentralized exchange with our API.

---

# Get list of DEXs

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get a list of DEXs (Decentralized Exchange). DEX exchanges are ranked based on their trading volume in the last 24 hours.</p> <p>On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchanges/decentralized">Decentralized exchange ranking page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/dexs</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/dexs" button-text='Copy' :light="true"></copy-button>
```


## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/dexs?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. Only usable when no filters are applied. The maximum amount of
          results you can fetch in one request is 5000 for the Startup and Professional plan, and
          100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span><br>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?limit=10">
            https://api.coinranking.com/v2/dexs?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?offset=50">
            https://api.coinranking.com/v2/dexs?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Order by either 24h volume, number of markets or latest ticker. Ordering can only be done
          when no filters are applied.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">numberOfMarkets</span>
        <span class="docs-badge__item">lastTickerCreatedAt</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?orderBy=24hVolume">
            https://api.coinranking.com/v2/dexs?orderBy=24hVolume
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?orderBy=24hVolume"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Applies direction to the orderBy query, which can be in ascending or descending order.
          Only usable when no filters are applied.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?orderDirection=asc">
            https://api.coinranking.com/v2/dexs?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>uuids <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>DEX Exchange UUIDs to filter the exchanges on.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?uuids[]=5Sfs67ZcuOWm&uuids[]=oIbmZCdhy">
            https://api.coinranking.com/v2/dexs?uuids[]=5Sfs67ZcuOWm&uuids[]=oIbmZCdhy
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?uuids[]=5Sfs67ZcuOWm&uuids[]=oIbmZCdhy"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Value to search for within results, e.g. exchange names.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?search=uniswap">
            https://api.coinranking.com/v2/dexs?search=uniswap
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?search=uniswap"></copy-button>
      </td>
    </tr>
    <tr>
      <td>countries <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>Filter exchanges by supported countries using ISO 3166-1 alpha-2 country codes. Returns only exchanges that support trading in at least one of the specified countries. See the <a href="https://coinranking.com/api/documentation/dexs/dex-details#country-codes-reference">country codes reference</a> for a full list of supported codes.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?countries[]=US&countries[]=GB">
            https://api.coinranking.com/v2/dexs?countries[]=US&countries[]=GB
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?countries[]=US&countries[]=GB"></copy-button>
      </td>
    </tr>
    <tr>
      <td>fiatCurrencyUuids <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>Filter exchanges by fiat currencies they support for trading pairs, using each currency's UUID. Returns only exchanges that support at least one of the specified fiat currencies. You can find fiat currency UUIDs in the <a href="/api/documentation/reference-currencies">reference currencies endpoint</a> using <code>?types[]=fiat</code>.</p>
        <span class="docs-badge">Single value example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?fiatCurrencyUuids[]=yhjMzLPhuIDl">
            https://api.coinranking.com/v2/dexs?fiatCurrencyUuids[]=yhjMzLPhuIDl
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?fiatCurrencyUuids[]=yhjMzLPhuIDl"></copy-button>
        <br/>
        <span class="docs-badge">Multiple values example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dexs?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/dexs?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dexs?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/dexs?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/dexs?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/dexs?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/dexs?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "24hVolume": "113105627347",
      "total": 44
    },
    "exchanges": [
      {
        "uuid": "5Sfs67ZcuOWm",
        "rank": 1,
        "name": "Uniswap",
        "iconUrl": "https://cdn.coinranking.com/k5ItQcYiD/uniswap.png",
        "verified": false,
        "recommended": true,
        "numberOfMarkets": 3723,
        "numberOfCoins": 2477,
        "marketShare": "9.25",
        "coinrankingUrl": "https://coinranking.com/exchange/5Sfs67ZcuOWm+uniswap",
        "24hVolume": "49074772334"
      },
      {
        "uuid": "qcKBLrOdF31B",
        "rank": 2,
        "name": "PancakeSwap",
        "iconUrl": "https://cdn.coinranking.com/TbFf6uLZA/pancake.png",
        "verified": false,
        "recommended": true,
        "numberOfMarkets": 2272,
        "numberOfCoins": 1628,
        "marketShare": "8.17",
        "coinrankingUrl": "https://coinranking.com/exchange/qcKBLrOdF31B+pancakeswap",
        "24hVolume": "43324019249"
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.24hVolume</span> `String` | <p>Total 24h volume of DEX exchanges in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of DEX exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span> `Object[]` | <p>List of DEX exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.name</span> `String` | <p>Name of the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.verified</span> `Boolean` | <p>DEPRECATED DEX exchanges that are verified to not participate in harmful practices such as wash trading are marked as verified.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the DEX exchange is recommended based on our criteria, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.numberOfMarkets</span> `Number` | <p>Number of markets of the DEX exchange paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.numberOfCoins</span> `Number` | <p>Number of coins of the DEX exchange paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.24hVolume</span> `String` | <p>Total volume in 24 hours</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the DEX exchange based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total DEX exchange volume represented by this exchange.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.coinrankingUrl</span> `String` | <p>Where to find the DEX exchange on coinranking.com</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR  `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get list of DEX protocols

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get a list of DEX (Decentralized Exchange) protocols. DEX protocols are child exchanges that are part of a parent DEX exchange. They are ranked based on their trading volume in the last 24 hours.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/dex-protocols</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols" button-text='Copy' :light="true"></copy-button>
```


## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/dex-protocols?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. Only usable when no filters are applied. The maximum amount of
          results you can fetch in one request is 5000 for the Startup and Professional plan, and
          100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span><br>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?limit=10">
            https://api.coinranking.com/v2/dex-protocols?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?offset=50">
            https://api.coinranking.com/v2/dex-protocols?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Order by either 24h volume, number of markets or latest ticker. Ordering can only be done
          when no filters are applied.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">numberOfMarkets</span>
        <span class="docs-badge__item">lastTickerCreatedAt</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?orderBy=24hVolume">
            https://api.coinranking.com/v2/dex-protocols?orderBy=24hVolume
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?orderBy=24hVolume"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Applies direction to the orderBy query, which can be in ascending or descending order.
          Only usable when no filters are applied.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?orderDirection=asc">
            https://api.coinranking.com/v2/dex-protocols?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>uuids <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>DEX Protocol UUIDs to filter the protocols on.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?uuids[]=5Sfs67ZcuOWm&uuids[]=oIbmZCdhy">
            https://api.coinranking.com/v2/dex-protocols?uuids[]=5Sfs67ZcuOWm&uuids[]=oIbmZCdhy
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?uuids[]=5Sfs67ZcuOWm&uuids[]=oIbmZCdhy"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Value to search for within results, e.g. protocol names.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?search=uniswap">
            https://api.coinranking.com/v2/dex-protocols?search=uniswap
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?search=uniswap"></copy-button>
      </td>
    </tr>
    <tr>
      <td>countries <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>Filter DEX protocols by supported countries using ISO 3166-1 alpha-2 country codes. Returns only protocols that support trading in at least one of the specified countries. See the <a href="https://coinranking.com/api/documentation/dexs/dex-details#country-codes-reference">country codes reference</a> for a full list of supported codes.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?countries[]=US&countries[]=GB">
            https://api.coinranking.com/v2/dex-protocols?countries[]=US&countries[]=GB
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?countries[]=US&countries[]=GB"></copy-button>
      </td>
    </tr>
    <tr>
      <td>fiatCurrencyUuids <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>Filter DEX protocols by fiat currencies they support for trading pairs, using each currency's UUID. Returns only protocols that support at least one of the specified fiat currencies. You can find fiat currency UUIDs in the <a href="/api/documentation/reference-currencies">reference currencies endpoint</a> using <code>?types[]=fiat</code>.</p>
        <span class="docs-badge">Single value example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?fiatCurrencyUuids[]=yhjMzLPhuIDl">
            https://api.coinranking.com/v2/dex-protocols?fiatCurrencyUuids[]=yhjMzLPhuIDl
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?fiatCurrencyUuids[]=yhjMzLPhuIDl"></copy-button>
        <br/>
        <span class="docs-badge">Multiple values example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex-protocols?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/dex-protocols?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex-protocols?fiatCurrencyUuids[]=yhjMzLPhuIDl&fiatCurrencyUuids[]=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/dex-protocols?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/dex-protocols?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/dex-protocols?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/dex-protocols?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=24hVolume", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "24hVolume": "111955679139",
      "total": 59
    },
    "exchanges": [
      {
        "uuid": "oIbmZCdhy",
        "name": "PancakeSwap v3 (BSC)",
        "iconUrl": "https://cdn.coinranking.com/3wigw7gEZ/pancakeswap.png",
        "verified": false,
        "recommended": true,
        "numberOfMarkets": 789,
        "numberOfCoins": 526,
        "marketShare": "11.37",
        "24hVolume": "38330704543"
      },
      {
        "uuid": "FeCJqGOi1",
        "name": "Uniswap v3 (Ethereum)",
        "iconUrl": "https://cdn.coinranking.com/j-19SX5s-/7083.png",
        "verified": false,
        "recommended": true,
        "numberOfMarkets": 675,
        "numberOfCoins": 412,
        "marketShare": "8.01",
        "24hVolume": "26984105104"
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.24hVolume</span> `String` | <p>Total 24h volume of DEX protocols in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of DEX protocols</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span> `Object[]` | <p>List of DEX protocols (child exchanges)</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the DEX protocol</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.name</span> `String` | <p>Name of the DEX protocol</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.verified</span> `Boolean` | <p>DEPRECATED DEX protocols that are verified to not participate in harmful practices such as wash trading are marked as verified.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the DEX protocol is recommended based on our criteria, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.numberOfMarkets</span> `Number` | <p>Number of markets of the DEX protocol paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.numberOfCoins</span> `Number` | <p>Number of coins of the DEX protocol paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.24hVolume</span> `String` | <p>Total volume in 24 hours</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total DEX protocol volume represented by this protocol.</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR  `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get DEX exchange details

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Find information on a specific DEX exchange listed on coinranking. A DEX (Decentralized Exchange) is a platform where cryptocurrencies are traded without a central authority.</p> <p>On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchange/5Sfs67ZcuOWm+uniswap">DEX exchange detail page</a>.</p>


```
<span class="link">https://api.coinranking.com/v2<strong>/dex/:uuid</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/dex/:uuid" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the DEX exchange you want to request. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm?referenceCurrencyUuid=5k-_VTxqtCEI' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm?referenceCurrencyUuid=5k-_VTxqtCEI', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm?referenceCurrencyUuid=5k-_VTxqtCEI",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm?referenceCurrencyUuid=5k-_VTxqtCEI", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "exchange": {
      "uuid": "5Sfs67ZcuOWm",
      "name": "Uniswap",
      "description": null,
      "iconUrl": "https://cdn.coinranking.com/k5ItQcYiD/uniswap.png",
      "websiteUrl": "https://app.uniswap.org/",
      "links": [
        {
          "name": "app.uniswap.org",
          "url": "https://app.uniswap.org/",
          "type": "website"
        },
        {
          "name": "discord.com",
          "url": "https://discord.com/invite/FCfyBSbCU5",
          "type": "discord"
        },
        {
          "name": "Uniswap/uniswap-interface",
          "url": "https://github.com/Uniswap/uniswap-interface",
          "type": "github"
        }
      ],
      "lastTickerCreatedAt": 1762918860000,
      "rank": 1,
      "marketShare": "13.19",
      "coinrankingUrl": "https://coinranking.com/exchange/5Sfs67ZcuOWm+uniswap",
      "24hVolume": "49646511999",
      "numberOfMarkets": 3692,
      "numberOfCoins": 2422,
      "verified": false,
      "recommended": true,
      "delistedAt": null,
      "notices": null,
      "tags": [
        "dex"
      ],
      "supportedCountries": [
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BV",
        "BW",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HM",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SZ",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM"
      ],
      "supportedFiatCurrencies": {
        "total": 0,
        "fiats": []
      },
      "trustDetails": {
        "foundingCountry": "US",
        "foundingDate": 1541030400000
      }
    }
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.name</span> `String` | <p>Name of the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.description</span> `String` | <p>Description of the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.websiteUrl</span> `String` | <p>Website URL to the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.verified</span> `Boolean` | <p>DEPRECATED A verified DEX exchange is verified to not participate in harmful practices such as wash trading.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the DEX exchange is recommended based on our criteria, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.numberOfMarkets</span> `Number` | <p>Number of markets of the DEX exchange paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.numberOfCoins</span> `Number` | <p>Number of coins listed for this DEX exchange on Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.24hVolume</span> `String` | <p>Total volume in 24 hours</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.lastTickerCreatedAt</span> `Number` | <p>Timestamp of the latest ticker</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.links</span> `Object[]` | <p>List of links, like social media pages</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.links</span><span class="doc__field">.name</span> `String` | <p>Name of the link</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.links</span><span class="doc__field">.url</span> `String` | <p>Url to the specific link</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.links</span><span class="doc__field">.type</span> `String` | <p>The type of link</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">website</span> <span class="docs-badge__item">bitcointalk</span> <span class="docs-badge__item">explorer</span> <span class="docs-badge__item">discord</span> <span class="docs-badge__item">facebook</span> <span class="docs-badge__item">github</span> <span class="docs-badge__item">instagram</span> <span class="docs-badge__item">line-messenger</span> <span class="docs-badge__item">linkedin</span> <span class="docs-badge__item">medium</span> <span class="docs-badge__item">qq</span> <span class="docs-badge__item">quora</span> <span class="docs-badge__item">reddit</span> <span class="docs-badge__item">sina-weibo</span> <span class="docs-badge__item">telegram</span> <span class="docs-badge__item">tiktok</span> <span class="docs-badge__item">twitter</span> <span class="docs-badge__item">vkontakte</span> <span class="docs-badge__item">wechat</span> <span class="docs-badge__item">whitepaper</span> <span class="docs-badge__item">youtube</span> <span class="docs-badge__item">etc.</span> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the DEX exchange based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total DEX exchange volume represented by this exchange.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.coinrankingUrl</span> `String` | <p>Where to find the DEX exchange on coinranking.com</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.delistedAt</span> `String/null` | <p>The date at which a DEX exchange is delisted at Coinranking, which means no new data is being fetched from the exchange. This is done when an exchange ceases to exist or is hard to reach. When the value is null, the exchange is not delisted.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.notices</span> `Object[]` | <p>List of notices, which signal some important information about the DEX exchange. E.g. that the exchange has been delisted and no new price data is being fetched from it. The notices are in JSON format, and in most cases consist of a &quot;type&quot; property with an important keyword such as &quot;DELISTED&quot;, and a more human readable message in a &quot;value&quot; property.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.tags</span> `Object[]` | <p>List of tags, like &quot;DEX&quot; or &quot;CEX&quot;</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedCountries</span> `String[]` | <p>Array of ISO country codes supported by the DEX exchange (e.g., ["US", "GB", "DE"]). Only includes countries where the exchange allows users to trade. See <a href="#country-codes-reference">Country Codes Reference</a> for a complete list of country codes and names.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span> `Object` | <p>Fiat currencies supported by the DEX exchange for trading pairs</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.total</span> `Number` | <p>Total number of supported fiat currencies</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.fiats</span> `Object[]` | <p>List of supported fiat currencies with UUID, name, and symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.fiats</span><span class="doc__field">.uuid</span> `String` | <p>Unique identifier for the fiat currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.fiats</span><span class="doc__field">.name</span> `String` | <p>Full name of the fiat currency (e.g., "Euro", "Turkish Lira")</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.supportedFiatCurrencies</span><span class="doc__field">.fiats</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol (e.g., "EUR", "TRY")</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.trustDetails</span> `Object` | <p>Trust and founding information about the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.trustDetails</span><span class="doc__field">.foundingCountry</span> `String` | <p>ISO 3166-1 alpha-2 country code where the DEX exchange was founded (e.g., "US" for United States). See <a href="#country-codes-reference">Country Codes Reference</a> for the complete list.</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchange</span><span class="doc__field">.trustDetails</span><span class="doc__field">.foundingDate</span> `Number` | <p>Timestamp when the DEX exchange was founded</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error    | Description                           |
|----------|---------------------------------------|
| EXCHANGE_NOT_FOUND `Object` | <p>The DEX exchange could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

## Country Codes Reference

The `supportedCountries` field returns an array of [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. Below is the complete reference of all country codes and their corresponding country names:

| Code | Country Name |
|------|-------------|
| AD | Andorra |
| AE | United Arab Emirates |
| AF | Afghanistan |
| AG | Antigua and Barbuda |
| AI | Anguilla |
| AL | Albania |
| AM | Armenia |
| AO | Angola |
| AQ | Antarctica |
| AR | Argentina |
| AS | American Samoa |
| AT | Austria |
| AU | Australia |
| AW | Aruba |
| AX | Aland |
| AZ | Azerbaijan |
| BA | Bosnia and Herzegovina |
| BB | Barbados |
| BD | Bangladesh |
| BE | Belgium |
| BF | Burkina Faso |
| BG | Bulgaria |
| BH | Bahrain |
| BI | Burundi |
| BJ | Benin |
| BL | Saint Barthelemy |
| BM | Bermuda |
| BN | Brunei |
| BO | Bolivia |
| BQ | Bonaire |
| BR | Brazil |
| BS | Bahamas |
| BT | Bhutan |
| BV | Bouvet Island |
| BW | Botswana |
| BY | Belarus |
| BZ | Belize |
| CA | Canada |
| CC | Cocos (Keeling) Islands |
| CD | Democratic Republic of the Congo |
| CF | Central African Republic |
| CG | Republic of the Congo |
| CH | Switzerland |
| CI | Ivory Coast |
| CK | Cook Islands |
| CL | Chile |
| CM | Cameroon |
| CN | China |
| CO | Colombia |
| CR | Costa Rica |
| CU | Cuba |
| CV | Cape Verde |
| CW | Curacao |
| CX | Christmas Island |
| CY | Cyprus |
| CZ | Czech Republic |
| DE | Germany |
| DJ | Djibouti |
| DK | Denmark |
| DM | Dominica |
| DO | Dominican Republic |
| DZ | Algeria |
| EC | Ecuador |
| EE | Estonia |
| EG | Egypt |
| EH | Western Sahara |
| ER | Eritrea |
| ES | Spain |
| ET | Ethiopia |
| FI | Finland |
| FJ | Fiji |
| FK | Falkland Islands |
| FM | Micronesia |
| FO | Faroe Islands |
| FR | France |
| GA | Gabon |
| GB | United Kingdom |
| GD | Grenada |
| GE | Georgia |
| GF | French Guiana |
| GG | Guernsey |
| GH | Ghana |
| GI | Gibraltar |
| GL | Greenland |
| GM | Gambia |
| GN | Guinea |
| GP | Guadeloupe |
| GQ | Equatorial Guinea |
| GR | Greece |
| GS | South Georgia and the South Sandwich Islands |
| GT | Guatemala |
| GU | Guam |
| GW | Guinea-Bissau |
| GY | Guyana |
| HK | Hong Kong |
| HM | Heard Island and McDonald Islands |
| HN | Honduras |
| HR | Croatia |
| HT | Haiti |
| HU | Hungary |
| ID | Indonesia |
| IE | Ireland |
| IL | Israel |
| IM | Isle of Man |
| IN | India |
| IO | British Indian Ocean Territory |
| IQ | Iraq |
| IR | Iran |
| IS | Iceland |
| IT | Italy |
| JE | Jersey |
| JM | Jamaica |
| JO | Jordan |
| JP | Japan |
| KE | Kenya |
| KG | Kyrgyzstan |
| KH | Cambodia |
| KI | Kiribati |
| KM | Comoros |
| KN | Saint Kitts and Nevis |
| KP | North Korea |
| KR | South Korea |
| KW | Kuwait |
| KY | Cayman Islands |
| KZ | Kazakhstan |
| LA | Laos |
| LB | Lebanon |
| LC | Saint Lucia |
| LI | Liechtenstein |
| LK | Sri Lanka |
| LR | Liberia |
| LS | Lesotho |
| LT | Lithuania |
| LU | Luxembourg |
| LV | Latvia |
| LY | Libya |
| MA | Morocco |
| MC | Monaco |
| MD | Moldova |
| ME | Montenegro |
| MF | Saint Martin |
| MG | Madagascar |
| MH | Marshall Islands |
| MK | North Macedonia |
| ML | Mali |
| MM | Myanmar |
| MN | Mongolia |
| MO | Macao |
| MP | Northern Mariana Islands |
| MQ | Martinique |
| MR | Mauritania |
| MS | Montserrat |
| MT | Malta |
| MU | Mauritius |
| MV | Maldives |
| MW | Malawi |
| MX | Mexico |
| MY | Malaysia |
| MZ | Mozambique |
| NA | Namibia |
| NC | New Caledonia |
| NE | Niger |
| NF | Norfolk Island |
| NG | Nigeria |
| NI | Nicaragua |
| NL | Netherlands |
| NO | Norway |
| NP | Nepal |
| NR | Nauru |
| NU | Niue |
| NZ | New Zealand |
| OM | Oman |
| PA | Panama |
| PE | Peru |
| PF | French Polynesia |
| PG | Papua New Guinea |
| PH | Philippines |
| PK | Pakistan |
| PL | Poland |
| PM | Saint Pierre and Miquelon |
| PN | Pitcairn Islands |
| PR | Puerto Rico |
| PS | Palestine |
| PT | Portugal |
| PW | Palau |
| PY | Paraguay |
| QA | Qatar |
| RE | Reunion |
| RO | Romania |
| RS | Serbia |
| RU | Russia |
| RW | Rwanda |
| SA | Saudi Arabia |
| SB | Solomon Islands |
| SC | Seychelles |
| SD | Sudan |
| SE | Sweden |
| SG | Singapore |
| SH | Saint Helena |
| SI | Slovenia |
| SJ | Svalbard and Jan Mayen |
| SK | Slovakia |
| SL | Sierra Leone |
| SM | San Marino |
| SN | Senegal |
| SO | Somalia |
| SR | Suriname |
| SS | South Sudan |
| ST | Sao Tome and Principe |
| SV | El Salvador |
| SX | Sint Maarten |
| SY | Syria |
| SZ | Eswatini |
| TC | Turks and Caicos Islands |
| TD | Chad |
| TF | French Southern Territories |
| TG | Togo |
| TH | Thailand |
| TJ | Tajikistan |
| TK | Tokelau |
| TL | East Timor |
| TM | Turkmenistan |
| TN | Tunisia |
| TO | Tonga |
| TR | Türkiye |
| TT | Trinidad and Tobago |
| TV | Tuvalu |
| TW | Taiwan |
| TZ | Tanzania |
| UA | Ukraine |
| UG | Uganda |
| UM | U.S. Minor Outlying Islands |
| US | United States |
| UY | Uruguay |
| UZ | Uzbekistan |
| VA | Vatican City |
| VC | Saint Vincent and the Grenadines |
| VE | Venezuela |
| VG | British Virgin Islands |
| VI | U.S. Virgin Islands |
| VN | Vietnam |
| VU | Vanuatu |
| WF | Wallis and Futuna |
| WS | Samoa |
| XK | Kosovo |
| YE | Yemen |
| YT | Mayotte |
| ZA | South Africa |
| ZM | Zambia |
| ZW | Zimbabwe |

<div class="border border-info rounded p-3 mt-4">
  <span class="badge badge-info">Note</span>
  <p class="mb-0">The <code>supportedCountries</code> array only includes countries where the DEX exchange allows trading. Countries not listed in the response are either restricted or not supported by that specific exchange.</p>
</div>

---

# Get DEX exchange coin listings

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Find coins listed on a specific DEX exchange. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchange/5Sfs67ZcuOWm+uniswap/coins">DEX exchange coin listings page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/dex/:uuid/coins</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/dex/:uuid/coins" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | <p>UUID of the DEX exchange you want to request</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used to
          calculate the volume. Defaults to US Dollar, but you can use any coin. You can find UUIDs
          for reference currencies in any coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?limit=10">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?offset=50">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Index to sort on. Default is 24h volume</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">price</span>
        <span class="docs-badge__item">numberOfMarkets</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?orderBy=numberOfMarkets">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?orderBy=numberOfMarkets
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?orderBy=numberOfMarkets"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>order in ascending or descending order</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">asc</span>
        <span class="docs-badge__item">desc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?orderDirection=asc">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Filter the results by searching for coin names or symbols.</p>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?search=ethereum">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?search=ethereum
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?search=ethereum"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=numberOfMarkets' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=numberOfMarkets', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=numberOfMarkets",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=numberOfMarkets", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "total": 2430
    },
    "coins": [
      {
        "rank": 1,
        "uuid": "Mtfb0obXVh59u",
        "symbol": "WETH",
        "name": "Wrapped Ether",
        "iconUrl": "https://cdn.coinranking.com/0Ema8rdoQ/weth.png",
        "numberOfMarkets": 387,
        "coinrankingUrl": "https://coinranking.com/coin/Mtfb0obXVh59u+wrappedether-weth",
        "price": "3440.2257784066314",
        "btcPrice": "0.033283653246679534",
        "24hVolume": "16478129205.36578"
      },
      {
        "rank": 2,
        "uuid": "i5jggxiwp",
        "symbol": "BSC-USD",
        "name": "Binance-Peg BSC-USD",
        "iconUrl": "https://cdn.coinranking.com/SeA5fxqOR/busdt_32.png",
        "numberOfMarkets": 206,
        "coinrankingUrl": "https://coinranking.com/coin/i5jggxiwp+binance-pegbsc-usd-bsc-usd",
        "price": "0.9999639744442227",
        "btcPrice": "0.000009675302480305863",
        "24hVolume": "15942824524.041134"
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of coins</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span> `Object[]` |  |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.rank</span> `String` | <p>The rank for this coin in this DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.name</span> `String` | <p>Name of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.price</span> `String` | <p>Price of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.btcPrice</span> `String` | <p>Price of the coin expressed in Bitcoin.</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.24hVolume</span> `String` | <p>24h trade volume</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.numberOfMarkets</span> `Number` | <p>The amount of markets this coin is exchanged in on this DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.coinrankingUrl</span> `String` | <p>Where to find the coin on coinranking.com</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error    | Description                           |
|----------|---------------------------------------|
| EXCHANGE_NOT_FOUND `Object` | <p>The DEX exchange could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get DEX exchange new coin listings

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Retrieve the latest coin listings on a specific DEX exchange. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchange/5Sfs67ZcuOWm+uniswap/new-coins">DEX exchange new coin listings page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/dex/:uuid/coins/new</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/dex/:uuid/coins/new" button-text='Copy' :light="true"></copy-button>
```

## Path parameters

| Parameter     | Description                                     |
| ------------- | ----------------------------------------------- |
| uuid `String` | <p>UUID of the DEX exchange you want to request</p> |

## Query parameters

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the market caps are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples

<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/coins/new?referenceCurrencyUuid=5k-_VTxqtCEI", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response

```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "coins": [
      {
        "listedAt": 1762902770,
        "uuid": "7P5OHd5iR4JC",
        "symbol": "GON",
        "name": "GoGon Coin",
        "iconUrl": "https://cdn.coinranking.com/SkxEigkkOg/gogon-coin.svg",
        "price": "0.000034465484245165",
        "24hVolume": "0.6619203313111162"
      },
      {
        "listedAt": 1762901931,
        "uuid": "fpJ2NpbWyJf1",
        "symbol": "EQUALITY",
        "name": "Equality Coin",
        "iconUrl": "https://cdn.coinranking.com/_rklVEJvw0/equality-coin.svg",
        "price": "0.000003447184328259",
        "24hVolume": "805.6231538782771"
      },
      ...
    ]
  }
}
```

#### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins</span> <code>Object[]</code></td>
      <td><p>List of coins, ordered by <code>listedAt</code> in descending order</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.listedAt</span> <code>Number</code></td>
      <td><p>An Epoch timestamp in seconds</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.uuid</span> <code>String</code></td>
      <td><p>UUID of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.symbol</span> <code>String</code></td>
      <td><p>Currency symbol</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.name</span> <code>String</code></td>
      <td><p>Name of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.iconUrl</span> <code>String</code></td>
      <td><p>Location of the icon</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.price</span> <code>String</code></td>
      <td><p>Price of the coin</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.coins.volume</span> <code>String</code></td>
      <td><p>24h trade volume</p></td>
    </tr>
  </tbody>
</table>

## Error response

```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error                       | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| EXCHANGE_NOT_FOUND `Object` | <p>The DEX exchange could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error                          | Description                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| VALIDATION_ERROR `Object`      | <p>The request could not be validated. The response should provide more details.</p>     |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get DEX exchange list of markets

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Find markets on a specific DEX exchange. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/exchange/5Sfs67ZcuOWm+uniswap/markets">DEX exchange markets page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/dex/:uuid/markets</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/dex/:uuid/markets" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `String` | UUID of the DEX exchange. |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used to
          calculate the volume. Defaults to US Dollar, but you can use any coin. You can find UUIDs
          for reference currencies in any coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?limit=10">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?offset=50">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Index to sort on. Default is 24h volume.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">price</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?orderBy=price">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?orderBy=price
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?orderBy=price"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Order in ascending or descending order</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?orderDirection=asc">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Value to search for within results, e.g. exchange names, currency names, or currency symbols</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?search=ethereum">
            https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?search=ethereum
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?search=ethereum"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/dex/5Sfs67ZcuOWm/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "24hVolume": "54030830805.08821",
      "total": 3611
    },
    "markets": [
      {
        "uuid": "jgJvUYCmY55B",
        "rank": 1,
        "base": {
          "uuid": "H3PgrgCyL",
          "symbol": "QUQ"
        },
        "quote": {
          "uuid": "i5jggxiwp",
          "symbol": "BSC-USD"
        },
        "exchange": {
          "name": "Uniswap v3 (BSC)",
          "uuid": "gEu3FBYGdb",
          "iconUrl": "https://cdn.coinranking.com/I3ZqUTC5S/7083.png"
        },
        "marketShare": "13.17",
        "btcPrice": "3.4810583378e-8",
        "recommended": true,
        "filters": [],
        "price": "0.003598230296669107",
        "24hVolume": "7115923819.1953535"
      },
      {
        "uuid": "Kn5jozcG0rlq",
        "rank": 2,
        "base": {
          "uuid": "i5jggxiwp",
          "symbol": "BSC-USD"
        },
        "quote": {
          "uuid": "h0fv-rQTj",
          "symbol": "KOGE"
        },
        "exchange": {
          "name": "Uniswap v3 (BSC)",
          "uuid": "gEu3FBYGdb",
          "iconUrl": "https://cdn.coinranking.com/I3ZqUTC5S/7083.png"
        },
        "marketShare": "8.89",
        "btcPrice": "0.000009669892405769",
        "recommended": true,
        "filters": [],
        "price": "0.9995379693052033",
        "24hVolume": "4805208932.719478"
      },
      ...
    ]
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.24hVolume</span> `String` | <p>Total 24h volume of markets in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of markets</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span> `Object[]` |  |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.active</span> `Number` | <p>If the market is enabled or not</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span> `String` | <p>The coin on the left side of the pair, which price is calculated in units of the quote</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span> `String` | <p>The coin on the right side of the pair. The amount in tickers are how much quote you get for one unit of base. E.g. BTC/USD 10.000 means 1 BTC is traded for 10.000 USD.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span> `String` | <p>DEX exchange this market belongs to</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.name</span> `String` | <p>Name of the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the DEX exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.24hVolume</span> `String` | <p>24h volume of the latest ticker in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.price</span> `String` | <p>Price of the latest ticker in reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.btcPrice</span> `String` | <p>Price of the latest ticker expressed in Bitcoin.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the market based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total market volume represented by this market, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the market is recommended based on the DEX exchange it belongs to, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.filters</span> `String[]` | <p>An array of filters that are applied to the market. Most of the filters will cause the market to not be included in the price calculation of the coins.</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">PREV_FACTOR</span> <span class="docs-badge__item">EXTERNAL_ZSCORE</span> <span class="docs-badge__item">GEO</span> <span class="docs-badge__item">OUTSIDE_TOP_20</span> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error    | Description                           |
|----------|---------------------------------------|
| EXCHANGE_NOT_FOUND `Object` | <p>The DEX exchange could not be found. Try another UUID</p> |

</b-tab>
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Markets

Markets on exchanges, also known as trading pairs, are places to trade between two specific
cryptocurrencies. For example, a market with a trading pair of BTC/USDT is a place where people can
buy or sell Bitcoins with Tether.

## Endpoints

- [Markets](/api/documentation/markets/markets)<br> Get a list of markets.
- [Market details](/api/documentation/markets/market-details)<br> Gets more specific details about a market, such as a latest ticker for this market.

---

# Get list of markets

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get a list of markets. Markets are ranked by their volume over the last 24 hours. Use our filters to get a subset of the markets.</p> <p>On Coinranking, we use this endpoint on our <a href="https://coinranking.com/markets">market ranking page</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/markets</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/markets" button-text='Copy' :light="true"></copy-button>
```


## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/markets?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/markets?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/markets?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Limit. Used for pagination. Only usable when no filters are applied</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/markets?limit=10">
            https://api.coinranking.com/v2/markets?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/markets?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination only usable when no filters are applied</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/markets?offset=50">
            https://api.coinranking.com/v2/markets?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/markets?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderBy <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Sort by either 24h volume or price. Only usable when no filters are applied</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24hVolume</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">24hVolume</span>
        <span class="docs-badge__item">price</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/markets?orderBy=price">
            https://api.coinranking.com/v2/markets?orderBy=price
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/markets?orderBy=price"></copy-button>
      </td>
    </tr>
    <tr>
      <td>orderDirection <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Sort in ascending or descending order. Only usable when no filters are applied.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">desc</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">desc</span>
        <span class="docs-badge__item">asc</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/markets?orderDirection=asc">
            https://api.coinranking.com/v2/markets?orderDirection=asc
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/markets?orderDirection=asc"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Filter the results by searching for coin names, symbols or exchange names.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/markets?search=bitcoin">
            https://api.coinranking.com/v2/markets?search=bitcoin
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/markets?search=bitcoin"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/markets?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/markets?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/markets?referenceCurrencyUuid=5k-_VTxqtCEI&limit=50&offset=0&orderBy=price", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "24hVolume": "6554685985.623574",
      "total": 27521
    },
    "markets": [
      {
        "uuid": "xk9M2LuHuID5",
        "base": {
          "uuid": "Qwsogvtv82FCd",
          "symbol": "BTC"
        },
        "quote": {
          "uuid": "yhjMzLPhuIDl",
          "symbol": "USD"
        },
        "exchange": {
          "name": "Binance",
          "uuid": "-zdvbieRdZ",
          "iconUrl": "https://cdn.coinranking.com/d6w2Hj3z0/BitMEX.svg"
        },
        "24hVolume": "771875964.9750752",
        "price": "3842.9444791178726",
        "btcPrice": "1",
        "rank": 1,
        "marketShare": "30.48",
        "recommended": true,
        "filters": []
      },
      {
        "uuid": "bn7nTLHHuIq2",
        "base": {
          "uuid": "Qwsogvtv82FCd",
          "symbol": "BTC"
        },
        "quote": {
          "uuid": "HIVsRcGKkPFtW",
          "symbol": "USDT"
        },
        "exchange": {
          "name": "Coinbase Pro",
          "uuid": "qn5ZJmPFP",
          "iconUrl": "https://cdn.coinranking.com/Ama6htyHL/coinbase.svg"
        },
        "24hVolume": "311344830.86823833",
        "price": "3869.146354559396",
        "btcPrice": "1",
        "rank": 2,
        "marketShare": "12.35",
        "recommended": true,
        "filters": []
      }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextCursor": "eyJ0IjoxLCJyIjozMTEzNDQ4MzAuODY4MjM4MzMsInUiOiJibjduVExISHVJcTIiLCJvIjoiMjRoVm9sdW1lIiwiZCI6ImRlc2MifQ",
    "previousCursor": null
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.24hVolume</span> `String` | <p>Total 24h volume of markets in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of markets</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span> `Object[]` | <p>List of markets</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span> `String` | <p>The coin on the left side of the pair, which price is calculated in units of the quote</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span> `String` | <p>The coin on the right side of the pair. The amount in tickers are how much quote you get for one unit of base. E.g. BTC/USD 10.000 means 1 BTC is traded for 10.000 USD.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span> `String` | <p>Exchange this market belongs to</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.name</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.24hVolume</span> `String` | <p>The 24 hour volume of the base currency in the reference currency which defaults to US Dollar. For example in an ETH/BTC market the volume would be Ethereum in US Dollar.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.price</span> `String` | <p>The latest price of the base currency in the reference currency which defaults to US Dollar. For example in an ETH/BTC market the price would be Ethereum in US Dollar.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.btcPrice</span> `String` | <p>The latest price of the base currency in Bitcoin.</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the market based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total market volume reprented by this market, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the market is recommended based on the exchange it belongs to, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.filters</span> `String[]` | <p>An array of filters that are applied to the market. Most of the filters will cause the market to not be included in the price calculation of the coins.</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">PREV_FACTOR</span> <span class="docs-badge__item">EXTERNAL_ZSCORE</span> <span class="docs-badge__item">GEO</span> <span class="docs-badge__item">OUTSIDE_TOP_20</span> |
| <span class="doc__field">pagination</span> `Object` | <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.limit</span> `Number` | <p>The number of results per page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> `Boolean` | <p>Whether there are more results available after the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> `Boolean` | <p>Whether there are results available before the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> `String/null` | <p>Cursor to use for the next page, or null if there are no more results</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> `String/null` | <p>Cursor to use for the previous page, or null if on the first page</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |
| INVALID_CURSOR `Object` | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH `Object` | <p>The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT `Object` | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# Get market details

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Find information on a specific market listed on coinranking. On Coinranking, we use this endpoint on our <a href="https://coinranking.com/market/BfkLiwAInu+btc-usd-coinbase-pro">market detail</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/market/:uuid</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/market/:uuid" button-text='Copy' :light="true"></copy-button>
```


## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| uuid `Uuid` | <p>Uuid of the market you want to request</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used to
          calculate the volume. Defaults to US Dollar, but you can use any coin. You can find UUIDs
          for reference currencies in any coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/market/MP77r-vKf4?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/market/MP77r-vKf4?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/market/MP77r-vKf4?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/market/MP77r-vKf4?referenceCurrencyUuid=5k-_VTxqtCEI' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/market/MP77r-vKf4?referenceCurrencyUuid=5k-_VTxqtCEI', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/market/MP77r-vKf4?referenceCurrencyUuid=5k-_VTxqtCEI",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/market/MP77r-vKf4?referenceCurrencyUuid=5k-_VTxqtCEI", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "market": {
      "uuid": "MP77r-vKf4",
      "rank": 7,
      "base": {
        "uuid": "Qwsogvtv82FCd",
        "symbol": "BTC",
        "name": "Bitcoin",
        "type": "coin"
      },
      "quote": {
        "symbol": "USDT",
        "uuid": "HIVsRcGKkPFtW",
        "name": "Tether",
        "type": "coin"
      },
      "exchange": {
        "name": "Binance",
        "uuid": "-zdvbieRdZ",
        "iconUrl": "https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
        "websiteUrl": "https://www.binance.com"
      },
      "latestTicker": {
        "createdAt": 1594808541,
        "close": "10190.495525500779",
        "base24hVolume": "34878",
        "quote24hVolume": "354103375"
      },
      "marketShare": "1.23",
      "price": "9488.518829659914",
      "btcPrice": "1",
      "24hVolume": "353383358.2006244",
      "recommended": true,
      "filters": []
    }
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.market</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.uuid</span> `String` | <p>Uuid of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.base</span> `String` | <p>The coin on the left side of the pair, which price is calculated in units of the quote</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.base</span><span class="doc__field">.uuid</span> `String` | <p>Uuid of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.base</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.base</span><span class="doc__field">.type</span> `String` | <p>Indicates if the base of the market is a coin or if it is fiat</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">coin</span> <span class="docs-badge__item">fiat</span> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.base</span><span class="doc__field">.name</span> `String` | <p>Name of the baseCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quote</span> `String` | <p>The coin on the right side of the pair. The amount in tickers are how much quote you get for one unit of base. E.g. BTC/USD 10.000 means 1 BTC is traded for 10.000 USD.</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.quote</span><span class="doc__field">.uuid</span> `String` | <p>Uuid of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.quote</span><span class="doc__field">.symbol</span> `String` | <p>Symbol of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.quote</span><span class="doc__field">.name</span> `String` | <p>Name of the quoteCurrency of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.quote</span><span class="doc__field">.type</span> `String` | <p>Indicates if the quote of the market is a coin or if it is fiat</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">coin</span> <span class="docs-badge__item">fiat</span> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchange</span> `String` | <p>Exchange this market belongs to</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.exchange</span><span class="doc__field">.name</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.exchange</span><span class="doc__field">.uuid</span> `String` | <p>Uuid of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.exchange</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.exchange</span><span class="doc__field">.websiteUrl</span> `String` | <p>Url that points to the website of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.latestTicker</span><span class="doc__field">.createdAt</span> `String` | <p>An Epoch timestamp in seconds when the latest ticker was received</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.latestTicker</span><span class="doc__field">.close</span> `String` | <p>The last price received from the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.latestTicker</span><span class="doc__field">.base24hVolume</span> `String` | <p>Moving average of the base volume of the market in the last 24 hours. For example in a BTC/USD market it would be the Bitcoins traded within a 24 hour timespan.</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.latestTicker</span><span class="doc__field">.quote24hVolume</span> `String` | <p>Moving average of the quote volume of the market in the last 24 hours. For example in a BTC/USD market it would be the US dollars traded within a 24 hour timespan.</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.24hVolume</span> `String` | <p>The 24 hour volume of the base currency in the reference currency which defaults to US Dollar. For example in an ETH/BTC market the volume would be Ethereum in US Dollar.</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.price</span> `String` | <p>The latest price of the base currency in the reference currency which defaults to US Dollar. For example in an ETH/BTC market the price would be Ethereum in US Dollar.</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.btcPrice</span> `String` | <p>The latest price of the base currency in Bitcoin.</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.rank</span> `Number` | <p>Rank of the market based on volume, taking into account exchange and currency filters</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.marketShare</span> `String` | <p>Percentage of the total market volume reprented by this market</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the market is recommended based on the exchange it belongs to, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.market</span><span class="doc__field">.filters</span> `String[]` | <p>An array of filters that are applied to the market. Most of the filters will cause the market to not be included in the price calculation of the coins.</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">PREV_FACTOR</span> <span class="docs-badge__item">EXTERNAL_ZSCORE</span> <span class="docs-badge__item">GEO</span> <span class="docs-badge__item">OUTSIDE_TOP_20</span> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID</p> |

</b-tab>
</b-tabs>

---

# Reference currencies

<p>The price of a coin is shown in a reference currency. Currencies include, but are not limited to, coins. In contrast to coins, currencies also includes Fiat currencies like US Dollar, EURO, YEN and more. Furthermore, currencies also comprehends denominators as Satoshi and Wei (these are the atomic units for respectively Bitcoin and Ethereum, or - perhaps overly simplified - one could compare them with what the cent is to the Dollar.) Additionally, currencies include assets like Gold and Silver, which can also be used as reference currencies.</p>

<div class="border border-info rounded p-3 mb-4">
 You can find the UUID of any fiat currency with our <a href="https://coinranking.com/api/documentation/find-uuids-slugs">Search function for UUIDs</a>.
</div>

## Get list of reference currencies


<p>Get a list of reference currencies, which can be used as reference for coins. The response includes all the essentials for this use-case, such as the symbol (e.g. USD) and - if available - the sign (e.g. $).</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/reference-currencies</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/reference-currencies" button-text='Copy' :light="true"></copy-button>
```


## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Used for pagination. The maximum amount of results you can fetch in one request is
          5000 for the Startup and Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">20</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">0-5000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/reference-currencies?limit=10">
            https://api.coinranking.com/v2/reference-currencies?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/reference-currencies?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/reference-currencies?offset=50">
            https://api.coinranking.com/v2/reference-currencies?offset=50
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/reference-currencies?offset=50"></copy-button>
      </td>
    </tr>
    <tr>
      <td>types <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>
          A currency is one of four types: coin (e.g. Bitcoin, Ethereum, etc.), fiat (US Dollar,
          Euro, Yen, etc.), denominator (e.g. Satoshi) or asset (e.g. Gold, Silver, etc.). Filter the response by providing one or
          more types.
        </p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">coin</span>
        <span class="docs-badge__item">fiat</span>
        <span class="docs-badge__item">denominator</span>
        <span class="docs-badge__item">asset</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/reference-currencies?types[]=coin&types[]=fiat">
            https://api.coinranking.com/v2/reference-currencies?types[]=coin&types[]=fiat
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/reference-currencies?types[]=coin&types[]=fiat"></copy-button>
      </td>
    </tr>
    <tr>
      <td>search <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Filter the results by searching for currency names or symbols.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/reference-currencies?search=EUR">
            https://api.coinranking.com/v2/reference-currencies?search=EUR
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/reference-currencies?search=EUR"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/reference-currencies?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/reference-currencies?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/reference-currencies?limit=50&offset=0&types[]=coin&types[]=fiat' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/reference-currencies?limit=50&offset=0&types[]=coin&types[]=fiat', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/reference-currencies?limit=50&offset=0&types[]=coin&types[]=fiat",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/reference-currencies?limit=50&offset=0&types[]=coin&types[]=fiat", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "total": 3
    },
    "currencies": [
      {
        "uuid": "Qwsogvtv82FCd",
        "type": "coin",
        "symbol": "BTC",
        "name": "Bitcoin",
        "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        "sign": "₿"
      },
      {
        "uuid": "razxDUgYGNAdQ",
        "type": "coin",
        "symbol": "ETH",
        "name": "Ethereum",
        "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        "sign": "Ξ"
      },
      {
        "uuid": "yhjMzLPhuIDl",
        "type": "fiat",
        "symbol": "USD",
        "name": "US Dollar",
        "iconUrl": "https://cdn.coinranking.com/kz6a7w6vF/usd.svg",
        "sign": "$"
      }
    ]
  },
  "pagination": {
    "limit": 20,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextCursor": "eyJ0IjoxLCJyIjpudWxsLCJ1IjoieWhqTXpMUGh1SURsIiwibyI6bnVsbCwiZCI6bnVsbH0",
    "previousCursor": null
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> `Number` | <p>Total number of coins</p> |
| <span class="doc__field">data</span><span class="doc__field">.currencies</span> `Object[]` | <p>List of reference currencies</p> |
| <span class="doc__field">data</span><span class="doc__field">.currencies</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.currencies</span><span class="doc__field">.type</span> `String` | <p>The type of the currency can be either 'coin' (BTC, ETH, etc.), 'fiat' (USD, EUR, etc.), 'denominator' (Satoshi, Wei, etc.) or 'asset' (Gold, Silver, etc.)</p> |
| <span class="doc__field">data</span><span class="doc__field">.currencies</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.currencies</span><span class="doc__field">.name</span> `String` | <p>Name of the currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.currencies</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.currencies</span><span class="doc__field">.sign</span> `String` | <p>Some currencies have a symbol, like $ for USD and ₿ for BTC</p> |
| <span class="doc__field">pagination</span> `Object` | <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.limit</span> `Number` | <p>The number of results per page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> `Boolean` | <p>Whether there are more results available after the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> `Boolean` | <p>Whether there are results available before the current page</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> `String/null` | <p>Cursor to use for the next page, or null if there are no more results</p> |
| <span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> `String/null` | <p>Cursor to use for the previous page, or null if on the first page</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "VALIDATION_ERROR",
  "message": "limit must be at least 1 and most 100"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | The request could not be validated. The response should provide more details. |
| INVALID_CURSOR `Object` | The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor. |
| CURSOR_MISMATCH `Object` | The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over. |
| PAGINATION_CONFLICT `Object` | Both cursor and offset parameters were provided. Use only one pagination method per request. |

</b-tab>
</b-tabs>

---

# Stats

Stats endpoint are meant for endpoints summarizing data over multiple coins. Such as how many coins
have we listed in total, what is the dominance of BTC compared to other coins, etc.

## Endpoints

- [Global stats](/api/documentation/stats/stats)<br> Stats about the market entirely.
- [Stats for selection of coins](/api/documentation/stats/stats-selection-of-coins)<br> If you need summarized data for a subset of coins, e.g. all stablecoins, this is your endpoint. The endpoint provides filters to define a subset of your choosing.
- [Global market cap history](/api/documentation/stats/global-market-cap-history)<br> The crypto market cap fluctuates throughout time by differing supply and price values. You can find the history in this endpoint.
- [Global trading volume history](/api/documentation/stats/global-trading-volume-history)<br> If you need historical data on the total trading volume across all coins, this is your endpoint. It is useful for analyzing trends and market activity over time.
- [Bitcoin dominance history](/api/documentation/stats/bitcoin-dominance-history)<br> Access historical bitcoin dominance data with timestamps.

---

# Get global stats


<p>These global statistics tell about the data available on coinranking.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/stats</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/stats" button-text='Copy' :light="true"></copy-button>
```


## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/stats?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/stats?referenceCurrencyUuid=5k-_VTxqtCEI'  \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/stats?referenceCurrencyUuid=5k-_VTxqtCEI', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/stats?referenceCurrencyUuid=5k-_VTxqtCEI",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/stats?referenceCurrencyUuid=5k-_VTxqtCEI", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "totalCoins": 3220,
    "totalMarkets": 27497,
    "totalExchanges": 190,
    "totalMarketCap": "425992114544",
    "total24hVolume": "23752040073",
    "btcDominance": 39.65
    "bestCoins": [
      {
        "uuid": "razxDUgYGNAdQ",
        "symbol": "ETH",
        "name": "Ethereum",
        "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth"
      },
      {
        "uuid": "Qwsogvtv82FCd",
        "symbol": "BTC",
        "name": "Bitcoin",
        "iconUrl": "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
        "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc"
      },
      {
        "uuid": "HIVsRcGKkPFtW",
        "symbol": "USDT",
        "name": "Tether",
        "iconUrl": "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
        "coinrankingUrl": "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt"
      }
    ],
    "newestCoins": [
      {
        "uuid": "razxDUgYGNAdQ",
        "symbol": "ETH",
        "name": "Ethereum",
        "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth"
      },
      {
        "uuid": "Qwsogvtv82FCd",
        "symbol": "BTC",
        "name": "Bitcoin",
        "iconUrl": "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
        "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc"
      },
      {
        "uuid": "HIVsRcGKkPFtW",
        "symbol": "USDT",
        "name": "Tether",
        "iconUrl": "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
        "coinrankingUrl": "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt"
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.totalCoins</span> `Number` | <p>Total number of coins</p> |
| <span class="doc__field">data</span><span class="doc__field">.totalMarkets</span> `Number` | <p>Total amount of markets used for price calculation</p> |
| <span class="doc__field">data</span><span class="doc__field">.totalExchanges</span> `Number` | <p>Total amount of exchanges paired with Coinranking</p> |
| <span class="doc__field">data</span><span class="doc__field">.totalMarketCap</span> `String` | <p>Market capitalization. Price times circulating supply</p> |
| <span class="doc__field">data</span><span class="doc__field">.total24hVolume</span> `String` | <p>Total trade volume in 24 hours, calculated in the reference currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.btcDominance</span> `Number` | <p>Current percentage of the total crypto market capitalization accounted for by Bitcoin</p> |
| <span class="doc__field">data</span><span class="doc__field">.bestCoins</span> `Object[]` | <p>List of the three best performing coins in the selected timePeriod</p> |
| <span class="doc__field">data</span><span class="doc__field">.bestCoins</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.bestCoins</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.bestCoins</span><span class="doc__field">.name</span> `String` | <p>Name of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.bestCoins</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.bestCoins</span><span class="doc__field">.coinrankingUrl</span> `String` | <p>Where to find the coin on coinranking.com</p> |
| <span class="doc__field">data</span><span class="doc__field">.newestCoins</span> `Object[]` | <p>List of the three newest coins</p> |
| <span class="doc__field">data</span><span class="doc__field">.newestCoins</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.newestCoins</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.newestCoins</span><span class="doc__field">.name</span> `String` | <p>Name of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.newestCoins</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.newestCoins</span><span class="doc__field">.coinrankingUrl</span> `String` | <p>Where to find the coin on coinranking.com</p> |


## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get stats for selection of coins

<p>Get stats for a selection of coins.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/stats/coins</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/stats/coins" button-text='Copy' :light="true"></copy-button>
```


## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/coins?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/stats/coins?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/coins?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Negative changes, positive changes and the change in market cap are influenced by the time
          period.
        </p>
        <p>The maximum timePeriod you can use is <code>5y</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24h</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/coins?timePeriod=1y">
            https://api.coinranking.com/v2/stats/coins?timePeriod=1y
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/coins?timePeriod=1y"></copy-button>
      </td>
    </tr>
    <tr>
      <td>uuids <span class="optional">(optional)</span> <code>Array</code></td>
      <td>
        <p>
          UUIDs to filter the list on. If you know the UUIDs of the coins you want to fetch, you
          can use this filter to get the specific coins. Uuids does not work in combination with
          tag. If you use both filters, the tag filter takes precedence.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/coins?uuids[]=razxDUgYGNAdQ&uuids[]=Qwsogvtv82FCd">
            https://api.coinranking.com/v2/stats/coins?uuids[]=razxDUgYGNAdQ&uuids[]=Qwsogvtv82FCd
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/coins?uuids[]=razxDUgYGNAdQ&uuids[]=Qwsogvtv82FCd"></copy-button>
      </td>
    </tr>
    <tr>
      <td>tag <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Tag to filter the list on. If you provide a tag, this takes precedence over the uuids
          filter. We have <a href="/api/documentation/tags/tags">many tags</a> you can check out.
        </p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">defi</span>
        <span class="docs-badge__item">stablecoin</span>
        <span class="docs-badge__item">nft</span>
        <span class="docs-badge__item">many more...</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/coins?tag=defi">
            https://api.coinranking.com/v2/stats/coins?tag=defi
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/coins?tag=defi"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/stats/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d'  \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/stats/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/stats/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/stats/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "stats": {
      "positiveChanges": 3118,
      "negativeChanges": 3725,
      "numberOfCoins": 31110,
      "volume": "226221134262.99506",
      "volumeShare": "100",
      "marketCap": "1278354560622",
      "marketCapChange": "0.06",
      "marketCapShare": "100",
      "topCurrencySymbol": "BTC",
      "topCurrencyMarketCap": "668081784272",
      "topCurrencyDominance": "52.26"
    }
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">status</span> `String` | <p>Status of the request</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">success</span> |
| <span class="doc__field">data</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span> `Object` |  |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.positiveChanges</span> `Number` | <p>The amount of coins within the group that now have a higher price than at the beginning of the selected timeperiod.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.negativeChanges</span> `Number` | <p>The amount of coins within the group that now have a lower price than at the beginning of the selected timeperiod.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.numberOfCoins</span> `Number` | <p>The amount of coins selected for these stats based on the filters provided. See either the tag or uuids filter for more information about filtering these stats.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.volume</span> `String` | <p>The trading volume in US Dollar of the coins within the group, within the time period.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.volumeShare</span> `String` | <p>The percentage of trading volume compared to coins outside of the selection. E.g. if you have used the tag filter to only get DeFi coins, this is the percentage of trading volume of DeFi coins compared to all other coins.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.marketCap</span> `String` | <p>The market cap in US Dollars of the selected coins.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.marketCapChange</span> `String` | <p>The change in market cap in US Dollars of the selected coins, as compared to the beginning of the selected time period.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.marketCapShare</span> `String` | <p>Similar to volumeShare, this compares the selection of coins against all other coins, but for market cap.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.topCurrencySymbol</span> `String` | <p>The symbol of the currency that currently holds the highest market cap within the selection.</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.topCurrencyMarketCap</span> `String` | <p>The market cap in US Dollars of the currency that currently holds the highest market cap</p> |
| <span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.topCurrencyDominance</span> `String` | <p>A percentage that tells you how big the biggest coin in the selection is compared to the rest of the selection, measured in market cap.</p> |


## Error response


```json
HTTP/1.1 404 Not Found
{
  "status": "fail",
  "type": "TAG_NOT_FOUND",
  "message": "Tag not found"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="404">

| Error | Description                           |
|-------|---------------------------------------|
| TAG_NOT_FOUND `Object` | <p>The tag could not be found. Try another tag.</p> |

</b-tab>
<b-tab title="422">

| Error | Description                           |
|-------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get global market cap history

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>With the global market caps history endpoint, you can retrieve historical cryptocurrency market capitalization data, enabling you to analyze trends and track market performance over time.</p> <p>On Coinranking, we use this endpoint on our <a href="https://coinranking.com/#global-market-cap">global market cap chart</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/stats/global-market-caps</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/stats/global-market-caps" button-text='Copy' :light="true"></copy-button>
```

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the market caps are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/global-market-caps?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/stats/global-market-caps?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/global-market-caps?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Timeperiod where the marketCap are based on
        </p>
        <p>The maximum timePeriod you can use is <code>all</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24h</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        <span class="docs-badge__item">all</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/global-market-caps?timePeriod=1y">
            https://api.coinranking.com/v2/stats/global-market-caps?timePeriod=1y
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/global-market-caps?timePeriod=1y"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/stats/global-market-caps?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d'  \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/stats/global-market-caps?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/stats/global-market-caps?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/stats/global-market-caps?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response

```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": [
    {
      "timestamp": 1743053100,
      "marketCap": "2929340825269"
    },
    {
      "timestamp": 1743053400,
      "marketCap": "2930113691065"
    },
    {
      "timestamp": 1743053700,
      "marketCap": "2926999657324"
    }
  ]
}
```

#### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.timestamp</span> <code>Number</code></td>
      <td><p>An Epoch timestamp in seconds</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.marketCap</span> <code>Number/null</code></td>
      <td><p>The market cap in the reference currency</p></td>
    </tr>
  </tbody>
</table>

## Error response

```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

#### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error                          | Description                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| VALIDATION_ERROR `Object`      | <p>The request could not be validated. The response should provide more details.</p>     |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Get global trading volume history

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>With the global trading volume history endpoint, you can retrieve historical cryptocurrency trading data, enabling you to analyze market trends and track cryptocurrency trading activity over time.</p> <p>On Coinranking, we use this endpoint on our <a href="https://coinranking.com/#global-trading-volume">global trading volume chart</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/stats/global-trading-volumes</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/stats/global-trading-volumes" button-text='Copy' :light="true"></copy-button>
```

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the trading volumes are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/global-trading-volumes?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/stats/global-trading-volumes?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/global-trading-volumes?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>interval <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>The interval determines the time period over which each trading volume item is calculated.</p>
        <ul>
          <li><strong>day</strong>: the total volume traded in a single day</li>
          <li><strong>week</strong>: the total volume traded over a week</li>
          <li><strong>month</strong>: the total volume traded over an entire month</li>
        </ul>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">day</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">day</span>
        <span class="docs-badge__item">week</span>
        <span class="docs-badge__item">month</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/global-trading-volumes?interval=day">
            https://api.coinranking.com/v2/stats/global-trading-volumes?interval=day
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/global-trading-volumes?interval=day"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>
          Limit. Limit the amount of time periods for which the intervalVolume are retrieved. For
          example, when interval=day and limit is 10, data will be returned for the last 10 days.
          The maximum amount of results you can fetch in one request is 1000 for the Startup and
          Professional plan, and 100 for the Free plan.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span><br>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-1000</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/global-trading-volumes?limit=10">
            https://api.coinranking.com/v2/stats/global-trading-volumes?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/global-trading-volumes?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/global-trading-volumes?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/stats/global-trading-volumes?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/stats/global-trading-volumes?referenceCurrencyUuid=5k-_VTxqtCEI&interval=day&limit=50'  \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/stats/global-trading-volumes?referenceCurrencyUuid=5k-_VTxqtCEI&interval=day&limit=50', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/stats/global-trading-volumes?referenceCurrencyUuid=5k-_VTxqtCEI&interval=day&limit=50",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/stats/global-trading-volumes?referenceCurrencyUuid=5k-_VTxqtCEI&interval=day&limit=50", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response

```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "volumes": [
      {
        "timestamp": 1742947200,
        "intervalVolume": "68304365278.00"
      },
      {
        "timestamp": 1743033600,
        "intervalVolume": "64019945571.00"
      },
      {
        "timestamp": 1743120000,
        "intervalVolume": "32021315171.25"
      }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextCursor": "eyJ0cyI6MTc0MzEyMDAwMH0",
    "previousCursor": null
  }
}
```

#### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.volumes</span> <code>Object[]</code></td>
      <td><p>Array of trading volume data points</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.volumes</span><span class="doc__field">.timestamp</span> <code>Number</code></td>
      <td><p>An Epoch timestamp in seconds</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.volumes</span><span class="doc__field">.intervalVolume</span> <code>String/null</code></td>
      <td><p>The total trading volume within the requested time interval in the reference currency</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span> <code>Object</code></td>
      <td><p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.limit</span> <code>Number</code></td>
      <td><p>The number of results per page</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> <code>Boolean</code></td>
      <td><p>Whether there are more results available after the current page</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> <code>Boolean</code></td>
      <td><p>Whether there are results available before the current page</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> <code>String/null</code></td>
      <td><p>Cursor to use for the next page, or null if there are no more results</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> <code>String/null</code></td>
      <td><p>Cursor to use for the previous page, or null if on the first page</p></td>
    </tr>
  </tbody>
</table>

## Error response

```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

#### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error                          | Description                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| VALIDATION_ERROR `Object`      | <p>The request could not be validated. The response should provide more details.</p>     |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |
| INVALID_CURSOR `Object`        | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH `Object`       | <p>The cursor was created with different interval parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT `Object`   | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# Get bitcoin dominance history

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Get a list of bitcoin dominance history along with the bitcoin market capitalization data.</p> <p>On Coinranking, we use this endpoint on our <a href="https://coinranking.com/#bitcoin-dominance">bitcoin dominance chart</a>.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/stats/bitcoin-dominance-history</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/stats/bitcoin-dominance-history" button-text='Copy' :light="true"></copy-button>
```

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the market caps are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/bitcoin-dominance-history?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/stats/bitcoin-dominance-history?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/bitcoin-dominance-history?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Timeperiod where the percentage and marketCap are based on
        </p>
        <p>The maximum timePeriod you can use is <code>all</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24h</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        <span class="docs-badge__item">all</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/stats/bitcoin-dominance-history?timePeriod=1y">
            https://api.coinranking.com/v2/stats/bitcoin-dominance-history?timePeriod=1y
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/stats/bitcoin-dominance-history?timePeriod=1y"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/stats/bitcoin-dominance-history?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d'  \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/stats/bitcoin-dominance-history?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/stats/bitcoin-dominance-history?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/stats/bitcoin-dominance-history?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response

```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": [
    {
      "timestamp": 1742814600,
      "percentage": 58.91,
      "marketCap": 1740828021051
    },
    {
      "timestamp": 1742814900,
      "percentage": 58.9,
      "marketCap": 1740456972714
    },
    {
      "timestamp": 1742815200,
      "percentage": 58.89,
      "marketCap": 1739283421198
    }
  ]
}
```

#### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.timestamp</span> <code>Number</code></td>
      <td><p>An Epoch timestamp in seconds</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.percentage</span> <code>Number/null</code></td>
      <td><p>Percentage of bitcoin dominance by market cap</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.marketCap</span> <code>Number/null</code></td>
      <td><p>Bitcoin market cap, calculated in the reference currency</p></td>
    </tr>
  </tbody>
</table>

## Error response

```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

#### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error                          | Description                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| VALIDATION_ERROR `Object`      | <p>The request could not be validated. The response should provide more details.</p>     |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Search suggestions


## Get search suggestions


<p>Search suggestions are a quick and easy way to find data on coinranking. The endpoint only accepts one parameter; a query. With this query you can find currencies (including fiat), exchanges, markets and categories by their symbol, name or contract address.</p> <p>While searching you can provide either part of a name or symbol, or a complete smart contract address. None are case sensitive. The response always returns a set of the most prominent coins, exchanges, markets, fiats currencies and categories matching your query.</p>

```
<span class="link">https://api.coinranking.com/v2<strong>/search-suggestions</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/search-suggestions" button-text='Copy' :light="true"></copy-button>
```


## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>query <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Value to search on. Can be a part of a name or symbol, or a complete smart contract address.</p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/search-suggestions?query=bitco">
            https://api.coinranking.com/v2/search-suggestions?query=bitco
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/search-suggestions?query=bitco"></copy-button>
      </td>
    </tr>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), in which all the prices are calculated. Defaults to
          US Dollar, but you can use any coin. You can find UUIDs for reference currencies in any
          coin endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/search-suggestions?referenceCurrencyUuid=Qwsogvtv82FCd">
            https://api.coinranking.com/v2/search-suggestions?referenceCurrencyUuid=Qwsogvtv82FCd
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/search-suggestions?referenceCurrencyUuid=Qwsogvtv82FCd"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl https://api.coinranking.com/v2/search-suggestions?query=bitco \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/search-suggestions?query=bitco', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/search-suggestions?query=bitco",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/search-suggestions?query=bitco", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response


```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "coins": [
      {
        "uuid": "Qwsogvtv82FCd",
        "iconUrl": "https://cdn.coinranking.com/gNsKAuE-W/bitcoin_btc.svg",
        "name": "Bitcoin",
        "symbol": "BTC",
        "price": "65955.43592725793773050345"
      },
      {
        "uuid": "ZlZpzOJo43mIo",
        "iconUrl": "https://cdn.coinranking.com/By8ziihX7/bch.svg",
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "price": "629.06361906860411030862"
      }
    ],
    "exchanges": [
      {
        "uuid": "YY5LBnZ-G",
        "iconUrl": "https://cdn.coinranking.com/tG3ps5jPI/bitforex.svg",
        "name": "Bitforex",
        "recommended": false
      },
      {
        "uuid": "C2gDcXEHIFD",
        "iconUrl": "https://cdn.coinranking.com/lQYXlA0LJ/hotbit.svg",
        "name": "HOTBIT",
        "recommended": false
      }
    ],
    "markets": [
      {
        "uuid": "MP77r-vKf4",
        "baseSymbol": "BTC",
        "quoteSymbol": "USDT",
        "baseUuid": "Qwsogvtv82FCd",
        "quoteUuid": "HIVsRcGKkPFtW",
        "exchangeIconUrl": "https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
        "exchangeName": "Binance",
        "exchangeUuid": "-zdvbieRdZ",
        "recommended": true
      },
      {
        "uuid": "6NVfmwRwJEp",
        "baseSymbol": "BTC",
        "quoteSymbol": "USDT",
        "baseUuid": "Qwsogvtv82FCd",
        "quoteUuid": "HIVsRcGKkPFtW",
        "exchangeIconUrl": "https://cdn.coinranking.com/tBA4j321g/Okex.svg",
        "exchangeName": "OKEx",
        "exchangeUuid": "hUlMcwWZp_",
        "recommended": true
      }
    ],
    "fiat": [
      {
        "uuid": "yhjMzLPhuIDl",
        "iconUrl": "https://cdn.coinranking.com/kz6a7w6vF/usd.svg",
        "name": "US Dollar",
        "symbol": "USD",
        "price": "1"
      }
    ],
    "categories": [
      {
        "slug": "defi",
        "shortname": "DeFi",
        "name": "DeFi coins",
        "iconUrl": "https://cdn.coinranking.com/MlN0Muv9-/defi.svg",
        "numberOfCoins": 100
      }
    ]
  }
}
```


### Response fields

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">data</span><span class="doc__field">.coins</span> `Object[]` | <p>List of coins matching the search pattern</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.name</span> `String` | <p>Name of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.coins</span><span class="doc__field">.price</span> `String` | <p>Price of the coin</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span> `Object[]` | <p>List of exchanges matching the search pattern</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.name</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.exchanges</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the exchange is recommended based on our criteria, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span> `Object[]` | <p>List of markets matching the search pattern</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.baseSymbol</span> `String` | <p>The base symbol of this market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quoteSymbol</span> `String` | <p>The quote symbol of this market</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.baseUuid</span> `String` | <p>The UUID of the base currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.quoteUuid</span> `String` | <p>The UUID of the quote currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchangeIconUrl</span> `String` | <p>Location of the icon of the exchange this market belongs to</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchangeName</span> `String` | <p>Name of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.exchangeUuid</span> `String` | <p>UUID of the exchange</p> |
| <span class="doc__field">data</span><span class="doc__field">.markets</span><span class="doc__field">.recommended</span> `Boolean` | <p>Whether the market is recommended based on the exchange it belongs to, see https://support.coinranking.com/article/82-recommended-exchanges</p> |
| <span class="doc__field">data</span><span class="doc__field">.fiat</span> `Object[]` | <p>List of fiat currencies matching the search pattern</p> |
| <span class="doc__field">data</span><span class="doc__field">.fiat</span><span class="doc__field">.uuid</span> `String` | <p>UUID of the currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.fiat</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.fiat</span><span class="doc__field">.name</span> `String` | <p>Name of the currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.fiat</span><span class="doc__field">.symbol</span> `String` | <p>Currency symbol</p> |
| <span class="doc__field">data</span><span class="doc__field">.fiat</span><span class="doc__field">.price</span> `String` | <p>Rate of the currency</p> |
| <span class="doc__field">data</span><span class="doc__field">.categories</span> `Object[]` | <p>List of categories matching the search pattern</p> |
| <span class="doc__field">data</span><span class="doc__field">.categories</span><span class="doc__field">.slug</span> `String` | <p>Slug of the category</p> |
| <span class="doc__field">data</span><span class="doc__field">.categories</span><span class="doc__field">.shortname</span> `String` | <p>Shortened name of the category</p> |
| <span class="doc__field">data</span><span class="doc__field">.categories</span><span class="doc__field">.name</span> `String` | <p>Full name of the category</p> |
| <span class="doc__field">data</span><span class="doc__field">.categories</span><span class="doc__field">.iconUrl</span> `String` | <p>Location of the icon</p> |
| <span class="doc__field">data</span><span class="doc__field">.categories</span><span class="doc__field">.numberOfCoins</span> `Number` | <p>Number of coins in the category</p> |

## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency with UUID of HxDUgYGNAdQz not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# Tags

Tags categorize groups of cryptocurrencies into themes such as DeFi coins, Stablecoins, and Meme
Coins. Each tag provides insights into the number of coins it encompasses, along with
market-specific statistics like volume and market capitalization.

The tags can be used to filter coins in the
<a href="/api/documentation/coins/coins#query-parameters">coins endpoint</a> (look for
<i>tags</i> in the query parameter table). We use tags ourselves on our
<a href="https://coinranking.com/categories" target="blank">category pages on coinranking.com</a>.

## Endpoints

- [Tags](/api/documentation/tags/tags)<br> Get a list of tags.
- [Tag details](/api/documentation/tags/tag-details)<br> Gets more specific details about a tag, such as a description.

---

# Get list of tags

Get a list of all our tags. Each tag provides insights into the number of coins it
encompasses, along with market-specific statistics like volume and market capitalization. The tags
can also be used in the coins endpoint as a filter.

```
<span class="link">https://api.coinranking.com/v2<strong>/tags</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/tags" button-text='Copy' :light="true"></copy-button>
```

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used in all
          the values that represent a price, e.g. 24hVolume and marketCap. Defaults to US Dollar,
          but you can use any coin. You can find UUIDs for reference currencies in any coin
          endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/tags?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/tags?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/tags?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Time period where the change and sparkline are based on</p>
        <p>The maximum timePeriod you can use is <code>5y</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24h</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/tags?timePeriod=1y">
            https://api.coinranking.com/v2/tags?timePeriod=1y
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/tags?timePeriod=1y"></copy-button>
      </td>
    </tr>
    <tr>
      <td>type <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Filter tags by type. Use this to get only categories or only ecosystems.</p>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">category</span>
        <span class="docs-badge__item">ecosystem</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/tags?type=ecosystem">
            https://api.coinranking.com/v2/tags?type=ecosystem
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/tags?type=ecosystem"></copy-button>
      </td>
    </tr>
    <tr>
      <td>limit <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Limit. Used for pagination. The maximum amount of results you can fetch in one request is 5000 for the Startup and Professional plan, and 100 for the Free plan.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">50</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/tags?limit=10">
            https://api.coinranking.com/v2/tags?limit=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/tags?limit=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>offset <span class="optional">(optional)</span> <code>Number</code></td>
      <td>
        <p>Offset. Used for pagination.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">0</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/tags?offset=10">
            https://api.coinranking.com/v2/tags?offset=10
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/tags?offset=10"></copy-button>
      </td>
    </tr>
    <tr>
      <td>cursor <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          Cursor for pagination. Use the <code>nextCursor</code> value from the previous response to get the next page of results,
          or the <code>previousCursor</code> value to navigate back to the previous page.
          See <a href="/api/documentation/pagination">Pagination</a> for more information.
        </p>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/tags?cursor=eyJ0IjoxLC...">
            https://api.coinranking.com/v2/tags?cursor=eyJ0IjoxLC...
          </span>
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/tags?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&limit=50&offset=0' \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/tags?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&limit=50&offset=0', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/tags?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&limit=50&offset=0",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/tags?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d&limit=50&offset=0", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response
```json
{
  "status": "success",
  "data": {
    "stats": {
      "total": 61
    },
    "tags": [
      {
        "slug": "defi",
        "shortname": "DeFi",
        "name": "DeFi coins",
        "type": "category",
        "description": "DeFi is a new way to do finance without banks. You can trade assets with others online, with low fees and high interest.",
        "iconUrl": "https://cdn.coinranking.com/mXMAEpdTf/defi.svg",
        "hasContent": true,
        "numberOfCoins": 1118,
        "24hVolume": "5471264386.786922",
        "volumeShare": "7.67",
        "marketCap": "76706768342.49992",
        "marketCapChange": "-3.86",
        "marketCapShare": "2.48",
        "topCurrencySymbol": "LINK",
        "topCurrencyMarketCap": "10163230777.470625",
        "topCurrencyDominance": "13.25",
        "coinrankingUrl": "https://coinranking.com/coins/defi"
      },
      {
        "slug": "solana-ecosystem",
        "shortname": "Solana",
        "name": "Solana Ecosystem",
        "type": "ecosystem",
        "description": "Coins built on Solana, a high-speed, low-cost Layer-1 blockchain known for its scalability and developer-friendly ecosystem.",
        "iconUrl": "https://cdn.coinranking.com/iImvX5-OG/5426.png",
        "hasContent": false,
        "numberOfCoins": 8190,
        "24hVolume": "88151257772",
        "volumeShare": "107.41",
        "marketCap": "407175085214",
        "marketCapChange": "1.16",
        "marketCapShare": "10.33",
        "topCurrencySymbol": "SOL",
        "topCurrencyMarketCap": "91480000271.383912",
        "topCurrencyDominance": "2.33",
        "coinrankingUrl": "https://coinranking.com/ecosystems/solana-ecosystem"
      }
    ]
  },
  "pagination": {
    "limit": 50,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextCursor": "eyJ0IjoxLCJyIjpudWxsLCJ1Ijoic29sYW5hLWVjb3N5c3RlbSIsIm8iOm51bGwsImQiOm51bGx9",
    "previousCursor": null
  }
}
```

### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: <br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span> <code>Object</code></td>
      <td>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.stats</span><span class="doc__field">.total</span> <code>Number</code></td>
      <td>
        <p>Total number of tags available.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags</span> <code>Array</code></td>
      <td>
        <p>List of tag objects.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span> <code>Object</code></td>
      <td>
        <p>A tag object. <a href="/api/documentation/tags/tag-introduction">Read more about what a tag is in the introduction.</a></p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.slug</span> <code>String</code></td>
      <td>
        <p>
          Slug identifier for the tag. This is a short url-friendly name, so for example the tag
          with the name "Layer-2 coins" has layer-2 as slug. These slugs can also be used as a
          filter in <a href="/api/documentation/coins/coins#query-parameters">the coins endpoint</a>
          (Look for the <i>tags</i> query parameter).
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.shortname</span> <code>String</code></td>
      <td>
        <p>
          As the name implies, it is a shorter version of the name. It mostly omits the tokens or
          coins part of the name, so instead of the "Layer-2 coins" you get just "Layer-2". In
          contrast to the slug, these short names are not url-friendly perse and cannot be used for
          filtering.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.name</span> <code>String</code></td>
      <td>
        <p>Full name of the tag. It is the name we use on our <a href="https://coinranking.com/categories" target="blank">categories page</a> or <a href="https://coinranking.com/ecosystems" target="blank">ecosystems page</a>.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.type</span> <code>String</code></td>
      <td>
        <p>Type of the tag. Indicates the classification of the tag.</p>
        <span class="docs-badge">Example values: </br></span>
        <span class="docs-badge__item">category</span>
        <span class="docs-badge__item">ecosystem</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.iconUrl</span> <code>String</code></td>
      <td>
        <p>URL of the tag's icon. Every tag has it's own icon, and you can find it through this url. The images might change over time.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.hasContent</span> <code>Boolean</code></td>
      <td>
        <p>
          Indicates if the tag has any coins associated with it. This should be the case in almost
          all cases, but new categories or ecosystems can be made before there are any coins related to them.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.numberOfCoins</span> <code>Number</code></td>
      <td>
        <p>Number of coins associated with the tag. Should you use the <a href="/api/documentation/coins/coins#query-parameters">filter on the coins endpoint</a> to get the coins related to a specific tag, numberOfCoins is the amount of coins that you can expect to get back (with pagination, that is).</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.24hVolume</span> <code>String</code></td>
      <td>
        <p>The aggregated 24-hour trading volume for all coins that are associated to this tag.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.volumeShare</span> <code>String</code></td>
      <td>
        <p>
          Share of the total trading volume. Meaning, the percentage the aggregated 24 hour volume
          (see the previous property) compared to the 24 hour volume of all coins listed on
          Coinranking.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.marketCap</span> <code>String</code></td>
      <td>
        <p>
          Market capitalization for coins associated to the tag. In other words, the aggregated
          market cap for every coin that is related to this tag. Market cap itself is a product
          of the amount of coins in circulation, multiplied by the value of each of these coins.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.marketCapChange</span> <code>String</code></td>
      <td>
        <p>
          Percentage change in market capitalization. The previous property (marketCap) represents
          how much the market cap for all coins with a specific tag is. This value compares the
          current market cap for a tag to the same one 24 hours ago.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.marketCapShare</span> <code>String</code></td>
      <td>
        <p>
          Share of the total market capitalization. Meaning, the percentage the aggregated market
          cap (see the previous property) compared to market cap of all coins listed on
          Coinranking.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.topCurrencySymbol</span> <code>String</code></td>
      <td>
        <p>
          Symbol of the top currency within the tag. The top currency being the coin with the highest
          market cap. A requirement is that this coin has to be
          <a href="https://support.coinranking.com/article/56-ranking-methodology" target="blank">a tier 1 coin.</a>.
          If there is no tier 1 coin available, this value is <code>null</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.topCurrencyMarketCap</span> <code>String</code></td>
      <td>
        <p>Market capitalization of the top currency. See <i>topCurrencySymbol</i>. Can be <code>null</code></p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.topCurrencyDominance</span> <code>String</code></td>
      <td>
        <p>How dominant the top coin is compared to all the other coins with this tag, as a percentage. See <i>topCurrencySymbol</i>. Can be <code>null</code>.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tags[]</span><span class="doc__field">.coinrankingUrl</span> <code>String</code></td>
      <td>
        <p>URL to the Coinranking page for the tag.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span> <code>Object</code></td>
      <td>
        <p>Pagination information. See <a href="/api/documentation/pagination">Pagination</a> for more details.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.limit</span> <code>Number</code></td>
      <td>
        <p>The number of results per page</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.hasNextPage</span> <code>Boolean</code></td>
      <td>
        <p>Whether there are more results available after the current page</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.hasPreviousPage</span> <code>Boolean</code></td>
      <td>
        <p>Whether there are results available before the current page</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.nextCursor</span> <code>String/null</code></td>
      <td>
        <p>Cursor to use for the next page, or null if there are no more results</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">pagination</span><span class="doc__field">.previousCursor</span> <code>String/null</code></td>
      <td>
        <p>Cursor to use for the previous page, or null if on the first page</p>
      </td>
    </tr>
  </tbody>
</table>

## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |
| INVALID_CURSOR `Object` | <p>The cursor string is malformed or could not be decoded. Start pagination from the beginning without a cursor.</p> |
| CURSOR_MISMATCH `Object` | <p>The cursor was created with different orderBy or orderDirection parameters. Match the original parameters or start over.</p> |
| PAGINATION_CONFLICT `Object` | <p>Both cursor and offset parameters were provided. Use only one pagination method per request.</p> |

</b-tab>
</b-tabs>

---

# Get tag details

Find information about a specific tag. On Coinranking, we use this data on our
<a href="https://coinranking.com/categories">coin categories</a> and <a href="https://coinranking.com/ecosystems">coin ecosystems</a> page.

```
<span class="link">https://api.coinranking.com/v2<strong>/tag/:slug</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/tag/:slug" button-text='Copy' :light="true"></copy-button>
```

## Path parameters
| Parameter | Description                           |
|-----------|---------------------------------------|
| slug `slug` | <p>Slug of the tag you want to request. Consult the <a href="/api/documentation/tags/tags">tags endpoint </a> for possible slug values.</p> |

## Query parameters
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceCurrencyUuid <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          UUID of coin (either fiat or crypto), the price of the reference currency is used in all
          the values that represent a price, e.g. 24hVolume and marketCap. Defaults to US Dollar,
          but you can use any coin. You can find UUIDs for reference currencies in any coin
          endpoint, including a convenient dedicated <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">yhjMzLPhuIDl</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/tag/defi?referenceCurrencyUuid=5k-_VTxqtCEI">
            https://api.coinranking.com/v2/tag/defi?referenceCurrencyUuid=5k-_VTxqtCEI
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/tag/defi?referenceCurrencyUuid=5k-_VTxqtCEI"></copy-button>
      </td>
    </tr>
    <tr>
      <td>timePeriod <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>Time period where the change and sparkline are based on</p>
        <p>The maximum timePeriod you can use is <code>5y</code> for the Startup and Professional plan, and <code>1y</code> for the Free plan.</p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">24h</span><br>
        <span class="docs-badge">Allowed values: </br></span>
        <span class="docs-badge__item">1h</span>
        <span class="docs-badge__item">3h</span>
        <span class="docs-badge__item">12h</span>
        <span class="docs-badge__item">24h</span>
        <span class="docs-badge__item">7d</span>
        <span class="docs-badge__item">30d</span>
        <span class="docs-badge__item">3m</span>
        <span class="docs-badge__item">1y</span>
        <span class="docs-badge__item">3y</span>
        <span class="docs-badge__item">5y</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="https://api.coinranking.com/v2/tag/defi?timePeriod=1y">
            https://api.coinranking.com/v2/tag/defi?timePeriod=1y
          </span>
        </code>
        <copy-button text-to-copy="https://api.coinranking.com/v2/tag/defi?timePeriod=1y"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Code examples

<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl 'https://api.coinranking.com/v2/tag/defi?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d'  \
  -H 'x-access-token: your-api-key' \
  -G
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const options = {
  headers: {
    'x-access-token': 'your-api-key',
  },
};

fetch('https://api.coinranking.com/v2/tag/defi?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d', options)
  .then((response) => response.json())
  .then((result) => console.log(result));
```

</b-tab>
<b-tab title="PHP">

```PHP
<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.coinranking.com/v2/tag/defi?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "x-access-token: your-api-key"
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
```

</b-tab>
<b-tab title="Python">

```Python
import requests

headers = {
  'x-access-token': 'your-api-key'
}

response = requests.request("GET", "https://api.coinranking.com/v2/tag/defi?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=7d", headers=headers)

print(response.text)
```

</b-tab>
</b-tabs>

## Response
```json
HTTP/1.1 200 OK
{
  "status": "success",
  "data": {
    "tag": [
      {
        "slug": "defi",
        "shortname": "DeFi",
        "name": "DeFi coins",
        "type": "category",
        "description": "DeFi is a new way to do finance without banks. You can trade assets with others online, with low fees and high interest.",
        "iconUrl": "https://cdn.coinranking.com/mXMAEpdTf/defi.svg",
        "hasContent": true,
        "numberOfCoins": 1112,
        "24hVolume": "5325976225.8202715",
        "volumeShare": "6.37",
        "marketCap": "86905953192.16096",
        "marketCapChange": "1.55",
        "marketCapShare": "2.72",
        "topCurrencySymbol": "LINK",
        "topCurrencyMarketCap": "11451177789.44087",
        "topCurrencyDominance": "13.18",
        "coinrankingUrl": "https://coinranking.com/coins/defi"
      }
   }
}

```

### Response fields

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="doc__field">status</span> <code>String</code></td>
      <td>
        <p>Status of the request</p>
        <span class="docs-badge">Allowed values: <br></span>
        <span class="docs-badge__item">success</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span> <code>Object</code></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span> <code>Object</code></td>
      <td>
        <p>A tag object. <a href="/api/documentation/tags/tag-introduction">Read more about what a tag is in the introduction.</a></p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.slug</span> <code>String</code></td>
      <td>
        <p>
          Slug identifier for the tag. This is a short url-friendly name, so for example the tag
          with the name "Layer-2 coins" has layer-2 as slug. These slugs can also be used as a
          filter in <a href="/api/documentation/coins/coins#query-parameters">the coins endpoint</a>
          (Look for the <i>tags</i> query parameter).
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.shortname</span> <code>String</code></td>
      <td>
        <p>
          As the name implies, it is a shorter version of the name. It mostly omits the tokens or
          coins part of the name, so instead of the "Layer-2 coins" you get just "Layer-2". In
          contrast to the slug, these short names are not url-friendly perse and cannot be used for
          filtering.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.name</span> <code>String</code></td>
      <td>
        <p>Full name of the tag. It is the name we use on our <a href="https://coinranking.com/categories" target="blank">categories page</a> or <a href="https://coinranking.com/ecosystems" target="blank">ecosystems page</a>.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.type</span> <code>String</code></td>
      <td>
        <p>Type of the tag. Indicates the category or classification of the tag.</p>
        <span class="docs-badge">Example values: </br></span>
        <span class="docs-badge__item">category</span>
        <span class="docs-badge__item">ecosystem</span>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.description</span> <code>String</code></td>
      <td>
        <p>
          A short description in one or two sentences of what this tag is about. We use it on our
          category pages, see <a href="https://coinranking.com/coins/defi" target="blank">for example our DeFi coins page.</a>
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.iconUrl</span> <code>String</code></td>
      <td>
        <p>URL of the tag's icon. Every tag has it's own icon, and you can find it through this url. The images might change over time.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.hasContent</span> <code>Boolean</code></td>
      <td>
        <p>
          Indicates if the tag has any coins associated with it. This should be the case in almost
          all cases, but new categories or ecosystems can be made before there are any coins related to them.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.numberOfCoins</span> <code>Number</code></td>
      <td>
        <p>Number of coins associated with the tag. Should you use the <a href="/api/documentation/coins/coins#query-parameters">filter on the coins endpoint</a> to get the coins related to a specific tag, numberOfCoins is the amount of coins that you can expect to get back (with pagination, that is).</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.24hVolume</span> <code>String</code></td>
      <td>
        <p>The aggregated 24-hour trading volume for all coins that are associated to this tag.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.volumeShare</span> <code>String</code></td>
      <td>
        <p>
          Share of the total trading volume. Meaning, the percentage the aggregated 24 hour volume
          (see the previous property) compared to the 24 hour volume of all coins listed on
          Coinranking.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.marketCap</span> <code>String</code></td>
      <td>
        <p>
          Market capitalization for coins associated to the tag. In other words, the aggregated
          market cap for every coin that is related to this tag. Market cap itself is a product
          of the amount of coins in circulation, multiplied by the value of each of these coins.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.marketCapChange</span> <code>String</code></td>
      <td>
        <p>
          Percentage change in market capitalization. The previous property (marketCap) represents
          how much the market cap for all coins with a specific tag is. This value compares the
          current market cap for a tag to the same one 24 hours ago.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.marketCapShare</span> <code>String</code></td>
      <td>
        <p>
          Share of the total market capitalization. Meaning, the percentage the aggregated market
          cap (see the previous property) compared to market cap of all coins listed on
          Coinranking.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.topCurrencySymbol</span> <code>String</code></td>
      <td>
        <p>
          Symbol of the top currency within the tag. The top currency being the coin with the highest
          market cap. A requirement is that this coin has to be
          <a href="https://support.coinranking.com/article/56-ranking-methodology" target="blank">a tier 1 coin.</a>.
          If there is no tier 1 coin available, this value is <code>null</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.topCurrencyMarketCap</span> <code>String</code></td>
      <td>
        <p>Market capitalization of the top currency. See <i>topCurrencySymbol</i>. Can be <code>null</code></p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.topCurrencyDominance</span> <code>String</code></td>
      <td>
        <p>How dominant the top coin is compared to all the other coins with this tag, as a percentage. See <i>topCurrencySymbol</i>. Can be <code>null</code>.</p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">data</span><span class="doc__field">.tag</span><span class="doc__field">.coinrankingUrl</span> <code>String</code></td>
      <td>
        <p>URL to the Coinranking page for the tag.</p>
      </td>
    </tr>
  </tbody>
</table>

## Error response


```json
HTTP/1.1 422 Unprocessable Entity
{
  "status": "fail",
  "type": "REFERENCE_UNAVAILABLE",
  "message": "Reference currency not available"
}
```

### Error responses

<b-tabs content-class="mt-3">
<b-tab title="422">

| Error    | Description                           |
|----------|---------------------------------------|
| VALIDATION_ERROR `Object` | <p>The request could not be validated. The response should provide more details.</p> |
| REFERENCE_UNAVAILABLE `Object` | <p>The reference currency used in the request is not available. Choose another UUID.</p> |

</b-tab>
</b-tabs>

---

# WebSockets

Connect to our WebSockets to receive real-time cryptocurrency data streams for rates, exchange rates, and tickers. WebSockets provide instant, continuous updates without the need for polling, making them ideal for trading platforms, portfolio trackers, and financial applications that require live market data.

## API Usage

Please note that each WebSocket connection consumes one API request from your plan. After the initial connection is established, the data stream itself does not consume any additional API requests, unless a subscription message is sent, in which case one additional API request will be consumed.

## Real-Time DEX Data

For exchange rates and tickers data from decentralized exchanges (DEX), you'll need the  <a href="https://coinranking.com/api/pricing">**Real-time DEX data add-on**</a>. This add-on is only available on <a href="https://coinranking.com/api/pricing">professional plan</a> and provides access to live trading data from major DEX platforms, enabling you to track decentralized market activity alongside centralized exchange data.

## WebSocket Paths

- [Rates](/api/documentation/websockets/rates)<br> <code>/rates</code> - Get real-time cryptocurrency rates.
- [Exchange Rates](/api/documentation/websockets/exchange-rates)<br> <code>/exchange-rates</code> - Get real-time cryptocurrency rates from specific exchanges.
- [Tickers](/api/documentation/websockets/tickers)<br> <code>/tickers</code> - Get real-time trading data including price, volume, and market statistics.

The base URL format is: <code>wss://api.coinranking.com/v2/real-time/&lt;path&gt;</code>

---

# Rates
<p>
  <em>Rates provide aggregated price and volume data for cryptocurrencies across all exchanges. They represent the consolidated market data that Coinranking calculates for each coin.</em>
</p>
<p>
  The fastest way to get new rates is to subscribe to our WebSockets. You can request rates through
  our <a href="/api/documentation/coins/coins">coins endpoints</a> too, but they will only
  update once a minute. With our WebSockets you can establish a persistent connection through which
  new rates are pushed, so you get the latest price and 24 hour volume whenever they are calculated.
</p>

## Authentication

The WebSocket protocol does not support regular HTTP headers, so it is not possible to use the
x-access-token header when opening a new WebSocket. Authenticate to our WebSockets connections
using a query parameter:

```
<span class="link">wss://api.coinranking.com/v2/real-time/rates<strong>?x-access-token=your-api-key</strong></span>
<copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/rates?x-access-token=your-api-key" button-text='Copy' :light="true"></copy-button>
```

## Connection Setup

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This websocket requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<p>Establish a WebSocket connection to get rates in real-time.</p>

```
<span class="link">wss://api.coinranking.com/v2<strong>/real-time/rates</strong></span>
<copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/rates" button-text='Copy' :light="true"></copy-button>
```

<p>You can subscribe to rates in two ways:</p>
<ol>
  <li><strong>URL Query Parameters</strong>: Specify subscriptions directly in the connection URL</li>
  <li><strong>Subscription Messages</strong>: Send JSON messages through the WebSocket after connecting to update your subscription</li>
</ol>


## URL Query Parameters

<p>You can specify your subscription preferences directly in the WebSocket connection URL using query parameters. This is the recommended approach when you know your subscription requirements at connection time.</p>

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>currency-uuids[] <code>Array</code></td>
      <td>
        <p>
          With the currency UUIDs parameter, you can select which coins to subscribe to.
        </p>
        <p>
          Provide a list of coin UUIDs to make your selection, use our other endpoints or our
          website to find the UUIDs of coins you want. There is a maximum of hundred UUIDs you can
          subscribe to within one WebSocket. You can find UUIDs for all our coins in our dedicated
          <a href="/api/documentation/reference-currencies">reference currency endpoint</a>
        </p>
        <p>
          <strong>Note:</strong> Use array notation in the URL: <code>currency-uuids[]=Qwsogvtv82FCd</code>
        </p>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/rates?currency-uuids[]=Qwsogvtv82FCd&currency-uuids[]=razxDUgYGNAdQ">
            wss://api.coinranking.com/v2/real-time/rates?currency-uuids[]=Qwsogvtv82FCd&currency-uuids[]=razxDUgYGNAdQ
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/rates?currency-uuids[]=Qwsogvtv82FCd&currency-uuids[]=razxDUgYGNAdQ"></copy-button>
      </td>
    </tr>
    <tr>
      <td>throttle <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          With the throttle parameter, you prevent getting overloaded with rates. This is useful if
          performance is an issue, e.g. when using WebSockets in your frontend and want to prevent
          straining your client&#39;s devices too much.
        </p>
        <p>
          Throttling works per coin. If you select a throttle, this means rates for the same coin
          will not be pushed more than once within the specified duration. When you have subscribed
          to multiple coins, you still receive more messages within the specified duration.
        </p>
        <p>
          You can choose between <code>1s</code> (at least one second interval between a rate for each coin) or <code>10s</code>
          (ten seconds).
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">1s</span><br>
        <span class="docs-badge">Allowed values: </span>
        <span class="docs-badge__item">1s</span>
        <span class="docs-badge__item">10s</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/rates?throttle=10s">
            wss://api.coinranking.com/v2/real-time/rates?throttle=10s
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/rates?throttle=10s"></copy-button>
      </td>
    </tr>
        <tr>
      <td>list <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          <strong>CRITICAL:</strong> This parameter is <strong>ONLY available via URL query strings</strong> and cannot be used in subscription messages. When using <code>list=all</code>, you do not need to specify <code>currency-uuids[]</code> as you will receive all rates automatically.
        </p>
        <p>
          With the list parameter, you can subscribe to a list of coins. When set to <code>all</code>, you will receive rate updates for every cryptocurrency tracked by Coinranking.
        </p>
        <p>
          The default is <code>none</code>, which means no list is selected and you must use the <code>currency-uuids[]</code> parameter to filter the list.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">none</span><br>
        <span class="docs-badge">Allowed values: </span>
        <span class="docs-badge__item">none</span>
        <span class="docs-badge__item">all</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/rates?list=all">
            wss://api.coinranking.com/v2/real-time/rates?list=all
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/rates?list=all"></copy-button>
      </td>
    </tr>
  </tbody>
</table>


## Subscription Messages

<p>After establishing a WebSocket connection, you can update your subscription by sending JSON messages through the socket. This allows you to change which currencies you're subscribed to without reconnecting.</p>

<p><strong>Important:</strong> The <code>list</code> parameter is <strong>NOT supported</strong> in subscription messages. It can only be used in URL query strings when initially connecting.</p>

<p>Send a JSON message with the following structure:</p>

```json
{
  "throttle": "10s",
  "currencyUuids": ["Qwsogvtv82FCd", "razxDUgYGNAdQ"]
}
```

<p>After sending a subscription message, the server will respond with a confirmation message (see <a href="#server-responses">Server Responses</a> below).</p>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="URL Parameters">

```Javascript
// Connect with subscriptions specified in the URL
const connection = new WebSocket(
  'wss://api.coinranking.com/v2/real-time/rates?x-access-token=your-api-key&currency-uuids[]=Qwsogvtv82FCd&currency-uuids[]=razxDUgYGNAdQ&throttle=10s'
);

connection.onmessage = (event) => {
  const rate = JSON.parse(event.data);
  console.log(rate);
};
```

</b-tab>
<b-tab title="Message Updates">

```Javascript
// Send a JSON formatted message through the WebSocket client after establishing a connection
const connection = new WebSocket('wss://api.coinranking.com/v2/real-time/rates?x-access-token=your-api-key');

connection.onopen = () => {
  const subscriptions = {
    throttle: '10s',
    currencyUuids: [
      'Qwsogvtv82FCd',
      'razxDUgYGNAdQ',
    ],
  };

  connection.send(JSON.stringify(subscriptions));
};

connection.onmessage = (event) => {
  const rate = JSON.parse(event.data);
  console.log(rate);
};
```

</b-tab>
<b-tab title="HTTP">

```http
GET wss://api.coinranking.com/v2/real-time/rates?x-access-token=your-api-key HTTP/1.1
Host: wss://api.coinranking.com
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
Upgrade: websocket
Sec-WebSocket-Version: 13
Sec-WebSocket-Key: q4xkcO32u266gldTuKaSOw==
```

</b-tab>
</b-tabs>

## Responses

The WebSocket server sends different types of messages depending on the context:

### Data Messages

When subscribed to rates, you receive aggregated price and volume data for cryptocurrencies. Rates represent consolidated market data calculated by Coinranking across all exchanges, providing a single unified price and 24-hour volume for each coin. Each rate message includes the currency UUID to identify which cryptocurrency the data represents, making it easy to track multiple coins simultaneously.

```json
{
  "currencyUuid": "Qwsogvtv82FCd",
  "price": "125423.835504191964312353",
  "volume": "6270550403.287645846237386287"
}
```

### Confirmation Messages

After sending a subscription update message through the WebSocket, the server responds with a confirmation message:

```json
{
  "type": "confirmation",
  "topic": "rate",
  "throttle": "10s",
  "subscriptions": ["Qwsogvtv82FCd", "razxDUgYGNAdQ"]
}
```

This confirmation indicates that your subscription has been successfully updated.

### Response Fields

When subscribed to one or more coins, you receive new rates whenever they are available. Each of
these rates includes the UUID of the coin the rate pertains to, which is especially useful when
you are subscribed to multiple coins. Rates include the latest price and 24-hour moving volume,
both in US dollars.

Unlike our <a href="/api/documentation/coins">coin endpoints</a>, we do not support other
<a href="/api/documentation/reference-currencies">reference currencies</a> than US dollars with
WebSockets. You can, however, subscribe to multiple coins, which allows you to calculate them
yourself.

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">currencyUuid</span> `String` | <p>The currency UUID of this rate. Useful if you subscribed to multiple currencies, in which case the UUID helps you determine to what coin the rate belongs.</p> |
| <span class="doc__field">price</span> `String` | <p>The latest price of a coin, in US Dollar.</p> |
| <span class="doc__field">volume</span> `String` | <p>The latest 24 hour volume of this coin (a moving sum), in US Dollar.</p> |

---

# Exchange Rates
<p>
  <em>Exchange rates show the price and volume of specific cryptocurrencies on individual exchanges, unlike rates, which aggregate data from multiple exchanges.</em>
</p>
<p>
  The fastest way to get new exchange rates is to subscribe to our WebSockets. You can request rates through
  our <a href="/api/documentation/exchanges/exchange-coin-listings">exchange coin listings endpoints</a> too, but they will only
  update once a minute. With our WebSockets you can establish a persistent connection through which
  new exchange rates are pushed, so you get the latest price and 24 hour volume whenever they are calculated.
</p>

## Authentication

The WebSocket protocol does not support regular HTTP headers, so it is not possible to use the
x-access-token header when opening a new WebSocket. Authenticate to our WebSockets connections
using a query parameter:

```
<span class="link">wss://api.coinranking.com/v2/real-time/exchange-rates<strong>?x-access-token=your-api-key</strong></span>
<copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/exchange-rates?x-access-token=your-api-key" button-text='Copy' :light="true"></copy-button>
```

## Connection Setup

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This websocket requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<div class="border border-info rounded p-3 mb-4">
  <span class="badge-word-gradient">
    <span class="badge-word-gradient-title">Real-Time Dex</span>
  </span>
  DEX data requires the <a href="https://coinranking.com/api/pricing">Real-time DEX data add-on</a>.
</div>

<p>Establish a WebSocket connection to get exchange rates in real-time.</p>

```
<span class="link">wss://api.coinranking.com/v2<strong>/real-time/exchange-rates</strong></span>
<copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/exchange-rates" button-text='Copy' :light="true"></copy-button>
```

<p>You can subscribe to exchange rates in two ways:</p>
<ol>
  <li><strong>URL Query Parameters</strong>: Specify subscriptions directly in the connection URL</li>
  <li><strong>Subscription Messages</strong>: Send JSON messages through the WebSocket after connecting to update your subscription</li>
</ol>

## URL Query Parameters

<p>You can specify your subscription preferences directly in the WebSocket connection URL using query parameters. This is the recommended approach when you know your subscription requirements at connection time.</p>

<p><strong>Important:</strong> You must choose only ONE of the following subscription parameters: <code>references</code>, <code>exchange-uuids</code>, <code>currency-uuids</code>, or <code>list</code>. You cannot mix different parameter types.</p>

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>references[] <code>Array</code></td>
      <td>
        <p>
          Subscribe to specific exchange-currency pairs. Each reference must follow the format: <code>exchangeUuid_currencyUuid</code>
        </p>
        <p>
          This allows you to get rates for specific trading pairs on specific exchanges.
        </p>
        <p>
          <strong>Note:</strong> Use array notation in the URL: <code>references[]=-zdvbieRdZ_Qwsogvtv82FCd</code>
        </p>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/exchange-rates?references[]=-zdvbieRdZ_Qwsogvtv82FCd">
            wss://api.coinranking.com/v2/real-time/exchange-rates?references[]=-zdvbieRdZ_Qwsogvtv82FCd
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/exchange-rates?references[]=-zdvbieRdZ_Qwsogvtv82FCd"></copy-button>
      </td>
    </tr>
    <tr>
      <td>exchange-uuids[] <code>Array</code></td>
      <td>
        <p>
          Subscribe to all rates for specific exchanges. This will give you all currency rates available on the selected exchanges.
        </p>
        <p>
          Provide a list of exchange UUIDs to make your selection. You can find exchange UUIDs in our
          <a href="/api/documentation/exchanges/exchanges">exchanges endpoint</a>
        </p>
        <p>
          <strong>Note:</strong> Use array notation in the URL: <code>exchange-uuids[]=-zdvbieRdZ&exchange-uuids[]=TjMe3QlK0</code>
        </p>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/exchange-rates?exchange-uuids[]=-zdvbieRdZ">
            wss://api.coinranking.com/v2/real-time/exchange-rates?exchange-uuids[]=-zdvbieRdZ
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/exchange-rates?exchange-uuids[]=-zdvbieRdZ"></copy-button>
      </td>
    </tr>
    <tr>
      <td>currency-uuids[] <code>Array</code></td>
      <td>
        <p>
          Subscribe to all rates for specific currencies across all exchanges. This will give you rates for the selected currencies from all available exchanges.
        </p>
        <p>
          Provide a list of currency UUIDs to make your selection. You can find currency UUIDs in our
          <a href="/api/documentation/reference-currencies">reference currencies endpoint</a>
        </p>
        <p>
          <strong>Note:</strong> Use array notation in the URL: <code>currency-uuids[]=Qwsogvtv82FCd</code>
        </p>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/exchange-rates?currency-uuids[]=Qwsogvtv82FCd">
            wss://api.coinranking.com/v2/real-time/exchange-rates?currency-uuids[]=Qwsogvtv82FCd
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/exchange-rates?currency-uuids[]=Qwsogvtv82FCd"></copy-button>
      </td>
    </tr>
    <tr>
       <td>list <span class="optional">(optional)</span> <code>String</code></td>
       <td>
         <p>
           <strong>CRITICAL:</strong> This parameter is <strong>ONLY available via URL query strings</strong> and cannot be used in subscription messages. When using <code>list=all</code>, you do not need to specify <code>references</code>, <code>exchange-uuids[]</code>, or <code>currency-uuids[]</code> as you will receive all exchange rates automatically.
         </p>
         <p>
           With the list parameter, you can subscribe to all exchange rates. When set to <code>all</code>, you will receive rate updates for all coins from all exchanges.
         </p>
         <p>
           The default is <code>none</code>, which means no list is selected and you must use other UUID parameters (<code>references</code>, <code>exchange-uuids</code>, or <code>currency-uuids</code>) to filter the list.
         </p>
         <span class="docs-badge">Default value: </span>
         <span class="docs-badge__item">none</span><br>
         <span class="docs-badge">Allowed values: </span>
         <span class="docs-badge__item">none</span>
         <span class="docs-badge__item">all</span>
         <br><br>
         <span class="docs-badge">Example:</span></br>
         <code>
           <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/exchange-rates?list=all">
             wss://api.coinranking.com/v2/real-time/exchange-rates?list=all
           </span>
         </code>
         <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/exchange-rates?list=all"></copy-button>
       </td>
    </tr>
    <tr>
      <td>throttle <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          With the throttle parameter, you prevent getting overloaded with exchange rates. This is useful if
          performance is an issue, e.g. when using WebSockets in your frontend and want to prevent
          straining your client's devices too much.
        </p>
        <p>
          Throttling works per exchange-currency pair. If you select a throttle, this means rates for the same pair
          will not be pushed more than once within the specified duration.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">1s</span><br>
        <span class="docs-badge">Allowed values: </span>
        <span class="docs-badge__item">1s</span>
        <span class="docs-badge__item">10s</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/exchange-rates?throttle=10s">
            wss://api.coinranking.com/v2/real-time/exchange-rates?throttle=10s
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/exchange-rates?throttle=10s"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Subscription Messages

<p>After establishing a WebSocket connection, you can update your subscription by sending JSON messages through the socket. This allows you to change which exchange rates you're subscribed to without reconnecting.</p>

<p><strong>Important:</strong> The <code>list</code> parameter is <strong>NOT supported</strong> in subscription messages. It can only be used in URL query strings when initially connecting.</p>

<p>Send a JSON message with the following structure. Note that you must choose only ONE subscription type per message:</p>

```json
{
  "exchangeUuids": ["-zdvbieRdZ", "TjMe3QlK0"],
  "throttle": "10s"
}
```

<p>Or using currency UUIDs:</p>

```json
{
  "currencyUuids": ["Qwsogvtv82FCd"],
  "throttle": "10s"
}
```

<p>Or using references:</p>

```json
{
  "references": ["-zdvbieRdZ_Qwsogvtv82FCd"],
  "throttle": "10s"
}
```

<p>After sending a subscription message, the server will respond with a confirmation message (see <a href="#server-responses">Server Responses</a> below).</p>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="URL Parameters">

```Javascript
// Connect with subscriptions specified in the URL
const connection = new WebSocket(
  'wss://api.coinranking.com/v2/real-time/exchange-rates?x-access-token=your-api-key&exchange-uuids[]=-zdvbieRdZ&exchange-uuids[]=TjMe3QlK0&throttle=10s'
);

connection.onmessage = (event) => {
  const rate = JSON.parse(event.data);
  console.log(rate);
};
```

</b-tab>
<b-tab title="Message Updates">

```Javascript
// Send a JSON formatted message through the WebSocket client after establishing a connection
const connection = new WebSocket('wss://api.coinranking.com/v2/real-time/exchange-rates?x-access-token=your-api-key');

connection.onopen = () => {
  const subscriptions = {
    throttle: '10s',
    exchangeUuids: [
      '-zdvbieRdZ',
      'TjMe3QlK0',
    ],
  };

  connection.send(JSON.stringify(subscriptions));
};

connection.onmessage = (event) => {
  const rate = JSON.parse(event.data);
  console.log(rate);
};
```

</b-tab>
<b-tab title="HTTP">

```http
GET wss://api.coinranking.com/v2/real-time/exchange-rates?x-access-token=your-api-key HTTP/1.1
Host: wss://api.coinranking.com
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
Upgrade: websocket
Sec-WebSocket-Version: 13
Sec-WebSocket-Key: q4xkcO32u266gldTuKaSOw==
```

</b-tab>
</b-tabs>

## Responses

The WebSocket server sends different types of messages depending on the context:

### Data Messages

When subscribed to exchange rates, you receive price and volume updates for specific exchange-currency pairs. Each message includes both the exchange UUID and currency UUID, allowing you to identify which exchange the rate comes from and which cryptocurrency it represents. This is particularly useful when tracking the same currency across different exchanges or monitoring multiple trading pairs.

```json
{
  "exchangeUuid": "-zdvbieRdZ",
  "currencyUuid": "Qwsogvtv82FCd",
  "exchangeType": "cex",
  "price": "125423.835504191964312353",
  "volume": "6270550403.287645846237386287"
}
```

### Confirmation Messages

After sending a subscription update message through the WebSocket, the server responds with a confirmation message:

```json
{
  "type": "confirmation",
  "topic": "exchange-rate",
  "throttle": "10s",
  "subscriptions": ["exchange:-zdvbieRdZ", "exchange:TjMe3QlK0"]
}
```

### Response fields

When subscribed to exchange rates, you receive new rates whenever they are available. Each exchange rate
includes the UUID of both the exchange and currency, which is especially useful when you are subscribed to
multiple exchanges or currencies. Exchange rates include the latest price and 24-hour moving volume,
both in US dollars.

Unlike our <a href="/api/documentation/exchanges/exchange-coin-listings">exchange coin listings endpoints</a>, we do not support other
<a href="/api/documentation/reference-currencies">reference currencies</a> than US dollars with
WebSockets. You can, however, subscribe to multiple exchanges and currencies, which allows you to calculate them
yourself.

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">exchangeUuid</span> `String` | <p>The exchange UUID of this rate. Useful if you subscribed to multiple exchanges, in which case the UUID helps you determine which exchange the rate comes from.</p> |
| <span class="doc__field">currencyUuid</span> `String` | <p>The currency UUID of this rate. Useful if you subscribed to multiple currencies, in which case the UUID helps you determine to what coin the rate belongs.</p> |
| <span class="doc__field">exchangeType</span> `String` | <p>The type of exchange: <code>cex</code> for Centralized Exchanges or <code>dex</code> for Decentralized Exchanges.</p> |
| <span class="doc__field">price</span> `String` | <p>The latest price of the coin on this exchange, in US Dollar.</p> |
| <span class="doc__field">volume</span> `String` | <p>The latest 24 hour volume of this currency on this exchange (a moving sum), in US Dollar.</p> |

---

# Tickers
<p>
  <em>Tickers provide detailed trading pair data from specific markets, showing the exchange rate between two currencies (e.g., BTC/USD). They include granular market information like base/quote volumes, close price, and more.</em>
</p>
<p>
  The fastest way to get new tickers is to subscribe to our WebSockets. You can request tickers through our <a href="/api/documentation/exchanges/exchange-coin-listings">get market details endpoints</a> too, but they will only update once a minute. With our WebSockets you can establish a persistent connection through which new tickers are pushed, so you get the latest ticker data whenever they are calculated.
</p>

## Authentication

The WebSocket protocol does not support regular HTTP headers, so it is not possible to use the
x-access-token header when opening a new WebSocket. Authenticate to our WebSockets connections
using a query parameter:

```
<span class="link">wss://api.coinranking.com/v2/real-time/tickers<strong>?x-access-token=your-api-key</strong></span>
<copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/tickers?x-access-token=your-api-key" button-text='Copy' :light="true"></copy-button>
```

## Connection Setup

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

<div class="border border-info rounded p-3 mb-4">
  <span class="badge-word-gradient">
    <span class="badge-word-gradient-title">Real-Time Dex</span>
  </span>
  DEX data requires the <a href="https://coinranking.com/api/pricing">Real-time DEX data add-on</a>.
</div>

<p>Establish a WebSocket connection to get ticker data in real-time.</p>

```
<span class="link">wss://api.coinranking.com/v2<strong>/real-time/tickers</strong></span>
<copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/tickers" button-text='Copy' :light="true"></copy-button>
```

<p>You can subscribe to tickers in two ways:</p>
<ol>
  <li><strong>URL Query Parameters</strong>: Specify subscriptions directly in the connection URL</li>
  <li><strong>Subscription Messages</strong>: Send JSON messages through the WebSocket after connecting to update your subscription</li>
</ol>

## URL Query Parameters

<p>You can specify your subscription preferences directly in the WebSocket connection URL using query parameters. This is the recommended approach when you know your subscription requirements at connection time.</p>

<p><strong>Important:</strong> You must choose only ONE of the following subscription parameters: <code>market-uuids</code>, <code>exchange-uuids</code>, <code>currency-uuids</code>, or <code>list</code>. You cannot mix different parameter types.</p>

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>market-uuids[] <code>Array</code></td>
      <td>
        <p>
          Subscribe to specific market pairs. Provide a list of market UUIDs to get ticker data for specific trading pairs.
        </p>
        <p>
          This allows you to get ticker data for specific market pairs across exchanges. You can find market UUIDs in our
          <a href="/api/documentation/markets/markets">markets endpoint</a>
        </p>
        <p>
          <strong>Note:</strong> Use array notation in the URL: <code>market-uuids[]=dj23kKgETIie</code>
        </p>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/tickers?market-uuids[]=dj23kKgETIie">
            wss://api.coinranking.com/v2/real-time/tickers?market-uuids[]=dj23kKgETIie
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/tickers?market-uuids[]=dj23kKgETIie"></copy-button>
      </td>
    </tr>
    <tr>
      <td>exchange-uuids[] <code>Array</code></td>
      <td>
        <p>
          Subscribe to all ticker data for specific exchanges. This will give you all ticker data available on the selected exchanges.
        </p>
        <p>
          Provide a list of exchange UUIDs to make your selection. You can find exchange UUIDs in our
          <a href="/api/documentation/exchanges/exchanges">exchanges endpoint</a>
        </p>
        <p>
          <strong>Note:</strong> Use array notation in the URL: <code>exchange-uuids[]=-zdvbieRdZ&exchange-uuids[]=TjMe3QlK0</code>
        </p>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/tickers?exchange-uuids[]=-zdvbieRdZ">
            wss://api.coinranking.com/v2/real-time/tickers?exchange-uuids[]=-zdvbieRdZ
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/tickers?exchange-uuids[]=-zdvbieRdZ"></copy-button>
      </td>
    </tr>
    <tr>
      <td>currency-uuids[] <code>Array</code></td>
      <td>
        <p>
          Subscribe to all ticker data for specific currencies across all exchanges. This will give you ticker data for the selected currencies from all available exchanges.
        </p>
        <p>
          Provide a list of currency UUIDs to make your selection. You can find currency UUIDs in our
          <a href="/api/documentation/reference-currencies">reference currencies endpoint</a>
        </p>
        <p>
          <strong>Note:</strong> Use array notation in the URL: <code>currency-uuids[]=Qwsogvtv82FCd</code>
        </p>
        <span class="docs-badge">Size range: </span>
        <span class="docs-badge__item">1-100</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/tickers?currency-uuids[]=Qwsogvtv82FCd">
            wss://api.coinranking.com/v2/real-time/tickers?currency-uuids[]=Qwsogvtv82FCd
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/tickers?currency-uuids[]=Qwsogvtv82FCd"></copy-button>
      </td>
    </tr>
    <tr>
       <td>list <span class="optional">(optional)</span> <code>String</code></td>
       <td>
         <p>
           <strong>CRITICAL:</strong> This parameter is <strong>ONLY available via URL query strings</strong> and cannot be used in subscription messages. When using <code>list=all</code>, you do not need to specify <code>market-uuids[]</code>, <code>exchange-uuids[]</code>, or <code>currency-uuids[]</code> as you will receive all ticker data automatically.
         </p>
         <p>
           With the list parameter, you can subscribe to all ticker data. When set to <code>all</code>, you will receive ticker data for all market pairs from all exchanges.
         </p>
         <p>
           The default is <code>none</code>, which means no list is selected and you must use other UUID parameters (<code>market-uuids</code>, <code>exchange-uuids</code>, or <code>currency-uuids</code>) to filter the list.
         </p>
         <span class="docs-badge">Default value: </span>
         <span class="docs-badge__item">none</span><br>
         <span class="docs-badge">Allowed values: </span>
         <span class="docs-badge__item">none</span>
         <span class="docs-badge__item">all</span>
         <br><br>
         <span class="docs-badge">Example:</span></br>
         <code>
           <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/tickers?list=all">
             wss://api.coinranking.com/v2/real-time/tickers?list=all
           </span>
         </code>
         <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/tickers?list=all"></copy-button>
       </td>
    </tr>
    <tr>
      <td>throttle <span class="optional">(optional)</span> <code>String</code></td>
      <td>
        <p>
          With the throttle parameter, you prevent getting overloaded with ticker data. This is useful if
          performance is an issue, e.g. when using WebSockets in your frontend and want to prevent
          straining your client's devices too much.
        </p>
        <p>
          Throttling works per exchange-currency pair. If you select a throttle, this means ticker data for the same pair
          will not be pushed more than once within the specified duration.
        </p>
        <span class="docs-badge">Default value: </span>
        <span class="docs-badge__item">1s</span><br>
        <span class="docs-badge">Allowed values: </span>
        <span class="docs-badge__item">1s</span>
        <span class="docs-badge__item">10s</span>
        <br><br>
        <span class="docs-badge">Example:</span></br>
        <code>
          <span v-b-tooltip.hover class="font-italic" title="wss://api.coinranking.com/v2/real-time/tickers?throttle=10s">
            wss://api.coinranking.com/v2/real-time/tickers?throttle=10s
          </span>
        </code>
        <copy-button text-to-copy="wss://api.coinranking.com/v2/real-time/tickers?throttle=10s"></copy-button>
      </td>
    </tr>
  </tbody>
</table>

## Subscription Messages

<p>After establishing a WebSocket connection, you can update your subscription by sending JSON messages through the socket. This allows you to change which tickers you're subscribed to without reconnecting.</p>

<p><strong>Important:</strong> The <code>list</code> parameter is <strong>NOT supported</strong> in subscription messages. It can only be used in URL query strings when initially connecting.</p>

<p>Send a JSON message with the following structure. Note that you must choose only ONE subscription type per message:</p>

```json
{
  "marketUuids": ["dj23kKgETIie", "ia4qVnkhIxcQ"],
  "throttle": "10s"
}
```

<p>Or using exchange UUIDs:</p>

```json
{
  "exchangeUuids": ["-zdvbieRdZ"],
  "throttle": "10s"
}
```

<p>Or using currency UUIDs:</p>

```json
{
  "currencyUuids": ["Qwsogvtv82FCd"],
  "throttle": "10s"
}
```

<p>After sending a subscription message, the server will respond with a confirmation message (see <a href="#server-responses">Server Responses</a> below).</p>

## Code examples
<b-tabs content-class="mt-3">
<b-tab title="URL Parameters">

```Javascript
// Connect with subscriptions specified in the URL
const connection = new WebSocket(
  'wss://api.coinranking.com/v2/real-time/tickers?x-access-token=your-api-key&market-uuids[]=dj23kKgETIie&market-uuids[]=ia4qVnkhIxcQ&throttle=10s'
);

connection.onmessage = (event) => {
  const rate = JSON.parse(event.data);
  console.log(rate);
};
```

</b-tab>
<b-tab title="Message Updates">

```Javascript
// Send a JSON formatted message through the WebSocket client after establishing a connection
const connection = new WebSocket('wss://api.coinranking.com/v2/real-time/tickers?x-access-token=your-api-key');

connection.onopen = () => {
  const subscriptions = {
    throttle: '10s',
    marketUuids: [
      'dj23kKgETIie',
      'ia4qVnkhIxcQ',
    ],
  };

  connection.send(JSON.stringify(subscriptions));
};

connection.onmessage = (event) => {
  const rate = JSON.parse(event.data);
  console.log(rate);
};
```

</b-tab>
<b-tab title="HTTP">

```http
GET wss://api.coinranking.com/v2/real-time/tickers?x-access-token=your-api-key HTTP/1.1
Host: wss://api.coinranking.com
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
Upgrade: websocket
Sec-WebSocket-Version: 13
Sec-WebSocket-Key: q4xkcO32u266gldTuKaSOw==
```

</b-tab>
</b-tabs>

## Responses

The WebSocket server sends different types of messages depending on the context:

### Data Messages

When subscribed to tickers, you receive detailed trading pair data including price, volume, and market statistics. Each ticker message contains comprehensive information about a specific market pair: the market UUID, exchange UUID, base currency UUID, and quote currency UUID. This granular data allows you to track individual trading pairs across different exchanges, monitor base and quote volumes separately, and analyze market-specific price movements.

```json
{
  "marketUuid": "dj23kKgETIie",
  "exchangeUuid": "zdvbieRdZ",
  "baseUuid": "Qwsogvtv82FCd",
  "quoteUuid": "cpjRxjFYD",
  "exchangeType": "cex",
  "close": "124590.91",
  "price": "124590.91",
  "baseVolume": "24290.53392",
  "quoteVolume": "3036047751.1820064",
  "volume": "3036047751.1820064",
  "filters": []
}
```

### Confirmation Messages

After sending a subscription update message through the WebSocket, the server responds with a confirmation message:

```json
{
  "type": "confirmation",
  "topic": "ticker",
  "throttle": "10s",
  "subscriptions": ["market:dj23kKgETIie","market:ia4qVnkhIxcQ"]
}
```

This confirmation indicates that your subscription has been successfully updated.

### Response fields

When subscribed to tickers, you receive new ticker data whenever it is available. Each ticker
includes the UUID of the market, exchange, base currency, and quote currency, which is especially useful when you are subscribed to
multiple markets or exchanges. Tickers include the latest price, close price, and volume data,
both in base and quote currencies, as well as in US dollars.

Unlike our <a href="/api/documentation/markets/market-details">market details endpoints</a>, we do not support other
<a href="/api/documentation/reference-currencies">reference currencies</a> than US dollars with
WebSockets. You can, however, subscribe to multiple markets and exchanges, which allows you to calculate them
yourself.

| Property | Description                           |
|----------|---------------------------------------|
| <span class="doc__field">marketUuid</span> `String` | <p>The market UUID of this ticker. Useful if you subscribed to multiple markets, in which case the UUID helps you determine which market the ticker belongs to.</p> |
| <span class="doc__field">exchangeUuid</span> `String` | <p>The exchange UUID of this ticker. Useful if you subscribed to multiple exchanges, in which case the UUID helps you determine which exchange the ticker comes from.</p> |
| <span class="doc__field">baseUuid</span> `String` | <p>The base currency UUID of this ticker.</p> |
| <span class="doc__field">quoteUuid</span> `String` | <p>The quote currency UUID of this ticker.</p> |
| <span class="doc__field">exchangeType</span> `String` | <p>The type of exchange: <code>cex</code> for Centralized Exchanges or <code>dex</code> for Decentralized Exchanges.</p> |
| <span class="doc__field">close</span> `String` | <p>The last price received from the market. For example in an ETH/BTC market the close price would be the ETH’s value in BTC</p> |
| <span class="doc__field">price</span> `String` | <p>The latest price of the base currency in US Dollar.</p> |
| <span class="doc__field">baseVolume</span> `String` | <p>The 24 hour volume in the base currency.</p> |
| <span class="doc__field">quoteVolume</span> `String` | <p>The 24 hour volume in the quote currency.</p> |
| <span class="doc__field">volume</span> `String` | <p>The 24 hour volume in US Dollar.</p> |
| <span class="doc__field">filters</span> `String[]` | <p>An array of filters that are applied to the market. Most of the filters will cause the market to not be included in the price calculation of the coins.</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">PREV_FACTOR</span> <span class="docs-badge__item">EXTERNAL_ZSCORE</span> <span class="docs-badge__item">GEO</span> <span class="docs-badge__item">OUTSIDE_TOP_20</span> |

---

# Bulk coins

<p>Get all our coins at once! This endpoint streams our entire set of coins with their complete metadata in compressed (gzip) 
  JSON format. It is particularly suited for scenarios where having the data managed in-house is
  necessary, allowing organizations to maintain complete control over data usage and analysis.
  Unlike other API endpoints, this endpoint does not offer filtering or sorting options, as it
  delivers all available coin metadata in bulk.</p>

<p>To ensure optimal performance and manage the load on our systems, this endpoint is rate-limited
  to 25 requests per day per client. The metadata dataset is refreshed every ten minutes, which enables you
  to download a fresh batch of data every hour. For most coins this frequency should be more than
  enough. For frequently traded coins (such as Bitcoin, Ethereum or any other <a href="https://support.coinranking.com/article/56-ranking-methodology">tier 1
  coin</a> we advise to use this endpoint in conjuction with either
  <a href="/api/documentation/realtime">realtime</a> or the
  <a href="/api/documentation/coins">regular coin endpoints</a> to get more frequent price updates.</p>


## Get bulk metadata of all coins

<div class="border border-info rounded p-3 mb-4">
  <span class="badge badge-permission">Professional</span>
  This endpoint requires the <a href="https://coinranking.com/api/pricing">professional plan</a> or higher</div>

```
<span class="link">https://api.coinranking.com/v2<strong>/bulk/coins</strong></span>
<copy-button text-to-copy="https://api.coinranking.com/v2/bulk/coins" button-text='Copy' :light="true"></copy-button>
```


## Code examples
<b-tabs content-class="mt-3">
<b-tab title="cURL">

```curl
curl https://api.coinranking.com/v2/bulk/coins \
  -H 'x-access-token: your-api-key' \
  -G \
  --compressed \
  -o output.json
```

</b-tab>
<b-tab title="JavaScript">

```JavaScript
const https = require('https');
const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');

const pipe = promisify(pipeline);

const options = {
	headers: {
		'x-access-token': 'your-api-key',
	}
};

const request = https.request('https://api.coinranking.com/v2/bulk/coins', options, (response) => {
	if (response.statusCode !== 200) {
		console.error(`HTTP error! status: ${response.statusCode}`);
		return;
	}

	const fileStream = fs.createWriteStream('output.json');
	const gunzip = zlib.createGunzip();

	response.on('error', (error) => {
		console.error('Response error:', error);
	});

	pipe(response, gunzip, fileStream)
		.then(() => console.log('Finished writing to file.'))
		.catch((error) => console.error('Pipe error:', error));
});

request.on('error', (error) => {
	console.error('Request error:', error);
});

request.end();
```

</b-tab>

## Response


```json
HTTP/1.1 200 OK
[
  {
    "uuid": "Qwsogvtv82FCd",
    "updatedAt": 1717497619,
    "symbol": "BTC",
    "name": "Bitcoin",
    "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    "links": [
      {
        "name": "coinmarketcap.com",
        "url": "https://coinmarketcap.com/currencies/bitcoin/",
        "type": "cmc"
      },
      {
        "name": "bitcoin.org",
        "type": "website",
        "url": "https://bitcoin.org"
      },
      {
        "name": "bitcoinmagazine.com",
        "url": "https://bitcoinmagazine.com/",
        "type": "website"
      },
      {
        "name": "bitcointalk.org",
        "url": "https://bitcointalk.org/",
        "type": "bitcointalk"
      },
      {
        "name": "bitcoin/bitcoin",
        "url": "https://github.com/bitcoin/bitcoin",
        "type": "github"
      },
      {
        "name": "r/bitcoin",
        "url": "https://www.reddit.com/r/bitcoin/",
        "type": "reddit"
      },
      {
        "name": "Bitcoin_Magazine",
        "url": "https://t.me/Bitcoin_Magazine",
        "type": "telegram"
      },
      {
        "name": "bitcoin",
        "url": "https://t.me/bitcoin",
        "type": "telegram"
      },
      {
        "name": "Bitcoin Whitepaper",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "type": "whitepaper"
      }
    ],
    "color": "#f7931A",
    "listedAt": 1330214400,
    "tags": [
      "halal",
      "layer-1",
      "proof-of-work"
    ],
    "maxSupply": "21000000",
    "issuanceBlockchains": [
      {
        "name": "Bitcoin",
        "reference": null
      }
    ],
    "price": "63862.61655770243",
    "marketCap": "1260990482199",
    "fullyDilutedMarketCap": "1341114947712",
    "volume": "18250228627",
    "price1hAgo": "63726.554724983194",
    "price3hAgo": "63678.81020397417",
    "price12hAgo": "64307.79866234446",
    "price24hAgo": "63875.484884689606",
    "price7dAgo": "58276.0082622311",
    "price30dAgo": "68209.40347294786",
    "price3mAgo": "69292.28673341914",
    "price1yAgo": "26105.28335075832",
    "price3yAgo": "48964.152023526825",
    "price5yAgo": "11128.14084828205",
    "sparkline1h": [
      "63732.6373736823",
      "63804.065328475575",
      "63805.210272342294",
      "63814.84456413123",
      "63884.988264620246",
      "63889.33447772621",
      "63881.19217540353",
      "63873.45171566927",
      "63827.557089906426",
      "63840.35091096729",
      "63820.777952423945",
      "63801.05118316911"
    ],
    "sparkline3h": [
      "63687.76257058441",
      "63680.83148990669",
      "63687.49773374934",
      "63737.68373843064",
      "63651.971120019894",
      "63594.77559678086",
      "63582.360019921136",
      "63627.05910891343",
      "63616.84573408292",
      "63670.04758040921",
      "63717.599140458275",
      "63795.32818428669",
      "63835.71307270205",
      "63873.045312203234",
      "63873.58522943921",
      "63885.1864699553",
      "63878.351712229174",
      "63852.66539625142",
      "63816.1340335506",
      "63875.72235069205",
      "63864.179209679714",
      "63783.48295116012",
      "63732.460763109724",
      "63733.60544661863",
      "63732.6373736823",
      "63804.065328475575",
      "63805.210272342294",
      "63814.84456413123",
      "63884.988264620246",
      "63889.33447772621",
      "63881.19217540353",
      "63873.45171566927",
      "63827.557089906426",
      "63840.35091096729",
      "63820.777952423945",
      "63801.05118316911"
    ],
    "sparkline12h": [
      "64209.36059539615",
      "64045.41146503717",
      "63956.316769021374",
      "64043.82010288767",
      "64078.97899566623",
      "63968.90559088486",
      "63881.15098867481",
      "63717.58127508807",
      "63746.42980051067",
      "63664.188439289115",
      "63839.906871673265",
      null
    ],
    "sparkline24h": [
      "63854.824634413206",
      "63960.263376078954",
      "64086.60855653837",
      "64094.922117160444",
      "64035.45858629048",
      "64028.84352626344",
      "64073.72382426766",
      "64109.42000098187",
      "64123.64766347129",
      "64279.34661749917",
      "64351.15657397337",
      "64488.53034681197",
      "64209.36059539615",
      "64045.41146503717",
      "63956.316769021374",
      "64043.82010288767",
      "64078.97899566623",
      "63968.90559088486",
      "63881.15098867481",
      "63717.58127508807",
      "63746.42980051067",
      "63664.188439289115",
      "63839.906871673265",
      null
    ],
    "sparkline7d": [
      "58315.7416229473",
      "58791.701413270544",
      "60301.55942385245",
      "60409.909764954034",
      "59118.32796110784",
      "59202.28058024403",
      "59314.197913159456",
      "60430.58812900159",
      "60470.683482964225",
      "60672.71313819922",
      "60306.84223197134",
      "60613.189530980235",
      "60966.095259633",
      "62914.189873396004",
      "63665.00673377523",
      "64049.81473710139",
      "63989.6747763024",
      "64086.06253970083",
      "63908.11711019808",
      "64143.08525610675",
      null
    ],
    "sparkline30d": [
      "68272.70659573431",
      "67828.649680657",
      "68608.93468746012",
      "66392.89017648668",
      "66002.68126841332",
      "64148.641812763075",
      "63774.98642313582",
      "61218.351190596615",
      "59897.098875387215",
      "53309.561507537466",
      "55695.36680514959",
      "56184.898845142045",
      "57937.96609604841",
      "60525.28675448115",
      "60616.16849657428",
      "60378.107966110605",
      "58857.23706507162",
      "59521.01114470784",
      "60015.62693184799",
      "58315.63646578822",
      "58258.613302413905",
      "59146.301908392845",
      "59606.50841226364",
      "58560.516768527465",
      "59899.53231140319",
      "59681.57229628631",
      "60469.13425292371",
      "61559.6880355543",
      "63909.379992665985",
      null
    ],
    "sparkline3m": [
      "70102.4792279725",
      "67572.28256716863",
      "65054.84486125128",
      "61271.13171207098",
      "59541.29150863424",
      "57581.48889099909",
      "64712.095988249974",
      "66738.90398971722",
      "64291.94063346326",
      "57378.20808415549",
      "59019.0711363704",
      "60679.97060956016"
    ],
    "sparkline1y": [
      "27961.943919693163",
      "26371.625474865472",
      "29633.24486966322",
      "36568.86810204725",
      "42485.30156767775",
      "42983.90947715237",
      "49493.6921579507",
      "67521.51926360297",
      "65957.60742591304",
      "65126.468394876836",
      "66039.87161267948",
      "62736.060425649324"
    ],
    "sparkline3y": [
      "45555.62253995916",
      "46068.47710174408",
      "57649.81453020378",
      "60655.41632735349",
      "49508.66357342172",
      "41246.77485314933",
      "40607.72438072867",
      "41912.09515693388",
      "41663.992627414125",
      "31895.66868440294",
      "24506.968817433946",
      "21443.195974740876",
      "22475.79672591635",
      "19820.700505355522",
      "19631.646983618004",
      "17692.386339316545",
      "16956.53383822057",
      "20122.632580692836",
      "23322.489210018375",
      "25066.567104971662",
      "28965.94740028308",
      "27626.19994847011",
      "27692.261473295755",
      "30098.86914264737",
      "27961.943919693163",
      "26371.625474865472",
      "29633.24486966322",
      "36568.86810204725",
      "42485.30156767775",
      "42983.90947715237",
      "49493.6921579507",
      "67521.51926360297",
      "65957.60742591304",
      "65126.468394876836",
      "66039.87161267948",
      "62736.060425649324"
    ],
    "sparkline5y": [
      "10581.577361264544",
      "9777.0862199913",
      "8403.771596580265",
      "8398.429802452603",
      "7301.277276701419",
      "8330.368055730407",
      "9652.198447196064",
      "6923.761670593226",
      "7175.493631036374",
      "9236.051553886908",
      "9528.875288642546",
      "9562.621811849573",
      "11635.706740132911",
      "10662.11303663457",
      "11832.604461036553",
      "16496.570513744904",
      "21806.565653850892",
      "34652.26296063312",
      "46118.84041977686",
      "54639.07833588483",
      "57645.548150653",
      "47602.29856520422",
      "35789.82581266557",
      "33953.36407052421",
      "45555.62253995916",
      "46068.47710174408",
      "57649.81453020378",
      "60655.41632735349",
      "49508.66357342172",
      "41246.77485314933",
      "40607.72438072867",
      "41912.09515693388",
      "41663.992627414125",
      "31895.66868440294",
      "24506.968817433946",
      "21443.195974740876",
      "22475.79672591635",
      "19820.700505355522",
      "19631.646983618004",
      "17692.386339316545",
      "16956.53383822057",
      "20122.632580692836",
      "23322.489210018375",
      "25066.567104971662",
      "28965.94740028308",
      "27626.19994847011",
      "27692.261473295755",
      "30098.86914264737",
      "27961.943919693163",
      "26371.625474865472",
      "29633.24486966322",
      "36568.86810204725",
      "42485.30156767775",
      "42983.90947715237",
      "49493.6921579507",
      "67521.51926360297",
      "65957.60742591304",
      "65126.468394876836",
      "66039.87161267948",
      "62736.060425649324"
    ],
    "allTimeHighPrice": 73646.0632562494,
    "allTimeHighDate": 1710400080,
    "tier": 1,
    "circulatingSupply": "19745362",
    "totalSupply": "19745362",
    "marketCapRank": 1,
    "fullyDilutedMarketCapRank": 1,
    "volumeRank": 2,
    "change1hRank": 166,
    "change3hRank": 281,
    "change12hRank": 349,
    "change24hRank": 301,
    "change7dRank": 485,
    "change30dRank": 307,
    "change3mRank": 80,
    "change1yRank": 114,
    "change3yRank": 38,
    "change5yRank": 35,
    "numberOfExchanges": 109,
    "numberOfMarkets": 2665
  }
]
```


### Response fields

<table>
    <tr>
        <td>Property</td>
        <td>Description</td>
    </tr>
    <tr>
        <td><code>Object[]</code></td>
        <td><p>The response is a list of objects containing comprehensive metadata for all our coins</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">uuid</span> <code>String</code></td>
        <td><p>UUID of a coin; a unique identifier</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">updatedAt</span> <code>Number</code></td>
        <td><p>Timestamp of the last change made to the coin's static data</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">symbol</span> <code>String</code></td>
        <td><p>Symbol of a coin</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">name</span> <code>String</code></td>
        <td><p>Name of a coin</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">iconUrl</span> <code>String</code></td>
        <td><p>URL to the icon of a coin</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">links</span> <code>Object[]</code></td>
        <td><p>List of links, like social media pages</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">links</span><span class="doc__field">.name</span> <code>String</code></td>
        <td><p>Name of the link</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">links</span><span class="doc__field">.url</span> <code>String</code></td>
        <td><p>Url to the specific link</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">links</span><span class="doc__field">.type</span> <code>String</code></td>
        <td><p>The type of link</p><span class="docs-badge">Allowed values: </br></span><span class="docs-badge__item">website</span> <span class="docs-badge__item">bitcointalk</span> <span class="docs-badge__item">explorer</span> <span class="docs-badge__item">discord</span> <span class="docs-badge__item">facebook</span> <span class="docs-badge__item">github</span> <span class="docs-badge__item">instagram</span> <span class="docs-badge__item">line-messenger</span> <span class="docs-badge__item">linkedin</span> <span class="docs-badge__item">medium</span> <span class="docs-badge__item">qq</span> <span class="docs-badge__item">quora</span> <span class="docs-badge__item">reddit</span> <span class="docs-badge__item">sina-weibo</span> <span class="docs-badge__item">telegram</span> <span class="docs-badge__item">tiktok</span> <span class="docs-badge__item">twitter</span> <span class="docs-badge__item">vkontakte</span> <span class="docs-badge__item">wechat</span> <span class="docs-badge__item">whitepaper</span> <span class="docs-badge__item">youtube</span> <span class="docs-badge__item">etc.</span></td>
    </tr>
    <tr>
        <td><span class="doc__field">color</span> <code>String</code></td>
        <td><p>of the coin in hexadecimal format</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">listedAt</span> <code>Number</code></td>
        <td><p>Timestamp of when the coin was listed on coinranking</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">tags</span> <code>String[]</code></td>
        <td><p>List of tags, like &quot;Staking&quot; or &quot;Meme&quot;</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">issuanceBlockchains</span> <code>Object[]</code></td>
        <td><p>List of issuance blockchains. This is our name for blockchains where the coin is issued on, which in some cases means multiple blockchains. For example Tether is issued on nine different blockchains.</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">issuanceBlockchains</span><span class="doc__field">.name</span> <code>String</code></td>
        <td><p>The name of the blockchain</p></td>
    </tr>
    <tr>
        <td><span class="doc__field">issuanceBlockchains</span><span class="doc__field">.reference</span> <code>String</code></td>
        <td><p>The reference, such as a smart contract address, of a coin on the blockchain</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price</span> <code>String</code></td>
      <td><p>Price of the coin in US Dollar</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">marketCap</span> <code>String</code></td>
      <td><p>Market capitalization in US Dollar. Price times circulating supply</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">fullyDilutedMarketCap</span> <code>String</code></td>
      <td>
        <p>
          Market capitalization in US Dollar. Price times circulating supply Full Market capitalization. Fully
          diluted market cap is a coin&#39;s price multiplied by its max supply. Or total supply if
          the max supply is not known. It shows what the market cap could be if all coins were in
          circulation, with the current price.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">24hVolume</span> <code>String</code></td>
      <td><p>24h trade volume in US Dollar</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price1hAgo</span> <code>String</code></td>
      <td>
        <p>
          Price 1 hour ago in US Dollar. Useful to calculate the change percentage over 1 hour.
          You can use the 1h price of a different coin to calculate the price in a different
          reference currency. For example, you can look up the current price of Euro now and 1 hour
          ago, and use its rate to calculate the Bitcoin price in Euro. Next, you could use these
          rates to calculate the change percentage of Bitcoin in Euro. In our
          <a href="/api/documentation/coins">regular coins endpoint</a> we can do this for you; we
          return a change percentage in the response and you can provide a
          <a href="/api/documentation/reference-currencies">reference currency</a> of your choosing
          (such as EUR, YEN or BTC) and all the prices including the change percentage are
          calculated using this reference currency.
        </p>
      </td>
    </tr>
    <tr>
      <td><span class="doc__field">price3hAgo</span> <code>String</code></td>
      <td><p>Price 3 hours ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price12hAgo</span> <code>String</code></td>
      <td><p>Price 12 hours ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price24hAgo</span> <code>String</code></td>
      <td><p>Price 24 hours ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price7dAgo</span> <code>String</code></td>
      <td><p>Price 7 days ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price30dAgo</span> <code>String</code></td>
      <td><p>Price 30 days ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price3mAgo</span> <code>String</code></td>
      <td><p>Price 3 months ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price1yAgo</span> <code>String</code></td>
      <td><p>Price 1 year ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price3yAgo</span> <code>String</code></td>
      <td><p>Price 3 years ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">price5yAgo</span> <code>String</code></td>
      <td><p>Price 5 years ago in US Dollar. See price1hAgo for more details.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline1h</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 1 hour. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline3h</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 3 hours. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline12h</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 12 hours. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline24h</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 24 hours. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline7d</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 7 days. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline30d</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 30 days. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline3m</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 3 months. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline1y</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 1 year. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline3y</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 3 years. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">sparkline5y</span> <code>String[]</code></td>
      <td><p>Array of about 25 price points spread out over the last 5 years. Useful for a small chart</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">allTimeHighPrice</span> <code>String</code></td>
      <td><p>Highest price the coin ever reached in US Dollar</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">allTimeHighDate</span> <code>String</code></td>
      <td><p>Timestamp of when the coin reached its highest price ever reached in US Dollar</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">circulatingSupply</span> <code>String</code></td>
      <td><p>Number of coins that are circulating in the public market</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">totalSupply</span> <code>String</code></td>
      <td><p>Number of coins that are in existence</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">maxSupply</span> <code>String</code></td>
      <td><p>Maximum amount the coin&#39;s supply can ever be.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">marketCapRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its market capitalization.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">fullyDilutedMarketCapRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its fully diluted market capitalization.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">volumeRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its trading volume.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change1hRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 1 hour.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change3hRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 3 hours.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change12hRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 12 hours.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change24hRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 24 hours.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change7dRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 7 days.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change30dRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 30 days.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change3mRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 3 months.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change1yRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 1 year.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change3yRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 3 years.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">change5yRank</span> <code>Integer</code></td>
      <td><p>Ranking of the coin based on its performance in the last 5 years.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">numberOfExchanges</span> <code>Integer</code></td>
      <td><p>The number of exchanges that the coin is listed on.</p></td>
    </tr>
    <tr>
      <td><span class="doc__field">numberOfMarkets</span> <code>Integer</code></td>
      <td><p>The number of markets that the coin is available in.</p></td>
    </tr>
</table>

---

# Playground

The API playground is a great way to quickly explore and experiment with the API. It's an interactive environment that allows you to easily test if our API is useful for you, by creating small code snippets and viewing the results in real time.

## Bitcoin price widget example
In this example, we made a small widget for you to play around with. Currently it fetches data about Bitcoin from our API, and it renders the icon and the price. Feel free to edit around, or copy it to use it on your own site. There is a limited amount of requests you can do without an API key, so be sure to [generate one for free!](https://account.coinranking.com/create-developer-account)

<p
  class="codepen"
  data-height="500"
  data-theme-id="light"
  data-default-tab="js,result"
  data-slug-hash="mdjjQNd"
  data-editable="true"
  data-user="coinranking"
  style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
>
  <span>See the Pen <a href="https://codepen.io/coinranking/pen/mdjjQNd">
  bitcoin price widget</a> (<a href="https://codepen.io/coinranking">@coinranking</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

---

