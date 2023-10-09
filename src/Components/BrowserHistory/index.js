import {Component} from 'react'

import './index.css'

import BrowserHistoryItem from '../BrowserHistoryItem/index'

class BrowserHistory extends Component {
  initialHistoryListDetails = this.props

  state = {
    searchinput: '',
    deleteList: this.initialHistoryListDetails.initialHistoryListDetails,
  }

  onchange = event => {
    this.setState({searchinput: event.target.value})
  }

  onDeletef = id => {
    console.log('rama')
    const {deleteList} = this.state
    const deleteUpdatedList = deleteList.filter(eachitem => eachitem.id !== id)
    this.setState({deleteList: deleteUpdatedList})
  }

  render() {
    const {deleteList} = this.state
    console.log(deleteList)

    //  const {initialHistoryListDetails} = deleteList
    const {searchinput} = this.state
    const updatedList = deleteList.filter(eachitem =>
      eachitem.title.toLowerCase().includes(searchinput.toLowerCase()),
    )
    let val
    if (updatedList.length !== 0) {
      val = (
        <div>
          {updatedList.map(eachitem => (
            <BrowserHistoryItem
              details={eachitem}
              key={eachitem.id}
              onDelete={this.onDeletef}
            />
          ))}
        </div>
      )
    } else {
      val = (
        <div>
          <p className="no-his-p">There is no history to show</p>
        </div>
      )
    }

    return (
      <div className="bg-cont">
        <div className="color-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="img-1"
            alt="app logo"
          />
          <div className="input-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="img-2"
              alt="search"
            />
            <input
              type="search"
              className="input"
              placeholder="Search history"
              onChange={this.onchange}
            />
          </div>
        </div>
        <ul className="list-cont">{val}</ul>
      </div>
    )
  }
}

export default BrowserHistory
