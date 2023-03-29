import React, { useRef, useReducer } from "react";
import { useEvt } from "evt/hooks";
import { Evt } from "evt";
import { makeStyles } from "../theme";

export type BackgroundParallaxProps = {
	imageUrl: string;
	height: string;
	className?: string;
}

export function BackgroundParallax(props: BackgroundParallaxProps){
	const { imageUrl, height, className } = props;

	const ref = useRef<HTMLDivElement>(null);
	const [, forceUpdate] = useReducer(x => x + 1, 0)

	const { classes, cx } = useStyles({
		height,
		imageUrl

	})

	useEvt(ctx => Evt.from(ctx, window, "scroll").attach(() => {
		if (!ref.current) {
			return;
		}

		const bounding = ref.current.getBoundingClientRect();

		if (bounding.y >= window.innerHeight) {
			return;
		}

		ref.current.style.backgroundPositionY =
			`${(bounding.y - window.innerHeight) / 10 + 50}px`;

		forceUpdate();

	}));
	return <div
		className={cx(classes.root, className)}
		ref={ref}
	></div>
}


const useStyles = makeStyles<{ imageUrl: string; height: string }>()((...[, { imageUrl, height }]) => ({
	"root": {
		"backgroundImage": `url("${imageUrl}")`,
		"backgroundSize": "cover",
		"backgroundRepeat": "no-repeat",
		"backgroundAttachment": "fixed",
		"backgroundPositionX": "center",
		"backgroundPositionY": "50px",
		"width": "100%",
		"height": height,
	}
}))