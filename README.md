# Javascript HashMap

This repository contains a custom implementation of a hash map in JavaScript. The HashMap class supports basic operations such as adding, retrieving, checking for presence, removing, and listing keys and values.

## Features

- Dynamic resizing: Automatically resizes the hash map when the load factor exceeds 0.75 to maintain operational efficiency.
- Collision handling: Uses chaining to handle collisions within buckets.
- CRUD operations: Includes methods to add, retrieve, check, and remove entries.
- Utility functions: Provides methods to clear the hash map, and retrieve all keys, values, and entries.

## Usage

### Initialization

Create an instance of the HashMap:

```bash
const hashMap = new HashMap();
```

### Adding Entries

Add key-value pairs to the hash map:

```bash
hashMap.set("Niko", 10);
hashMap.set("Kiko", 20);
hashMap.set("b", 30);
hashMap.set("Riko", 40);
```

### Retrieving a Value

Retrieve a value by its key:

```bash
hashMap.get("Niko");  // Outputs: 10
```

### Checking for Key Presence

Check if a key exists in the hash map:

```bash
hashMap.has("Kiko");  // Outputs: true
```

### Removing an Entry

Remove an entry by its key:

```bash
hashMap.remove("b");  // Outputs: true
```

### Counting Stored Keys

Get the number of entries in the hash map:

```bash
hashMap.length();  // Outputs: 3
```

### Clearing the Hash Map

Remove all entries from the hash map:

```bash
hashMap.clear();
```

### Listing Keys, Values, and Entries

Get all keys, values, or entries stored in the hash map:

```bash
hashMap.keys();    // Outputs: ["Niko", "Kiko", "Riko"]
hashMap.values();  // Outputs: [10, 20, 40]
hashMap.entries(); // Outputs: [["Niko", 10], ["Kiko", 20], ["Riko", 40]]
```
