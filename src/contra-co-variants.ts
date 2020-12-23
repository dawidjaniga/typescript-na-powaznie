type Character = {
    name: string
}

type User = {
    name: string
    age: number
}


type Admin = {
    name: string
    age: number
    role: string
}

type processUser = (u: User) => User


type Covariant<T> = () => T
type Contravariant<T> = (x: T) => void


let x1: Covariant<Admin> = {
    name: "John",
    age: 20,
    role: 'owner'
}

let y1: Covariant<User> = {
    name: "Dennis",
    age: 21
}

let z1: Covariant<Character> = {
    name: 'Carrol'
}

y1 = x1 // ok
y1 = z1 // error

let x2: Contravariant<Admin> = {
    name: "John",
    age: 20,
    role: 'owner'
}

let y2: Contravariant<User> = {
    name: "Dennis",
    age: 21
}

let z2: Contravariant<Character> = {
    name: 'Carrol'
}

y2 = x2 // error
y2 = z2 // ok



type Bivariant<T> = {
    bivariantHack(x: T): void
}["bivariantHack"]
type Invariant<T> = (x: T) => T



let x3: Bivariant<Admin> = {
    name: "John",
    age: 20,
    role: 'owner'
}

let y3: Bivariant<User> = {
    name: "Dennis",
    age: 21
}

let z3: Bivariant<Character> = {
    name: 'Carrol'
}

y3 = x3 // ok
y3 = z3 // ok


let x4: Invariant<Admin> = {
    name: "John",
    age: 20,
    role: 'owner'
}

let y4: Invariant<User> = {
    name: "Dennis",
    age: 21
}

let z4: Invariant<Character> = {
    name: 'Carrol'
}

y4 = x4 // error
y4 = z4 // error






