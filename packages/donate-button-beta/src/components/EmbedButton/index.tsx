import {css} from '@compiled/react';
import {CSSProps} from '@compiled/react/dist/esm/types';
import constructEveryUrl from 'src/helpers/construct-every-url';
import {EmbedButtonOptions} from 'src/helpers/options-types';

const buttonCss = css`
	display: flex;
	align-items: center;
	width: max-content;
	border: none;
	outline: none;
	font-family: 'Basis Grotesque Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Roboto,
		sans-serif;
	font-weight: 500;
	line-height: 1;
	cursor: pointer;
	text-decoration: none;
	backface-visibility: hidden;
	transition: all 0.4s;

	padding: 0.75rem 1.25rem;
	color: #fff;
	background-color: #00a380;
	border-radius: 100px;
	font-size: 1rem;
`;
const logoCss = css`
	width: 1rem;
	height: 1rem;
	fill: #fff;
	margin-right: 0.5rem;
`;
const verticalCenterTextCss = css`
	transform: translateY(0.08em);
`;

const EmbedButton = ({
	label,
	withLogo = true,
	textColor,
	bgColor,
	borderRadius,
	fontSize,
	padding,
	className,
	onClick,
	...donateOptions
}: EmbedButtonOptions) => {
	const url = constructEveryUrl(donateOptions);
	return (
		<a
			css={buttonCss}
			href={url}
			style={{
				background: bgColor,
				color: textColor,
				borderRadius,
				fontSize,
				padding
			}}
			className={className}
			onClick={
				onClick
					? (event) => {
							event.preventDefault();
							onClick();
					  }
					: undefined
			}
		>
			{withLogo && (
				<svg
					css={logoCss}
					style={{
						color: textColor,
						height: fontSize,
						width: fontSize
					}}
					width="64"
					height="56"
					viewBox="0 0 64 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M48.3746 20.9558C48.3746 9.03877 38.4374 0 25.6754 0C11.4001 0 0 12.0685 0 27.0153C0 43.1235 12.8125 56 30.0639 56C47.3153 56 62.7508 42.3156 63.9614 24.3895H56.0924C54.6295 37.8215 43.2799 48.1226 30.0639 48.1226C17.3523 48.1226 7.91952 38.7809 7.91952 27.0153C7.91952 16.4112 15.7886 7.87737 25.6754 7.87737C33.948 7.87737 40.4551 13.5329 40.4551 20.9558C40.4551 27.1163 36.0161 32.2669 30.1143 32.2669V40.1443C40.556 40.1443 48.3746 31.4085 48.3746 20.9558Z" />
				</svg>
			)}
			<span css={verticalCenterTextCss}>
				{label ? label : `Donate${donateOptions.crypto ? ' Crypto' : ''}`}
			</span>
		</a>
	);
};

export default EmbedButton;
