import "@testing-library/jest-dom/vitest";

if (!globalThis.DOMMatrix) {
  globalThis.DOMMatrix = class DOMMatrix {};
}
