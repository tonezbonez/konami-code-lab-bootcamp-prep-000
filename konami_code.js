const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  const main = document.getElementById('body')
  function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.which);
      if (key === code[index]) {
          index++;
          if (index === code.length) {
            alert("Congratulations fine warrior. You have cracked the konami code.");

            index = 0;
          }
      } else {
        index = 0;
      }
    }
  main.addEventListener('keydown', onKeyDownHandler(e))
}
