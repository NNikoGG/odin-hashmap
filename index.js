class HashMap {
  // Default bucket size, load factor and hashmaps
  constructor() {
    this.bucketSize = 16;
    this.buckets = Array(this.bucketSize).fill(null); // Buckets null by default
    this.loadFactor = 0.75;
    this.size = 0;
  }

  // Hash function
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.bucketSize;
    }
    return hashCode;
  }

  // Add hash map
  set(key, value) {
    const index = this.hash(key);

    // If the index is empty create a new array for storing the arrays of key value pairs for that specific index
    if (this.buckets[index] === null) {
      this.buckets[index] = [];
    }

    // If key already exists then update the value
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }

    // Or add new key value pair in the resultant index
    this.buckets[index].push([key, value]);
    this.size++;

    // Check if load factor is exceeded
    if (this.size / this.bucketSize >= this.loadFactor) {
      this.resize();
    }
  }

  // Resize when load factor is exceeded
  resize() {
    // Temporarily storing the buckets
    const oldBuckets = this.buckets;
    this.bucketSize *= 2;
    this.buckets = Array(this.bucketSize).fill(null);
    this.size = 0;
    // Reinserting the old buckets
    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
    console.log("Resize done!");
  }

  // Return the value of entered key
  get(key) {
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i][0] === key) {
            console.log(this.buckets[index][i][1]);
          }
        }
      }
    }
    console.log(null);
  }

  // Return true or false based on presence of key
  has(key) {
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i][0] === key) {
            console.log(true);
          }
        }
      }
    }
    console.log(false);
  }

  // Remove entry given a key
  remove(key) {
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i][0] === key) {
            this.buckets[index].splice(i, 1);
            console.log("true");
            this.size--;
            return;
          }
        }
      }
    }
    console.log("false");
  }

  // Count number of stored keys
  length() {
    let count = 0;
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i]) {
            count++;
          }
        }
      }
    }
    console.log(count);
  }

  // Remove all entries
  clear() {
    this.buckets = Array(this.bucketSize).fill(null);
    this.size = 0;
  }

  // Return array containing all keys
  keys() {
    let keys = [];
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i]) {
            keys.push(this.buckets[index][i][0]);
          }
        }
      }
    }
    console.log(keys);
  }

  // Return array containing all values
  values() {
    let values = [];
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i]) {
            values.push(this.buckets[index][i][1]);
          }
        }
      }
    }
    console.log(values);
  }

  // Return array containing all entries
  entries() {
    let pairs = [];
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i]) {
            pairs.push(this.buckets[index][i]);
          }
        }
      }
    }
    console.log(pairs);
  }
}

const hm1 = new HashMap();

hm1.set("Niko", 10);
hm1.set("Kiko", 20);
hm1.set("b", 30);
hm1.set("Riko", 40);
console.log(hm1.buckets);
hm1.get("Niko");
hm1.has("Kiko");
hm1.remove("b");
console.log(hm1.buckets);
hm1.length();
hm1.clear();
console.log(hm1.buckets);
hm1.set("Niko", 10);
hm1.set("Kiko", 20);
hm1.set("b", 30);
hm1.set("Riko", 40);
hm1.keys();
hm1.values();
hm1.entries();
