import React from 'react'
import { Summary } from '../Summary/summaryModule'
import { TransactionsList } from '../TransactionsList/transactionsModule'
import { Container } from './dashboardStyles'

export function Dashboard() {
	return (
		<Container>
			<Summary />
			<TransactionsList />
		</Container>
	)
}
