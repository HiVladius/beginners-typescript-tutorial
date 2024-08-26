import { expect, it } from "vitest";

const createCache = () => {
  // const cache = {}; // variable a modificar 

  // const cache: { [key: string]: string } = {}; //!Una forma de tipar el objeto
  const cache: Record<string, string> = {}; //! Otra forma de tipar el objeto "mas limpio"

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
