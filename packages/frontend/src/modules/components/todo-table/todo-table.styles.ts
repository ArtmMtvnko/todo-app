import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const tableStyles = css`
	border: 2px solid ${colors.black};
	border-collapse: collapse;
	margin: 0 auto;
	width: 100%;

	& th,
	td {
		text-align: left;
		border-left: 2px solid ${colors.black};
	}
`;

export const tableHeadStyles = css`
	& tr {
		background-color: ${colors.fogGrey};

		& .actions {
			text-align: center;
		}
	}
`;

export const tableBodyStyles = css`
	& td {
		padding: 10px;

		& > span {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}

	& tr:nth-child(2n) {
		background-color: ${colors.bowAndArrowSilver};
	}
`;

export const tableRowStyles = css`
	& > td:nth-child(1) {
		width: 15%;
	}

	& > td:nth-child(2) {
		width: 60%;
	}

	& > td:nth-child(3) {
		width: 25%;
	}

	& td > span {
		display: block;
	}

	& td:nth-child(1) > span {
		width: 150px;
	}

	& td:nth-child(2) > span {
		width: 50vw;
	}
`;
