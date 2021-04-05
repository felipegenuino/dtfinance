import { useState } from 'react';
import Modal from 'react-modal'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { GlobalStyle } from './styles/globals';

Modal.setAppElement('#root')

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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onAfterOpen={handleOpenNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
        style={customStyles}
        contentLabel="Cadastrar transação"
      >

        <h2>Cadastrar transação</h2>
        <button onClick={handleCloseNewTransactionModal}>close</button>
        <div>I am a modal</div>

      </Modal>
      <GlobalStyle />
    </>
  );
}