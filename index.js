////////////// log in button event handler////////////
const log_in_button = document.getElementById("login");
log_in_button.addEventListener("click", function(){
    const loginArea = document.getElementById("log-in-area")
    loginArea.style.display="none";
    const transactionArea = document.getElementById("transaction-Area");
    transactionArea.style.display = "block";
})

//////////////// deposit button event handler ///////////////////
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositedAmount = document.getElementById("depositAmount").value;
    const depositNumber=parseFloat(depositedAmount) || 0;

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositedAmount=parseFloat(currentDeposit);
    const totalDeposit=depositNumber+currentDepositedAmount;
    document.getElementById("currentDeposit").innerText=totalDeposit;

    // total balance
  const mainBalacne  = document.getElementById("main-balance").innerText;
  const updateBalnce = parseFloat(mainBalacne) + depositNumber;

  // update text current balance
  document.getElementById("main-balance").innerText = updateBalnce;

  document.getElementById("depositAmount").value = "";
})

/////////////// Withdraw button handler ////////////////

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
  const withdrawalAmount = document.getElementById("withdrawAmount").value;
  const withdrawalNumber = parseFloat(withdrawalAmount)|| 0;

  const currentWithdrawal = document.getElementById("currentWithdrawal").innerText;
  const currentWithdrawAmount=parseFloat(currentWithdrawal);
  const totalWithdraw = withdrawalNumber+currentWithdrawAmount;
  document.getElementById("currentWithdrawal").innerText=totalWithdraw;

  // total balance
  const mainBalacne  = document.getElementById("main-balance").innerText;
  const updateBalnce = parseFloat(mainBalacne) - withdrawalNumber;

  // update text current balance
  document.getElementById("main-balance").innerText = updateBalnce;

  document.getElementById("withdrawAmount").value = "";
})
