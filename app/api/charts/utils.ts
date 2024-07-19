export function getDates(): { from: string; to: string } {
  const currentDate = new Date();
  const oneMonthAgo = new Date(currentDate);
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);

  const from = oneMonthAgo.toISOString().split('T')[0];
  const to = currentDate.toISOString().split('T')[0];

  return { from, to };
};

const mockResponse = {
  "ticker": "X:BTCUSD",
  "queryCount": 33,
  "resultsCount": 33,
  "adjusted": true,
  "status": "OK",
  "request_id": "d343578a88f18f5f5b99b1debb4205d0",
  "count": 10,
  "next_url": "https://api.polygon.io/v2/aggs/ticker/X:ETHUSD/range/1/day/1674086400000/2023-02-10?cursor=bGltaXQ9MTAmc29ydD1hc2M",
  "results": [
    {
      "v": 37477.75170253635, // volume
      "vw": 17244.7501, // volume weighted
      "o": 17141, // open
      "c": 17177.98, // close
      "h": 17400, // high
      "l": 17102.97, // low
      "t": 1673222400000, // timestamp (unix msec)
      "n": 651146 // number of transactions
    },
    {
        "v": 28242.029977765436,
        "vw": 17313.5673,
        "o": 17177.94,
        "c": 17443.46,
        "h": 17506,
        "l": 17145.1,
        "t": 1673308800000,
        "n": 567001
    },
    {
        "v": 32757.552109634402,
        "vw": 17518.7719,
        "o": 17443.5,
        "c": 17944.27,
        "h": 18009,
        "l": 17308.8,
        "t": 1673395200000,
        "n": 593084
    },
    {
        "v": 73373.3833279598,
        "vw": 18384.1038,
        "o": 17953,
        "c": 18847.74,
        "h": 19115.85,
        "l": 17866,
        "t": 1673481600000,
        "n": 1020354
    },
    {
        "v": 62714.997723952554,
        "vw": 19233.7159,
        "o": 18847.77,
        "c": 19934.88,
        "h": 20000,
        "l": 18714.8,
        "t": 1673568000000,
        "n": 914811
    },
    {
        "v": 70029.19199789544,
        "vw": 20771.8989,
        "o": 19934.07,
        "c": 20957.02,
        "h": 21400,
        "l": 19893.25,
        "t": 1673654400000,
        "n": 1189155
    },
    {
        "v": 28804.679587925275,
        "vw": 20787.748,
        "o": 20956.2,
        "c": 20879.7,
        "h": 21066.9,
        "l": 20527.3,
        "t": 1673740800000,
        "n": 660406
    },
    {
        "v": 47685.398378917234,
        "vw": 21063.1342,
        "o": 20879.67,
        "c": 21197,
        "h": 21484.9,
        "l": 20611.45,
        "t": 1673827200000,
        "n": 769871
    },
    {
        "v": 37937.173314182124,
        "vw": 21223.3602,
        "o": 21191.79,
        "c": 21136.33,
        "h": 21679.1,
        "l": 20844.73,
        "t": 1673913600000,
        "n": 578913
    },
    {
        "v": 45307.0725398338,
        "vw": 21029.8077,
        "o": 21135.01,
        "c": 20674.29,
        "h": 21650.21,
        "l": 20370.01,
        "t": 1674000000000,
        "n": 746647
    },
    {
        "v": 26934.189112995628,
        "vw": 20886.6166,
        "o": 20674.03,
        "c": 21084.22,
        "h": 21207,
        "l": 20656.52,
        "t": 1674086400000,
        "n": 523776
    },
    {
        "v": 40199.208588889436,
        "vw": 21580.1896,
        "o": 21084.05,
        "c": 22669.81,
        "h": 22754.73,
        "l": 20856,
        "t": 1674172800000,
        "n": 751748
    },
    {
        "v": 41746.541146419164,
        "vw": 22922.0553,
        "o": 22670,
        "c": 22789.37,
        "h": 23428.6,
        "l": 22427,
        "t": 1674259200000,
        "n": 748168
    },
    {
        "v": 30181.28829905608,
        "vw": 22780.4871,
        "o": 22789.34,
        "c": 22714.87,
        "h": 23108.5,
        "l": 22298.15,
        "t": 1674345600000,
        "n": 590184
    },
    {
        "v": 37256.266090320954,
        "vw": 22849.2555,
        "o": 22714.81,
        "c": 22920.29,
        "h": 23180.55,
        "l": 22497,
        "t": 1674432000000,
        "n": 578321
    },
    {
        "v": 44134.956680995376,
        "vw": 22918.875,
        "o": 22920.67,
        "c": 22633.8,
        "h": 23165.56,
        "l": 22437,
        "t": 1674518400000,
        "n": 674619
    },
    {
        "v": 47259.844808518676,
        "vw": 22821.1929,
        "o": 22636,
        "c": 23062.36,
        "h": 23829.3,
        "l": 22320,
        "t": 1674604800000,
        "n": 641338
    },
    {
        "v": 35345.724866108285,
        "vw": 23065.9574,
        "o": 23054,
        "c": 23010.47,
        "h": 23293.3,
        "l": 22853,
        "t": 1674691200000,
        "n": 510196
    },
    {
        "v": 32852.829185457995,
        "vw": 23016.7165,
        "o": 23011.37,
        "c": 23084.4,
        "h": 23511.9,
        "l": 22492.8,
        "t": 1674777600000,
        "n": 526090
    }
  ]
};
