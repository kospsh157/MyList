import { ItemPageComponent, Page } from "/components/page/page.js";
import { Image } from "/components/page/item/Image.js";
import { Note } from "/components/page/item/Note.js";
import { Todo } from "/components/page/item/Todo.js";
import { Youtube } from "/components/page/item/Youtube.js";
import { Dialog } from "/components/dialog/Dialog.js";
import { MediaInput } from "/components/dialog/Input/MediaInput.js";
import { TextInput } from "/components/dialog/Input/TextInput.js";
class App {
  constructor(appRoot, dialogRoot) {
    this.dialogRoot = dialogRoot;
    this.page = new Page(ItemPageComponent);
    this.page.attachTo(appRoot);

    const gitNoteP = document.createElement("p");
    gitNoteP.innerHTML = `<p>
      You can check codes of this project at <a href='https://github.com/kospsh157/MyList'>https://github.com/kospsh157/MyList</a>
    </p>`;
    const gitNote = new Note("Welcome My Study Project.", gitNoteP);
    this.page.addChild(gitNote);

    const img = new Image(
      "You can save image, youtube, note, todo on here.",
      "https://picsum.photos/800/400"
    );
    this.page.addChild(img);
    const yout = new Youtube("Youtube Video", "https://youtu.be/7aEUakKMLBs");
    this.page.addChild(yout);

    const pForNote1 = document.createElement("p");
    pForNote1.innerHTML = `
      If you want add a image, click image button and type 'https://picsum.photos/500/250' at URL. <br>
      You can get a random image from this url.
    `;
    const note1 = new Note("MyList Usage (Add Image)", pForNote1);
    this.page.addChild(note1);

    const pForNote2 = document.createElement("p");
    pForNote2.innerHTML = `<p>
      If you want add Youtube video, click video button and type youtube url you want at URL.<br>
      (Sometimes there are YouTube videos that doesn't work.)
    </p>`;
    const note2 = new Note("MyList Usage (Add Video)", pForNote2);
    this.page.addChild(note2);
    const p = document.createElement("p");
    p.innerHTML = `
      <p>
        I done this project during learning in Dream-coding Academy(Online). I have learned about TypeScript and OOP in this project. <br/>
        Dram-Coding Academy url: <a href = https://academy.dream-coding.com>https://academy.dream-coding.com</a> (Korean) <br/>
        I learned a lot from watching her coding style.<br/>
        During this project, I did not simply follow her code, but understood and digested it with my own.<br/>
      </p>
    `;
    const note3 = new Note("About this project", p);
    this.page.addChild(note3);
    const todo = new Todo("I have to do", "Find Job");
    this.page.addChild(todo);
    this.bindInputToElement("#newImage", MediaInput, (input) => {
      return new Image(input.title, input.url);
    });
    this.bindInputToElement("#newVideo", MediaInput, (input) => {
      return new Youtube(input.title, input.url);
    });
    this.bindInputToElement("#newNote", TextInput, (input) => {
      const para = document.createElement("p");
      para.textContent = input.body;
      return new Note(input.title, para);
    });
    this.bindInputToElement("#newTodo", TextInput, (input) => {
      return new Todo(input.title, input.body);
    });
  }
  bindInputToElement(selector, inputSectionCon, makeSection) {
    const element = document.querySelector(selector);
    element.addEventListener("click", () => {
      const dialog = new Dialog();
      const input = new inputSectionCon();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);
      dialog.setCloseBtn(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setSubmitBtn(() => {
        const section = makeSection(input);
        this.page.addChild(section);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}
new App(document.querySelector(".document"), document.body);

// AWS amplify에 호스팅에 대하여.
/*
  1. 어느정도 자동으로 빌드를 스스로 한다. 
  2. aws 서버에는 타입스크립트가 깔려있지 않아서 tsc -b를 사용하지못한다.
    1. 따라서 그냥 이미 빌드된 js파일을 루트폴더에 만들어놔야 한다.
  3. dist 폴더가 있으면 오히려 js파일을 불러오지 못 한다. 
    1. dist 폴더에 있던 js파일을 루트폴더로 옮기니깐 정상적으로 서버가 js파일을 읽을 수 있었다.
      1. 그 원인을 찾았다. .gitignore 파일에 dist는 제외되어서 애초에 깃레포짓에 dist폴더가 업로드 되지 않았던 것이다.
  4. aws 서버는 자동으로 index.html 파일을 찾아 호스팅하려고 한다. 
  5. 백엔드, 프론트엔드 부분에서 자동으로 빌드를 하려고 한다. 
*/
