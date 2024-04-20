// import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
// import { ConnectKitButton } from "connectkit";
// import { Config } from "@/config";

// type Buy = {
//   call: () => void;
// };

// const ConnectButton = ({ call }: Buy) => {
//   const { switchNetwork } = useSwitchNetwork();
//   const { isConnected } = useAccount();
//   const { chain } = useNetwork();

//   const checkChainId = (chainId?: number) => {
//     if (!chainId) return false;
//     return Config.Blockchain.SUPPORTED_CHAIN_IDS.includes(chainId);
//   };
//   const isChainSupported = checkChainId(chain?.id);

//   const switchWalletNetwork = async () => {
//     if (!switchNetwork) return;
//     const chainId = Config.Blockchain.SUPPORTED_CHAIN_IDS[0];
//     switchNetwork(chainId);
//   };

//   if (isConnected) {
//     if (isChainSupported) {
//       return (
//         <button
//           className="text-sm font-medium text-black py-3 bg-primary rounded-full w-full mb-2 mt-6 hover:bg-primary-2 "
//           onClick={() => call()}
//         >
//           Buy now
//         </button>
//       );
//     } else {
//       return (
//         <button
//           className="text-sm font-medium text-black py-3 bg-primary rounded-full w-full mb-2 mt-6 hover:bg-primary-2 "
//           onClick={() => switchWalletNetwork()}
//         >
//           Switch Network
//         </button>
//       );
//     }
//   } else {
//     return (
//       <>
//         <ConnectKitButton.Custom>
//           {({ show }) => {
//             return (
//               <button
//                 onClick={show}
//                 className="text-sm font-medium text-black py-3 bg-primary rounded-full w-full mb-2 mt-6 hover:bg-primary-2"
//               >
//                 Connect Wallet
//               </button>
//             );
//           }}
//         </ConnectKitButton.Custom>
//       </>
//     );
//   }
// };

// export default ConnectButton;
