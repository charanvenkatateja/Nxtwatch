import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: '',
  activeTabItem: () => {},
  addToSaveVideos: () => {},
  removeSaveVideos: () => {},
  onChangeTheme: () => {},
})

export default CartContext