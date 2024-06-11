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
    console.log(`Hashcode: ${hashCode}`);
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
    console.log(this.buckets);
    console.log(`Size: ${this.size}`);
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
    // Traversing over each bucket and matching its key
    for (let index in this.buckets) {
      for (let i in this.buckets[index]) {
        if (this.buckets[index][i][0] === key) {
          console.log(`Key: ${key} , Value: ${this.buckets[index][i][1]}`);
          return;
        }
      }
    }
    console.log(null); // Null if key not found
  }

  // Return true or false based on presence of key
  has(key) {
    for (let index in this.buckets) {
      for (let i in this.buckets[index]) {
        if (this.buckets[index][i][0] === key) {
          console.log(true);
          return;
        }
      }
    }
    console.log(false);
  }
}

const hm1 = new HashMap();

hm1.set("Niko", 10);
hm1.set("Kiko", 20);
hm1.set("b", 30);
hm1.get("Niko");
hm1.has("Kiko");
