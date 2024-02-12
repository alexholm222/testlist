//класс для создания карточки
export default class List {
    //конструктор принимает в себя данные карточки
    constructor (data, itemSelector) {
      this._name = data.name;
     
      this._id = data.id;
      this._itemSelector = itemSelector;
    }
  
    //приватный метод для создания разметки карточки
    _getTemplate () {
      const itemElement = document
      .querySelector(this._itemSelector)
      .content
      .querySelector('.list')
      .cloneNode(true);
      return itemElement;
    }
  
    //публичный метод, добавляет данные в разметку
    generateItem() {
      //записали разметку в приватное поле _element
      this._element = this._getTemplate();
      this._itemName = this._element.querySelector('.list__title');
      // добавили данные в разметку
      this._itemName.textContent = this._name;
     
      //вернули элемент с данными в разметке
      return this._element
    }
  }
  
  