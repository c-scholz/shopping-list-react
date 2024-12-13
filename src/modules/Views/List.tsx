import { useNavigate, useParams } from 'react-router-dom'
import { ShoppingListDetails } from '../List/ShoppingListDetails'
import { AppDispatch, RootState } from '../../store/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { updateList } from '../../store/listsSlice'
import { type ShoppingItem } from '../Item/types'
import { useEffect } from 'react'

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const List = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const dispatch = useAppDispatch();
  const shoppingLists = useAppSelector((state) => state.shoppingList.shoppingLists);
  const list = shoppingLists.find(list => list.id === id)

  const handleAddItem = (item: ShoppingItem) => {
    if (list === undefined) {
      return
    }
    const newList = structuredClone(list)
    newList.items.push(item)

    dispatch(updateList(newList))
  }

  const handleRemoveItem = (item: ShoppingItem) => {
    if (list === undefined) {
      return
    }
    const newList = structuredClone(list)
    const removeItemIndex = newList.items.findIndex(listItem => listItem.name === item.name)
    newList.items.splice(removeItemIndex, 1)

    dispatch(updateList(newList))
  }

  const handleUpdateItem = (item: ShoppingItem) => {
    if (list === undefined) {
      return
    }
    const newList = structuredClone(list)
    const checkedItemIndex = newList.items.findIndex(listItem => listItem.name === item.name)
    newList.items[checkedItemIndex] = item

    dispatch(updateList(newList))
  }

  useEffect(() => {
    if (list === undefined) {
      navigate('/not-found')
    }
  }, [list, navigate])

  return (
    list && (
      <ShoppingListDetails
        list={list}
        addItem={handleAddItem}
        removeItem={handleRemoveItem}
        updateItem={handleUpdateItem}
      />
    )
  )
}