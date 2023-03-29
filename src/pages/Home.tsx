import { declareComponentKeys, useTranslation } from "i18n";
import { makeStyles, breakpointsValues, Text } from "../theme";
import { ImageBackground } from "../components/ImageBackground";
import BannerBackgroundImg from "../assets/img/home/banniere.jpeg";
import BannerBackgroundWebp from "../assets/webp/home/banniere.webp";
import { Title } from "../components/Title";
import { Section } from "../components/Section";
import bioImg from "../assets/img/home/bio.jpeg";
import bioWebpImg from "../assets/webp/home/bio.webp";
import { routes } from "../router";
import { BackgroundParallax } from "../components/BackgroundParalax";
import intersectionImg from "../assets/img/home/intersection.jpeg";
import { ArtGallery } from "react-art-gallery";
import { files as jpegFiles } from "../generatedImgExportsHomeMiniGallery"
import { files as webpFiles } from "../generatedWebpExportsHomeMiniGallery";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import nextConcertsImg from "../assets/img/home/prochains-concerts.jpeg"
import nextConcertsWebp from "../assets/webp/home/prochains-concerts.webp"

const imageSources = webpFiles.files.map(({ url }, index) => [
	{
		"srcSet": url,
		"type": "image/webp"
	},
	{

		"srcSet": jpegFiles.files[index].url,
		"type": "image/jpeg"

	}
])

export function Home() {
	const { t } = useTranslation({ Home })
	const { classes } = useStyles();
	return <div className={classes.root}>
		<div className={classes.banner}>
			<ImageBackground
				src={BannerBackgroundWebp}
				sources={[
					{
						"srcSet": BannerBackgroundWebp,
						"type": "image/webp"
					},
					{
						"srcSet": BannerBackgroundImg,
						"type": "image/jpeg"
					}
				]}

			/>
			<Title

				className={classes.title}
				title="PARVEEN SAVART"
				subtitle="SOPRANO"
				classes={{
					"title": classes.heading,
					"subtitle": classes.subtitle
				}}
			/>

		</div>
		<Section
			imgSrc={bioWebpImg}
			imgSources={
				[
					{
						"srcSet": bioWebpImg,
						"type": "image/webp"
					},
					{
						"srcSet": bioImg,
						"type": "image/jpeg"
					}
				]
			}
			buttonLink={routes.bio().link}
			buttonText={t("bioButtonText")}
			imgAlt="biographie portrait"
			miniTitle={t("bioMiniTitle")}
			title={<Text typo="my section title">{t("bioSectionTitle")} <span style={{
				"fontStyle": "italic",
				"fontWeight": "600"
			}}>{t("bioSectionTitleItalic")}</span></Text>}
			text={(t("bioText"))}
		/>


		<div className={classes.parallax}>
			<BackgroundParallax
				imageUrl={intersectionImg}
				height="500px"
			/>

		</div>

		<section className={classes.mediaSection}>
			<SectionTitle
				title={t("mediaTitle")}
				miniTitle={t("mediaMiniTitle")}
				mode="SectionTitle"
				className={classes.mediaSectionTitle}
				dark={false}

			/>
			<ArtGallery
				thumbNailImageSources={imageSources}
				lightBoxImageSources={imageSources}
				thumbNailImages={jpegFiles.files}
				lightBoxImages={jpegFiles.files}
				imageAverageHeight={200}
				hideImageNames={true}
				className={classes.gallery}
			/>
			<Button
				text={t("mediaButtonText")}
				className={classes.mediaSectionButton}
				link={routes.media().link}
			/>
		</section>
		<section className={classes.nextConcertSection}>
			<div className={classes.nextConcertSectionInner}>
				<div className={classes.nextConcertTitleAndButtonWrapper}>
					<SectionTitle
						mode="SectionTitle"
						title="PROCHAINS CONCERTS"
						miniTitle="LIVE"
						className={classes.concertsSectionTitle}
						dark={true}
					/>
					<Button 
						link={routes.agenda().link}
						text="DATES"
					/>

				</div>
				<ImageBackground
					src={nextConcertsWebp}
					sources={[
						{
							"srcSet": nextConcertsWebp,
							"type": "image/webp"
						},
						{
							"srcSet": nextConcertsImg,
							"type": "image/jpeg"
						}
					]}
				/>

			</div>
		</section>


	</div>
}


const useStyles = makeStyles()(theme => ({
	"root": {

	},
	"banner": {
		"width": "100vw",
		"height": "100vh",
		"minHeight": theme.windowInnerWidth >= breakpointsValues.md ? "850px" : 500,
		"position": "relative",
		"display": "flex",
		"paddingLeft": theme.windowInnerWidth < breakpointsValues.sm ? theme.spacing(4) : theme.spacing(7),
		"alignItems": theme.windowInnerWidth < breakpointsValues.md ? "flex-end" : "center",
		"paddingBottom": theme.spacing(7)
	},
	"mediaSection": {
		...theme.spacing.rightLeft("padding", `${theme.spacing(theme.windowInnerWidth < breakpointsValues.md ? 4 : 7)}px`),
		...theme.spacing.topBottom("padding", `${theme.spacing(7)}px`),
		"display": "flex",
		"flexDirection": "column",
		"alignItems": "center"

	},
	"gallery": {
		"maxWidth": 1000

	},
	"parallax": {
		...theme.spacing.rightLeft("padding", `${theme.spacing(theme.windowInnerWidth < breakpointsValues.md ? 4 : 7)}px`),
		"position": "relative"

	},
	"mediaSectionTitle": {
		"marginBottom": theme.spacing(7)

	},
	"mediaSectionButton": {
		"marginTop": theme.spacing(7)
	},
	"nextConcertSection": {
		"height": theme.windowInnerWidth < breakpointsValues.md ? 600 : 800,
		...theme.spacing.rightLeft("padding", `${theme.spacing(theme.windowInnerWidth < breakpointsValues.md ? 4 : 7)}px`),
		"marginBottom": theme.spacing(7)


	},
	"concertsSectionTitle": {
		"marginBottom": theme.spacing(6)

	},
	"nextConcertSectionInner": {
		"width": "100%",
		"height": "100%",
		"position": "relative",
		"display": "flex",
		"alignItems": "flex-end",
		"justifyContent": "center",
		"paddingBottom": theme.spacing(6),
		...theme.spacing.rightLeft("padding", `${theme.spacing(6)}px`)

	},
	"nextConcertTitleAndButtonWrapper": {
		"zIndex": 4,
		"display": "flex",
		"flexDirection": "column",
		"alignItems": "center"

	},
	"title": {
		"position": "relative",
		"whiteSpace": "nowrap"
	},
	"subtitle": {
		"color": theme.colors.palette.light.greyVariant2

	},
	"heading": {
		...(() => {
			const value = theme.windowInnerWidth < breakpointsValues.md ? "2.2rem" : "4rem";
			return {
				"lineHeight": value,
				"fontSize": value

			}

		})()

	},
}))


export const { i18n } = declareComponentKeys<
	"title"
	| "bioMiniTitle"
	| "bioSectionTitle"
	| "bioSectionTitleItalic"
	| "bioButtonText"
	| "bioText"
	| "mediaMiniTitle"
	| "mediaTitle"
	| "mediaButtonText"
>()({ Home });