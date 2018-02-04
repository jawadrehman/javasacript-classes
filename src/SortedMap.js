"use strict";
/**
 * Class to handle nearly sorted data items .
 */
export default class SortedMap {
  constructor(comparator) {
    this.sortedKeys = [];
    this.map = {};
    this.comparator = comparator;
  }

  add(key, item) {
    const insertIndex = this._insertIndex(key, item);

    if (this.containsKey(key) == false) {
      this.sortedKeys.push(key);
    }

    this.map[key] = item;

    if (this.sortedKeys.length == insertIndex) {
      return;
    } else {
      const currentIndex = this.sortedKeys.indexOf(key);
      this._updateSort(currentIndex, insertIndex);
    }
  }

  remove(key) {
    if (this.containsKey(key)) {
      this.sortedKeys.splice(this.sortedKeys.indexOf(key), 1);
      this.map[key] = null;
    }
  }

  containsKey(key) {
    if (this.map[key]) {
      return true;
    } else {
      return false;
    }
  }

  get(key) {
    return this.map[key];
  }

  _insertIndex(key, item) {
    let i = 0,
      j = this.sortedKeys.length - 1,
      m = 0;

    while (i < j) {
      m = j + (i - j) / 2;
      m = parseInt(m);
      const currentItem = this.get(this.sortedKeys[m]);
      const compare = this.comparator(item, currentItem);
      if (compare == 0) {
        return m;
      }
      if (compare > 0) {
        i = m + 1;
      } else {
        j = m;
      }
    }

    if (
      m < this.sortedKeys.length &&
      this.comparator(item, this.get(this.sortedKeys[j])) <= 0
    ) {
      return j;
    } else {
      return j + 1;
    }
  }

  _updateSort(prevIndex, index) {
    if (prevIndex > index) {
      for (let i = prevIndex, j = index; i > j; i--) {
        this._swap(i, i - 1);
      }
    } else {
      for (let i = prevIndex, j = index - 1; i < j; i++) {
        this._swap(i, i + 1);
      }
    }
  }

  _swap(prevIndex, index) {
    const temp = this.sortedKeys[prevIndex];
    this.sortedKeys[prevIndex] = this.sortedKeys[index];
    this.sortedKeys[index] = temp;
  }

  forEach(callback) {
    this.sortedKeys.forEach((value, index) => {
      callback(this.map[value], index);
    });
  }
}
