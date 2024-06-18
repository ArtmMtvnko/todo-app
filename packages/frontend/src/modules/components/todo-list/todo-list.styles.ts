import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const todoListStyles = css`
	margin: 20px;
`;

export const todoListItemStyles = css`
	display: grid;
	grid-template: 1fr 5fr 1fr / 1fr;
	place-items: start;
	margin: 20px 0;
	padding: 0 0 10px 0;
	height: 160px;
	border-bottom: 1px dashed ${colors.black};
`;

export const descriptionStyles = css`
	margin: 0;
	padding: 10px 0;
	height: 90%;
	overflow: hidden;
	text-overflow: ellipsis;

	& > pre {
		white-space: pre-wrap;
		word-wrap: break-word;
	}
`;
