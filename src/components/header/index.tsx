import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

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


export default function Header() {
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
        <Container>
            <Content>
                <img src={logoImg} alt="DTMONEY" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>

            <Modal
                isOpen={isNewTransactionModalOpen}
                onAfterOpen={handleOpenNewTransactionModal}
                onRequestClose={handleCloseNewTransactionModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>Hello</h2>
                <button onClick={handleCloseNewTransactionModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </Container>
    )
}

