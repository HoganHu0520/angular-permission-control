export function anyBy<T>(arr: T[], iteratee: (T) => boolean): T[] {
  const result: T[] = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if (iteratee(element)) {
      result.push(element);
    }
  }
  return result;
}