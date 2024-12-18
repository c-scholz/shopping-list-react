import './Dashboard.css'
import { CreateListForm } from '../List/CreateListForm'
import { ShoppingListCard } from '../List/ShoppingListCard'
import { addList, deleteList } from '../../store/listsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { ShoppingList } from '../List/types'

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const shoppingLists = useAppSelector((state) => state.shoppingList.shoppingLists);

  const handleAddList = (list: ShoppingList) => {
    dispatch(addList(list))
  }

  const handleRemoveList = (list: ShoppingList) => {
    dispatch(deleteList({ id: list.id }))
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__form">
        <CreateListForm addList={handleAddList} />
      </div>
      <div className="dashboard__lists">
        {shoppingLists.map((list) => (
          <ShoppingListCard list={list} removeList={handleRemoveList} key={list.id} />
        ))}
      </div>
    </div>
  )
}