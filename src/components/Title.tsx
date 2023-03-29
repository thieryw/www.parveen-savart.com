import { Text, makeStyles, breakpointsValues } from "../theme"
export type TitleProps = {
	title: string;
	subtitle: string;
	className?: string
	classes?: Partial<ReturnType<typeof useStyles>["classes"]>

}

export function Title(props: TitleProps) {

	const { subtitle, title, className } = props;

	const { classes, cx } = useStyles({},{props});


	return <div className={cx(classes.root, className)}>
		<Text className={classes.title} typo="my title">{title}</Text>
		<Text className={classes.subtitle} typo="subtitle">{subtitle}</Text>
	</div>

}

const useStyles = makeStyles<{}>()(
	theme => ({
		"root": {
			"zIndex": 2

		},
		"title": {
			"color": theme.colors.palette.light.main,
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"fontSize": "1.4rem",
			} : {}),

		},
		"subtitle": {
			"fontSize": "1.4rem",
			"fontWeight": 300,
			"letterSpacing": theme.spacing(2),
			"marginLeft": theme.spacing(2),
			"marginTop": theme.spacing(2),
			"color": theme.colors.palette.light.greyVariant4,
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"fontSize": "1rem"

			} : {})

		}

	}))