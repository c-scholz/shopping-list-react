import "./ShoppingListCard.css"
import { Link } from 'react-router-dom'
import { ShoppingList } from './types'

export const ShoppingListCard = ({ id, name, items }: ShoppingList) => {
  return (
    <div className="card">
      <Link to={`/list/${id}`}><h2>{name}</h2></Link>
      {items.length < 1 && (
        <div className="card__no-entries">
          No entries yet
        </div>
      )}
      <ul className="card__entries">
        {items.slice(0, 3).map((item, idx) => (
          <li key={idx}>
            {item.name} {item.amount}x
          </li>
        ))}
      </ul>
      {items.length > 4 && (<div className="card__more-entries">...</div>)}
    </div>
  )
}