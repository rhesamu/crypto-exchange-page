import { Symbol } from '@/lib/types';

const list: Symbol[] = [
  {
    code: 'BTC',
    name: 'Bitcoin'
  },
  {
    code: 'ETH',
    name: 'Ethereum'
  },
  {
    code: 'USDT',
    name: 'USD'
  }
];

// const list = [
//   {
//     code: '1ST',
//     name: 'FirstBlood'
//   },
//   {
//     code: '2GIVE',
//     name: 'GiveCoin'
//   },
//   {
//     code: '808',
//     name: '808Coin'
//   },
//   {
//     code: 'AAVE',
//     name: 'Aave'
//   },
//   {
//     code: 'ABT',
//     name: 'ArcBlock'
//   },
//   {
//     code: 'ABY',
//     name: 'ArtByte'
//   },
//   {
//     code: 'AC',
//     name: 'AsiaCoin'
//   },
//   {
//     code: 'ACT',
//     name: 'Achain'
//   },
//   {
//     code: 'ADA',
//     name: 'Cardano'
//   },
//   {
//     code: 'ADT',
//     name: 'adToken'
//   },
//   {
//     code: 'ADX',
//     name: 'AdEx'
//   },
//   {
//     code: 'AE',
//     name: 'Aeternity'
//   },
//   {
//     code: 'AEON',
//     name: 'Aeon'
//   },
//   {
//     code: 'AGI',
//     name: 'SingularityNET'
//   },
//   {
//     code: 'AGRS',
//     name: 'IDNI-Agoras'
//   },
//   {
//     code: 'AI',
//     name: 'POLY-AI'
//   },
//   {
//     code: 'AID',
//     name: 'AidCoin'
//   },
//   {
//     code: 'AION',
//     name: 'Aion'
//   },
//   {
//     code: 'AIR',
//     name: 'AirToken'
//   },
//   {
//     code: 'AKY',
//     name: 'Akuya-Coin'
//   },
//   {
//     code: 'ALGO',
//     name: 'Algorand'
//   },
//   {
//     code: 'ALIS',
//     name: 'ALIS'
//   },
//   {
//     code: 'AMBER',
//     name: 'AmberCoin'
//   },
//   {
//     code: 'AMP',
//     name: 'Synereo'
//   },
//   {
//     code: 'AMPL',
//     name: 'Ampleforth'
//   },
//   {
//     code: 'ANC',
//     name: 'Anoncoin'
//   },
//   {
//     code: 'ANT',
//     name: 'Aragon'
//   },
//   {
//     code: 'APPC',
//     name: 'AppCoins'
//   },
//   {
//     code: 'APX',
//     name: 'APX-Ventures'
//   },
//   {
//     code: 'ARDR',
//     name: 'Ardor'
//   },
//   {
//     code: 'ARK',
//     name: 'Ark'
//   },
//   {
//     code: 'ARN',
//     name: 'Aeron'
//   },
//   {
//     code: 'AST',
//     name: 'AirSwap'
//   },
//   {
//     code: 'ATB',
//     name: 'ATBCoin'
//   },
//   {
//     code: 'ATM',
//     name: 'ATMChain'
//   },
//   {
//     code: 'ATOM',
//     name: 'Cosmos'
//   },
//   {
//     code: 'ATS',
//     name: 'Authorship'
//   },
//   {
//     code: 'AUR',
//     name: 'Auroracoin'
//   },
//   {
//     code: 'AVAX',
//     name: 'Avalanche'
//   },
//   {
//     code: 'AVT',
//     name: 'Aventus'
//   },
//   {
//     code: 'B3',
//     name: 'B3Coin'
//   },
//   {
//     code: 'BAND',
//     name: 'Band Protocol'
//   },
//   {
//     code: 'BAT',
//     name: 'Basic-Attention-Token'
//   },
//   {
//     code: 'BAY',
//     name: 'BitBay'
//   },
//   {
//     code: 'BBR',
//     name: 'Boolberry'
//   },
//   {
//     code: 'BCAP',
//     name: 'BCAP'
//   },
//   {
//     code: 'BCC',
//     name: 'BitConnect'
//   },
//   {
//     code: 'BCD',
//     name: 'Bitcoin-Diamond'
//   },
//   {
//     code: 'BCH',
//     name: 'Bitcoin-Cash'
//   },
//   {
//     code: 'BCN',
//     name: 'Bytecoin'
//   },
//   {
//     code: 'BCPT',
//     name: 'BlockMason-Credit-Protocol-Token'
//   },
//   {
//     code: 'BCX',
//     name: 'BitcoinX'
//   },
//   {
//     code: 'BCY',
//     name: 'BitCrystals'
//   },
//   {
//     code: 'BDL',
//     name: 'Bitdeal'
//   },
//   {
//     code: 'BEE',
//     name: 'Bee-Token'
//   },
//   {
//     code: 'BELA',
//     name: 'BelaCoin'
//   },
//   {
//     code: 'BET',
//     name: 'DAO-Casino'
//   },
//   {
//     code: 'BFT',
//     name: 'BF-Token'
//   },
//   {
//     code: 'BIS',
//     name: 'Bismuth'
//   },
//   {
//     code: 'BITB',
//     name: 'BitBean'
//   },
//   {
//     code: 'BITBTC',
//     name: 'BitBTC'
//   },
//   {
//     code: 'BITCNY',
//     name: 'BitCNY'
//   },
//   {
//     code: 'BITEUR',
//     name: 'BitEUR'
//   },
//   {
//     code: 'BITGOLD',
//     name: 'BitGOLD'
//   },
//   {
//     code: 'BITSILVER',
//     name: 'BitSILVER'
//   },
//   {
//     code: 'BITUSD',
//     name: 'BitUSD'
//   },
//   {
//     code: 'BIX',
//     name: 'Bibox-Token'
//   },
//   {
//     code: 'BLITZ',
//     name: 'Blitzcash'
//   },
//   {
//     code: 'BLK',
//     name: 'Blackcoin'
//   },
//   {
//     code: 'BLN',
//     name: 'Bolenum'
//   },
//   {
//     code: 'BLOCK',
//     name: 'Blocknet'
//   },
//   {
//     code: 'BLZ',
//     name: 'Bluzelle'
//   },
//   {
//     code: 'BMC',
//     name: 'Blackmoon-Crypto'
//   },
//   {
//     code: 'BNB',
//     name: 'Binance-Coin'
//   },
//   {
//     code: 'BNT',
//     name: 'Bancor-Network-Token'
//   },
//   {
//     code: 'BNTY',
//     name: 'Bounty0x'
//   },
//   {
//     code: 'BOST',
//     name: 'BoostCoin'
//   },
//   {
//     code: 'BOT',
//     name: 'Bodhi'
//   },
//   {
//     code: 'BQ',
//     name: 'bitqy'
//   },
//   {
//     code: 'BRD',
//     name: 'Bread'
//   },
//   {
//     code: 'BRK',
//     name: 'Breakout-Coin'
//   },
//   {
//     code: 'BRX',
//     name: 'Breakout-Stake'
//   },
//   {
//     code: 'BSV',
//     name: 'Bitcoin SV'
//   },
//   {
//     code: 'BTA',
//     name: 'Bata'
//   },
//   {
//     code: 'BTC',
//     name: 'Bitcoin'
//   },
//   {
//     code: 'BTCB',
//     name: 'Bitcoin BEP2'
//   },
//   {
//     code: 'BTCD',
//     name: 'BitcoinDark'
//   },
//   {
//     code: 'BTCP',
//     name: 'Bitcoin-Private'
//   },
//   {
//     code: 'BTG',
//     name: 'Bitcoin-Gold'
//   },
//   {
//     code: 'BTM',
//     name: 'Bitmark'
//   },
//   {
//     code: 'BTS',
//     name: 'BitShares'
//   },
//   {
//     code: 'BTSR',
//     name: 'BTSR'
//   },
//   {
//     code: 'BTT',
//     name: 'BitTorrent'
//   },
//   {
//     code: 'BTX',
//     name: 'Bitcore'
//   },
//   {
//     code: 'BURST',
//     name: 'Burstcoin'
//   },
//   {
//     code: 'BUSD',
//     name: 'Binance-USD'
//   },
//   {
//     code: 'BUZZ',
//     name: 'BuzzCoin'
//   },
//   {
//     code: 'BYC',
//     name: 'Bytecent'
//   },
//   {
//     code: 'BYTOM',
//     name: 'Bytom'
//   },
//   {
//     code: 'C20',
//     name: 'Crypto20'
//   },
//   {
//     code: 'CAKE',
//     name: 'PancakeSwap'
//   },
//   {
//     code: 'CANN',
//     name: 'CannabisCoin'
//   },
//   {
//     code: 'CAT',
//     name: 'BlockCAT'
//   },
//   {
//     code: 'CCRB',
//     name: 'CryptoCarbon'
//   },
//   {
//     code: 'CDT',
//     name: 'Blox'
//   },
//   {
//     code: 'CFI',
//     name: 'Cofound-it'
//   },
//   {
//     code: 'CHAT',
//     name: 'ChatCoin'
//   },
//   {
//     code: 'CHIPS',
//     name: 'Chips'
//   },
//   {
//     code: 'CLAM',
//     name: 'Clams'
//   },
//   {
//     code: 'CLOAK',
//     name: 'CloakCoin'
//   },
//   {
//     code: 'CMP',
//     name: 'Compcoin'
//   },
//   {
//     code: 'CMT',
//     name: 'CyberMiles'
//   },
//   {
//     code: 'CND',
//     name: 'Cindicator'
//   },
//   {
//     code: 'CNX',
//     name: 'Cryptonex'
//   },
//   {
//     code: 'COFI',
//     name: 'CoinFi'
//   },
//   {
//     code: 'COMP',
//     name: 'Compound'
//   },
//   {
//     code: 'COSS',
//     name: 'COSS'
//   },
//   {
//     code: 'COVAL',
//     name: 'Circuits-Of-Value'
//   },
//   {
//     code: 'CRBIT',
//     name: 'CreditBIT'
//   },
//   {
//     code: 'CREA',
//     name: 'CreativeCoin'
//   },
//   {
//     code: 'CREDO',
//     name: 'Credo'
//   },
//   {
//     code: 'CRO',
//     name: 'Crypto.com Coin'
//   },
//   {
//     code: 'CRW',
//     name: 'Crown'
//   },
//   {
//     code: 'CSNO',
//     name: 'BitDice'
//   },
//   {
//     code: 'CTR',
//     name: 'Centra'
//   },
//   {
//     code: 'CTXC',
//     name: 'Cortex'
//   },
//   {
//     code: 'CURE',
//     name: 'CureCoin'
//   },
//   {
//     code: 'CVC',
//     name: 'Civic'
//   },
//   {
//     code: 'DAI',
//     name: 'Dai'
//   },
//   {
//     code: 'DAR',
//     name: 'Darcrus'
//   },
//   {
//     code: 'DASH',
//     name: 'Dash'
//   },
//   {
//     code: 'DATA',
//     name: 'DATAcoin'
//   },
//   {
//     code: 'DAY',
//     name: 'Chronologic'
//   },
//   {
//     code: 'DBC',
//     name: 'DeepBrain-Chain'
//   },
//   {
//     code: 'DBIX',
//     name: 'DubaiCoin'
//   },
//   {
//     code: 'DCN',
//     name: 'Dentacoin'
//   },
//   {
//     code: 'DCR',
//     name: 'Decred'
//   },
//   {
//     code: 'DCT',
//     name: 'DECENT'
//   },
//   {
//     code: 'DDF',
//     name: 'Digital-Developers-Fund'
//   },
//   {
//     code: 'DENT',
//     name: 'Dent'
//   },
//   {
//     code: 'DFS',
//     name: 'DFSCoin'
//   },
//   {
//     code: 'DGB',
//     name: 'DigiByte'
//   },
//   {
//     code: 'DGC',
//     name: 'Digitalcoin'
//   },
//   {
//     code: 'DGD',
//     name: 'DigixDAO'
//   },
//   {
//     code: 'DICE',
//     name: 'Etheroll'
//   },
//   {
//     code: 'DLT',
//     name: 'Agrello-Delta'
//   },
//   {
//     code: 'DMD',
//     name: 'Diamond'
//   },
//   {
//     code: 'DMT',
//     name: 'DMarket'
//   },
//   {
//     code: 'DNT',
//     name: 'district0x'
//   },
//   {
//     code: 'DOGE',
//     name: 'DogeCoin'
//   },
//   {
//     code: 'DOPE',
//     name: 'DopeCoin'
//   },
//   {
//     code: 'DOT',
//     name: 'Polkadot'
//   },
//   {
//     code: 'DRGN',
//     name: 'Dragonchain'
//   },
//   {
//     code: 'DTA',
//     name: 'Data'
//   },
//   {
//     code: 'DTB',
//     name: 'Databits'
//   },
//   {
//     code: 'DYN',
//     name: 'Dynamic'
//   },
//   {
//     code: 'EAC',
//     name: 'EarthCoin'
//   },
//   {
//     code: 'EBST',
//     name: 'eBoost'
//   },
//   {
//     code: 'EBTC',
//     name: 'eBTC'
//   },
//   {
//     code: 'ECC',
//     name: 'ECC'
//   },
//   {
//     code: 'ECN',
//     name: 'E-coin'
//   },
//   {
//     code: 'EDG',
//     name: 'Edgeless'
//   },
//   {
//     code: 'EDO',
//     name: 'Eidoo'
//   },
//   {
//     code: 'EFL',
//     name: 'Electronic-Gulden'
//   },
//   {
//     code: 'EGC',
//     name: 'EverGreenCoin'
//   },
//   {
//     code: 'EGLD',
//     name: 'Elrond'
//   },
//   {
//     code: 'EKT',
//     name: 'EDUCare'
//   },
//   {
//     code: 'ELA',
//     name: 'Elastos'
//   },
//   {
//     code: 'ELEC',
//     name: 'Electrify.Asia'
//   },
//   {
//     code: 'ELF',
//     name: 'aelf'
//   },
//   {
//     code: 'ELIX',
//     name: 'Elixir'
//   },
//   {
//     code: 'EMB',
//     name: 'Embercoin'
//   },
//   {
//     code: 'EMC',
//     name: 'Emercoin'
//   },
//   {
//     code: 'EMC2',
//     name: 'Einsteinium'
//   },
//   {
//     code: 'ENG',
//     name: 'Enigma'
//   },
//   {
//     code: 'ENJ',
//     name: 'Enjin-Coin'
//   },
//   {
//     code: 'ENRG',
//     name: 'EnergyCoin'
//   },
//   {
//     code: 'EOS',
//     name: 'EOS'
//   },
//   {
//     code: 'EOT',
//     name: 'EOT-Token'
//   },
//   {
//     code: 'EQT',
//     name: 'EquiTrader'
//   },
//   {
//     code: 'ERC',
//     name: 'EuropeCoin'
//   },
//   {
//     code: 'ETC',
//     name: 'Ethereum-Classic'
//   },
//   {
//     code: 'ETH',
//     name: 'Ethereum'
//   },
//   {
//     code: 'ETHD',
//     name: 'Ethereum-Dark'
//   },
//   {
//     code: 'ETHOS',
//     name: 'Ethos'
//   },
//   {
//     code: 'ETN',
//     name: 'Electroneum'
//   },
//   {
//     code: 'ETP',
//     name: 'Metaverse-Entropy'
//   },
//   {
//     code: 'ETT',
//     name: 'EncryptoTel'
//   },
//   {
//     code: 'EVE',
//     name: 'Devery'
//   },
//   {
//     code: 'EVX',
//     name: 'Everex'
//   },
//   {
//     code: 'EXCL',
//     name: 'ExclusiveCoin'
//   },
//   {
//     code: 'EXP',
//     name: 'Expanse'
//   },
//   {
//     code: 'FCT',
//     name: 'Factom'
//   },
//   {
//     code: 'FIL',
//     name: 'Filecoin'
//   },
//   {
//     code: 'FLDC',
//     name: 'FoldingCoin'
//   },
//   {
//     code: 'FLO',
//     name: 'FlorinCoin'
//   },
//   {
//     code: 'FLT',
//     name: 'FlutterCoin'
//   },
//   {
//     code: 'FRST',
//     name: 'FirstCoin'
//   },
//   {
//     code: 'FTC',
//     name: 'Feathercoin'
//   },
//   {
//     code: 'FTT',
//     name: 'FTX Token'
//   },
//   {
//     code: 'FUEL',
//     name: 'Etherparty'
//   },
//   {
//     code: 'FUN',
//     name: 'FunFair'
//   },
//   {
//     code: 'GAM',
//     name: 'Gambit'
//   },
//   {
//     code: 'GAME',
//     name: 'GameCredits'
//   },
//   {
//     code: 'GAS',
//     name: 'Gas'
//   },
//   {
//     code: 'GBG',
//     name: 'Golos Gold'
//   },
//   {
//     code: 'GBX',
//     name: 'GoByte'
//   },
//   {
//     code: 'GBYTE',
//     name: 'Byteball'
//   },
//   {
//     code: 'GCR',
//     name: 'GCRCoin'
//   },
//   {
//     code: 'GEO',
//     name: 'GeoCoin'
//   },
//   {
//     code: 'GLD',
//     name: 'GoldCoin'
//   },
//   {
//     code: 'GNO',
//     name: 'Gnosis-Token'
//   },
//   {
//     code: 'GNT',
//     name: 'Golem-Tokens'
//   },
//   {
//     code: 'GOLOS',
//     name: 'Golos'
//   },
//   {
//     code: 'GRC',
//     name: 'Gridcoin'
//   },
//   {
//     code: 'GRT',
//     name: 'Graph'
//   },
//   {
//     code: 'GRS',
//     name: 'Groestlcoin'
//   },
//   {
//     code: 'GRWI',
//     name: 'Growers-International'
//   },
//   {
//     code: 'GTC',
//     name: 'Game'
//   },
//   {
//     code: 'GTO',
//     name: 'Gifto'
//   },
//   {
//     code: 'GUP',
//     name: 'Guppy'
//   },
//   {
//     code: 'GVT',
//     name: 'Genesis-Vision'
//   },
//   {
//     code: 'GXS',
//     name: 'GXShares'
//   },
//   {
//     code: 'HBAR',
//     name: 'Hedera'
//   },
//   {
//     code: 'HBN',
//     name: 'HoboNickels'
//   },
//   {
//     code: 'HEAT',
//     name: 'HEAT'
//   },
//   {
//     code: 'HMQ',
//     name: 'Humaniq'
//   },
//   {
//     code: 'HPB',
//     name: 'High-Performance-Blockchain'
//   },
//   {
//     code: 'HSR',
//     name: 'Hshare'
//   },
//   {
//     code: 'HT',
//     name: 'Huobi Token'
//   },
//   {
//     code: 'HUSH',
//     name: 'Hush'
//   },
//   {
//     code: 'HVN',
//     name: 'Hive'
//   },
//   {
//     code: 'HXX',
//     name: 'HexxCoin'
//   },
//   {
//     code: 'ICN',
//     name: 'ICONOMI'
//   },
//   {
//     code: 'ICX',
//     name: 'ICON'
//   },
//   {
//     code: 'IFC',
//     name: 'Infinitecoin'
//   },
//   {
//     code: 'IFT',
//     name: 'investFeed'
//   },
//   {
//     code: 'IGNIS',
//     name: 'Ignis'
//   },
//   {
//     code: 'INCNT',
//     name: 'Incent'
//   },
//   {
//     code: 'IND',
//     name: 'Indorse-Token'
//   },
//   {
//     code: 'INF',
//     name: 'InfChain'
//   },
//   {
//     code: 'INK',
//     name: 'Ink'
//   },
//   {
//     code: 'INS',
//     name: 'INS-Ecosystem'
//   },
//   {
//     code: 'INSTAR',
//     name: 'Insights-Network'
//   },
//   {
//     code: 'INT',
//     name: 'Internet-Node-Token'
//   },
//   {
//     code: 'INXT',
//     name: 'Internxt'
//   },
//   {
//     code: 'IOC',
//     name: 'IOCoin'
//   },
//   {
//     code: 'ION',
//     name: 'ION'
//   },
//   {
//     code: 'IOP',
//     name: 'Internet-of-People'
//   },
//   {
//     code: 'IOST',
//     name: 'IOStoken'
//   },
//   {
//     code: 'IOTA',
//     name: 'IOTA'
//   },
//   {
//     code: 'IOTX',
//     name: 'IoTeX'
//   },
//   {
//     code: 'IQT',
//     name: 'Iquant-Chain'
//   },
//   {
//     code: 'ITC',
//     name: 'IoT-Chain'
//   },
//   {
//     code: 'IXC',
//     name: 'iXcoin'
//   },
//   {
//     code: 'IXT',
//     name: 'InsureX'
//   },
//   {
//     code: 'J8T',
//     name: 'JET8'
//   },
//   {
//     code: 'JNT',
//     name: 'Jibrel-Network'
//   },
//   {
//     code: 'KCS',
//     name: 'KuCoin'
//   },
//   {
//     code: 'KICK',
//     name: 'KickCoin'
//   },
//   {
//     code: 'KIN',
//     name: 'KIN'
//   },
//   {
//     code: 'KLAY',
//     name: 'Klaytn'
//   },
//   {
//     code: 'KMD',
//     name: 'Komodo'
//   },
//   {
//     code: 'KNC',
//     name: 'Kyber-Network'
//   },
//   {
//     code: 'KORE',
//     name: 'KoreCoin'
//   },
//   {
//     code: 'KSM',
//     name: 'Kusama'
//   },
//   {
//     code: 'LBC',
//     name: 'LBRY-Credits'
//   },
//   {
//     code: 'LCC',
//     name: 'Litecoin-Cash'
//   },
//   {
//     code: 'LEND',
//     name: 'EthLend'
//   },
//   {
//     code: 'LEO',
//     name: 'UNUS SED LEO'
//   },
//   {
//     code: 'LEV',
//     name: 'Leverj'
//   },
//   {
//     code: 'LGD',
//     name: 'Legends-Room'
//   },
//   {
//     code: 'LINDA',
//     name: 'Linda'
//   },
//   {
//     code: 'LINK',
//     name: 'ChainLink'
//   },
//   {
//     code: 'LKK',
//     name: 'Lykke'
//   },
//   {
//     code: 'LMC',
//     name: 'LoMoCoin'
//   },
//   {
//     code: 'LOCI',
//     name: 'LOCIcoin'
//   },
//   {
//     code: 'LOOM',
//     name: 'Loom-Token'
//   },
//   {
//     code: 'LRC',
//     name: 'Loopring'
//   },
//   {
//     code: 'LSK',
//     name: 'Lisk'
//   },
//   {
//     code: 'LTC',
//     name: 'Litecoin'
//   },
//   {
//     code: 'LUN',
//     name: 'Lunyr'
//   },
//   {
//     code: 'LUNA',
//     name: 'Terra'
//   },
//   {
//     code: 'MAID',
//     name: 'MaidSafeCoin'
//   },
//   {
//     code: 'MANA',
//     name: 'Decentraland'
//   },
//   {
//     code: 'MATIC',
//     name: 'Polygon'
//   },
//   {
//     code: 'MAX',
//     name: 'Maxcoin'
//   },
//   {
//     code: 'MBRS',
//     name: 'Embers'
//   },
//   {
//     code: 'MCAP',
//     name: 'MCAP'
//   },
//   {
//     code: 'MCO',
//     name: 'Monaco'
//   },
//   {
//     code: 'MDA',
//     name: 'Moeda-Loyalty-Points'
//   },
//   {
//     code: 'MEC',
//     name: 'Megacoin'
//   },
//   {
//     code: 'MED',
//     name: 'MediBlock'
//   },
//   {
//     code: 'MEME',
//     name: 'Memetic'
//   },
//   {
//     code: 'MER',
//     name: 'Mercury'
//   },
//   {
//     code: 'MGC',
//     name: 'MergeCoin'
//   },
//   {
//     code: 'MGO',
//     name: 'MobileGo'
//   },
//   {
//     code: 'MINEX',
//     name: 'Minex'
//   },
//   {
//     code: 'MINT',
//     name: 'Mintcoin'
//   },
//   {
//     code: 'MIOTA',
//     name: 'IOTA'
//   },
//   {
//     code: 'MITH',
//     name: 'Mithril'
//   },
//   {
//     code: 'MKR',
//     name: 'Maker'
//   },
//   {
//     code: 'MLN',
//     name: 'Melon'
//   },
//   {
//     code: 'MNE',
//     name: 'Minereum'
//   },
//   {
//     code: 'MNX',
//     name: 'MinexCoin'
//   },
//   {
//     code: 'MOD',
//     name: 'Modum'
//   },
//   {
//     code: 'MONA',
//     name: 'MonaCoin'
//   },
//   {
//     code: 'MRT',
//     name: 'Miners-Reward-Token'
//   },
//   {
//     code: 'MSP',
//     name: 'Mothership'
//   },
//   {
//     code: 'MTH',
//     name: 'Monetha'
//   },
//   {
//     code: 'MTN',
//     name: 'MedToken'
//   },
//   {
//     code: 'MUE',
//     name: 'MonetaryUnit'
//   },
//   {
//     code: 'MUSIC',
//     name: 'Musicoin'
//   },
//   {
//     code: 'MYB',
//     name: 'MyBit-Token'
//   },
//   {
//     code: 'MYST',
//     name: 'Mysterium'
//   },
//   {
//     code: 'MZC',
//     name: 'Mazacoin'
//   },
//   {
//     code: 'NAMO',
//     name: 'Namocoin'
//   },
//   {
//     code: 'NANO',
//     name: 'Nano'
//   },
//   {
//     code: 'NAS',
//     name: 'Nebulas-Token'
//   },
//   {
//     code: 'NAV',
//     name: 'Nav-Coin'
//   },
//   {
//     code: 'NBT',
//     name: 'NuBits'
//   },
//   {
//     code: 'NCASH',
//     name: 'Nucleus-Vision'
//   },
//   {
//     code: 'NDC',
//     name: 'NeverDie-Coin'
//   },
//   {
//     code: 'NEBL',
//     name: 'Neblio'
//   },
//   {
//     code: 'NEO',
//     name: 'NEO'
//   },
//   {
//     code: 'NEOS',
//     name: 'NeosCoin'
//   },
//   {
//     code: 'NET',
//     name: 'Nimiq'
//   },
//   {
//     code: 'NLC2',
//     name: 'NoLimitCoin'
//   },
//   {
//     code: 'NLG',
//     name: 'Gulden'
//   },
//   {
//     code: 'NMC',
//     name: 'Namecoin'
//   },
//   {
//     code: 'NMR',
//     name: 'Numeraire'
//   },
//   {
//     code: 'NOBL',
//     name: 'NobleCoin'
//   },
//   {
//     code: 'NOTE',
//     name: 'DNotes'
//   },
//   {
//     code: 'NPXS',
//     name: 'Pundi-X-Token'
//   },
//   {
//     code: 'NSR',
//     name: 'NuShares'
//   },
//   {
//     code: 'NTO',
//     name: 'Fujinto'
//   },
//   {
//     code: 'NULS',
//     name: 'Nuls'
//   },
//   {
//     code: 'NVC',
//     name: 'Novacoin'
//   },
//   {
//     code: 'NXC',
//     name: 'Nexium'
//   },
//   {
//     code: 'NXS',
//     name: 'Nexus'
//   },
//   {
//     code: 'NXT',
//     name: 'Nxt'
//   },
//   {
//     code: 'OAX',
//     name: 'openANX'
//   },
//   {
//     code: 'OBITS',
//     name: 'Obits'
//   },
//   {
//     code: 'OCL',
//     name: 'Oceanlab'
//   },
//   {
//     code: 'OCN',
//     name: 'Odyssey'
//   },
//   {
//     code: 'ODEM',
//     name: 'ODEM'
//   },
//   {
//     code: 'ODN',
//     name: 'Obsidian'
//   },
//   {
//     code: 'OF',
//     name: 'OFCOIN'
//   },
//   {
//     code: 'OK',
//     name: 'OKCash'
//   },
//   {
//     code: 'OMG',
//     name: 'OmiseGo'
//   },
//   {
//     code: 'OMNI',
//     name: 'Omni'
//   },
//   {
//     code: 'ONION',
//     name: 'DeepOnion'
//   },
//   {
//     code: 'ONT',
//     name: 'Ontology'
//   },
//   {
//     code: 'OPT',
//     name: 'Opus'
//   },
//   {
//     code: 'ORN',
//     name: 'Orion-Protocol'
//   },
//   {
//     code: 'OST',
//     name: 'Simple-Token'
//   },
//   {
//     code: 'PART',
//     name: 'Particl'
//   },
//   {
//     code: 'PASC',
//     name: 'PascalCoin'
//   },
//   {
//     code: 'PAY',
//     name: 'TenX'
//   },
//   {
//     code: 'PBL',
//     name: 'Pebbles'
//   },
//   {
//     code: 'PBT',
//     name: 'Primalbase-Token'
//   },
//   {
//     code: 'PFR',
//     name: 'Payfair'
//   },
//   {
//     code: 'PING',
//     name: 'CryptoPing'
//   },
//   {
//     code: 'PINK',
//     name: 'Pinkcoin'
//   },
//   {
//     code: 'PIVX',
//     name: 'PIVX'
//   },
//   {
//     code: 'PIX',
//     name: 'Lampix'
//   },
//   {
//     code: 'PLBT',
//     name: 'Polybius'
//   },
//   {
//     code: 'PLR',
//     name: 'Pillar'
//   },
//   {
//     code: 'PLU',
//     name: 'Pluton'
//   },
//   {
//     code: 'POA',
//     name: 'POA-Network'
//   },
//   {
//     code: 'POE',
//     name: 'Poet'
//   },
//   {
//     code: 'POLY',
//     name: 'Polymath'
//   },
//   {
//     code: 'POSW',
//     name: 'PoSW-Coin'
//   },
//   {
//     code: 'POT',
//     name: 'PotCoin'
//   },
//   {
//     code: 'POWR',
//     name: 'Power-Ledger'
//   },
//   {
//     code: 'PPC',
//     name: 'Peercoin'
//   },
//   {
//     code: 'PPT',
//     name: 'Populous'
//   },
//   {
//     code: 'PPY',
//     name: 'Peerplays'
//   },
//   {
//     code: 'PRG',
//     name: 'Paragon-Coin'
//   },
//   {
//     code: 'PRL',
//     name: 'Oyster-Pearl'
//   },
//   {
//     code: 'PRO',
//     name: 'Propy'
//   },
//   {
//     code: 'PST',
//     name: 'Primas'
//   },
//   {
//     code: 'PTC',
//     name: 'Pesetacoin'
//   },
//   {
//     code: 'PTOY',
//     name: 'Patientory'
//   },
//   {
//     code: 'PURA',
//     name: 'Pura'
//   },
//   {
//     code: 'QASH',
//     name: 'QASH'
//   },
//   {
//     code: 'QAU',
//     name: 'Quantum'
//   },
//   {
//     code: 'QLC',
//     name: 'Qlink'
//   },
//   {
//     code: 'QRK',
//     name: 'Quark'
//   },
//   {
//     code: 'QRL',
//     name: 'Quantum-Resistant-Ledger'
//   },
//   {
//     code: 'QSP',
//     name: 'Quantstamp'
//   },
//   {
//     code: 'QTL',
//     name: 'Quatloo'
//   },
//   {
//     code: 'QTUM',
//     name: 'Qtum'
//   },
//   {
//     code: 'QUICK',
//     name: 'Quickswap'
//   },
//   {
//     code: 'QWARK',
//     name: 'Qwark'
//   },
//   {
//     code: 'R',
//     name: 'Revain'
//   },
//   {
//     code: 'RADS',
//     name: 'Radium'
//   },
//   {
//     code: 'RAIN',
//     name: 'Condensate'
//   },
//   {
//     code: 'RBIES',
//     name: 'Rubies'
//   },
//   {
//     code: 'RBX',
//     name: 'Ripto-Bux'
//   },
//   {
//     code: 'RBY',
//     name: 'RubyCoin'
//   },
//   {
//     code: 'RCN',
//     name: 'Ripio-Credit-Network'
//   },
//   {
//     code: 'RDD',
//     name: 'ReddCoin'
//   },
//   {
//     code: 'RDN',
//     name: 'Raiden-Network-Token'
//   },
//   {
//     code: 'REC',
//     name: 'Regalcoin'
//   },
//   {
//     code: 'RED',
//     name: 'Redcoin'
//   },
//   {
//     code: 'REP',
//     name: 'Augur'
//   },
//   {
//     code: 'REQ',
//     name: 'Request-Network'
//   },
//   {
//     code: 'RHOC',
//     name: 'RChain'
//   },
//   {
//     code: 'RIC',
//     name: 'Riecoin'
//   },
//   {
//     code: 'RISE',
//     name: 'Rise'
//   },
//   {
//     code: 'RLC',
//     name: 'RLC-Token'
//   },
//   {
//     code: 'RLT',
//     name: 'RouletteToken'
//   },
//   {
//     code: 'RPX',
//     name: 'Red-Pulse'
//   },
//   {
//     code: 'RRT',
//     name: 'Recovery-Right-Tokens'
//   },
//   {
//     code: 'RUFF',
//     name: 'Ruff'
//   },
//   {
//     code: 'RUNE',
//     name: 'THORChain'
//   },
//   {
//     code: 'RUP',
//     name: 'Rupee'
//   },
//   {
//     code: 'RVT',
//     name: 'Rivetz'
//   },
//   {
//     code: 'SAFEX',
//     name: 'SafeExchangeCoin'
//   },
//   {
//     code: 'SALT',
//     name: 'Salt'
//   },
//   {
//     code: 'SAN',
//     name: 'Santiment-Network-Token'
//   },
//   {
//     code: 'SBD',
//     name: 'Steem-Dollars'
//   },
//   {
//     code: 'SBTC',
//     name: 'Super-Bitcoin'
//   },
//   {
//     code: 'SC',
//     name: 'Siacoin'
//   },
//   {
//     code: 'SEELE',
//     name: 'Seele'
//   },
//   {
//     code: 'SEQ',
//     name: 'Sequence'
//   },
//   {
//     code: 'SHIB',
//     name: 'SHIBA-INU'
//   },
//   {
//     code: 'SHIFT',
//     name: 'SHIFT'
//   },
//   {
//     code: 'SIB',
//     name: 'SIBCoin'
//   },
//   {
//     code: 'SIGMA',
//     name: 'SIGMAcoin'
//   },
//   {
//     code: 'SIGT',
//     name: 'Signatum'
//   },
//   {
//     code: 'SJCX',
//     name: 'Storjcoin-X'
//   },
//   {
//     code: 'SKIN',
//     name: 'SkinCoin'
//   },
//   {
//     code: 'SKY',
//     name: 'Skycoin'
//   },
//   {
//     code: 'SLR',
//     name: 'SolarCoin'
//   },
//   {
//     code: 'SLS',
//     name: 'SaluS'
//   },
//   {
//     code: 'SMART',
//     name: 'SmartCash'
//   },
//   {
//     code: 'SMT',
//     name: 'SmartMesh'
//   },
//   {
//     code: 'SNC',
//     name: 'SunContract'
//   },
//   {
//     code: 'SNGLS',
//     name: 'SingularDTV'
//   },
//   {
//     code: 'SNM',
//     name: 'SONM'
//   },
//   {
//     code: 'SNRG',
//     name: 'Synergy'
//   },
//   {
//     code: 'SNT',
//     name: 'Status-Network-Token'
//   },
//   {
//     code: 'SOC',
//     name: 'All-Sports'
//   },
//   {
//     code: 'SOL',
//     name: 'Solana'
//   },
//   {
//     code: 'SOUL',
//     name: 'Phantasma'
//   },
//   {
//     code: 'SPANK',
//     name: 'SpankChain'
//   },
//   {
//     code: 'SPC',
//     name: 'SpaceChain'
//   },
//   {
//     code: 'SPHR',
//     name: 'Sphere'
//   },
//   {
//     code: 'SPR',
//     name: 'SpreadCoin'
//   },
//   {
//     code: 'SNX',
//     name: 'Synthetix-Network-Token'
//   },
//   {
//     code: 'SRN',
//     name: 'Sirin-Labs-Token'
//   },
//   {
//     code: 'START',
//     name: 'Startcoin'
//   },
//   {
//     code: 'STEEM',
//     name: 'Steem'
//   },
//   {
//     code: 'STK',
//     name: 'STK-Token'
//   },
//   {
//     code: 'STORJ',
//     name: 'Storj'
//   },
//   {
//     code: 'STORM',
//     name: 'Storm'
//   },
//   {
//     code: 'STQ',
//     name: 'Storiqa'
//   },
//   {
//     code: 'STRAT',
//     name: 'Stratis'
//   },
//   {
//     code: 'STX',
//     name: 'Stox'
//   },
//   {
//     code: 'SUB',
//     name: 'Substratum'
//   },
//   {
//     code: 'SWFTC',
//     name: 'SwftCoin'
//   },
//   {
//     code: 'SWIFT',
//     name: 'Bitswift'
//   },
//   {
//     code: 'SWT',
//     name: 'Swarm-City'
//   },
//   {
//     code: 'SYNX',
//     name: 'Syndicate'
//   },
//   {
//     code: 'SYS',
//     name: 'SysCoin'
//   },
//   {
//     code: 'TAAS',
//     name: 'Taas'
//   },
//   {
//     code: 'TAU',
//     name: 'Lamden'
//   },
//   {
//     code: 'TCC',
//     name: 'The-ChampCoin'
//   },
//   {
//     code: 'TFL',
//     name: 'True-Flip'
//   },
//   {
//     code: 'THC',
//     name: 'HempCoin'
//   },
//   {
//     code: 'THETA',
//     name: 'Theta-Token'
//   },
//   {
//     code: 'TIME',
//     name: 'Time'
//   },
//   {
//     code: 'TIX',
//     name: 'Blocktix'
//   },
//   {
//     code: 'TKN',
//     name: 'TokenCard'
//   },
//   {
//     code: 'TKR',
//     name: 'Trackr'
//   },
//   {
//     code: 'TKS',
//     name: 'Tokes'
//   },
//   {
//     code: 'TNB',
//     name: 'Time-New-Bank'
//   },
//   {
//     code: 'TNT',
//     name: 'Tierion'
//   },
//   {
//     code: 'TOA',
//     name: 'ToaCoin'
//   },
//   {
//     code: 'TRAC',
//     name: 'OriginTrail'
//   },
//   {
//     code: 'TRC',
//     name: 'Terracoin'
//   },
//   {
//     code: 'TRCT',
//     name: 'Tracto'
//   },
//   {
//     code: 'TRIBE',
//     name: 'Tribe'
//   },
//   {
//     code: 'TRIG',
//     name: 'Triggers'
//   },
//   {
//     code: 'TRST',
//     name: 'Trustcoin'
//   },
//   {
//     code: 'TRUE',
//     name: 'TrueChain'
//   },
//   {
//     code: 'TRUST',
//     name: 'TrustPlus'
//   },
//   {
//     code: 'TRX',
//     name: 'Tronix'
//   },
//   {
//     code: 'TUSD',
//     name: 'TrueUSD'
//   },
//   {
//     code: 'TX',
//     name: 'TransferCoin'
//   },
//   {
//     code: 'UBQ',
//     name: 'Ubiq'
//   },
//   {
//     code: 'UKG',
//     name: 'UnikoinGold'
//   },
//   {
//     code: 'ULA',
//     name: 'Ulatech'
//   },
//   {
//     code: 'UNB',
//     name: 'UnbreakableCoin'
//   },
//   {
//     code: 'UNI',
//     name: 'Uniswap'
//   },
//   {
//     code: 'UNITY',
//     name: 'SuperNET'
//   },
//   {
//     code: 'UNO',
//     name: 'Unobtanium'
//   },
//   {
//     code: 'UNY',
//     name: 'Unity-Ingot'
//   },
//   {
//     code: 'UP',
//     name: 'UpToken'
//   },
//   {
//     code: 'URO',
//     name: 'Uro'
//   },
//   {
//     code: 'USDT',
//     name: 'Tether'
//   },
//   {
//     code: 'UST',
//     name: 'TerraUSD'
//   },
//   {
//     code: 'UTK',
//     name: 'UTrust'
//   },
//   {
//     code: 'VEE',
//     name: 'BLOCKv'
//   },
//   {
//     code: 'VEN',
//     name: 'VeChain'
//   },
//   {
//     code: 'VERI',
//     name: 'Veritaseum'
//   },
//   {
//     code: 'VET',
//     name: 'VeChain'
//   },
//   {
//     code: 'VIA',
//     name: 'Viacoin'
//   },
//   {
//     code: 'VIB',
//     name: 'Viberate'
//   },
//   {
//     code: 'VIBE',
//     name: 'Vibe'
//   },
//   {
//     code: 'VIVO',
//     name: 'VIVO'
//   },
//   {
//     code: 'VOISE',
//     name: 'Voise'
//   },
//   {
//     code: 'VOX',
//     name: 'Voxels'
//   },
//   {
//     code: 'VPN',
//     name: 'VPNCoin'
//   },
//   {
//     code: 'VRC',
//     name: 'Vericoin'
//   },
//   {
//     code: 'VRM',
//     name: 'Verium'
//   },
//   {
//     code: 'VRS',
//     name: 'Veros'
//   },
//   {
//     code: 'VSL',
//     name: 'vSlice'
//   },
//   {
//     code: 'VTC',
//     name: 'Vertcoin'
//   },
//   {
//     code: 'VTR',
//     name: 'vTorrent'
//   },
//   {
//     code: 'WABI',
//     name: 'WaBi'
//   },
//   {
//     code: 'WAN',
//     name: 'Wanchain'
//   },
//   {
//     code: 'WAVES',
//     name: 'Waves'
//   },
//   {
//     code: 'WAX',
//     name: 'Wax-Token'
//   },
//   {
//     code: 'WBTC',
//     name: 'Wrapped Bitcoin'
//   },
//   {
//     code: 'WCT',
//     name: 'Waves-Community'
//   },
//   {
//     code: 'WDC',
//     name: 'WorldCoin'
//   },
//   {
//     code: 'WGO',
//     name: 'WavesGo'
//   },
//   {
//     code: 'WGR',
//     name: 'Wagerr'
//   },
//   {
//     code: 'WINGS',
//     name: 'Wings'
//   },
//   {
//     code: 'WPR',
//     name: 'WePower'
//   },
//   {
//     code: 'WTC',
//     name: 'Walton'
//   },
//   {
//     code: 'WTT',
//     name: 'Giga-Watt-Token'
//   },
//   {
//     code: 'XAS',
//     name: 'Asch'
//   },
//   {
//     code: 'XAUR',
//     name: 'Xaurum'
//   },
//   {
//     code: 'XBC',
//     name: 'Bitcoin-Plus'
//   },
//   {
//     code: 'XBY',
//     name: 'XtraBYtes'
//   },
//   {
//     code: 'XCN',
//     name: 'Cryptonite'
//   },
//   {
//     code: 'XCP',
//     name: 'Counterparty'
//   },
//   {
//     code: 'XDN',
//     name: 'DigitalNote'
//   },
//   {
//     code: 'XEL',
//     name: 'Elastic'
//   },
//   {
//     code: 'XEM',
//     name: 'NEM'
//   },
//   {
//     code: 'NEM',
//     name: 'NEM'
//   },
//   {
//     code: 'XHV',
//     name: 'Haven-Protocol'
//   },
//   {
//     code: 'XID',
//     name: 'Sphere-Identity'
//   },
//   {
//     code: 'XLM',
//     name: 'Stellar'
//   },
//   {
//     code: 'XMG',
//     name: 'Magi'
//   },
//   {
//     code: 'XMR',
//     name: 'Monero'
//   },
//   {
//     code: 'XMT',
//     name: 'Metal'
//   },
//   {
//     code: 'XMY',
//     name: 'Myriadcoin'
//   },
//   {
//     code: 'XPM',
//     name: 'Primecoin'
//   },
//   {
//     code: 'XRL',
//     name: 'Rialto'
//   },
//   {
//     code: 'XRP',
//     name: 'Ripple'
//   },
//   {
//     code: 'XSPEC',
//     name: 'Spectrecoin'
//   },
//   {
//     code: 'XST',
//     name: 'Stealthcoin'
//   },
//   {
//     code: 'XTZ',
//     name: 'Tezos'
//   },
//   {
//     code: 'XUC',
//     name: 'Exchange-Union'
//   },
//   {
//     code: 'XVC',
//     name: 'Vcash'
//   },
//   {
//     code: 'XVG',
//     name: 'Verge'
//   },
//   {
//     code: 'XWC',
//     name: 'WhiteCoin'
//   },
//   {
//     code: 'XZC',
//     name: 'ZCoin'
//   },
//   {
//     code: 'XZR',
//     name: 'ZrCoin'
//   },
//   {
//     code: 'YEE',
//     name: 'Yee'
//   },
//   {
//     code: 'YOYOW',
//     name: 'YOYOW'
//   },
//   {
//     code: 'ZCC',
//     name: 'ZcCoin'
//   },
//   {
//     code: 'ZCL',
//     name: 'Zclassic'
//   },
//   {
//     code: 'ZCO',
//     name: 'Zebi'
//   },
//   {
//     code: 'ZEC',
//     name: 'Zcash'
//   },
//   {
//     code: 'ZEN',
//     name: 'ZenCash'
//   },
//   {
//     code: 'ZET',
//     name: 'Zetacoin'
//   },
//   {
//     code: 'ZIL',
//     name: 'Zilliqa'
//   },
//   {
//     code: 'ZLA',
//     name: 'Zilla'
//   },
//   {
//     code: 'ZRX',
//     name: '0x'
//   }
// ];

export default list;
