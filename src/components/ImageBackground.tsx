import { makeStyles } from "../theme";
import { Source } from "../tools/source";



type ImageBackgroundProps = {
	src: string;
	sources?: Source[]
	alt?: string;
	className?: string;
}

export function ImageBackground(props: ImageBackgroundProps) {
	const { src, alt, sources, className } = props;
	const { classes, cx } = useStyles()
	return <div
		className={cx(classes.root, className)}
	>
		<picture>
			{sources !== undefined &&
				sources.map((source, index) => <source key={index} {...source} />)}
			<img
				className={classes.image}
				src={src}
				alt={alt}
			/>
		</picture>

	</div>
}


const useStyles = makeStyles()(() => ({
	"root": {
		"width": "100%",
		"height": "100%",
		"position": "absolute",
		"top": 0,
		"left": 0,
	},
	"image": {
		"width": "100%",
		"height": "100%",
		"objectFit": "cover",
		"verticalAlign": "middle"
	}
}))