/** First argument should be the initial price, the second one is the amount of uses. Returns a number */
export const calculateCostPerUse = (price, uses) => {
  let costPerUse;
  /* If the user hasn't used the item, costPerPrice will be set to price */
  uses === 0 ? (costPerUse = price) : (costPerUse = Math.ceil(price / uses));

  return costPerUse;
};

export const calculatePercentage = (x: number, y: number) =>
  Math.ceil(x / y * 100);
