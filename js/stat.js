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

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Вы', CLOUD_X + COLUMN_GAP, CLOUD_Y + 260, COLUMN_WIDTH);
  ctx.fillRect(CLOUD_X + COLUMN_GAP, 100, COLUMN_WIDTH, COLUMN_HEIGHT);


};
