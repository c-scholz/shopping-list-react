import { ChangeEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { ShoppingList } from './types'

type CreateListForm = {
  addList: (list: ShoppingList) => void
}

export const CreateListForm = (props: CreateListForm) => {
  const { addList } = props

  const [listName, setListName] = useState('')

  const onAddList = () => {
    if (listName.length < 3) {
      return
    }

    addList({
      id: uuid(),
      name: listName,
      items: []
    })

    setListName('')
  }

  return (
    <form
      className="form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAddList()
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
          value={listName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            setListName(e.target.value)
          }}
        />
      </div>
      <button type="submit">Add new list</button>
    </form>
  )
}