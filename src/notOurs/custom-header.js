import { CustomElemName } from './constants.js';
import { addCard, hint, reset } from './utils.js';

export class Header extends HTMLElement {
  #headerButtons = [];
  async connectedCallback() {
    let buttonsInfo = await fetch('./myConfig.json');
    let buttonsInfoJSON = await buttonsInfo.json();
    let buttonsInfoArray = buttonsInfoJSON.slice(0, buttonsInfoJSON.length);

    buttonsInfoArray.forEach((info, idx) => {
      let tempBtn = document.createElement('button');
      tempBtn.innerText = info.buttonText;
      tempBtn.value = info.value;

      tempBtn.addEventListener('click', () => {
        if (info.value === 'reset') {
          reset();
        } else if (info.value === 'addCard') {
          addCard();
        } else if (info.value === 'hint') {
          hint();
        }
      });

      this.#headerButtons[idx] = tempBtn;
    });

    this.append(...this.#headerButtons);
  }
}

customElements.define(CustomElemName.header, Header);
