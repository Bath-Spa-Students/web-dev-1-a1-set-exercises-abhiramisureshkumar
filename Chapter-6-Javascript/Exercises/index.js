document.addEventListener('DOMContentLoaded', function() {
    
    const petrolPriceInput = document.getElementById('petrolPrice');
    const litersPurchasedInput = document.getElementById('litersPurchased');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCostOutput = document.getElementById('totalCost');

   
    petrolPriceInput.value = 1.72;
    litersPurchasedInput.value = 0;

    
    function calculateTotalCost() {
        const petrolPrice = parseFloat(petrolPriceInput.value);
        const litersPurchased = parseFloat(litersPurchasedInput.value);
        const totalCost = petrolPrice * litersPurchased;
        totalCostOutput.textContent = `Total Amount: $${totalCost.toFixed(2)}`;
    }

    
    calculateBtn.addEventListener('click', calculateTotalCost);
});