type SaleInfo = {
  wallet: string
  ecopaw_price: string
  end_time: string
  start_time: string
  soft_cap: string
  hard_cap: string
  collected_BNB: string
  available_BNB: string
  receivableTokenCollectionPercentage: number
  is_sold_out: boolean
  is_sale_started: boolean
}

type BookingProps = {
  info: SaleInfo
  // refresh: () => void;
}

type MetamaskError = {
  code: number
  message: string
}
