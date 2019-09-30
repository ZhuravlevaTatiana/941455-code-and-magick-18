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
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .сontent
  .querySelector('.setup-similar-item');

for (var i = 0; i <= WIZARDS_LENGTH; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  //wizardElement.querySelector('.setup-similar-label').textContent = namesWizard[i];

  similarListElement.appendChild(wizardElement);
}


//var renderWizard = function (wizard) {
 // var wizardElement = similarWizardTemplate.cloneNode(true);
 // wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  //wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  //return wizardElement;
//};

//var addWizard = document.querySelector('.setup-similar');
//addWizard.classList.remove('hidden');

 //var renderWizard = function (wizard) {
 //var wizardElement = similarWizardTemplate.cloneNode(true);
 //wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
 //wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
 //return wizardElement;
 //}
 //var fragment = document.createDocumentFragment();
 //for (var i = 0; i < wizards.length; i++) {
 //fragment.appendChild(renderWizard(wizards[i]));
 //}
 //similarListElement.appendChild(fragment);
