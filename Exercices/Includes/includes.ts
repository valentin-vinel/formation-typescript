/* _____________ Solution _____________ */

type IsEqual<T,U> = T extends U ? (U extends T ? true : false) : false
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? IsEqual<U, First> extends true ? true : Includes<Rest, U> : false;