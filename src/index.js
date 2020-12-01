import './style.scss';

(() => {

  class Bubble {
    constructor(time, wrapper) {
      this.time = time;
      this.wrapper = wrapper;

      this.timeToDie = 1000;
      this.div;

      this.create();
    }

    create() {
      this.div = document.createElement('div');
      this.div.className = 'bubble';
      this.div.innerHTML = this.time;
      wrapper.append(this.div);

      this.update();
    }

    update() {
      this.iterval = setInterval(() => {
        this.time-- <= 0 ? this.destroy() : this.div.innerHTML = this.time;
      }, 1000)
    }

    destroy() {
      this.div.classList.add('bubble--die');
      setTimeout(() => this.div.remove(), this.timeToDie);
    }
  }

  const root = document.querySelector('.app');
  const input = root.querySelector('.app__input');
  const button = root.querySelector('.app__button');
  const wrapper = root.querySelector('.app__body');

  input.onkeypress = (e) => {
    if (e.keyCode === 13) {
      createBuble(e.target.value);
    }
  };

  button.addEventListener('click', evt => {
    evt.preventDefault();
    createBuble(input.value)
  });

  const createBuble = (val) => {
    const value = val.trim();
    if (!value) return;

    new Bubble(val, wrapper);
    input.value = null;
  };


})();
