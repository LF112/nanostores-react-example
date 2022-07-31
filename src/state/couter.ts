import { atom } from 'nanostores'
//[ package ]

//=> STORE
export const count = atom<number>(0)

//=> FUNCTIONS
export const increment = () => count.set(count.get() + 1)
export const decrement = () => count.set(count.get() - 1)
