'use strict'
var setupWizard = document.querySelector('.setup');
setupWizard.classList.remove('hidden');

var addWizard = document.querySelector('.setup-similar');
addWizard.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .сontent
  .querySelector('.setup-similar-item');

var namesWizard = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

for (var i = 0; i <= namesWizard.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  similarListElement.appendChild(wizardElement);
}
//var usersPlayer = [];
// var namesWizard = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// var setupSimilar = document.querySelector('.setup-similar');
// setupSimilar.classList.remove('hidden');

// var wizards = [
//   {
//     name: namesWizard[0],
//     surname: surnames[0],
//     coatColor: 'rgb(241, 43, 107)'
//   },
//   {
//     name: namesWizard[1],
//     surname: surnames[1],
//     coatColor: 'rgb(240, 43, 107)'
//   }
// ]
// var renderWizard = function (wizard) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);
//   wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
//   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//   return wizardElement;
// }
// var fragment = document.createDocumentFragment();
// for (var i = 0; i < wizards.length; i++) {
//   fragment.appendChild(renderWizard(wizards[i]));
// }
// similarListElement.appendChild(fragment);
