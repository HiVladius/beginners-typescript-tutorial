import { Equal, Expect } from "./helpers/type-utils.ts";

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: (isFocused: boolean) => void) => {
  globalThis.addEventListener("focus", () => {
    onFocusChange(true);
  });

  globalThis.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
