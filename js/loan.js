document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    
    const monthlyRate = annualRate / 12;
    const n = years * 12;
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    
    document.getElementById('loanResult').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});
