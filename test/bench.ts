import { run, bench, group } from "mitata";
import FastPriorityQueue from "fastpriorityqueue";
import { PriorityQueue } from "../src";

let semirandomFeed = 12345;
// super-weak pseudorandom number generator
const BASE_RANDS = new Array(4000)
  .fill(0)
  .map(() => (semirandomFeed * 2000 + 100) % 3989);

group("numeric values", () => {
  const RANDS = BASE_RANDS;

  bench("fastpriorityqueue", () => {
    const queue = new FastPriorityQueue<number>((a, b) => a > b);

    for (let i = RANDS.length - 1; i >= 0; i--) {
      const rand = RANDS[i];
      queue.add(rand);
      if (i % 30 === 0) {
        for (let j = 0; j < 20; j++) {
          queue.poll();
        }
      }
    }
  });

  bench("repo", () => {
    const queue = new PriorityQueue<number>();

    for (let i = RANDS.length - 1; i >= 0; i--) {
      const rand = RANDS[i];
      queue.add(rand, rand);
      if (i % 30 === 0) {
        for (let j = 0; j < 20; j++) {
          queue.poll();
        }
      }
    }
  });
});

group("object values", () => {
  const RANDS = BASE_RANDS.map((x) => ({ priority: x }));

  bench("fastpriorityqueue", () => {
    const queue = new FastPriorityQueue<{ priority: number }>(
      (x, b) => x.priority > b.priority
    );

    for (let i = RANDS.length - 1; i >= 0; i--) {
      const rand = RANDS[i];
      queue.add(rand);
      if (i % 30 === 0) {
        for (let j = 0; j < 20; j++) {
          queue.poll();
        }
      }
    }
  });

  bench("repo", () => {
    const queue = new PriorityQueue<{ priority: number }>();

    for (let i = RANDS.length - 1; i >= 0; i--) {
      const rand = RANDS[i];
      queue.add(rand.priority, rand);
      if (i % 30 === 0) {
        for (let j = 0; j < 20; j++) {
          queue.poll();
        }
      }
    }
  });
});

await run({
  silent: false, // enable/disable stdout output
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  percentiles: false, // enable/disable percentiles column (default: true)
});
