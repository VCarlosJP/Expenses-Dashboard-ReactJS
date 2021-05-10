export const listAllTransactions = async () => {
  const transactions = await fetch(
    `${process.env.REACT_APP_HOST_DOMAIN}/transactions`
  )
    .then((response) => response.json())
    .then((data) => data);

  return transactions;
};
