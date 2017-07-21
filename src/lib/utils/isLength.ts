const MAX_SAFE_INTEGER = 9007199254740991;

export default function isLength(value): boolean {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}
