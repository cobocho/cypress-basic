export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const addEvent = () => {
    const $count = $app.querySelector('.count-display');

    $app.addEventListener('click', (e) => {
      if (e.target.closest('.minus-button') && $count.value > 8) {
        $count.value = Number($count.value) - 1;
      }
      if (e.target.closest('.plus-button') && $count.value < 12) {
        $count.value = Number($count.value) + 1;
      }
    });
  };

  const init = () => {
    render();
    addEvent();
  };

  init();
}
