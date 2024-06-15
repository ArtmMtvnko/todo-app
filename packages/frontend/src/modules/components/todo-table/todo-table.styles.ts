import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const tableStyles = css`
	border: 1px solid ${colors.americanPurple};
	border-collapse: collapse;
	width: 100%;

	& th {
		text-align: left;
	}
`;

export const tableBodyStyles = css`
	& td {
		padding: 10px;
	}

	& tr:nth-child(2n) {
		background-color: ${colors.bowAndArrowSilver};
	}
`;
