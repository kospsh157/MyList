import { BaseComponent } from "../../baseComponent.js";
export class Note extends BaseComponent {
    constructor(title, body) {
        super('<section class="note">\
        <h2 class="pageItemTitle noteTitle"></h2>\
        <div class="noteBody"></div>\
    </section>');
        const h2Title = this.element.querySelector(".noteTitle");
        h2Title.textContent = title;
        const h2Body = this.element.querySelector(".noteBody");
        h2Body.appendChild(body);
    }
}
