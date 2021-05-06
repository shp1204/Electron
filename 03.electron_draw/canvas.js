window.addEventListener('load',() => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext('2d');

  // Resizing -- 내마음대로 크기 변경 가능
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  var sX, sY, cX, cY;
  painting = false;
  // variables
  function startPosition(e){
    sX = parseInt(e.clientX);
    sY = parseInt(e.clientY);
    painting = true;
  }

  function movePosition(e){
    if(painting){
      cX = parseInt(e.clientX);
      cY = parsInt(e.clientY);
      ctx.strokeRect(sX, sY, cX, cY);
    }
  }

  function finishedPosition(e){
    painting = false;
  }
  
  // EventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mousemove", movePosition);
  canvas.addEventListener("mouseup", finishedPosition);
  
});