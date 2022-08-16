// Money Deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
  const depositInput = document.getElementById('deposit-input');
  const newDepositAmount = parseFloat(depositInput.value);

  const previousDeposit = document.getElementById('update-deposit');
  const previousDepositAmount = parseFloat(previousDeposit.innerText);

  const updateBalance = document.getElementById('update-balance');
  const totalBalance = parseFloat(updateBalance.innerText);

  if(newDepositAmount > 0){
    previousDeposit.innerText = newDepositAmount + previousDepositAmount;
    updateBalance.innerText = newDepositAmount + totalBalance;
    depositInput.value = '';
  }
  else{
    alert("Input a valid number");
    depositInput.value = '';
  }
})


// Money Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawInput = document.getElementById('withdraw-input');
  const newWithdrawAmount = parseFloat(withdrawInput.value);

  const previousWithdraw = document.getElementById('update-withdraw');
  const previousWithdrawAmount = parseFloat(previousWithdraw.innerText);

  const updateBalance = document.getElementById('update-balance');
  const totalBalance = parseFloat(updateBalance.innerText);

  if(newWithdrawAmount >= 5){
    previousWithdraw.innerText = newWithdrawAmount + previousWithdrawAmount;
    updateBalance.innerText = totalBalance - newWithdrawAmount;
    withdrawInput.value = '';
  }
  else{
    alert("Input a valid number what is more than $5");
    withdrawInput.value = '';
  }
})