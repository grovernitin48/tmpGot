// FACTORY DESIGN PATTERN
function Developer(name) {
    this.name = name
    this.type = "Developer"
}

function Tester(name) {
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
        }
    }
}

function say() {
    console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John", 2))
employees.push(employeeFactory.create("Jamie", 1))
employees.push(employeeFactory.create("Taylor", 1))
employees.push(employeeFactory.create("Tim", 2))

employees.forEach(emp => {
    say.call(emp)
})

// ITERATOR PATTERN
const items = [1, false, "Devsage", 3.14]

function Iterator(items) {
    this.items = items
    this.index = 0
}

Iterator.prototype = {
    hasNext: function () {
        return this.index < this.items.length
    },
    next: function () {
        return this.items[this.index++]
    }
}

const iter = new Iterator(items)

console.log(iter.hasNext())

while (iter.hasNext())
    console.log(iter.next())

console.log(iter.hasNext())

// OBSERVER PATTERN

function Subject() {
    this.observers = [] // array of observer functions
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn)
    },
    unsubscribe: function (fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn != fnToRemove)
                return fn
        })
    },
    fire: function () {
        this.observers.forEach(fn => {
            fn.call()
        })
    }
}

const subject = new Subject()

function Observer1() {
    console.log("Observer 1 Firing!")
}

function Observer2() {
    console.log("Observer 2 Firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.fire()

subject.unsubscribe(Observer1)
subject.fire()

// SINGLETON PATTERN

const Singleton = (function () {
    let pManager

    function ProcessManager() { /*...*/ }

    function createProcessManager() {
        pManager = new ProcessManager()
        return pManager
    }

    return {
        getProcessManager: () => {
            if (!pManager)
                pManager = createProcessManager()
            return pManager
        }
    }
})()

const singleton = Singleton.getProcessManager()
const singleton2 = Singleton.getProcessManager()

console.log(singleton === singleton2) // true