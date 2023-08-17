// Deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const depositAmount = depositField.value;
    depositField.value = "";

    if (isNaN(depositAmount) || depositAmount === "" || depositAmount < 0) {
      alert("Please enter a valid number");
      return;
    }

    const currentDeposit = document.getElementById("current-deposit");
    const deposit = currentDeposit.innerText;

    var totalDeposit = parseFloat(deposit) + parseFloat(depositAmount);
    currentDeposit.innerText = totalDeposit.toFixed(2);

    const balanceField = document.getElementById("current-balance");
    const balanceAmount = balanceField.innerText;

    var totalBalance = parseFloat(balanceAmount) + parseFloat(depositAmount);
    balanceField.innerText = totalBalance.toFixed(2);
  });

// Withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const balanceField = document.getElementById("current-balance");
    const balanceAmount = balanceField.innerText;

    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmount = withdrawField.value;

    withdrawField.value = "";

    if (isNaN(withdrawAmount) || withdrawAmount === "" || withdrawAmount < 0) {
      alert("Please enter a valid number");
      return;
    }

    const currentWithdraw = document.getElementById("current-withdraw");
    const withdraw = currentWithdraw.innerText;

    if (parseFloat(withdrawAmount) <= parseFloat(balanceAmount)) {
      const totalWithdraw = parseFloat(withdraw) + parseFloat(withdrawAmount);
      currentWithdraw.innerText = totalWithdraw.toFixed(2);
      var totalBalance = parseFloat(balanceAmount) - parseFloat(withdrawAmount);

      balanceField.innerText = totalBalance.toFixed(2);
    } else {
      alert("insufficient Balance");
    }
  });
