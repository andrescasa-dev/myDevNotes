const container = document.querySelector('.container');
const nChildren = container.children.length;

let initialX = null;
let imageIndex = 0;
let locked = false;

container.style.setProperty('--n',nChildren);

// if in the event there some touche, give me that touch object if not means that it was a click.
function unify(mouseOrTouch){
  return mouseOrTouch.changedTouches ? mouseOrTouch.changedTouches[0] : mouseOrTouch;
}

function lock(mouseUp){
  initialX = unify(mouseUp).clientX; //give the X position where the event (mousedown or touchstart) was activated.
  container.classList.toggle('smooth', !(locked = true));
}

/**
 * 
 * @param {event that detect mouse up or touch start} mouseUp 
 * @returns a boolean which determines if show the isGoingPrevImage or the nextImage according to the user movement is to the right or not. 
 */
function whereMove(mouseUp){
  const finalX = unify(mouseUp).clientX;
  const isGoingPrevImage = finalX === initialX ? undefined: finalX > initialX; // it could right left and no move.
  return isGoingPrevImage;
}


function drag(mouseUpOrTouchStart){
  mouseUpOrTouchStart.preventDefault();
  if(locked){
    let currentX = unify(mouseUpOrTouchStart).clientX;
    let distance = Math.round( currentX  - initialX );
    container.style.setProperty('--extra', `${distance}px`);
  }
}

function move(mouseUp){
  if(locked){
    const isGoingPrevImage = whereMove(mouseUp);
    //if there is not movement or can't move then don't move
    if((isGoingPrevImage !== undefined) && !(isGoingPrevImage && imageIndex === 0) && !( !isGoingPrevImage && imageIndex === (nChildren - 1))){
      container.style.setProperty('--i', isGoingPrevImage ? --imageIndex : ++imageIndex) //if the user wants to go to the right, show prev image; if not, show next image. 
    }
    container.classList.toggle('smooth',  !(locked = false));
    container.style.setProperty('--extra', '0px');
    initialX = null;
  }
}


container.addEventListener('mousedown', lock);
container.addEventListener('touchstart', lock);

container.addEventListener('mouseup', move);
container.addEventListener('touchend', move);

container.addEventListener('mousemove', drag);
container.addEventListener('touchmove', drag);
