import { BaseComponent } from "../baseComponent.js";
export class Dialog extends BaseComponent {
    constructor() {
        super(`<dialog class='dialog'>\
        <div class='dialogContainer'>\
          <button class='close'>&times;</button>\
          <div id='dialogBody'></div>\
          <button class='submitBtn'>ADD</button>\
        </div>\
      </dialog>`);
        const closeBtn = this.element.querySelector(".close");
        const submitBtn = this.element.querySelector(".submitBtn");
        submitBtn.onclick = () => {
            this.submitBtn && this.submitBtn();
        };
        closeBtn.onclick = () => {
            this.closeBtn && this.closeBtn();
        };
    }
    setCloseBtn(callBack) {
        this.closeBtn = callBack;
    }
    setSubmitBtn(callBack) {
        this.submitBtn = callBack;
    }
    addChild(child) {
        const body = this.element.querySelector("#dialogBody");
        child.attachTo(body);
    }
}
