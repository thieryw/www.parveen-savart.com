import { makeStyles } from "../theme";
import contactJpeg from "../assets/img/contact/contact.jpeg";
import contactJpegMobile from "../assets/img/contact/contactMobile.jpeg";
import { Text, breakpointsValues } from "../theme";
import { SectionTitle } from "../components/SectionTitle";
import MuiLink from "@mui/material/Link";
import { declareComponentKeys, useTranslation } from "../i18n";

export function Contact() {
	const { classes, cx } = useStyles();
	const { t } = useTranslation({ Contact })
	return <div className={classes.root}>
		<div className={classes.contentWrapper}>
			<div className={classes.content}>
				<SectionTitle
					dark={true}
					mode="paragraphTitle"
					miniTitle={t("contactMiniTitle")}
					title={t("contactTitle")}
					className={classes.sectionTitle}
					classes={{
						"decorativeLine": classes.sectionTitleDecoLine,
						"miniTitle": classes.sectionTitleMiniTitle,
					}}
				/>
				<div className={cx(classes.general, classes.container)}>
					<div className={classes.sexyLine}></div>
					<div className={classes.generalContent}>
						<Text
							className={classes.subtitle}
							typo="subtitle"
						>{t("generalTitle")}</Text>
						<a className={classes.mailto} href="mailto:contact@gmail.com">
							<Text
								className={cx(classes.emailAndPhone, classes.email)}
								typo="label 1"
							>{t("email")}</Text>

						</a>
						<Text
							className={classes.emailAndPhone}
							typo="label 1"
						>{t("phoneNumber")}</Text>
					</div>

				</div>
				<div className={cx(classes.social, classes.container)}>
					<div className={classes.sexyLine}></div>
					<div className={classes.socialContent}>
						<Text
							className={classes.subtitle}
							typo="subtitle"
						>{t("socialTitle")}</Text>
						<div className={classes.linkWrapper}>
							<div className={classes.smallSexyLine}></div>
							<MuiLink
								href=""
								className={classes.link}
							>{t("facebook")}</MuiLink>
						</div>
						<div className={classes.linkWrapper}>
							<div className={classes.smallSexyLine}></div>
							<MuiLink
								className={classes.link}
								href=""
							>{t("instagram")}</MuiLink>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>
}

export const { i18n } = declareComponentKeys<
	| "contactTitle"
	| "contactMiniTitle"
	| "generalTitle"
	| "email"
	| "phoneNumber"
	| "socialTitle"
	| "facebook"
	| "instagram"
>()({ Contact });

const useStyles = makeStyles()(theme => {
	const height = (() => {
		if (theme.windowInnerWidth < breakpointsValues.md && theme.windowInnerWidth >= breakpointsValues.sm) {
			return "180vw";
		}

		if (theme.windowInnerWidth < breakpointsValues.sm) {
			return "200vw";
		}

		return "100vh";

	})()
	return {
		"root": {
			"width": "100vw",
			"minHeight": height,
			"backgroundColor": "black",
			"position": "relative",
		},
		"sectionTitleDecoLine": {
			"borderColor": theme.colors.palette.buttonColor

		},
		"sectionTitleMiniTitle": {
			"color": theme.colors.palette.buttonColor
		},
		"contentWrapper": {
			"minWidth": "100%",
			"minHeight": height,
			"backgroundImage": `url("${theme.windowInnerWidth < breakpointsValues.md ? contactJpegMobile : contactJpeg}")`,
			"backgroundPosition": theme.windowInnerWidth < breakpointsValues.md ? "center" : "right",
			"backgroundRepeat": "no-repeat",
			"backgroundPositionY": theme.windowInnerWidth < breakpointsValues.sm ? "25vh" : undefined,
			"backgroundSize": theme.windowInnerWidth < breakpointsValues.md ? "cover" : undefined,
			"display": "flex",
			"alignItems": theme.windowInnerWidth < breakpointsValues.md ? "flex-start" : "center",
			"paddingTop": theme.windowInnerWidth >= breakpointsValues.md ? undefined : theme.spacing(10),
			...theme.spacing.rightLeft("padding", `${theme.windowInnerWidth < breakpointsValues.md ? theme.spacing(7) : theme.spacing(8)}px`),


		},
		"content": {

		},
		"sectionTitle": {
			"paddingBottom": theme.spacing(5),

		},
		"email": {
			"marginBottom": theme.spacing(2),
		},
		"mailto": {
			"textDecoration": "none"
		},
		"subtitle": {
			"color": theme.colors.palette.light.greyVariant3,
			"marginBottom": theme.spacing(4)
		},
		"general": {
		},
		"generalContent": {
			"marginLeft": theme.spacing(7)
		},
		"social": {

		},
		"emailAndPhone": {
			"color": theme.colors.palette.light.greyVariant4,
		},
		"socialContent": {
			"marginLeft": theme.spacing(7)
		},
		"container": {
			"display": "flex",
			"marginTop": theme.spacing(6),
			...(theme.windowInnerWidth < breakpointsValues.md ? {} : {
				...theme.spacing.rightLeft("padding", `${theme.spacing(7)}px`),
			})


		},
		"link": {
			"color": theme.colors.palette.buttonColor,
			"transition": "transform 300ms",
			":hover": {
				"textDecoration": "none",
				"transform": `translateX(${theme.spacing(2)}px)`

			}

		},
		"linkWrapper": {
			"display": "flex",
			"alignItems": "center",
			"marginBottom": theme.spacing(2)

		},
		"smallSexyLine": {
			"width": theme.spacing(4),
			"height": 1,
			"borderTop": `solid ${theme.colors.palette.buttonColor} 1px`,
			"marginRight": theme.spacing(3)

		},
		"sexyLine": {
			"width": theme.spacing(8),
			"height": 1,
			"borderTop": `solid ${theme.colors.palette.light.greyVariant3} 1px`,
			"position": "relative",
			"top": theme.spacing(3)
		},
	}
})