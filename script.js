document.getElementById('calculateBtn').addEventListener('click', calculateEMI);

function calculateEMI() {
  const principal = parseFloat(document.getElementById('principal').value);
  const annualInterest = parseFloat(document.getElementById('interest').value);
  const tenureYears = parseInt(document.getElementById('tenure').value);

  if (isNaN(principal) || principal <= 0) {
    alert('Please enter a valid principal amount');
    return;
  }
  if (isNaN(annualInterest) || annualInterest <= 0) {
    alert('Please enter a valid interest rate');
    return;
  }
  if (isNaN(tenureYears) || tenureYears <= 0) {
    alert('Please enter a valid loan tenure');
    return;
  }

  const monthlyInterestRate = annualInterest / (12 * 100);
  const numberOfMonths = tenureYears * 12;

  const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / 
              (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

  const totalPayable = emi * numberOfMonths;
  const totalInterest = totalPayable - principal;

  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    Monthly EMI: ₹${emi.toFixed(2)} <br />
    Total Payable Amount: ₹${totalPayable.toFixed(2)} <br />
    Total Interest Payable: ₹${totalInterest.toFixed(2)}
  `;
}
