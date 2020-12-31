import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import styled from 'styled-components'
import imageSizes from './imageSizes'
import imageTypes from './imageTypes'
import generateProfilePicture from './generateProfilePicture'

const CanvasImgStyles = styled.img<{ dimensions: string }>`
  @media (max-width: 799px) {
    max-width: 300px;
    --dimensions: ${props => props.dimensions};
  }
  @media (min-width: 800px) {
    --dimensions: ${props => props.dimensions};
  }
  width: var(--dimensions);
  height: var(--dimensions);
`

const Canvas = () => {
  const [numberOfSquares, setNumberOfSquares] = useState(20)
  const [canvasImg, setCanvasImg] = useState('')
  const [transparencyOn, setTransparencyOn] = useState(false)
  const [imageType, setImageType] = useState('PNG')
  const [imageSize, setImageSize] = useState(400)

  useEffect(() => {
    generateProfilePicture(imageSize, numberOfSquares, transparencyOn, setCanvasImg, imageType)
  }, []) // eslint-disable-line

  return (
    <div className={styles.wrapper}>
      <canvas width={imageSize} height={imageSize} id="canvas" className={styles.canvas} />
      <CanvasImgStyles dimensions={JSON.stringify(imageSize)} src={canvasImg} className={styles.canvasImg} alt="Shattered Profile" />
      <form className={styles.form}>
        <fieldset className={styles.formFieldset}>
          <label className={styles.formFieldsetLabel} htmlFor="numberOfSquaresSlider">
            Number of squares
          </label>
          <input
            id="numberOfSquaresSlider"
            className={styles.formFieldsetInput}
            type="range"
            min="0"
            max="100"
            step="10"
            value={numberOfSquares}
            onChange={e => {
              setNumberOfSquares(JSON.parse(e.target.value))
            }}
          />
        </fieldset>
        <fieldset className={styles.formFieldset}>
          <label className={styles.formFieldsetLabel} htmlFor="enableTransparencyCheckbox">
            Enable transparency
          </label>
          <input
            id="enableTransparencyCheckbox"
            className={styles.formFieldsetInput}
            type="checkbox"
            value={JSON.stringify(transparencyOn)}
            onChange={() => {
              setTransparencyOn(!transparencyOn)
            }}
          />
        </fieldset>
        <fieldset className={styles.formFieldset}>
          <label className={styles.formFieldsetLabel} htmlFor="imageType">
            Image type
          </label>
          <select
            value={imageType}
            onChange={e => {
              setImageType(e.target.value)
            }}
            className={styles.formFieldsetSelect}
            id="imageType"
          >
            {imageTypes.map(item => (
              <option className={styles.formFieldsetSelectOption} value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset className={styles.formFieldset}>
          <label className={styles.formFieldsetLabel} htmlFor="imageSize">
            Image size
          </label>
          <select
            value={imageSize}
            onChange={e => {
              setImageSize(JSON.parse(e.target.value))
            }}
            className={styles.formFieldsetSelect}
            id="imageSize"
          >
            {imageSizes.map(item => (
              <option className={styles.formFieldsetSelectOption} value={item} key={item}>
                {item}x{item}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset className={styles.formFieldset}>
          <button
            onClick={e => {
              e.preventDefault()
              generateProfilePicture(imageSize, numberOfSquares, transparencyOn, setCanvasImg, imageType)
            }}
            className={styles.formFieldsetButton}
          >
            Generate
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Canvas
