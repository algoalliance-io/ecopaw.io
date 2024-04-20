import { BigNumber } from "ethers";

export const calculateEcopawAmount = (
  bnbAmount: BigNumber,
  ecopaw_price: string
): string => {
  if (+ecopaw_price === 0) {
    return "0";
  }
  const bnb_ecopaw_ratio = +ecopaw_price * Math.pow(10, 18);
  const ecopaw_amount = bnbAmount
    .mul(BigNumber.from("1000000000000000000"))
    .div(bnb_ecopaw_ratio);
  return ecopaw_amount.toString();
};

export const calculateBNBAmount = (
  ecopaw: BigNumber,
  ecopaw_price: string
): string => {
  const bnb_ecopaw_ratio = +ecopaw_price * Math.pow(10, 18);
  const bnb_amount = ecopaw
    .div(BigNumber.from("1000000000000000000"))
    .mul(BigNumber.from(bnb_ecopaw_ratio));
  return bnb_amount.toString();
};
