import randomNumber from './randomNumber'

const generateProfilePicture = (imageSize: number, numberOfSquares: number, transparencyOn: Boolean, setCanvasImg: Function, imageType: string) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.clearRect(0, 0, imageSize, imageSize)
  ctx.fillStyle = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`
  ctx.fillRect(0, 0, imageSize, imageSize)
  for (let i = 0; i < numberOfSquares; i++) {
    ctx.fillStyle = `rgba(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(transparencyOn ? 0.25 : 1, 1)})`
    ctx.fillRect(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400))
  }
  ctx.stroke()
  setCanvasImg(canvas.toDataURL(`image/${imageType}`, 1))
}

export default generateProfilePicture
