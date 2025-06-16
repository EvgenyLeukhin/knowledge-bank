'use strict';

// в модульном скрипте можно делать обращение к стороннему ресерсу обращение
import { personJsData, personJsonData } from './js-module__json-export.js';

const personJS = {
  ...personJsData,
  isUpdated: true,
  date: new Date(),
};

const personJSON = {
  ...JSON.parse(personJsonData),
  isUpdated: true,
  date: new Date(),
};

console.log('person js', personJS);
console.log('person json', personJSON);

export { personJS, personJSON };
