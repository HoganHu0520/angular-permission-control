import isObjectLike from './isObjectLike';
import isArrayLike from './isArrayLike';

export default function isArrayLikeObject(value): boolean {
  return isObjectLike(value) && isArrayLike(value)
}