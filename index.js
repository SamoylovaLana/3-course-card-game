const appEl = document.getElementById("app");


window.application = {
    level: null,
  };

function renderApp() {
    const appHtml = `
  <div class="choice">
      <h2 class="choice__text center">Выбери сложность</h2>
      <form class="choice__buttons">
        <div>
          <input id="level-1" class="level" type="radio" name="level" value="1" >
          <label class="choice__button" for="level-1">1</label>
        </div>
        <div>
          <input id="level-2" class="level" type="radio" name="level" value="2">
          <label class="choice__button" for="level-2">2</label>
        </div>
        <div>  
          <input id="level-3" class="level" type="radio" name="level" value="3">
          <label class="choice__button" for="level-3">3</label>
        </div>  
      </form>
     <button id="buttonStart" class="button">Старт</button>
  </div>`;

 appEl.innerHTML = appHtml;

 document.getElementById("buttonStart").addEventListener("click", () => {
    let levelElements = document.querySelectorAll(".level");

    for (const levelElement of levelElements) {
      if (levelElement.checked) {
        window.application.level = levelElement.value;
        break;
      }
    }

    if (!window.application.level) {
        alert("Выберете уровень сложности")
    } else {
        appEl.innerHTML = renderGame(window.application.level);
    }   
 }); 
}
renderApp();

function renderGame(level) {
    
    let appHtml;
    if (level === "1") {
        appHtml = `
     <div >
       <h2 class="text center">Лёгкий уровень сложности</h2> 
     </div>`

    } else if (level === "2") {
        appHtml = `
     <div>
        <h2 class="text center">Средний уровень сложности</h2>
     </div>`

    } else {
        appHtml = `
     <div>
        <h2 class="text center">Сложный уровень сложности</h2>
     </div>`
    }

    return appHtml
}