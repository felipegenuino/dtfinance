
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

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

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    Modal.setAppElement('#root')
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={ }
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Cadastrar transação"
        >

            <h2>Cadastrar transação</h2>
            <button onClick={onRequestClose}>close</button>
            <div>I am a modal</div>

        </Modal>
    );
}