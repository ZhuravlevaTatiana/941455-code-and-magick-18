'use strict';
var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var WIZARDS_LENGTH = 4;
var setupWizard = document.querySelector('.setup');
setupWizard.classList.remove('hidden');
var random = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};
var getRandomItemFromArray = function (wizards) {
  return wizards[random(0, wizards.length - 1)];
};
var createRandomWizards = function () {
  var wizardArray = [];
  for (var i = 0; i <= WIZARDS_LENGTH; i++) {
    wizardArray.push({
      name: getRandomItemFromArray('NAMES'),
      surname: getRandomItemFromArray('SURNAMES'),
      coatСolor: getRandomItemFromArray('COAT_COLORS'),
      eyesСolor: getRandomItemFromArray('EYES_COLORS')
    });
  }
  return wizardArray;
};
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var render = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.surname;
  wizardElement.querySelector('.setup-similar-label').style.fill = wizard.CoatColor;
  wizardElement.querySelector('.setup-similar-label').style.fill = wizard.EyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(render(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
