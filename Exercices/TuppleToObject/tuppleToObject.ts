/* _____________ Solution _____________ */

type TupleToObject<T extends readonly PropertyKey[]> = {
    [Key in T[number]]: Key
}