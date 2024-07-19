export const mappedSymbol: { [dict_key: string]: string } = {
  BTC: 'XBT'
};

export function getSymbol(symbol: string) {
  return mappedSymbol[symbol] || symbol;
}

const mockResponse = {
  "table": "orderBook10",
  "action": "update",
  "data": [
      {
          "symbol": "XBTUSD",
          "bids": [
              [
                  65673.0,
                  10200
              ],
              [
                  65672.5,
                  3300
              ],
              [
                  65671.0,
                  600
              ],
              [
                  65670.5,
                  100
              ],
              [
                  65668.5,
                  100
              ],
              [
                  65666.5,
                  11000
              ],
              [
                  65666.0,
                  18600
              ],
              [
                  65665.0,
                  3800
              ],
              [
                  65662.5,
                  18500
              ],
              [
                  65662.0,
                  100
              ]
          ],
          "asks": [
              [
                  65673.5,
                  26500
              ],
              [
                  65675.5,
                  3700
              ],
              [
                  65676.5,
                  12100
              ],
              [
                  65677.0,
                  19000
              ],
              [
                  65679.0,
                  17100
              ],
              [
                  65679.5,
                  30800
              ],
              [
                  65680.5,
                  18500
              ],
              [
                  65683.0,
                  11300
              ],
              [
                  65683.5,
                  15400
              ],
              [
                  65684.0,
                  18500
              ]
          ],
          "timestamp": "2024-07-17T04:33:03.155Z"
      }
  ]
};
