var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_GAP = 50;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP * 2);
  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var currentTime = times[i];
    var currentPlayer = names[i];
    var columnHeight = currentTime / maxTime * COLUMN_HEIGHT;
    var columnX = CLOUD_X + GAP * 2 + COLUMN_WIDTH * 2.5 * i;
    ctx.fillStyle = '#000';
    ctx.fillText(currentPlayer, columnX, CLOUD_HEIGHT);
    ctx.fillText(Math.round(currentTime), columnX, CLOUD_HEIGHT - columnHeight - GAP);
    if (currentPlayer === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(250, ' + Math.random() * 100 + '%, 50%)';
    }
    ctx.fillRect(columnX, CLOUD_HEIGHT - columnHeight - GAP, COLUMN_WIDTH, columnHeight);
  }
};
