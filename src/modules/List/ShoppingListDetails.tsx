import { AddItemForm } from '../Item/AddItemForm'
import { ShoppingItem } from '../Item/types'
import { ShoppingList } from './types'
import './ShoppingListDetails.css'

type ShoppingListDetails = {
  list: ShoppingList,
  addItem: (item: ShoppingItem) => void,
  removeItem: (list: ShoppingItem) => void,
  updateItem: (item: ShoppingItem) => void
}

export const ShoppingListDetails = (props: ShoppingListDetails) => {
  const { list, addItem, removeItem, updateItem } = props

  return (
    <div className="list">
      <h1>{list.name}</h1>
      <div className="list__form">
        <AddItemForm addItem={addItem} />
      </div>
      <div className="list__entries">
        {list.items.length < 1 && (
          <div className="list__no-entries">
            No entries yet
          </div>
        )}
        {list.items.map(item => (
          <div className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => updateItem({ ...item, checked: !item.checked })}
              title={`Toggle item: ${item.name}`}
            />
            <div className={`item__data${item.checked ? ' item__data--checked' : ''}`}>
              <span>{item.name}</span><span>x{item.amount}</span>
            </div>
            <button
              className="item__remove"
              onClick={() => removeItem(item)}
              title={`Remove item: ${item.name}`}
            >
              <i className="pi pi-times item__remove-icon " />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}