import type { ReactNode } from "react"
import { Link } from "../tools/link";
import { Source } from "../tools/source";
import { makeStyles, Text, breakpointsValues } from "../theme";
import { Button } from "./Button";
import { SectionTitle } from "./SectionTitle";

export type SectionProps = {
	miniTitle?: string;
	title?: ReactNode;
	text?: string;
	buttonLink?: Link;
	buttonText?: string;
	imgSrc?: string;
	imgSources?: Source[];
	imgAlt?: string;
	imageSide?: "left" | "right";
	className?: string;
	classes?: Partial<ReturnType<typeof useStyles>["classes"]>
};

export function Section(props: SectionProps) {
	const {
		buttonLink,
		buttonText,
		miniTitle,
		text,
		title,
		imageSide,
		imgSources,
		imgSrc,
		className,
		imgAlt
	} = props;

	const { classes, cx } = useStyles({
		"imageSide": imageSide ?? "left"
	}, { props });

	return <section className={cx(classes.root, className)}>
		<div className={classes.imageWrapper}>
			<picture>
				{imgSources !== undefined &&
					imgSources.map((source, index) => <source key={index} {...source} />)}
				<img
					src={imgSrc}
					alt={imgAlt}
					className={classes.image}
				/>
			</picture>

		</div>

		<aside className={classes.aside}>
			<SectionTitle 
				title={title}
				miniTitle={miniTitle}
				mode="paragraphTitle"
				className={classes.title}
				dark={false}
			/>

			{
				text !== undefined &&
				<div className={classes.textWrapper}>
					<Text className={classes.text} typo="body 1">{text}</Text>

				</div>
			}
			{
				buttonText !== undefined &&
				<Button
					text={buttonText}
					link={buttonLink}
					className={classes.button}
				/>
			}
		</aside>


	</section>

}


const useStyles = makeStyles<{ imageSide: SectionProps["imageSide"] }>()((theme, { imageSide }) => {
	const gap = theme.spacing(7);
	const buttonAndTextMargin = theme.windowInnerWidth < breakpointsValues.md ? undefined : theme.spacing(6);


	return {
		"root": {
			"display": "flex",
			"flexDirection": (() => {

				if (theme.windowInnerWidth < breakpointsValues.md) {
					return "column-reverse";

				}

				if (imageSide === undefined || imageSide === "left") {
					return undefined;
				}

				return "row-reverse"

			})(),
			"alignItems": theme.windowInnerWidth < breakpointsValues.md ? undefined : "center",
			"justifyContent": "center",
			"padding": theme.spacing({
				"rightLeft": theme.windowInnerWidth < breakpointsValues.sm ? `${theme.spacing(4)}px` : `${theme.spacing(7)}px`,
				"topBottom": `${theme.spacing(7)}px`

			}),

		},
		"title": {
			"marginBottom": theme.spacing(6)
		},
		"imageWrapper": {
			"maxWidth": 450,
			"alignSelf": theme.windowInnerWidth < breakpointsValues.md ? "flex-end" : undefined,
			"position": "relative",
			...(() => {
				if (theme.windowInnerWidth < breakpointsValues.md) {
					return undefined;
				}
				if (imageSide === "left" || imageSide === undefined) {
					return {
						"marginRight": gap
					}
				}

				return {
					"marginLeft": gap
				}
			})()


		},
		"image": {
			"width": "100%",
			"height": "auto",
			"boxShadow": theme.shadows[3],
		},
		"aside": {
			"maxWidth": "600px",
			"minWidth": theme.windowInnerWidth < breakpointsValues.md ? undefined : "320px",
			"marginBottom": theme.windowInnerWidth < breakpointsValues.md ? theme.spacing(7) : undefined,
			...(() => {
				if (theme.windowInnerWidth < breakpointsValues.md) {
					return undefined;
				}

				if (imageSide === "left") {
					return {
						"marginLeft": gap
					}
				}
				return {
					"marginRight": gap
				}
			})(),
			"alignSelf": theme.windowInnerWidth < breakpointsValues.md ? "flex-start" : undefined
		},
		"text": {
			"fontWeight": "300",
			"lineHeight": "2rem",
			"marginLeft": buttonAndTextMargin

		},
		"button": {
			"marginLeft": buttonAndTextMargin

		},
		"textWrapper": {
			"maxWidth": "400px",
			"marginBottom": theme.spacing(6),
		},
	}
})