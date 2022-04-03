import {createOfferCard} from './render.js';
import {createAdvertisement} from './data.js';
import {setStateActive, setStateDisabled} from './states.js';
import './validation.js';

const advertisements = Array.from({length: 1}, createAdvertisement);

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(createOfferCard(advertisements[0]));

setStateActive();
setStateDisabled();
