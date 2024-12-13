import { ChangeEvent, useState } from 'react'
import { ShoppingItem } from './types'
import { v4 as uuid } from 'uuid'
import './AddItemForm.css'

type AddItemForm = {
  addItem: (item: ShoppingItem) => void
}

export const AddItemForm = (props: AddItemForm) => {
  const { addItem } = props

  const [itemName, setItemName] = useState<string>('')
  const [itemAmount, setItemAmount] = useState<number>(0)

  const onAddItem = () => {
    if (itemName.length < 3) {
      return
    }

    addItem({ id: uuid(), name: itemName, amount: itemAmount, checked: false })

    setItemName('')
    setItemAmount(0)
  }

  return (
    <form
      className="form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAddItem()
      }}
    >
      <div className="form__input">
        <label htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          minLength={3}
          value={itemName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            setItemName(e.target.value)
          }}
        />
      </div>
      <div className="form__input">
        <label htmlFor="amount">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          name="amount"
          min={1}
          value={itemAmount}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            setItemAmount(parseInt(e.target.value))
          }}
        />
      </div>
      <button type="submit">Add item</button>
    </form>
  )
}