"use strict";

function createAccount(pin, amount) {

  const invalid = "Invalid PIN."

  // helper function to check pin
  function checkPin(inputPin) {
    return inputPin === pin
  }


  // utilize closure
  return {
    checkBalance(inputPin) {
      return checkPin(inputPin) ? `$${amount}` : invalid;
    },
    deposit(inputPin, amt) {
      if (!checkPin(inputPin)) return invalid;
      amount += amt;
      return `Succesfully deposited $${amt}. Current balance: $${amount}.`;
    },
    withdraw(inputPin, amt) {
      if (!checkPin(inputPin)) return invalid;
      if (amount - amt >= 0) {
        amount -= amt;
        return `Succesfully withdrew $${amt}. Current balance: $${amount}`;
      } else {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
    },
    changePin(inputPin, newPin) {
      if (!checkPin(inputPin)) return invalid;
      pin = newPin;
      return "PIN succesfully changed!";
    },
  };
}


crea

module.exports = { createAccount };
