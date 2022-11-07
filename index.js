function ex1() {
  var name = document.getElementById("ex1-name").value;
  var income = document.getElementById("ex1-income").value * 1;
  var dependant = document.getElementById("ex1-dependant").value * 1;
  var depDeductable = dependant * 1600000 * 1;
  var selfDeductable = 4000000 * 1;
  var actualIncome;
  var result = document.getElementById("ex1-result");
  var tax0To60 = (60000000 * 5) / 100;
  var tax60To120 = tax0To60 + ((120 - 60) * 1000000 * 10) / 100;
  var tax120To210 = tax60To120 + ((210 - 120) * 1000000 * 15) / 100;
  var tax210To384 = tax120To210 + ((384 - 210) * 1000000 * 20) / 100;
  var tax384To624 = tax210To384 + ((624 - 384) * 1000000 * 25) / 100;
  var tax624To960 = tax384To624 + ((960 - 624) * 1000000 * 30) / 100;
  var tax;
  if(income<(depDeductable+selfDeductable)){actualIncome=0*1}else {actualIncome = (income - depDeductable - selfDeductable) * 1}
  if (actualIncome <= 60000000 * 1) {
    tax = (actualIncome * 5) / 100;
  } else if (actualIncome > 60000000 && actualIncome <= 120000000) {
    tax = ((actualIncome - 60000000 * 1) * 10) / 100 + tax0To60;
  } else if (actualIncome > 120000000 && actualIncome <= 210000000) {
    tax = ((actualIncome - 120000000 * 1) * 15) / 100 + tax60To120;
  } else if (actualIncome > 210000000 && actualIncome <= 384000000) {
    tax = ((actualIncome - 210000000 * 1) * 20) / 100 + tax120To210;
  } else if (actualIncome > 384000000 && actualIncome <= 624000000) {
    tax = ((actualIncome - 384000000 * 1) * 25) / 100 + tax210To384;
  } else if (actualIncome > 624000000 && actualIncome <= 960000000) {
    tax = ((actualIncome - 624000000 * 1) * 30) / 100 + tax384To624;
  } else {
    tax = ((actualIncome - 960) * 35) / 100 + tax624To960;
  }
  result.innerHTML = name + " has to pay " + tax + " Vnd";
}

function ex2() {
  var typeOfClient = document.getElementById("client-type").value;
  var clientCode = document.getElementById("client-code").value;
  var connectionCount =
    document.getElementById("connection-port-count").value * 1;
  var premiumConnectionCount =
    document.getElementById("premium-connection-port-count").value * 1;
  var invoiceProcessFee;
  var basicProcessFee;
  var premiumFee;
  var billAmount;
  var cheaperConnectionCount;
  if (typeOfClient === "DN" && connectionCount <= 10) {
    cheaperConnectionCount = 0;
  } else {
    cheaperConnectionCount = connectionCount - 10 * 1;
  }
  if (typeOfClient === "DN") {
    (invoiceProcessFee = 15 * 1),
      (basicProcessFee = 5 * 1),
      (premiumFee = 50 * 1);
  } else if (typeOfClient === "ND") {
    (invoiceProcessFee = 4.5 * 1),
      (basicProcessFee = 20.5 * 1),
      (premiumFee = 7.5 * 1);
  } else if (typeOfClient===""){
    alert("Please select your client type")
    return 0;
  }
  if (typeOfClient === "DN") {
    billAmount =
      invoiceProcessFee +
      premiumConnectionCount * premiumFee +
      cheaperConnectionCount * 5 +
      75 * 1;
  } else if (typeOfClient === "ND") {
    billAmount =
      invoiceProcessFee + premiumConnectionCount * premiumFee + 20.5 * 1;
  }
  document.getElementById("ex2-result").innerHTML =
    "Client No." + clientCode + " has to pay " + billAmount + " USD";
}

const typeOfClient = document.getElementById("client-type");
const connectionPort = document.getElementById(
  "connection-port-count-container"
);
const connectionCount = document.getElementById("connection-port-count");

typeOfClient.addEventListener("change", function CPShowAndHide(event) {
  if (event.target.value === "DN") {
    connectionPort.style.display = "block";
  } else {
    (connectionPort.style.display = "none"), (connectionCount.value = 0 * 1);
  }
});
