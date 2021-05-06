window.addEventListener('load',() => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext('2d');

  // Resizing -- 내마음대로 크기 변경 가능
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // // 직사각형 w/o color
  // ctx.fillRect(50, 50, 200, 200);
  // // 직사각형 only line
  // ctx.strokeRect(100,100,200,500);

  // // 직사각형 w/color
  // ctx.strokeStyle = "red";
  // ctx.lineWidth = 5;
  // ctx.strokeRect(100,100,200,500);
  // ctx.strokeStyle = "blue";
  // ctx.lineWidth = 1;
  // ctx.strokeRect(200,200,200,500);

  // draw own
  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(200, 100);
  // ctx.lineTo(200, 150);
  // ctx.closePath();
  // ctx.stroke();

  // variables
  let painting = false;
  function startPosition(){
    painting = true;
    draw(e);
  }
  function finishedPosition(){
    painting = false;
    ctx.beginPath();
  }
  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginpath();
    ctx.moveTo(e.cleintX, e.cleintY);
  }
  // EventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});
