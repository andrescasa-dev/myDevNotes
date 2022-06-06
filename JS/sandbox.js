/* -------------------------------- Remember -------------------------------- */
/* * Select the proper data structure (or if it doesn't need ir)
/* -------------------------------- Remember -------------------------------- */

getDiceHTML(){
  return ;
}

(diceCount) =>  () => this.getDiceRolledArray().reduce((acc, dice) => acc + `<div class="dice">${dice}</div>`, '')