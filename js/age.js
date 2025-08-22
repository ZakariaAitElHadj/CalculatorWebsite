document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('ageResult').textContent = `You are ${age} years old.`;
});
