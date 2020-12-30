const randomNumber = (min: number, max: number) => {
  return ~~(Math.random() * max) + min
}

export default randomNumber
