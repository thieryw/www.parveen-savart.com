import { ConcertSection } from "../components/ConcertSection";
import { makeStyles, breakpointsValues } from "../theme";
import { concerts } from "../concerts";
import { useLang, declareComponentKeys, useTranslation } from "../i18n";
import { ImageBackground } from "../components/ImageBackground";
import bannerJpeg from "../assets/img/agenda/banner.jpeg";
import bannerWebp from "../assets/webp/agenda/banner.webp";
import { SectionTitle } from "../components/SectionTitle";

export function Agenda() {
	const { classes } = useStyles();
	const { lang } = useLang();
	const { t } = useTranslation({ Agenda });
	return <div className={classes.root}>
		<div className={classes.banner}>
			<ImageBackground
				src={bannerWebp}
				alt="concert banner"
				sources={[
					{
						"srcSet": bannerWebp,
						"type": "image/webp"
					},
					{
						"srcSet": bannerJpeg,
						"type": "image/jpeg"
					}
				]}
			/>
			<div className={classes.filter}>

			</div>
			<SectionTitle 
				dark={true}
				mode="SectionTitle"
				title="CONCERTS"
				miniTitle="PROCHAINS"
				
			/>

		</div>
		<div className={classes.concerts}>
			{
				concerts.map((concert, index) => <div
					key={index}
					className={classes.concertSectionWrapper}
				>
					<ConcertSection
						link={concert.href !== undefined ? {
							"buttonlabel": t("buttonLabel"),
							"href": concert.href,
						} : undefined}
						{...concert[lang]}
					/>
					{
						index !== concerts.length - 1 &&
						<div className={classes.line}></div>
					}
				</div>)

			}

		</div>
	</div>
};

export const { i18n } = declareComponentKeys<
	| "buttonLabel"
>()({ Agenda });


const useStyles = makeStyles()(theme => {
	return ({
		"root": {

		},
		"concertSectionWrapper": {
			"position": "relative",
			"display": "flex",
			"flexDirection": "column",
			"alignItems": theme.windowInnerWidth < breakpointsValues.md ? undefined : "center"
		},
		"line": {
			"width": "80%",
			"height": 1,
			"borderTop": `solid ${theme.colors.palette.buttonColor} 1px`,
			...theme.spacing.topBottom("margin", `${theme.spacing(7)}px`)
		},
		"banner": {
			"position": "relative",
			"width": "100vw",
			"height": "100vh",
			"display": "flex",
			"alignItems": "flex-end",
			"justifyContent": "center",
			"paddingBottom": theme.spacing(8),
			"backdropFilter": "blur(10px)",
		},
		"filter": {
			"position": "absolute",
			"top": 0,
			"left": 0,
			"width": "100%",
			"height": "100%",
			"backdropFilter": "brightness(50%)"
			

		},
		"concerts": {
			...theme.spacing.topBottom("padding", `${theme.spacing(8)}px`),
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			...theme.spacing.rightLeft("padding", `${theme.spacing(6)}px`)
		}
	})
});