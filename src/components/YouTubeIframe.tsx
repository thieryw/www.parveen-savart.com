import {memo} from "react";
import {makeStyles} from "../theme";


export type YouTubeIframeProps = {
	videoUrl: string;
	className?: string;
	width: string | number;
	height: string | number;
}

export const YouTubeIframe = memo((props: YouTubeIframeProps)=>{

	const {videoUrl, className, width, height} = props;
	const {classes, cx} = useStyle({width, height});

	return (
		<iframe className={cx(classes.root, className)} allowFullScreen src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
	)

});

const useStyle = makeStyles<{ width: string | number; height: string | number }>()(
	(theme, { width, height }) => ({
		"root": {
			"border": "none",
			width,
			height
		}

	})
)