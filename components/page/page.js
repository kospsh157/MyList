import { BaseComponent } from "../baseComponent.js";
export class Page extends BaseComponent {
    constructor(itemContainer) {
        super('<ul class="page"></ul>');
        this.itemContainer = itemContainer;
    }
    addChild(section) {
        const item = new this.itemContainer();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseBtnListener(() => {
            item.removeFrom(this.element);
        });
    }
}
export class ItemPageComponent extends BaseComponent {
    constructor() {
        super('<li class="pageItem">\
              <section class="pageItemBody"></section>\
              <div class="pageItemControls">\
                 <button class="close">&times;</button>\
              </div>\
          </li>');
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.onCloseBtnListener && this.onCloseBtnListener();
        };
    }
    addChild(child) {
        const container = this.element.querySelector(".pageItemBody");
        child.attachTo(container);
    }
    setOnCloseBtnListener(callBackFunc) {
        this.onCloseBtnListener = callBackFunc;
    }
}
