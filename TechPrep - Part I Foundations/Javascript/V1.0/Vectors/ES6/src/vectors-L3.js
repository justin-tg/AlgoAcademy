
let L3 = function() {

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

      if (index < 0 || index >= this.length) {
        throw new Error("Error | Index Out of Bounds");
      }

      this.resize();
      for (let i = this.length; i > index; i--) {
        this.storage[i] = this.storage[i-1];
      }
      this.set(index, value);
      this.length +=1;
    }


    remove(index) {

      if (index < 0 || index >= this.length) {
        throw new Error("Error | Index Out of Bounds");
      }
      
      if (this.length === 0) {
        throw new Error("Error | Already Empty");
      }

      this.resize(false);

      if (index === null || index === undefined) {
        delete this.storage[this.length];
      } else if (index < this.length) {

        for (let i = index; i < this.length; i++) {
          this.storage[i] = this.storage[i+1];
        }

        delete this.storage[this.length];

      }
      this.length-=1;
    }



    // Vector.set(5, value) is the same as array[5] = value;
    //
    set(index, value) {
      if (index < 0 || index >= this.length) {
        throw new Error("Error | Index Out of Bounds");
      }

      this.storage[index] = value;
    }


    // x = Vector.get(5) is the same as x = array[5];
    //
    get (index) {

      if (index < 0 || index >= this.length) {
        throw new Error("Error | Index Out of Bounds");
      }

      return this.storage[index];
    }


    resize2(double = true) {

      if (double && this.length === this.capacity) {
        // I need to increase capacity without going over the max
        if (this.capacity * 2 > this.max) {
          throw new Error("Error | Insufficient Capacity");
        }

        this.capacity *= 2;
        
      } else if (!double && this.length < this.capacity / 2) {

        if (this.capacity / 2 < this.minCapacity) {
          throw new Error("Error | Too little Capacity - cannot be less than min");
        }

        this.capacity = Math.floor(this.capacity /= 2);
      }

      let tempStorage = new Array(this.capacity);

      for (let i = 0; i < this.capacity; i++) {
        tempStorage[i] = this.storage[i];
      }

      this.storage = tempStorage;
    }

    resize(isAdding = true) {

      let desiredLength = isAdding ? this.length + 1 : this.length - 1;
      let tempStorage = null;
      let resizeNeeded = false;

      if (isAdding) {
        if (desiredLength > (this.max)) {
          throw new Error("insufficient capacity.");
        }

        if (desiredLength > this.capacity) {
          this.capacity *= 2;
          resizeNeeded = true;
        }
      } else if (!isAdding) {
        if (desiredLength < this.minCapacity) {
          return false;
        }

        if (desiredLength === (this.capacity / 2)) {
          this.capacity /= 2;
          resizeNeeded = true;
        }
      }

      if (resizeNeeded) {
        tempStorage = new Array(this.capacity);

        for (let i = 0; i < desiredLength; i++) {
          tempStorage[i] = this.storage[i];
        }

        this.storage = tempStorage;
        return true;
      }

      return false;
    }

    
    find(value) {
      for (let i=0; i<this.length; i++) {
        if (this.storage[i] === value) {
          return i;
        }
      }
      return null;
    }


    contains(value) {
      return this.find(value) !== null;
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