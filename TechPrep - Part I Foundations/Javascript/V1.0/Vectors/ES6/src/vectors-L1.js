
let L1 = function() {

  class Vector {
    constructor(initialCapacity) {
      this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
      this.length = 0;
      this.storage = new Array(this.capacity);
    }




    add(value) {
      if (this.length === this.capacity) {
        this.resize();
      }

      this.storage[this.length++] = value;
    }


    insert(index, value) {

      if (this.length === this.capacity) {
        this.resize();
      }

      this.storage.splice(index, 0, value);
      this.storage[index] = value;
      this.storage.length -= 1;

      this.length += 1;
    }




    remove(index) {
      if (index === undefined || index === null) {
        delete this.storage[this.length];
      } else {
        this.storage.splice(index, 1);
      }

      this.length--;
    }




    // Vector.set(5, value) is the same as array[5] = value;
    //
    set(index, value) {
      this.storage[index] = value;
    }




    // x = Vector.get(5) is the same as x = array[5];
    //
    get (index) {
      return this.storage[index];
    }




    resize() {
      this.capacity = this.capacity * 2;
      let newArray = new Array(this.capacity);
      for (let i = 0; i < this.storage.length; i++) {
        newArray[i] = this.storage[i];
      }
      this.storage = newArray;
    }



    toArray() {
      let result = [];

      for (let i=0; i<this.length; i++) {
        result[i] = this.storage[i];
      }

      return result;
    }
  }

  return Vector;
};