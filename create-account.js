"use strict";

function createAccount(pin, initialAmount) {
  let amount = initialAmount;

  // helper function to check pin
  function checkPin(inputPin) {
    if (inputPin !== pin) {
      throw new Error("Invalid PIN.");
    }
  }

  // utilize closure
  return {
    checkBalance(inputPin) {
      checkPin(inputPin);
      return amount;
    },
    deposit(inputPin, amt) {
      checkPin(inputPin);
      amount += amt;
      return `Successfully deposited ${amt}, your new total is ${amount}`;
    },
    withdraw(inputPin, amt) {
      checkPin(inputPin);
      if (amount - amt >= 0) {
        amount -= amt;
        return `Successfully withdrew ${amt}, your new total is ${amount}`;
      } else {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
    },
    changePin(inputPin, newPin) {
      checkPin(inputPin);
      pin = newPin;
      return "PIN successfully changed!";
    },
  };
}

let account = createAccount("1234", 100);
console.log(account.checkBalance("1234"));

module.exports = { createAccount };
