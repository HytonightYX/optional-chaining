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
console.log(dogName)

adventurer.dog?.fn?.()