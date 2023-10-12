# Country-Name-Autocomplete
This project demonstrates how to make API requests, implement an autocomplete feature, and dynamically update the user interface based on user input. It's a useful example for web developers who want to understand how to integrate an autocomplete feature into their projects.


## Description
Country Name Autocomplete is a simple web application that allows users to search for countries by typing their names. The application fetches data from a REST API containing information about countries and provides autocomplete suggestions as the user types in the input field. Once a country is selected, it displays key information about that country, including its flag, name, capital, and population.


### Technologies Used
- HTML: The project's structure and user interface are created using HTML.
- CSS: Cascading Style Sheets (CSS) are used for styling the application, making it visually appealing and responsive.
- JavaScript: The core logic of the application is implemented in JavaScript.
- REST Countries API: Data about countries is fetched from the "https://restcountries.com/v2/all" endpoint.

### Project Structure
- `main.html`: The main HTML file containing the user interface elements.
- `style.css`: The stylesheet for styling the HTML elements.
- `country.js`: The JavaScript file responsible for making API requests, implementing the autocomplete feature, and displaying country details.

### How It Works
1. When the page loads, the JavaScript in `country.js` fetches data from the REST Countries API, which provides information about all countries.
2. The autocomplete feature is implemented using the `<datalist>` element in the HTML. As the user types in the input field, the JavaScript code dynamically updates the `<datalist>` to display matching country names.
3. When a user selects a country from the autocomplete suggestions, the `displayCountryDetails` function is called. This function fetches additional information about the selected country and displays its flag, name, capital, and population in the designated area on the page.

### Usage
To use this project, follow these steps:
1. Clone or download the repository to your local machine.
2. Open `main.html` in a web browser.

### Future Improvements
- Add error handling for API requests.
- Enhance the user interface and add more details about each country.
- Implement a more efficient autocomplete algorithm for handling a larger dataset.

### License
This project is open-source and available under the [MIT License](LICENSE.md).
