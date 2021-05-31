// const square = function (x) {
//     return x*x
// }

// console.log(square(9))

// const square = x => x*x

// console.log(square(3))

const event = {
    name: 'B-day party',
    guestList: ['Paul', 'Erik', 'Anne'],
    printGuestList() {
        console.log('Ghest list for ' + this.name)

        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()