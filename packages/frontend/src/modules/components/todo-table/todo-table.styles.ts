import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const tableStyles = css`
	border: 2px solid ${colors.black};
	border-collapse: collapse;
	width: 85%;
	margin: 0 auto;

	& th,
	td {
		text-align: left;
		border-left: 2px solid ${colors.black};
	}
`;

export const tableHeadStyles = css`
	& tr {
		background-color: ${colors.fogGrey};
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
