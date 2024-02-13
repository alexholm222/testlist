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
      // добавили данные в разметку
      this._element.textContent = this._name;
      this._element.classList.add(`list_${this._id}`);
      this._element.id = this._id;
      //вернули элемент с данными в разметке
      return this._element
    }
  }
  
  