export async function getSaleInfo(): Promise<SaleInfo> {
  const url = `${process.env.NEXT_PUBLIC_APP_BACKEND}/api/v1/public`;
  const res = await fetch(url);
  const data = (await res.json()) as SaleInfo;
  return data;
}
