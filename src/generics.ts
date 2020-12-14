const id = <T>(x: T): T => x

const firstId = id(2)
const secondId = id(100)

console.log(firstId)
console.log(secondId)
console.log(secondId * firstId)

type Ref<T> = {
    current: T
}

const ref1: Ref<string> = {
    current: 'qwerty'
}

function getValue<T>(ref: Ref<T>): T {
    return ref.current
}

console.log(getValue(ref1))

class Queue<T> {
    private array: Array<T> = []

    push(element: T) {
        this.array.push(element)
    }

    pop(): T|undefined {
        return this.array.pop()
    }

    getElements() {
        return this.array
    }
}

const queue = new Queue<Ref<string>>()
queue.push({
    current: 'updated-generic'
})
queue.push(ref1)
const lastElement = queue.pop()
console.log(lastElement)

function getLength<T>(arg: Array<T>) {
    return arg.length
}

console.log('Elements: ', getLength(queue.getElements()))

type ObjWithName = { name: string}

function printName<T extends ObjWithName>(item: T) {
    console.log(item.name)
}
// function printName(item: ObjWithName) {
//     console.log(item.name)
// }

printName({name: 'Week 50'})
printName({name: 'Week 51', day: 5})
// printName({day: 5})


function makePair<T, U, Q>(arg1: T, arg2: U, arg3: Q): [T, U, Q] {
    return [arg1, arg2, arg3]
}

console.log(makePair<string, number, boolean>('dark-mode', 24, true))

function defaults<T extends object, U extends T>(
    obj1: T,
    obj2: U
) {
    return {
        ...obj1,
        ...obj2,
    }
}

defaults({}, 2)
defaults({}, {})
defaults({hour: 2}, {hour: 4, time:5})