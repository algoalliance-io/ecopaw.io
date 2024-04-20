export type SaleInfo = {
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

export const dummySaleInfo: SaleInfo = {
  wallet: '0x12123213321wqdqsqs',
  ecopaw_price: '0.0001',
  end_time: '2024-12-12',
  start_time: '2024-01-01',
  soft_cap: '100000',
  hard_cap: '100000',
  collected_BNB: '100000',
  available_BNB: '100000',
  receivableTokenCollectionPercentage: 60,
  is_sold_out: false,
  is_sale_started: false,
}
