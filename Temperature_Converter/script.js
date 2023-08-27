function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput");
    const celsiusValue = parseFloat(celsiusInput.value);
  
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
      document.getElementById("celsiusResult").textContent = `${celsiusValue}°C = ${fahrenheitValue.toFixed(2)}°F`;
    } else {
      document.getElementById("celsiusResult").textContent = "Invalid input. Please enter a valid temperature.";
    }
  }
  
  function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
  
    if (!isNaN(fahrenheitValue)) {
      const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
      document.getElementById("fahrenheitResult").textContent = `${fahrenheitValue}°F = ${celsiusValue.toFixed(2)}°C`;
    } else {
      document.getElementById("fahrenheitResult").textContent = "Invalid input. Please enter a valid temperature.";
    }
  }
  