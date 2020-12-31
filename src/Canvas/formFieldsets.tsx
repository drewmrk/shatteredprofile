import styles from './styles.module.scss'
import imageTypes from './imageTypes'
import imageSizes from './imageSizes'

const formFieldsets = (
  numberOfSquares: number,
  setNumberOfSquares: Function,
  transparencyOn: Boolean,
  setTransparencyOn: Function,
  imageType: string,
  setImageType: Function,
  imageSize: number,
  setImageSize: Function
) => [
  {
    label: 'Number of squares',
    labelFor: 'numberOfSquares',
    inputMarkup: (
      <>
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
      </>
    )
  },
  {
    label: 'Enable transparency',
    labelFor: 'enableTransparencyCheckbox',
    inputMarkup: (
      <>
        <input
          id="enableTransparencyCheckbox"
          className={styles.formFieldsetInput}
          type="checkbox"
          value={JSON.stringify(transparencyOn)}
          onChange={() => {
            setTransparencyOn(!transparencyOn)
          }}
        />
      </>
    )
  },
  {
    label: 'Image type',
    labelFor: 'imageType',
    inputMarkup: (
      <>
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
      </>
    )
  },
  {
    label: 'Image size',
    labelFor: 'imageSize',
    inputMarkup: (
      <>
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
      </>
    )
  }
]

export default formFieldsets
