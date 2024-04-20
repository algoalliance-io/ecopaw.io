// import { configureChains, createConfig } from 'wagmi'
// import { bsc, sepolia } from 'wagmi/chains'
// import { publicProvider } from 'wagmi/providers/public'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { Config } from '@/config'

// const { chains, publicClient, webSocketPublicClient } =
//   Config.APP_ENV === 'production'
//     ? configureChains([bsc], [publicProvider()])
//     : configureChains([sepolia], [publicProvider()])

// export const wagmiConfig = createConfig({
//   autoConnect: true,
//   publicClient,
//   webSocketPublicClient,
//   connectors: [
//     new MetaMaskConnector({
//       chains,
//     }),
//     new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName: Config.APP_NAME,
//         headlessMode: true,
//       },
//     }),
//     new WalletConnectLegacyConnector({
//       chains,
//       options: {
//         qrcode: false,
//       },
//     }),
//   ],
// })
