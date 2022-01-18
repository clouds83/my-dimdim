import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.header`
	background: var(--primary);
`
export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	padding: 2rem 1rem 10rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		font-size: 1rem;
		color: white;
		background: ${darken(0.1, '#4b74d2')};
		border: 0;
		padding: 0 2rem;
		border-radius: 0.25rem;
		height: 3rem;
		text-transform: uppercase;
		font-weight: bold;

		transition: background 0.2s;

		&:hover {
			background: ${darken(0.2, '#4b74d2')};
		}
	}
`
