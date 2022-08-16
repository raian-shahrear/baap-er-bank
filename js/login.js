console.log('js file found')

document.getElementById('submit-btn').addEventListener('click', function(){
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;
  const passInput = document.getElementById('pass-input');
  const pass = passInput.value;
  if (email === 'baap@bank.com' && pass === 'admin123'){
    window.location.href = 'onlineBanking.html';
  }
  else{
    alert('Please, input valid email & password !');
    emailInput.value = '';
    passInput.value = '';
  }
})