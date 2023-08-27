import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteData} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = itemDetails

  const onDelete = () => {
    deleteData(id)
  }
  return (
    <div className="main-container">
      <li className="list">
        <div className="list-container">
          <div className="content">
            <div className="logo">
              <img src={logoUrl} className="icon" alt="domain logo" />
            </div>
            <p>{timeAccessed}</p>
            <p>{title}</p>
            <p>{domainUrl}</p>
            {title.value ? {title} : <p>There is no history to show</p>}
          </div>

          <div className="delete-icon">
            <button type="button" data-testid="delete" onClick={onDelete}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                className="delete-logo"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default HistoryItem
