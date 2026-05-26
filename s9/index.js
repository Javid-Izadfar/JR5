const person = {
    name: 'Jay',
    hello: () => {
        return `Hi, my name is Jay`
    },
    bye: function () {
        console.log(this)
    }
}

console.log(person.name)
console.log(person.hello())
console.log(person.bye())

const person2 = () => {
    let name = 'Jay'
    return {
        hello: () => {
            return `Hi, my name is ${name}`
        }
    }
}

const newPerson = person2()
console.log(newPerson.hello())

// const adder = adderFunction(2)
// const res = adder(3) 
// console.log(res) 5

const adderFunction = (source) => {
    return (second) => {
        return source + second
    }
}
const adder = adderFunction(2)
const res = adder(3) 
console.log(res)
const res2 = adderFunction(4)(5)
console.log(res2)

// TODO LIST CREATOR
// const list = todo()
// list.newTask('learn JS')
// list.newTask('learn React')
// console.log(list.tasks) // ['learn JS', 'learn React]

// const game = Game()
// const playerA = game.player()
// const playerB = game.player()
// playerA.win()
// playerA.lose()
// game.finalWinner