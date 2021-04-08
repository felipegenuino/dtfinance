
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import CloseImage from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';

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
        transform: 'translate(-50%, -50%)',
        maxWidth: '900px'
    }
};

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    Modal.setAppElement('#root')

    const [type, setType] = useState('deposit')
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={ }
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Cadastrar transação"
        >
            <Container>
                <h2> Cadastrar transação</h2>

                <button onClick={onRequestClose} className="react-modal-close">
                    <img src={CloseImage} alt="Fechar Modal" />
                </button>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="valor" />
                <input placeholder="Category" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        onClick={() => { setType('deposit') }}
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button"
                        isActive={type === 'withdraw'}
                        onClick={() => { setType('withdraw') }}>
                        <img src={OutcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    );
}