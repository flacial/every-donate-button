import cxs from 'cxs';
import {Markdown} from 'src/components/widget/Markdown';
import {useConfigContext} from 'src/components/widget/hooks/use-config-context';
import {useI18n} from 'src/components/widget/hooks/use-i18n';
import {useWidgetContext} from 'src/components/widget/hooks/use-widget-context';
import {COLORS} from 'src/components/widget/theme/colors';
import {smallText} from 'src/components/widget/theme/font-sizes';
import {Spacing} from 'src/components/widget/theme/spacing';

const containerCss = cxs({
	...smallText,
	display: 'flex',
	flexDirection: 'column',
	padding: Spacing.Inset_XL,
	' > *:not(:last-child)': {
		marginBottom: Spacing.S
	},
	color: COLORS.Text,
	' > p': {
		margin: Spacing.Empty,
		padding: Spacing.Empty
	}
});

const lastParagraph = cxs({
	color: COLORS.TextOpaque,
	' > p': {
		display: 'block',
		margin: 0
	}
});

const actionsContainer = cxs({
	color: COLORS.Primary,
	display: 'flex',
	'& > *:not(:last-child)': {
		marginRight: Spacing.XL
	},
	' > p': {
		margin: 0,
		cursor: 'pointer'
	}
});

type NonprofitInfo = {
	classes: string[];
};

export const NonprofitInfo = ({classes}: NonprofitInfo) => {
	const {setRoute} = useWidgetContext();
	const {infoPages} = useConfigContext();
	const {nonprofitDescription, thanksDonation} = useI18n();

	return (
		<div className={[containerCss].concat(classes).join(' ')}>
			<Markdown source={nonprofitDescription} />
			<div className={lastParagraph}>
				<Markdown source={thanksDonation} />
			</div>
			<div className={actionsContainer}>
				{infoPages?.map((page) => (
					<p
						key={page.key}
						onClick={() => {
							setRoute(page.key);
						}}
					>
						{page.name}
					</p>
				))}
			</div>
		</div>
	);
};
