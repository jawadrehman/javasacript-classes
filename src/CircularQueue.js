"use strict";
export default class CircularQueue {
    /**
     * Initalize the CircularQueue with a size.
     * @param  {Number} size
     */
    constructor(size) {
        this.counter = 0;
        this.data = [];
        this.size = size;
    }

    /**
     * Insert an item to the queue. 
     * @param  {Object} obj - any object to add.
     */
    add(obj) {
        this.data[this.counter % this.size] = obj;
        this.counter++;
    }


    /**
     * Get the object at the index 
     * Indexes range from 0 to *size - 1*
     * @param  {Number} index
     */
    get(index) {
        return this.data[((this.counter + index) % this.size)];
    }


    /**
     * Iterate through the items of the queue. 
     * @param  {Function} callback - invokes the callback on each item of the queue. 
     */
    forEach(callback) {
        for (let i = 0; i < this.size && i < this.counter; i++) {
            callback(this.get(i));
        }
    }
}