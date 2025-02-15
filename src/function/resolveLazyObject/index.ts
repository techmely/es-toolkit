type MaybeLazyObject<T> = T | (() => T);

export const resolveLazyObject = <T>(obj: MaybeLazyObject<T>): T => {
  return typeof obj === "function" ? (obj as () => T)() : obj;
};
