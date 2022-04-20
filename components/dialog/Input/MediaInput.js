import { BaseComponent } from "../../baseComponent.js";
export class MediaInput extends BaseComponent {
    constructor() {
        super('<div>\
        <div class="formContainer">\
          <label for="title">Title</label>\
          <input type="text" id="title" />\
        </div>\
        <div class="formContainer">\
          <label for="url">URL</label>\
          <input type="text" id="url" />\
        </div>\
      </div>');
    }
    get title() {
        const ele = this.element.querySelector("#title");
        return ele.value;
    }
    get url() {
        const ele = this.element.querySelector("#url");
        return ele.value;
    }
}
