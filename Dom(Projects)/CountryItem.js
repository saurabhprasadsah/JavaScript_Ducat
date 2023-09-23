export default class CountryItem {
    constructor(country) {
        this.country = country;
    }

    render() {
         // main div 
         let parentDiv = document.createElement("div");
         parentDiv.className = "col-3 mb-4";

         // card div
         let cardDiv = document.createElement("div");
         cardDiv.className = "card";

         // image 
         let img = document.createElement("img");
         img.className = "card-img-top";
         img.src = this.country.flags.svg;

         // card body
         let cardBody = document.createElement("div");
         cardBody.className = "card-body";

         // h5 
         let h5 = document.createElement("h5");
         h5.className ="card-title";
         h5.innerHTML = this.country.name.common;

         // append to card body
         cardBody.append(h5)

         // append to card div
         cardDiv.append(img)
         cardDiv.append(cardBody)

         // append to parentDiv
         parentDiv.append(cardDiv)

         return parentDiv
    }
}
