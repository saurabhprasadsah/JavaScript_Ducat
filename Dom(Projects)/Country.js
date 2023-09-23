import CountryItem from "./CountryItem.js";

export default class Country {
    countries = [];

    getCounties = async() => {
       let response = await fetch("https://restcountries.com/v3.1/all");

       this.countries = await response.json();
    }

    render = async() => {
        await this.getCounties();

        const root = document.getElementById('root');

        for (const country of this.countries) {
            
            let countryItem  = new CountryItem(country);

            let el = countryItem.render();

            // append to root container
            root.append(el);
        }
    }
}