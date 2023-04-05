import { memo, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { makeStyles } from "../theme";
import { Text } from "../theme";
import { breakpointsValues } from "onyxia-ui/lib/breakpoints"
import UnfoldIcon from '@mui/icons-material/FormatLineSpacing';
import { useDomRect } from "powerhooks/useDomRect";
import { useConstCallback } from "powerhooks";
import { useClickAway } from "powerhooks";
import { Evt } from "evt";
import { getScrollableParent } from "powerhooks/getScrollableParent";

export type HeaderProps = {
	links: {
		label: string;
		href: string;
		onClick?: () => void;
	}[];
	title?: ReactNode;
	className?: string
	classes?: {
		headerInner?: string;
		title?: string;
		links?: string;
		linkWrapper?: string;
		link?: string;
		linkUnderline?: string;
		unFoldIcon?: string;
		smallDeviceLinksWrapper?: string;
		smallDeviceLinksInnerWrapper?: string;
		smallDeviceLinks?: string;
		smallDeviceLinkWrapper?: string;
		smallDeviceLink?: string;
		smallDeviceLinkUnderline?: string;
		darkModeSwitchWrapper?: string;
		darkModeSwitch?: string;
	}
}





export const Header = memo((props: HeaderProps) => {
	const { links, title, className, classes: classesProp } = props;

	const [isMenuUnfolded, setIsMenuUnfolded] = useState(false);
	const [isMenuVisible, setIsMenuVisible] = useState(true);



	const { domRect: {
		height: headerHeight
	}, ref: headerRef } = useDomRect();

	const {
		domRect: {
			height: linksHeight
		},
		ref: linksRef


	} = useDomRect();

	const { classes, cx } = useStyles({
		headerHeight,
		isMenuUnfolded,
		linksHeight,
		isMenuVisible

	});

	const { ref } = useClickAway({
		"onClickAway": () => {
			if (!isMenuUnfolded) {
				return;
			}
			setIsMenuUnfolded(false);
		}
	})


	const toggleMenu = useConstCallback(() => {
		setIsMenuUnfolded(!isMenuUnfolded)
	});

	useEffect(() => {

		const ctx = Evt.newCtx();
		const scrollableElement = getScrollableParent({
			"doReturnElementIfScrollable": true,
			"element": ref.current
		});
		if (scrollableElement === null) {
			return;
		}
		Evt.from(ctx, scrollableElement, "scroll").attach((e) => {
			if (headerHeight >= scrollableElement.scrollTop) {
				setIsMenuVisible(true);
			}
			if (headerHeight < scrollableElement.scrollTop) {
				setIsMenuVisible(false);
			}
		})

	}, [headerHeight, ref])

	return <header className={cx(classes.root, className)} ref={headerRef} >
		<div ref={ref} className={cx(classes.headerInner, classesProp?.headerInner)}>
			<div className={classesProp?.title}>{title}</div>

			<div>
				<Links
					className={cx(classes.links, classesProp?.links)}
					links={links}
					classes={{
						"link": classesProp?.link,
						"linkWrapper": classesProp?.linkWrapper,
						"linkUnderline": classesProp?.linkUnderline
					}}
				/>

				<div className={cx(classes.unfoldIcon, classesProp?.unFoldIcon)} onClick={toggleMenu}>
					<UnfoldIcon />
				</div>
			</div>

			<div className={cx(classes.smallDeviceLinksWrapper, classesProp?.smallDeviceLinksWrapper)}>
				<div className={cx(classes.smallDeviceLinksInnerWrapper, classesProp?.smallDeviceLinksInnerWrapper)} ref={linksRef}>
					<Links
						links={links}
						className={cx(classes.smallDeviceLinks, classesProp?.smallDeviceLinks)}
						classes={{
							"link": classesProp?.smallDeviceLink,
							"linkWrapper": classesProp?.smallDeviceLinkWrapper,
							"linkUnderline": classesProp?.smallDeviceLinkUnderline
						}}
					/>

				</div>
			</div>

		</div>

	</header>
})

const useStyles = makeStyles<{
	headerHeight: number;
	isMenuUnfolded: boolean;
	linksHeight: number;
	isMenuVisible: boolean;
}>()(
	(theme, { headerHeight, isMenuUnfolded, linksHeight, isMenuVisible }) => ({
		"root": {
			"padding": theme.spacing({
				"rightLeft": `${theme.spacing(2)}px`,
				"topBottom": `${theme.spacing(3)}px`
			}),
			"position": "fixed",
			"zIndex": 2,
			"top": !isMenuVisible ? -(headerHeight + 50) : 0,
			"transition": "top 300ms",
			"background": "rgba(0,0,0,80%)",
			"width": "100%"
		},
		"links": {},

		"headerInner": {
			"display": theme.windowInnerWidth >= breakpointsValues.md ? "grid" : "flex",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
			} : {
				"gridTemplateColumns": "repeat(3, 1fr)"
			}),
			"position": "relative",
		},
		"unfoldIcon": {
			"display": "none",
			"pointerEvents": "none",
			"color": theme.colors.palette.light.greyVariant2,
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"display": "block",
				"pointerEvents": "unset"
			} : {}),
			"marginLeft": theme.spacing(6)

		},
		"smallDeviceLinksWrapper": {
			"position": "absolute",
			"background": theme.colors.palette.customGradientColor,
			//"width": theme.windowInnerWidth / 2,
			//"left": -theme.paddingRightLeft,
			"top": headerHeight - theme.spacing(3),
			"left": -theme.spacing(2),
			"width": "100vw",
			"opacity": 0,
			"height": 0,
			"overflow": "hidden",
			"pointerEvents": "none",
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "flex-start",
			"justifyContent": "center",
			"transition": "height 300ms, border-top-color 300ms",
			...theme.spacing.rightLeft("padding", `${theme.spacing(3)}px`),
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"borderTop": isMenuUnfolded ? `solid 1px ${theme.colors.useCases.typography.textSecondary}` : undefined,
				"height": isMenuUnfolded && isMenuVisible ? linksHeight : 0,
				"opacity": 0.94,
				"pointerEvents": "unset"
			} : {})
		},

		"smallDeviceLinksInnerWrapper": {
			...theme.spacing.topBottom("padding", `${theme.spacing(6)}px`)
		},

		"smallDeviceLinks": {
			"flexDirection": "column",
			"display": "flex",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"opacity": 1,
				"pointerEvents": "unset"
			} : {})
		},

	})
)

const { Links } = (() => {

	type LinksProps = {
		links: HeaderProps["links"];
		className?: string;
		classes?: {
			linkWrapper?: string;
			link?: string;
			linkUnderline?: string;
		};
	}

	const useStyles = makeStyles()(
		theme => ({
			"links": {
				"display": "flex",
				"justifyContent": "center",
				"flex": 1,
				...(theme.windowInnerWidth < breakpointsValues.md ? {
					"display": "none",
					"pointerEvents": "none"

				} : {})
			},
			"linkWrapper": {
				"display": "flex",

			}
		})
	)


	const Links = memo((props: LinksProps) => {

		const { links, className, classes: classesProp } = props;

		const { classes, cx } = useStyles();

		return <div className={cx(classes.links, className)}>{
			links.map(({ href, label, onClick }) => <div key={label} className={classes.linkWrapper}><Link
				href={href}
				label={label}
				onClick={onClick}
				classes={{
					"link": classesProp?.link,
					"underline": classesProp?.linkUnderline
				}}
				className={classesProp?.linkWrapper}
			/></div>)

		}</div>


	})

	return { Links };
})();


const { Link } = (() => {

	type LinkProps = HeaderProps["links"][number] & {
		className?: string
		classes?: {
			link?: string;
			underline?: string;
		}
	};



	const Link = memo((props: LinkProps) => {
		const { href, label, onClick, className, classes: classesProp } = props;
		const { classes, cx } = useStyles()

		return <div
			className={cx(classes.root, className)}
		>
			<a
				href={href}
				onClick={onClick ?? undefined}
				className={classes.link}
			>
				<Text
					typo="navigation label"
					className={cx(classes.text, classesProp?.link)}
				>
					{label}
				</Text>

			</a>
			<div className={cx(classes.underline, classesProp?.underline)}></div>
		</div>

	})

	const useStyles = makeStyles<void, "underline">()(

		(theme, _params, classes) => {

			return {
				"root": {
					"display": "flex",
					"flexDirection": "column",
					"position": "relative",
					"cursor": "none",
					...theme.spacing.rightLeft("margin", `${theme.spacing(4)}px`),
					[`&:hover .${classes.underline}`]: {
						"width": "110%",
						...(theme.windowInnerWidth < breakpointsValues.md ? {
							"width": "50%",
						} : {})
					},
					...(theme.windowInnerWidth < breakpointsValues.md ? {
						...theme.spacing.topBottom("margin", `${theme.spacing(3)}px`)
					} : {

					})
				},
				"link": {
					"textDecoration": "none"

				},
				"underline": {
					"width": 0,
					"position": "relative",
					"left": theme.windowInnerWidth >= breakpointsValues.md ? "-5%" : "5%",
					"top": theme.spacing(1),
					"height": 1,
					"backgroundColor": theme.colors.palette.light.greyVariant2,
					"transition": "width 200ms",
					...(theme.windowInnerWidth < breakpointsValues.md ? {
						"alignSelf": "flex-start"

					}: {})
				},
				"text": {
					...theme.spacing.rightLeft("padding", `${theme.spacing(2)}px`),
					...theme.typography.variants["navigation label"].style,
					"color": theme.colors.palette.light.greyVariant2
				}
			}
		}
	)

	return { Link }

})()