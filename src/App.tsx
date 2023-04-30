import { useMemo } from "react";
import MuiLink from "@mui/material/Link";
import { Home } from "pages/Home";
import { Agenda } from "pages/Agenda";
import { Bio } from "pages/Bio";
import { Contact } from "pages/Contact";
import { Legal } from "pages/Legal";
import { Media } from "pages/Media";
import { useRoute, routes } from "./router";
import { Header } from "./components/Header";
import { declareComponentKeys, useTranslation } from "i18n";
import { Footer } from "./components/Footer";
import { Text } from "./theme";
import { makeStyles, breakpointsValues } from "./theme"
import instagramIconUrl from "./assets/svg/instagram.svg";
import facebookIconUrl from "./assets/svg/facebook.svg";
import youtubeIconUrl from "./assets/svg/youtube.svg";
import { Title } from "./components/Title";


export function App() {

	const route = useRoute();
	const { t } = useTranslation({ App });
	const { classes, cx } = useStyles();

	const links = useMemo(() => [
		{
			...routes.home().link,
			"label": t("home")
		},
		{
			...routes.bio().link,
			"label": t("bio")
		},
		{
			...routes.media().link,
			"label": t("media")
		},
		{
			...routes.agenda().link,
			"label": t("agenda")
		},
		{
			...routes.contact().link,
			"label": t("contact")
		}
	], [t])


	return <div className={classes.root}>
		<Header
			links={links}
		/>
		<div className={classes.body}>
			{route.name === "home" && <Home />}
			{route.name === "agenda" && <Agenda />}
			{route.name === "bio" && <Bio />}
			{route.name === "contact" && <Contact />}
			{route.name === "legal" && <Legal />}
			{route.name === "media" && <Media />}
		</div>
		<Footer
			className={classes.footer}

			title={
				<Title 
					title="PARVEEN SAVART"
					subtitle="SOPRANO"

				/>
			}
			links={links}
			socialMediaLinks={[
				{
					"href": "https://www.instagram.com/parveensavart/",
					"iconUrl": instagramIconUrl,
				},
				{
					"href": "https://www.facebook.com/parveen.st",
					"iconUrl": facebookIconUrl,
				},
				{
					"href": "https://www.youtube.com/@parveenette",
					"iconUrl": youtubeIconUrl
				}
			]}

			bottomDiv={
				<div className={classes.bottomDiv}>
					<MuiLink className={classes.legal} {...routes.legal().link}><Text className={cx(classes.legalText, classes.bottomDivElement)} typo="label 2">{t("legal")}</Text></MuiLink>
					<Text className={classes.bottomDivElement} typo="label 2">{t("copyRight")}</Text>
					<Text className={classes.bottomDivElement} typo="label 2">{t("author")}</Text>
				</div>
			}
		/>
	</div>
}

const useStyles = makeStyles()(
	theme => ({
		"root": {
			"minHeight": "100vh",
			"maxWidth": "100vw",
			"overflow": "hidden",
			"display": "flex",
			"flexDirection": "column",

		},
		"bottomDiv": {
			"display": "flex",
			...theme.spacing.topBottom("padding", `${theme.spacing(2)}px`),
			"justifyContent": "space-between",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"flexDirection": "column",
				"alignItems": "center"
			} : {})
		},
		"bottomDivElement": {
			"color": theme.colors.useCases.typography.textSecondary,
			...theme.spacing.topBottom("margin", `${theme.spacing(2)}px`)
		},
		"legal": {
			"textDecoration": "none",
		},
		"legalText": {
			"transition": "color 500ms",
			":hover": {
				"color": theme.colors.useCases.typography.textPrimary,
			}
		},
		"subtitle": {
			"fontSize": "1.4rem",
			"fontWeight": 100,
			"letterSpacing": theme.spacing(2),
			"marginLeft": theme.spacing(2),
			"marginTop": theme.spacing(2),
			"color": theme.colors.palette.light.greyVariant4,
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"fontSize": "1rem"

			} : {})
		},
		"title": {
			"color": theme.colors.palette.light.main,
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"fontSize": "1.4rem",
			} : {})

		},
		"body": {

		},
		"footer": {
			"marginTop": "auto"
		}

	})
)

export const { i18n } = declareComponentKeys<
	"home" |
	"agenda" |
	"bio" |
	"contact" |
	"media" |
	"legal" |
	"copyRight" |
	"author"
>()({ App });