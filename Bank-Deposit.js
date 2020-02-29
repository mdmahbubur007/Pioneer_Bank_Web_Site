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
    const depositNumber=parseFloat(depositedAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositedAmount=parseFloat("currentDeposit");
    const totalDeposit=depositNumber+currentDepositedAmount;
    document.getElementById("currentDeposit").innerText=totalDeposit;
})