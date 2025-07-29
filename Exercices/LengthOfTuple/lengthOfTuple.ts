/* _____________ Solution _____________ */

type Length<T extends readonly any[]> = T extends {length: infer Length} ? Length : never