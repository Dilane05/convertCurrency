function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(amount)) {
        resultDiv.innerText = 'Veuillez entrer un montant valide.';
        return;
    }

    // Taux de change fixes pour simplifier (1 USD = X unités d'autres devises)
    const exchangeRates = {
        USD: {
            USD: 1,
            EUR: 0.85,
            XAF: 550
        },
        EUR: {
            USD: 1.18,
            EUR: 1,
            XAF: 645
        },
        XAF: {
            USD: 0.0018,
            EUR: 0.0015,
            XAF: 1
        }
    };

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    resultDiv.innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
