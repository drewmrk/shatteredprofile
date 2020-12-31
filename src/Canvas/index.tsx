import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import styled from 'styled-components'
import generateProfilePicture from './generateProfilePicture'
import formFieldsets from './formFieldsets'

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
        {formFieldsets(numberOfSquares, setNumberOfSquares, transparencyOn, setTransparencyOn, imageType, setImageType, imageSize, setImageSize).map(
          item => (
            <fieldset className={styles.formFieldset} key={item.labelFor}>
              <label className={styles.formFieldsetLabel} htmlFor={item.labelFor}>
                {item.label}
              </label>
              {item.inputMarkup}
            </fieldset>
          )
        )}
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
