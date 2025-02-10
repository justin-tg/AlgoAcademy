
let L2 = function() {

  class Vector {
    constructor(initialCapacity, maxCapacity) {
      this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
      this.minCapacity = this.capacity;       // Don't reduce below this value
      this.max = maxCapacity || 1 << 4;       // Default max vector size to 16;
      this.length = 0;

      this.storage = new Array(this.capacity);
    }




    add(value) {
      let length = this.length;
      this.resize();
      this.storage[length] = value;
      this.length++;
    }




    insert(index, value) {
      this.resize();
      for (let i = this.length; i > index; i--) {
        this.storage[i] = this.storage[i-1];
      }
      this.set(index, value);
      this.length +=1;
    }



    remove(index) {
      this.resize(false);

      if (index === null || index === undefined) {
        this.storage[this.capacity] = undefined;
      } else {

        for (let i = index; i < this.capacity; i++) {
          this.storage[i] = this.storage[i+1];
        }

        this.storage[this.capacity] = undefined;

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




    resize(double = true) {

      if (double && this.length === this.capacity) {
        this.capacity *= 2;
      } else if (!double && this.length < this.capacity / 2) {
        this.capacity = Math.floor(this.capacity /= 2);
      }

      let tempStorage = new Array(this.capacity);

      for (let i = 0; i < this.capacity; i++) {
        tempStorage[i] = this.storage[i];
      }

      this.storage = tempStorage;
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

let Vector = L2()
let x = new Vector();

console.log(x.capacity);

for (let i = 0; i < 7; i++) {
  x.add(i);
}

console.log(x.capacity);

