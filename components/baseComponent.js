export class BaseComponent {
    constructor(htmlStr) {
        const template = document.createElement("template");
        template.innerHTML = htmlStr;
        this.element = template.content.firstElementChild;
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        if (parent !== this.element.parentElement) {
            throw new Error("parent miss match!");
        }
        parent.removeChild(this.element);
    }
}
