// Since the dev server re-requires the bundle, do some shenanigans to make
// certain things persist across that 😆
// Borrowed/modified from https://github.com/jenseng/abuse-the-platform/blob/2993a7e846c95ace693ce61626fa072174c8d9c7/app/utils/singleton.ts

export function createSingleton<Value>(name: string, valueFactory: () => Value): Value {
  const g = globalThis;
  g.__singletons ??= new Map();
  if (!g.__singletons.has(name)) {
    g.__singletons.set(name, valueFactory());
  }
  return g.__singletons.get(name) as Value;
}

/**
 * Disposes a singleton by a given name. Does not throw if the name doesn't exist.
 *
 * @param {string} name - The name under which the singleton was created.
 * @return {boolean} - A singleton existed and has been disposed.
 */
export function disposeSingleton(name: string): boolean {
  const g = globalThis;
  g.__singletons ??= new Map();
  return g.__singletons.delete(name);
}

declare global {
  var __singletons: Map<string, unknown>;
}
