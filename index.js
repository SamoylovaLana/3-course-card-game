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
            alert("Выберете уровень сложности");
        } else {
            appEl.innerHTML = renderGame(window.application.level);
        }
    });
}
renderApp();

const gameHeader = ` <div class="game__header">
<div class="game__time-box">
    <div class="game__text-box">
        <p class="game__text">min</p>
        <p class="game__text">sek</p>
    </div>
    <p class="game__time">00.00</p>
</div>
<div class="button">Начать заново</div>
</div>`;

const gameClosedCards = `
<div class="game">
  ${gameHeader}
  <div class="game__cards">
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
<div class="game__cards-item"></div>
</div>
</div>`;

const gameOpenCards = `<div class="game">
      ${gameHeader}
<div class="game__cards">
<div class="game__cards-item"><img src="./img/cards/туз пики.png" alt="король пики"></div>
<div class="game__cards-item"><img src="./img/cards/король пики.png" alt="король пики"></div>
<div class="game__cards-item"><img src="./img/cards/дама пики.png" alt="дама пики"></div>
<div class="game__cards-item"><img src="./img/cards/валет пики.png" alt="валет пики"></div>
<div class="game__cards-item"><img src="./img/cards/10 пики.png" alt="10 пики"></div>
<div class="game__cards-item"><img src="./img/cards/9 пики.png" alt="9 пики"></div>
<div class="game__cards-item"><img src="./img/cards/8 пики.png" alt="8 пики"></div>
<div class="game__cards-item"><img src="./img/cards/7 пики.png" alt="7 пики"></div>
<div class="game__cards-item"><img src="./img/cards/6 пики.png" alt="6 пики"></div>
<div class="game__cards-item"><img src="./img/cards/туз черви.png" alt="туз черви"></div>
<div class="game__cards-item"><img src="./img/cards/король черви.png" alt="король черви"></div>
<div class="game__cards-item"><img src="./img/cards/дама черви.png" alt="дама черви"></div>
<div class="game__cards-item"><img src="./img/cards/валет черви.png" alt="валет черви"></div>
<div class="game__cards-item"><img src="./img/cards/10 черви.png" alt="10 черви"></div>
<div class="game__cards-item"><img src="./img/cards/9 черви.png" alt="9 черви"></div>
<div class="game__cards-item"><img src="./img/cards/8 черви.png" alt="8 черви"></div>
<div class="game__cards-item"><img src="./img/cards/7 черви.png" alt="7 черви"></div>
<div class="game__cards-item"><img src="./img/cards/6 черви.png" alt="6 черви"></div>
<div class="game__cards-item"><img src="./img/cards/туз бубны.png" alt="туз бубны"></div>
<div class="game__cards-item"><img src="./img/cards/король бубны.png" alt="король бубны"></div>
<div class="game__cards-item"><img src="./img/cards/дама бубны.png" alt="дама бубны"></div>
<div class="game__cards-item"><img src="./img/cards/валет бубны.png" alt="валет бубны"></div>
<div class="game__cards-item"><img src="./img/cards/10 бубны.png" alt="10 бубны"></div>
<div class="game__cards-item"><img src="./img/cards/9 бубны.png" alt="9 бубны"></div>
<div class="game__cards-item"><img src="./img/cards/8 бубны.png" alt="8 бубны"></div>
<div class="game__cards-item"><img src="./img/cards/7 бубны.png" alt="7 бубны"></div>
<div class="game__cards-item"><img src="./img/cards/6 бубны.png" alt="6 бубны"></div>
<div class="game__cards-item"><img src="./img/cards/туз крести.png" alt="туз крести"></div>
<div class="game__cards-item"><img src="./img/cards/король крести.png" alt="король крести"></div>
<div class="game__cards-item"><img src="./img/cards/дама крести.png" alt="дама крести"></div>
<div class="game__cards-item"><img src="./img/cards/валет крести.png" alt="валет крести"></div>
<div class="game__cards-item"><img src="./img/cards/10 крести.png" alt="10 крести"></div>
<div class="game__cards-item"><img src="./img/cards/9 крести.png" alt="9 крести"></div>
<div class="game__cards-item"><img src="./img/cards/8 крести.png" alt="8 крести"></div>
<div class="game__cards-item"><img src="./img/cards/7 крести.png" alt="7 крести"></div>
<div class="game__cards-item"><img src="./img/cards/6 крести.png" alt="6 крести"></div>
</div>
</div>`;

function renderGame(level) {
    let appHtml;
    if (level === "1") {
        appHtml = `${gameClosedCards}`;
    } else if (level === "2") {
        appHtml = `${gameOpenCards}`;
    } else {
        appHtml = `
     <div>
        <h2 class="text center">Сложный уровень</h2>
     </div>`;
    }

    return appHtml;
}
