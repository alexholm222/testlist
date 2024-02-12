import './index.css'
import { API } from '../utils/constants';
import Item from '../components/Item';
import List from '../components/List';
const container = document.querySelector('.container');

function createItem(el) {
  const itemEl = new Item(el, '.item-template')
  const item = itemEl.generateItem();
  return item;
}

function createList(el) {
  const itemEl = new List(el, '.item-template')
  const item = itemEl.generateItem();
  return item;
}


API.services.forEach((el) => {
  if (el.node === 0) {
    container.append(createItem(el));
  } else {
    container.append(createList(el));
  }
  
})


