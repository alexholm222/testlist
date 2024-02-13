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

let listEl

/* function handleCreateList(el) {
  if (el.node === 0 && !el.head) {
    container.append(createItem(el));
    return
  }

  if (el.node === 1 && !el.head) {
    const list = createList(el);
    listEl = list;
    container.append(list);
    return
  }

  if (listEl && el.node === 0 && el.head == listEl.id) {
    listEl.append(createItem(el));
    return
  }

  if (listEl && el.node === 1 && el.head == listEl.id) {
    const list = createList(el);
    listEl.append(list);
    listEl = list;
    return
  }

} */

API.services.forEach((el) => {
  handleCreateList(el);
  
})


console.log(listEl)





