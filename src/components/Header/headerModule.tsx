import React from 'react'
import { Container, Content } from './headerStyles'

interface HeaderProps {
	onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
	return (
		<Container>
			<Content>
				<span className='logo'>
					My<span>Dimdim</span>
				</span>
				<button type='button' onClick={onOpenNewTransactionModal}>
					Nova transação
				</button>
			</Content>
		</Container>
	)
}
