const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  },
  dog: {
    name: 'WOW',
    fn: function () {
      console.log("I'm a dog!")
    }
  },
}

const dogName = adventurer.dog?.name
const catName = adventurer.cat?.['name']
console.log(dogName)
console.log(catName)
adventurer.dog?.fn?.()

let array = [0, '1']
console.log(array?.[0], array?.[1], array?.[2])