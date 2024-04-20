export const parseTrxErrors = (error: string): string => {
  const pure_error = error.toLowerCase();

  if (pure_error.includes("user") && pure_error.includes("rejected")) {
    return "User rejected the request.";
  }
  if (pure_error.includes("insufficient") && pure_error.includes("funds")) {
    return "Insufficient funds";
  }

  return "Something went wrong. Please try again.";
};
