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


type Covariant<T> = Required<T>

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