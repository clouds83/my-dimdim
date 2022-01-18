import React from 'react'
import { Container } from './summaryStyles'
import depositIcon from '../../assets/deposit-icon.svg'
import withdrawnIcon from '../../assets/withdrawn-icon.svg'
import moneyIcon from '../../assets/money-icon.svg'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {
	const { transactions } = useTransactions()

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'deposit') {
				acc.deposits += transaction.amount
				acc.total += transaction.amount
			} else {
				acc.withdraw += transaction.amount
				acc.total -= transaction.amount
			}
			return acc
		},
		{
			deposits: 0,
			withdraw: 0,
			total: 0
		}
	)

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={depositIcon} alt='Entradas' />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.deposits)}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={withdrawnIcon} alt='Saídas' className='withdrawn-icon' />
				</header>
				<strong>
					-{' '}
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.withdraw)}
				</strong>
			</div>
			<div className='bg-accent'>
				<header>
					<p>Total</p>
					<img src={moneyIcon} alt='Total' />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	)
}
