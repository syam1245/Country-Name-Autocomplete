
// Fetch data from the API
fetch('https://restcountries.com/v2/all')
.then(response => response.json())
.then(data => {
    const countryInput = document.getElementById('countryInput');
    const countryList = document.getElementById('countryList');

    // Populate the datalist with country names
    data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        countryList.appendChild(option);
    });

    // Update the datalist when the user types in the input field
    countryInput.addEventListener('input', updateOptions);

    function updateOptions() {
        const inputValue = countryInput.value.toLowerCase();
        const filteredOptions = data.filter(country =>
            country.name.toLowerCase().startsWith(inputValue)
        );

        // Clear existing options
        countryList.innerHTML = '';

        // Add filtered options to the datalist
        filteredOptions.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name;
            countryList.appendChild(option);
        });
    }
});

function displayCountryDetails() {
  const selectedCountryName = countryInput.value;
  const selectedCountry = data.find(country => country.name === selectedCountryName);

  if (selectedCountry) {
      const flagImg = document.createElement('img');
      flagImg.src = selectedCountry.flags.png;
      flagImg.alt = `${selectedCountry.name} Flag`;

      const countryNameHeading = document.createElement('h2');
      countryNameHeading.textContent = selectedCountry.name;

      const capitalParagraph = document.createElement('p');
      capitalParagraph.textContent = `Capital: ${selectedCountry.capital || 'N/A'}`;

      const populationParagraph = document.createElement('p');
      populationParagraph.textContent = `Population: ${selectedCountry.population || 'N/A'}`;

      countryDetailsContainer.innerHTML = '';
      countryDetailsContainer.appendChild(flagImg);
      countryDetailsContainer.appendChild(countryNameHeading);
      countryDetailsContainer.appendChild(capitalParagraph);
      countryDetailsContainer.appendChild(populationParagraph);
  } else {
      countryDetailsContainer.innerHTML = '';
  }
};


