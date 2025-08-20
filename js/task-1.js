const makeTransaction = (quantity, pricePerDroid) => {
  if (isNaN(quantity) || isNaN(pricePerDroid)) {
    return `nice try, but please use numbers only!`;
  } else if (quantity < 1 || pricePerDroid < 1) {
    return 'kindly make sure the quantity and price per droid are greater than 1, as we can`t sell it for free';
  } else {
    let totalPrice = pricePerDroid * quantity;
    let message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    return message;
  }
};

// uncomemt to run the code
// console.log(makeTransaction(2, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));

// console.log(makeTransaction(2, '0'));
// console.log(makeTransaction(2, 'test'));
