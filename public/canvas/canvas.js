const maxX = 70;
const maxY = 20;

const xDPI = 700;
const yDPI = 400;

const dataMap = new Map();
dataMap.set(0, 0);
dataMap.set(15, 6);
dataMap.set(17, 3);
dataMap.set(22, 1);
dataMap.set(38, 9);
dataMap.set(40, 3);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const setCanvasSize = () => {
  canvas.width = 800;
  canvas.height = 500;
  canvas.style.border = '1px solid black';
  canvas.style.margin = '10% 30%';
};

setCanvasSize();

const renderCoordinates = () => {
  const xCount = 5;
  const yCount = 4;

  const xPoint = xDPI / xCount;
  const yPoint = yDPI / yCount;

  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 0.2;
  for (let i = 0; i <= xCount; i++) {
    ctx.fillText((maxX / xCount) * i, xPoint * i, yDPI);
  }
  ctx.beginPath();
  for (let i = 0; i <= yCount; i++) {
    ctx.moveTo(0, yPoint * i);
    ctx.lineTo(xDPI, yPoint * i);
    ctx.fillText(Math.floor((yPoint * (yCount - i)) / maxY), 0, yPoint * i - 5);
    ctx.stroke();
  }
  ctx.closePath();
};
renderCoordinates();

const renderChart = () => {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;
  for (const [x, y] of dataMap) {
    const pointX = (x * xDPI) / maxX;
    const pointY = (y * yDPI) / maxY;
    ctx.lineTo(pointX, yDPI - pointY);
    ctx.stroke();
  }
};

renderChart();
