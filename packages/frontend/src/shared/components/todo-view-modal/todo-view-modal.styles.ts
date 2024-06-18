import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const modalInfoStyles = css`
	& > *:not(.close-btn) {
		margin: 15px 0;
		padding: 0 0 15px 0;
		border-bottom: 1px dashed ${colors.black};
	}
`;

export const descriptionStyles = css`
	white-space: pre-wrap;
	word-wrap: break-word;

	@media (max-width: 600px) {
		word-break: break-all;
	}
`;

export const switcherStyles = css`
	display: inline-block;
	margin: 0 0 0 15px;
`;
