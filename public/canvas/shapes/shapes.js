const root = document.getElementById('root');
const canvas = document.createElement('canvas');
const ct = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
ct.beginPath();
canvas.style.border = '1px solid black';

const renderShapesCanvasSize = () => {
  ct.lineCap = 'round';
  ct.arc(300, 300, 300, 0, 360);
  const gradient = ct.createConicGradient(0, 300, 300);
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(0.3, 'yellow');
  gradient.addColorStop(0.6, 'red');
  gradient.addColorStop(1, 'green');
  ct.fillStyle = gradient;
  setInterval(() => {
    ct.translate(300, 300);
    ct.rotate((0.1 * Math.PI) / 180);
    ct.translate(-300, -300);
    ct.moveTo(300, 300);
    ct.fill();
  }, 2);
};
//renderShapesCanvasSize();
root.append(canvas);

const renderPolygon = (n) => {
  ct.lineCap = 'round';
  const length = 100;
  const center = 300;
  ct.beginPath();
  ct.moveTo(center + length * Math.cos(0), center + length * Math.sin(0));
  for (let i = 1; i <= n; i++) {
    const x = center + length * Math.cos(i * ((2 * Math.PI) / n));
    const y = center + length * Math.sin(i * ((2 * Math.PI) / n));
    ct.lineTo(x, y);
    ct.stroke();
  }
};

renderPolygon(5);
