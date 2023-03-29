import { Link } from "../tools/link";
import { makeStyles } from "../theme";

export type ButtonProps = {
	link?: Link;
	text: string;
	className?: string
}

export function Button(props: ButtonProps) {

	const { text, link, className } = props;
	const {classes, cx} = useStyles();



	return <button {...link} className={cx(classes.root, className)}>
		{text}
	</button>
}

const useStyles = makeStyles()(theme => ({
	"root": {
		"backgroundColor": theme.colors.palette.buttonColor,
		"border": `solid ${theme.colors.useCases.surfaces.background} 2px`,
		"padding": theme.spacing({
			"rightLeft": `${theme.spacing(6)}px`,
			"topBottom": `${theme.spacing(3)}px`
		}),
		"color": theme.colors.useCases.surfaces.background,
		"letterSpacing": "0.3rem",
		"transition": "background-color 300ms, border-color 300ms, color 300ms",
		":hover": {
			"borderColor": theme.colors.palette.buttonColor,
			"backgroundColor": theme.colors.useCases.surfaces.background,
			"color": theme.colors.palette.buttonColor,
			"cursor": "pointer"
		}
	},
}))