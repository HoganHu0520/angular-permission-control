import last from './last';
import map from './map';
import isArrayLikeObject from './isArrayLikeObject';
import baseIntersection from './baseIntersection';

export function intersectionBy<T>(...arrays) {
  let iteratee = last(arrays);
  const mapped = map(arrays, (item: T) => {
    return isArrayLikeObject(item) ? item : [];
  });

  if (iteratee === last(mapped)) {
    iteratee = undefined
  } else {
    mapped.pop()
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, iteratee)
    : []
}