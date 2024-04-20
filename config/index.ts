type AppEnv = "development" | "stgaing" | "production";

type BlockchainType = {
  SUPPORTED_CHAIN_IDS: number[];
};

export class Config {
  public static readonly APP_ENV: AppEnv =
    (process.env.NEXT_PUBLIC_APP_ENV as AppEnv) || "development";

  public static readonly APP_NAME = "ECO PAW";

  public static readonly APP_DESCRIPTION =
    "ECO PAW";

  public static readonly Blockchain: BlockchainType = {
    SUPPORTED_CHAIN_IDS: this.APP_ENV === "production" ? [56] : [11155111], // Sepolia Testnet: 11155111, BSC Mainnet: 56
  };
}
