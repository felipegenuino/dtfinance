import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'

export default function Summary() {
    return (
        <Container>
            <section>
                <header>
                    <h3>Entradas</h3>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </section>

            <section>
                <header>
                    <h3>Saídas </h3>
                    <img src={outComeImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </section>

            <section className="hightlight-background">
                <header>
                    <h3>Total</h3>
                    <img src={totalImage} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </section>
        </Container>

    )
}