changeStateColor();
function changeStateColor() {
  const td02 = document.getElementsByClassName("td02")
  for(const state of td02) {
    if(state.childNodes[0].innerText) {
      switch (state.childNodes[0].innerText) {
        case '未実施' :
        case '未提出' :
          state.childNodes[0].classList.add('yet', 'state-background');
          break;
          
        case '評価済' :
        case '実施済' :
        case '未評価' :
          state.childNodes[0].classList.add('already', 'state-background');
          state.childNodes[0].childNodes[0].classList.add('already', 'link');
          break;
            
        case '未参照' :
        case '一部参照' :
          state.childNodes[0].classList.add('unwatched', 'state-background');
          break;
              
        default :
        state.childNodes[0].classList.add('state-background');
        
      }
    }
  }
}