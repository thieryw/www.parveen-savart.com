import type { ReactNode } from "react";
import { makeStyles, Text } from "../theme";

export type SectionTitleProps = {
	title: ReactNode;
	miniTitle?: ReactNode;
	className?: string;
	classes?: Partial<ReturnType<typeof useStyles>["classes"]>
	mode: "paragraphTitle" | "SectionTitle"
	dark: boolean;
}

export function SectionTitle(props: SectionTitleProps) {

	const { miniTitle, title, className, mode, dark } = props;

	const {classes, cx} = useStyles({mode, dark}, { props });

	return <div className={cx(classes.root,className)}>
		{
				miniTitle !== undefined &&
				(()=>{
					if(typeof miniTitle !== "string"){
						return miniTitle;

					}

					return <div className={classes.miniTitleWrapper}>
					<div className={classes.decorativeLine}></div>
					<Text className={classes.miniTitle} typo="section heading">
						{miniTitle}
					</Text>


				</div>

				})()
			}

			{
				title !== undefined &&
				<div className={classes.titleWrapper}>
					{
						(() => {
							if (typeof title === "string") {
								return <Text className={classes.title} typo="my section title">{title}</Text>
							}
							return title
						})()

					}

				</div>
			}

	</div>

}


const useStyles = makeStyles<{mode: SectionTitleProps["mode"]; dark: SectionTitleProps["dark"]}>()((theme, {mode, dark}) => ({

	"root": {
		...(mode === "paragraphTitle" ? {} : {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center"
		})
	},
	"decorativeLine": {
		"width": theme.spacing(4),
		"height": "1px",
		"border": `solid 1px ${!dark ? theme.colors.palette.buttonColor : theme.colors.palette.light.greyVariant2}`,
		"marginRight": mode === "SectionTitle" ? undefined : theme.spacing(4),
	},
	"miniTitleWrapper": {
		"display": "flex",
		"alignItems": "center",
		"justifyContent": mode === "paragraphTitle" ? undefined : "center",
		"marginBottom": theme.spacing(4),
		"flexDirection": mode === "paragraphTitle" ? undefined : "column-reverse"
	},
	"miniTitle": {
		"color": !dark ? theme.colors.palette.buttonColor : theme.colors.palette.light.greyVariant2,
		"fontWeight": "400",
		"fontSize": "1rem",
		"letterSpacing": "0.3rem",
		"marginBottom": mode === "paragraphTitle" ? undefined : theme.spacing(4)
	},
	"titleWrapper": {
		"textAlign": mode === "paragraphTitle" ? undefined : "center"

	},
	"title": {
		"color": !dark ? undefined : theme.colors.palette.light.greyVariant2

	}

}))