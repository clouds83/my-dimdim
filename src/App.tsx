import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard/dashboardModule'
import { Header } from './components/Header/headerModule'
import { NewTransactionalModal } from './components/NewTransactionalModal/newTransactionalModalModule'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionalModalOpen] =
		useState(false)

	function handleOpenNewTransactionModal() {
		setIsNewTransactionalModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionalModalOpen(false)
	}

	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<NewTransactionalModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
		</TransactionsProvider>
	)
}
