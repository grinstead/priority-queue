import { describe, it, expect } from "bun:test";
import { PriorityQueue } from "../src";

type PriorityData = { priority: number };

describe("basic properties", () => {
  it("lowest to highest", () => {
    expect(new PriorityQueue().isLowestToHighest).toBe(false);
    expect(new PriorityQueue(true).isLowestToHighest).toBe(true);
  });

  it("length", () => {
    const queue = new PriorityQueue<any>();

    let length = 0;
    for (; length <= 10; length++) {
      expect(queue.length).toBe(length);
      queue.add(Math.random(), {});
    }

    queue.peek();
    queue.peekPriority();

    for (; length >= 5; length--) {
      expect(queue.length).toBe(length);
      queue.poll();
    }
  });
});

function stressTest(reversed: boolean) {
  function test(priorities: Array<number | "peek" | "poll">) {
    const data: Array<PriorityData> = [];
    const queue = new PriorityQueue<PriorityData>(reversed);

    for (const priority of priorities) {
      if (typeof priority === "number") {
        const datum = { priority };
        data.push(datum);
        queue.add(priority, datum);
        continue;
      }

      data.sort(reversed ? lowestToHighest : highestToLowest);
      expect(queue.length).toBe(data.length);

      if (priority === "poll") {
        expect(queue.poll()).toBe(data.shift()!);
      } else {
        expect(queue.peek()).toBe(data[0]);
      }
    }

    data.sort(reversed ? lowestToHighest : highestToLowest).forEach((d) => {
      expect(queue.poll()).toBe(d);
    });

    expect(queue.length).toBe(0);
  }

  it(reversed ? "awful" : "ordered", () =>
    test([1, 2, 3, 4, "peek", 5, "poll", "poll", 6, 7, "poll"])
  );

  it(reversed ? "ordered" : "awful", () =>
    test([-1, -2, -3, -4, "peek", -5, "poll", "poll", -6, -7, "poll"])
  );

  it("mixed", () => test([4, 5, "poll", reversed ? 4 : 5, 1, 2, 8, 3, 2]));
}

describe("stress test", () => stressTest(false));
describe("stress test (reversed)", () => stressTest(true));

function highestToLowest(a: PriorityData, b: PriorityData) {
  return b.priority - a.priority;
}

function lowestToHighest(a: PriorityData, b: PriorityData) {
  return a.priority - b.priority;
}
