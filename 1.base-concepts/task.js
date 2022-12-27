"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  let x = -b / (2*a);
  let x1 = (-b + Math.sqrt(d)) / (2*a);
  let x2 = (-b - Math.sqrt(d)) / (2*a);

  if (d === 0) {
    arr = [x];
  }
  else if (d > 0) {
    arr = [x1, x2];
  }
  else {
    arr = [];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  }
  if (isNaN(contribution)) {
    return false;
  }
  if (isNaN(amount)) {
    return false;
  }
  
  let interestRate = percent / 100 / 12;  
  let principalAmount = amount - contribution;
  let monthlyPayment = principalAmount * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  return +totalPayment.toFixed(2);
}
