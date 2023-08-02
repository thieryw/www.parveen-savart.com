import { BackgroundFade } from "../components/BackgroundFade";
import backgroundImg from "../assets/img/media/background.jpeg";
import { makeStyles, breakpointsValues, useTheme } from "../theme";
import { SectionTitle } from "../components/SectionTitle";
import { ArtGallery } from "react-art-gallery";
import {files as jpegFiles} from "../generatedImgExportsMediaGallery";
import { files as webpFiles } from "../generatedWebpExportsMediaGallery";
import { generateImgSources } from "../tools/generateImgSources";
import { declareComponentKeys, useTranslation } from "../i18n";
import { YouTubeIframe } from "../components/YouTubeIframe";
import { Slider } from "../components/Slider";
import { Button } from "../components/Button";

const imageSources = generateImgSources(webpFiles.files, jpegFiles.files);
const videoUrls = [
	"https://www.youtube.com/embed/HaQuofkbXas",
	"https://www.youtube.com/embed/BcxKIagxf_4",
	"https://www.youtube.com/embed/mZpf9Zky0Kw",
	"https://www.youtube.com/embed/R3QGHjxlJGk",
	"https://www.youtube.com/embed/tijp5fO73ko",
	"https://www.youtube.com/embed/R3QGHjxlJGk"
]

export function Media() {
	const { t } = useTranslation({ Media })
	const { windowInnerWidth } = useTheme();

	const { classes } = useStyles();
	return <div className={classes.root}>
		<BackgroundFade
			imageUrl={backgroundImg}
			isImageCovered={true}
			fadeDirection={"to bottom"}
			className={classes.background}
		/>
		<section className={classes.gallerySection}>
			<SectionTitle
				dark={false}
				mode={"SectionTitle"}
				title={t("galleryTitle")}
				miniTitle={t("galleryMiniTitle")}
				className={classes.gallerySectionTitle}


			/>

			<ArtGallery
				images={webpFiles.files.map((file, index) => {
					return {
						"thumbNail": {
							"src": file.url,
							"alt": `${file.name} thumbnail`,
							"sources": imageSources[index]
						},
						"lightBox": {
							"src": file.url,
							"alt": `${file.name} thumbnail`,
							"sources": imageSources[index]
						}
					}
				})}
				imageAverageHeight={200}
				hideImageNames={true}
				className={classes.gallery}
			/>


		</section>

		<section className={classes.videoSection}>
			<SectionTitle
				dark={false}
				mode={"SectionTitle"}
				title={t("videoTitle")}
				miniTitle={t("videoMiniTitle")}
			/>


			<Slider
				classes={{
					"sliderWrapper": classes.slider,
					"next": classes.navSlider,
					"prev": classes.navSlider

				}}
				numberOfVisibleSlides={(()=>{
					if(windowInnerWidth > breakpointsValues.lg){
						return 3
					}
					if(windowInnerWidth <= breakpointsValues.lg && windowInnerWidth > breakpointsValues.sm){
						return 2
					}
					return 1
				})()}
				slides={videoUrls.map(url => <YouTubeIframe videoUrl={url} {...(()=>{
					if(windowInnerWidth > breakpointsValues.lg){
						return {
							"width": "33.33333333vw",
							"height": "18vw"
						}
					}
					if(windowInnerWidth <= breakpointsValues.lg && windowInnerWidth > breakpointsValues.sm){
						return {
							"width": "50vw",
							"height": "30vw"
						}
					}
					return {
						"width": "100vw",
						"height": "60vw"
					}
				})()} />)}
			/>
			<Button
				text="YOUTUBE"
				link={{
					"href": "https://www.youtube.com/@parveenette"
				}}

			/>
		</section>

	</div>
}

const useStyles = makeStyles()(theme => {
	return {
		"root": {

		},
		"background": {
			"height": "80vh"
		},
		"gallerySection": {
			"position": "relative",
			"marginTop": "50vh",
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"marginBottom": theme.spacing(8)

		},
		"gallerySectionTitle": {
			"marginBottom": theme.spacing(7)
		},
		"gallery": {
			"maxWidth": 1000
		},
		"videoSection": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"marginBottom": theme.spacing(8)

		},
		"slider": {
			"width": "100vw"
		},
		"navSlider": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"width": theme.spacing(5),
				"height": theme.spacing(5),

			} : {

				"width": theme.spacing(7),
				"height": theme.spacing(7),
			}),
			"position": "relative",
			"left": theme.spacing(2)

		}
	}
})


export const { i18n } = declareComponentKeys<
	| "galleryTitle"
	| "galleryMiniTitle"
	| "videoTitle"
	| "videoMiniTitle"

>()({ Media });