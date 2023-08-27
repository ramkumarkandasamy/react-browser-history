import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class HistorySearch extends Component {
  state = {searchInput: '', userList: this.props}

  deleteData = id => {
    const {userList} = this.state
    const res = userList.initialHistoryList
    const filteredList = res.filter(each => each.id !== id)

    const len = filteredList.length
    if (len === 0) {
      return <p>There is no history to show</p>
    }
    return this.setState({userList: filteredList.initialHistoryList})
  }

  isClicked = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, userList} = this.state
    const ans = userList.initialHistoryList
    const searchResults = ans.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div>
          <nav className="nav-bar">
            <div className="history-logo">
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
                placeholder="Search History"
              />
            </div>
            <div>
              <div className="search-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search"
                />
              </div>
              <input
                type="search"
                onChange={this.isClicked}
                value={searchInput}
              />
            </div>
          </nav>
          <ul>
            {searchResults.map(eachItem => (
              <HistoryItem
                key={eachItem.id}
                itemDetails={eachItem}
                deleteData={this.deleteData}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistorySearch
