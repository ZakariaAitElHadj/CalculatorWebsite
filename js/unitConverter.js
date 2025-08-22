const conversionRates = {
    m: 1,
    km: 1000,
    ft: 0.3048,
    mi: 1609.34
};

document.getElementById('converterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const value = parseFloat(document.getElementById('value').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;

    const valueInMeters = value * conversionRates[from];
    const converted = valueInMeters / conversionRates[to];

    document.getElementById('converterResult').textContent = `${value} ${from} = ${converted.toFixed(4)} ${to}`;
});
