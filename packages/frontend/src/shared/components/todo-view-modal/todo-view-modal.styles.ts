import { css } from '@emotion/css';

export const descriptionStyles = css`
	white-space: pre-wrap;
	word-wrap: break-word;

	@media (max-width: 600px) {
		word-break: break-all;
	}
`;
