import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const formStyles = css`
	& > div {
		margin: 10px 0;
		padding: 5px;
		border-bottom: 1px solid ${colors.jetFighterGrey};
		display: grid;
		grid-template-columns: 1fr 4fr;
	}

	& textarea {
		max-width: 900px;
		max-height: 250px;
	}
`;
