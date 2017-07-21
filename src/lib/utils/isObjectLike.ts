export default function isObjectLike(value): boolean {
  return typeof value == 'object' && value !== null
}