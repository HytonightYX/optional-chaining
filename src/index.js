const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  },
  dog: {
    name: 'WOW'
  }
}

const dogName = adventurer.dog?.name
console.log(dogName)