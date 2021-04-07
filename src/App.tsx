import React, { useState } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { GlobalStyle } from './styles/globals';
import { NewTransactionModal } from './components/NewTransactionModal'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  // function afterOpenModal() {
  //     console.log('fechou modal')
  // }



  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}