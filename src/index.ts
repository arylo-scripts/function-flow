export default function flow<S, R>(source: S, fn1: (arg: S) => R): R
export default function flow<S, R, R1>(source: S, fn1: (arg: S) => R1, fn2: (arg: R1) => R): R
export default function flow<S, R, R1, R2>(
  source: S,
  fn1: (arg: S) => R1,
  fn2: (arg: R1) => R2,
  fn3: (arg: R2) => R,
): R
export default function flow<S, R, R1, R2, R3>(
  source: S,
  fn1: (arg: S) => R1,
  fn2: (arg: R1) => R2,
  fn3: (arg: R2) => R3,
  fn4: (arg: R3) => R,
): R
export default function flow<S, R, R1, R2, R3, R4>(
  source: S,
  fn1: (arg: S) => R1,
  fn2: (arg: R1) => R2,
  fn3: (arg: R2) => R3,
  fn4: (arg: R3) => R4,
  fn5: (arg: R4) => R,
): R
export default function flow<S, R, R1, R2, R3, R4, R5>(
  source: S,
  fn1: (arg: S) => R1,
  fn2: (arg: R1) => R2,
  fn3: (arg: R2) => R3,
  fn4: (arg: R3) => R4,
  fn5: (arg: R4) => R5,
  fn6: (arg: R5) => R,
): R
export default function flow<S, R, R1, R2, R3, R4, R5, R6>(
  source: S,
  fn1: (arg: S) => R1,
  fn2: (arg: R1) => R2,
  fn3: (arg: R2) => R3,
  fn4: (arg: R3) => R4,
  fn5: (arg: R4) => R5,
  fn6: (arg: R5) => R6,
  fn7: (arg: R6) => R,
): R
export default function flow<S, R, R1, R2, R3, R4, R5, R6, R7>(
  source: S,
  fn1: (arg: S) => R1,
  fn2: (arg: R1) => R2,
  fn3: (arg: R2) => R3,
  fn4: (arg: R3) => R4,
  fn5: (arg: R4) => R5,
  fn6: (arg: R5) => R6,
  fn7: (arg: R6) => R7,
  fn8: (arg: R7) => R,
): R
export default function flow<S, R, R1, R2, R3, R4, R5, R6, R7, R8>(
  source: S,
  fn1: (arg: S) => R1,
  fn2: (arg: R1) => R2,
  fn3: (arg: R2) => R3,
  fn4: (arg: R3) => R4,
  fn5: (arg: R4) => R5,
  fn6: (arg: R5) => R6,
  fn7: (arg: R6) => R7,
  fn8: (arg: R7) => R8,
  fn9: (arg: R8) => R,
): R
export default function flow<S, R, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  source: S,
  fn1: (arg: S) => R1,
  fn2: (arg: R1) => R2,
  fn3: (arg: R2) => R3,
  fn4: (arg: R3) => R4,
  fn5: (arg: R4) => R5,
  fn6: (arg: R5) => R6,
  fn7: (arg: R6) => R7,
  fn8: (arg: R7) => R8,
  fn9: (arg: R8) => R9,
  fn10: (arg: R9) => R,
): R

export default function flow<S, R>(source: S, ...fns: Array<(arg: any) => any>): R {
  return fns.reduce((prev, fn) => fn(prev), source) as unknown as R
}
