let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];
let cash = document.getElementById("input");
let changeDue = document.getElementById("change-due");
const button = document.getElementById("purchase-btn");

if (cash < price){
  alert("Customer does not have enough money to purchase the item");
}

if (cash === price){
  alert("No change due - customer paid with exact cash");
}