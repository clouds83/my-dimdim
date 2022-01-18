import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.form`
	h2 {
		color: var(--darktext);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		border-radius: 0.25rem;

		border: 1px solid #d7d7d7;
		background: #e7e9ee;

		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: var(--basetext);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type='submit'] {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		background: var(--accent);
		color: #fff;
		border-radius: 0.25rem;
		border: 0;
		font-size: 1rem;
		margin-top: 1.5rem;
		font-weight: bold;
		text-transform: uppercase;
		transition: background 0.3s;

		&:hover {
			background: var(--primary);
		}
	}
`
export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
`

interface RadioBoxProps {
	isActive: boolean
	activeColor: 'green' | 'red'
}

const colors = {
	green: '#879e05',
	red: '#ff2e2e'
}

export const RadioBox = styled.button<RadioBoxProps>`
	height: 4rem;
	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;

	background: ${props =>
		props.isActive
			? transparentize(0.9, colors[props.activeColor])
			: 'transparent'};

	display: flex;
	align-items: center;
	justify-content: center;

	transition: border-color 0.3s;

	&:hover {
		border-color: #aaa;
	}

	img {
		width: 1.5rem;
		height: 1.5rem;
	}

	span {
		display: inline-block;
		margin-left: 1rem;
		font-size: 1rem;
		color: var(--darktext);
	}
`
