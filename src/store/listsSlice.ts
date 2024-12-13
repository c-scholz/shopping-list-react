import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type ShoppingList as ShoppingListState } from '../modules/List/types'

type initialStateType = {
  shoppingLists: ShoppingListState[]
}

const shoppingLists: ShoppingListState[] = JSON.parse(localStorage.getItem('lists') as string) ?? []

const initialState: initialStateType = {
  shoppingLists
}

export const listSlice = createSlice({
  name: 'shoppingLists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<ShoppingListState>) => {
      state.shoppingLists?.push(action.payload)
      localStorage.setItem('lists', JSON.stringify(state.shoppingLists))
    },
    updateList: (state, action: PayloadAction<ShoppingListState>) => {
      const {
        payload: { id, name, items }
      } = action

      state.shoppingLists = state.shoppingLists.map(list =>
        list.id === id ? { ...list, items, name } : list
      )
      localStorage.setItem('lists', JSON.stringify(state.shoppingLists))
    },
    deleteList: (state, action: PayloadAction<{ id: string }>) => {
      const newLists = state.shoppingLists.filter(list => list.id !== action.payload.id)
      localStorage.setItem('lists', JSON.stringify(newLists))
      state.shoppingLists = newLists
    }
  }
})

export const { addList, updateList, deleteList } = listSlice.actions;
export const selectShoppingLists = (state: RootState) => state.shoppingList.shoppingLists;
export default listSlice.reducer;