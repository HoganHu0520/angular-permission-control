export default function map<T>(array: Array<T>, iteratee: (item: T, i: number, arr: Array<T>) => T): Array<T> {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array<T>(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result;
}