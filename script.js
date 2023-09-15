const monthlyPrices = document.querySelectorAll('.monthly');
    const annualPrices = document.querySelectorAll('.annual');
    const toggleButton = document.querySelector('.toggle-button');

    toggleButton.addEventListener('click', () => {
      monthlyPrices.forEach(price => price.style.display = price.style.display === 'none' ? 'inline' : 'none');
      annualPrices.forEach(price => price.style.display = price.style.display === 'none' ? 'inline' : 'none');
    });