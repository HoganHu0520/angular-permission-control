export default function last<T>(array: Array<T>): T | any {
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
}