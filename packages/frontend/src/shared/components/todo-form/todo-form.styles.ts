import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const formStyles = css`
	& > div {
		display: grid;
		grid-template: 1fr / 1fr 4fr;
		margin: 10px 0;
		padding: 5px;
		border-bottom: 1px solid ${colors.jetFighterGrey};
	}

	@media (max-width: 600px) {
		& > div.description {
			grid-template: 20px 1fr / 1fr;
		}
	}

	& textarea {
		max-width: 50vw;
		max-height: 250px;
	}
`;
