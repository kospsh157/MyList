import { BaseComponent } from "../../baseComponent.js";
export class Youtube extends BaseComponent {
    constructor(title, url) {
        super("<section class='youtube'>\
            <div class='youtubePlayer'><iframe class='youtubeIframe'></iframe></div>\
            <h3 class='pageItemTitle youtubeTitle'></h3>\
         </section>");
        const youtubeTitle = this.element.querySelector(".youtubeTitle");
        youtubeTitle.textContent = title;
        const iFrame = this.element.querySelector(".youtubeIframe");
        iFrame.src = this.convertToURL(url);
    }
    convertToURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?: embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))$/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
