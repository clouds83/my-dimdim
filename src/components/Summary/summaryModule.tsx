import React, { useContext } from 'react'
import { Container } from './summaryStyles'
import depositIcon from '../../assets/deposit-icon.svg'
import withdrawnIcon from '../../assets/withdrawn-icon.svg'
import moneyIcon from '../../assets/money-icon.svg'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
	const { transactions } = useContext(TransactionsContext)

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={depositIcon} alt='Entradas' />
				</header>
				<strong>R$ 10.000,00</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={withdrawnIcon} alt='Saídas' className='withdrawn-icon' />
				</header>
				<strong>- R$ 5.000,00</strong>
			</div>
			<div className='bg-accent'>
				<header>
					<p>Total</p>
					<img src={moneyIcon} alt='Total' />
				</header>
				<strong>R$ 5.000,00</strong>
			</div>
		</Container>
	)
}
