import type { Link } from "../tools/link";
import { makeStyles, Text, breakpointsValues } from "../theme";
import { Button } from "../components/Button";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HourIcon from '@mui/icons-material/QueryBuilder';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export type ConcertSectionProps = {
	className?: string;
	classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
	date: string;
	hour: string;
	address: string;
	description: string;
	link?: Link & {
		buttonlabel: string;
	}
}

export function ConcertSection(props: ConcertSectionProps) {

	const {
		address,
		date,
		description,
		hour,
		className,
		link
	} = props;

	const { cx, classes } = useStyles({}, { props });

	return <div className={cx(classes.root, className)}>
		<div className={classes.practicalDetails}>
			<div className={cx(classes.detail, classes.date)}>
				<CalendarTodayIcon className={classes.icon} />
				<Text className={classes.detailText} typo="body 1">{date}</Text>
			</div>
			<div className={cx(classes.detail, classes.hour)}>
				<HourIcon className={classes.icon} />
				<Text className={classes.detailText} typo="body 1">{hour}</Text>
			</div>
			<div className={cx(classes.detail, classes.address)}>
				<LocationOnIcon className={classes.icon} />
				<Text className={classes.detailText} typo="body 1">{address}</Text>
			</div>
		</div>

		<Text className={classes.description} typo="body 1">{description}</Text>

		{
			link !== undefined &&
			<Button
				className={classes.button}
				text={link.buttonlabel}
				link={link}
			/>

		}

	</div>

}

const useStyles = makeStyles<{}>()(theme => {
	return ({
		"root": {
			"display": "flex",
			"alignItems": theme.windowInnerWidth < breakpointsValues.md ? "flex-start" : "center",
			"justifyContent": "center",
			"maxWidth": 1400,
			"flexDirection": theme.windowInnerWidth < breakpointsValues.md ? "column" : undefined
		},
		"practicalDetails": {
			"display": theme.windowInnerWidth < breakpointsValues.md ? "flex" : undefined,
			"flexDirection": theme.windowInnerWidth < breakpointsValues.sm ? "column" : undefined
		},
		"detail": {
			"display": "flex",
			...theme.spacing.topBottom("margin", `${theme.spacing(3)}px`),
			"alignItems": "center"

		},
		"detailText": {
			"maxWidth": 250
		},
		"icon": {
			"marginRight": theme.spacing(4)
		},
		"date": {},
		"hour": {
			...theme.spacing.rightLeft("margin", `${(()=>{
				if(theme.windowInnerWidth < breakpointsValues.md && theme.windowInnerWidth >= breakpointsValues.sm){
					return theme.spacing(7);
				}

				return undefined;
			})()}px`)
		},
		"address": {},
		"description": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				...theme.spacing.topBottom("margin", `${theme.spacing(7)}px`),
				"marginLeft": theme.spacing(3)
			} : {
				...theme.spacing.rightLeft("margin", `${theme.spacing(8)}px`),
			}),
			"maxWidth": theme.windowInnerWidth < breakpointsValues.lg ? 300 : 400,


		},
		"button": {
			"minWidth": 250
		}
	})
})