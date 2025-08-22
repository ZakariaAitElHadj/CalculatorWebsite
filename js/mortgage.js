document.getElementById('mortgageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const down = parseFloat(document.getElementById('down').value);
    const rate = parseFloat(document.getElementById('mortgageRate').value) / 100;
    const years = parseFloat(document.getElementById('mortgageYears').value);
    
    const principal = amount - down;
    const monthlyRate = rate / 12;
    const n = years * 12;
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    
    document.getElementById('mortgageResult').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});
