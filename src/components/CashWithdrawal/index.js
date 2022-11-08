// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Satish Gandham'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

/* -------------------------------------------------------
import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onClickButtonState = id => {
    if (id === 1) {
      this.setState(prev => ({amount: prev.amount - 50}))
    } else if (id === 2) {
      this.setState(prev => ({amount: prev.amount - 100}))
    } else if (id === 3) {
      this.setState(prev => ({amount: prev.amount - 200}))
    } else if (id === 4) {
      this.setState(prev => ({amount: prev.amount - 500}))
    }
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-white">
        <div className="bg-blue">
          <div className="profile">
            <p className="profile-img">s</p>
            <p className="profile-text">Sarah Williams</p>
          </div>
          <div className="balance-status">
            <p>Your Balance</p>
            <div className="amount">
              <p>{amount}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RuPEES)</p>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                onClickButtonState={this.onClickButtonState}
                denominationItem={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
------------------------------------------------------- */
