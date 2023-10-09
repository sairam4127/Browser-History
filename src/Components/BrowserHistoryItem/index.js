import './index.css'

const BrowserHistoryItem = prop => {
  const {details, onDelete} = prop
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const ondelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p>{timeAccessed}</p>
      <img src={logoUrl} className="logo" alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" data-testid="delete" onClick={ondelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-logo"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItem
