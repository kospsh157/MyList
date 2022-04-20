import { BaseComponent } from "../../baseComponent.js";
export class Image extends BaseComponent {
    constructor(title, url) {
        super('<section class="image">\
        <div div class= "imageHolder">\
          <img class="imageThumbnail"/>\
        </div>\
        <h2 class= "pageItemTitle imageTitle"/>\
      </section>');
        const imageElement = this.element.querySelector(".imageThumbnail");
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector(".imageTitle");
        titleElement.textContent = title;
    }
}
