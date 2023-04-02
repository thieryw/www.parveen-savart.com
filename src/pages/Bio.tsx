import PortraitJpeg from "../assets/img/bio/portrait.jpeg";
import PortraitWebp from "../assets/webp/bio/portrait.webp";
import backgroundImg from "../assets/img/bio/background.jpeg";
import { declareComponentKeys, useTranslation } from "../i18n";
import { makeStyles, breakpointsValues } from "../theme";
import { SectionTitle } from "../components/SectionTitle";
import ReactMarkdown from "react-markdown";
import { BackgroundFade } from "../components/BackgroundFade";

export function Bio() {
	const { t } = useTranslation({ Bio })
	const { classes } = useStyles();
	return <div className={classes.root}>
		<BackgroundFade
			imageUrl={backgroundImg}
			isImageCovered={true}
			fadeDirection={"to bottom"}
		/>
		<SectionTitle
			dark={false}
			mode={"SectionTitle"}
			title={t("bioTitle")}
			miniTitle={t("bioMiniTitle")}
			className={classes.title}
		/>
		<section className={classes.section}>
			<picture>
				<source 
					srcSet={PortraitWebp}
					type="image/webp"
				/>
				<source 
					srcSet={PortraitJpeg}
					type="image/jpeg"
				/>
				<img className={classes.sectionImage} src={PortraitWebp} alt="Biographie portrait" />
			</picture>
			<ReactMarkdown>{t("bioText")}</ReactMarkdown>
		</section>
	</div>
}

export const { i18n } = declareComponentKeys<
	| "bioTitle"
	| "bioMiniTitle"
	| "bioText"
>()({ Bio });

const useStyles = makeStyles()(
	theme => {
		return {
			"root": {
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "center"

			},
			"section": {
				...theme.spacing.rightLeft("padding", `${theme.spacing(4)}px`),
				"maxWidth": (() => {
					if (theme.windowInnerWidth >= breakpointsValues.xl) {
						return 1400;
					}
					if (theme.windowInnerWidth < breakpointsValues.xl) {
						return 1200;
					}
					if (theme.windowInnerWidth < breakpointsValues.md) {
						return 900;
					}
				})(),
				"zIndex": 1,
				"marginBottom": theme.spacing(7)

			},
			"sectionImage": {
				"float": "left",
				"maxWidth": (() => {
					if (theme.windowInnerWidth >= breakpointsValues.lg) {
						return 700;
					}

					if (theme.windowInnerWidth < breakpointsValues.lg && theme.windowInnerWidth >= breakpointsValues.md) {
						return 600;
					}

					if (theme.windowInnerWidth < breakpointsValues.md && theme.windowInnerWidth >= 780) {
						return 500;
					}
					if (theme.windowInnerWidth < 780 && theme.windowInnerWidth >= breakpointsValues.sm) {
						return 350;
					}

					if (theme.windowInnerWidth < breakpointsValues.sm) {
						return "100%";
					}

				})(),
				"marginRight": theme.spacing(6),
				"marginBottom": theme.spacing(5)

			},
			"title": {
				"marginTop": "60vh",
				"marginBottom": theme.spacing(7)

			}
		}
	}
)