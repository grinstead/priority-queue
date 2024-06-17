# PriorityQueue

A Priority Queue implementation in TypeScript that uses numeric priorities.
It is designed to focus on cleanliness and performance and allows for either a highest priority first or a lowest priority first queue based on the what is passed to the constructor.

Internal benchmarking shows this is faster than [fastpriorityqueue](https://www.npmjs.com/package/fastpriorityqueue). The speedup primarily comes from explicitly passing a numeric priority into the queue instead of using a comparator to sort items.

This is not currently feature rich, though requests on the github are welcome.

## Features

- O(log n) insertion and removal.
- O(1) peek
- Supports negative and fractional priorities.
- Configurable for either highest or lowest priority first.

## Installation

You can install the `PriorityQueue` module via npm:

```bash
npm install @grinstead/priority-queue
```

## Usage

Here is a basic example of how to use the `PriorityQueue`:

### Importing the Module

```typescript
import { PriorityQueue } from "@grinstead/priority-queue";
```

### Creating a Priority Queue

By default, the priority queue returns the highest priority item first:

```typescript
const queue = new PriorityQueue<string>();
```

You can create a priority queue that returns the lowest priority item first by passing `true` to the constructor:

```typescript
const queue = new PriorityQueue<string>(true);
```

### Adding Items

You can add items to the queue using the `add` method, which takes a priority and the item:

```typescript
queue.add(1, "low priority item");
queue.add(10, "high priority item");
```

### Peeking at the Highest Priority Item

The `peek` method returns the item with the highest priority without removing it from the queue:

```typescript
console.log(queue.peek()); // Outputs: 'high priority item'
```

### Peeking at the Priority of the Highest Priority Item

The `peekPriority` method returns the priority of the item with the highest priority without removing it from the queue:

```typescript
console.log(queue.peekPriority()); // Outputs: 10
```

### Removing the Highest Priority Item

The `poll` method returns and removes the item with the highest priority:

```typescript
console.log(queue.poll()); // Outputs: 'high priority item'
console.log(queue.peek()); // Outputs: 'low priority item'
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
