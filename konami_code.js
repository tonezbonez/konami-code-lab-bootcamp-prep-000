const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  function onKeyDownHandler(i){
    const key = parseInt(i.location);
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
  document.body.addEventListener('keydown', onKeyDownHandler(keydown.location))
}
