import "./ShoppingListCard.css"
import { Link } from 'react-router-dom'
import { ShoppingList } from './types'

type ShoppingListCard = {
  list: ShoppingList,
  removeList: (list: ShoppingList) => void
}

export const ShoppingListCard = (props: ShoppingListCard) => {
  const { list, removeList } = props

  return (
    <div className="card">
      <div className="card__header">
        <Link
          to={`/list/${list.id}`}
          title={`Go to list: ${list.name}`}
        >
          <h2>{list.name}</h2>
        </Link>
        <button
          className="card__remove-list"
          onClick={() => removeList(list)}
          title={`Remove list: ${list.name}`}
        >
          <i className="pi pi-times item__remove-icon " />
        </button>
      </div>
      {list.items.length < 1 && (
        <div className="card__no-entries">
          No entries yet
        </div>
      )}
      <ul className="card__entries">
        {list.items.slice(0, 3).map((item, idx) => (
          <li key={idx}>
            {item.name} {item.amount}x
          </li>
        ))}
      </ul>
      {list.items.length > 4 && (<div className="card__more-entries">...</div>)}
    </div>
  )
}