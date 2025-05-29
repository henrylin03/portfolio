import "@testing-library/jest-dom/vitest";

import { vi } from "vitest";

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

class IntersectionObserver {
  constructor(callback, options = {}) {
    this.callback = callback;
    this.options = options;
    this.entries = [];
  }

  observe(element) {
    const entry = {
      target: element,
      isIntersecting: true,
      intersectionRatio: 1,
      boundingClientRect: element.getBoundingClientRect(),
      rootBounds: null,
      time: Date.now(),
    };
    this.entries.push(entry);

    setTimeout(() => this.callback([entry], this), 0);
  }

  unobserve(element) {
    this.entries = this.entries.filter((entry) => entry.target !== element);
  }

  disconnect() {
    this.entries = [];
  }
}

window.IntersectionObserver = IntersectionObserver;
