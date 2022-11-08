// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

/* -------------------------------------
import './index.css'

const DenominationItem = props => {
  const {denominationItem, onClickButtonState} = props
  const onClickButton = () => {
    onClickButtonState(denominationItem.id)
  }
  return (
    <li>
      <button type="button" onClick={onClickButton}>
        <p>{denominationItem.value}</p>
      </button>
    </li>
  )
}

export default DenominationItem

-------------------------------------- */
