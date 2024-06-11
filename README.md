# PriorityQueue

A Priority Queue implementation in TypeScript that uses numeric priorities.
It is designed to focus on cleanliness and performance and allows for either a highest priority first or a lowest priority first queue based on the what is passed to the constructor.

## Features

- O(log n) insertion and removal.
- Supports negative and fractional priorities.
- Configurable for either highest or lowest priority first.

## Installation

You can install the `PriorityQueue` module via npm:

```bash
npm install priority-queue-ts
```

## Usage

Here is a basic example of how to use the `PriorityQueue`:

### Importing the Module

```typescript
import { PriorityQueue } from "priority-queue-ts";
```

### Creating a Priority Queue

By default, the priority queue returns the highest priority item first:

```typescript
const pq = new PriorityQueue<number>();
```

You can create a priority queue that returns the lowest priority item first by passing `true` to the constructor:

```typescript
const pq = new PriorityQueue<number>(true);
```

### Adding Items

You can add items to the queue using the `add` method, which takes a priority and the item:

```typescript
pq.add(1, "low priority item");
pq.add(10, "high priority item");
```

### Peeking at the Highest Priority Item

The `peek` method returns the item with the highest priority without removing it from the queue:

```typescript
console.log(pq.peek()); // Outputs: 'high priority item'
```

### Peeking at the Priority of the Highest Priority Item

The `peekPriority` method returns the priority of the item with the highest priority without removing it from the queue:

```typescript
console.log(pq.peekPriority()); // Outputs: 10
```

### Removing the Highest Priority Item

The `poll` method returns and removes the item with the highest priority:

```typescript
console.log(pq.poll()); // Outputs: 'high priority item'
console.log(pq.peek()); // Outputs: 'low priority item'
```

## API

### `constructor(isLowestToHighest: boolean = false)`

- **`isLowestToHighest`** (optional): A boolean indicating whether the queue should prioritize lower values (true) or higher values (false). Defaults to `false`.

### `add(priority: number, item: T): void`

Adds an item to the queue with the given priority.

### `peek(): T | undefined`

Returns the item with the highest priority without removing it from the queue. Returns `undefined` if the queue is empty.

### `peekPriority(): number | undefined`

Returns the priority of the item with the highest priority without removing it from the queue. Returns `undefined` if the queue is empty.

### `poll(): T | undefined`

Returns and removes the item with the highest priority from the queue. Returns `undefined` if the queue is empty.

### `length: number`

The number of items currently in the queue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## Author

- [Joe Grinstead](https://github.com/grinstead)
