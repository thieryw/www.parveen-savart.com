import { memo, useEffect, useState } from "react";
import type { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { makeStyles, Text } from "../theme";
import { Icon } from "../theme";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";
import { useConstCallback } from "powerhooks/useConstCallback";
import { useEvt } from "evt/hooks/useEvt";
import { Evt } from "evt";
import { useIntersectionObserver } from "../tools/useIntersectionObserver";

export type SliderProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    title?: string;
    slides?: ReactNode[];
    autoPlayTimeInterval?: number;
    width?: string | number;
    numberOfVisibleSlides?: number;
};

export const Slider = memo((props: SliderProps) => {
    const { className, slides, title, autoPlayTimeInterval, width, numberOfVisibleSlides } = props;

    const [emblaRef, emblaApi] = useEmblaCarousel({ "loop": true });
    const [isPlaying, setIsPlaying] = useState(false);
    const [interval, setInt] = useState<NodeJS.Timeout>();

    useEvt(ctx => {
        if (autoPlayTimeInterval === undefined) {
            return;
        }
        new Map([
            ["blur", false],
            ["focus", true],
        ]).forEach((value, key) => {
            Evt.from(ctx, window, key).attach(() => {
                setIsPlaying(value);
            });
        });
    }, []);

    useEffect(() => {
        if (
            autoPlayTimeInterval === undefined ||
            autoPlayTimeInterval === 0 ||
            emblaApi === undefined
        ) {
            return;
        }

        if (!isPlaying) {
            if (interval !== undefined) {
                clearInterval(interval);
            }
            return;
        }

        setInt(
            setInterval(async () => {
                emblaApi.scrollNext();
            }, autoPlayTimeInterval * 1000),
        );
    }, [autoPlayTimeInterval, emblaApi, isPlaying, interval]);

    const { ref } = useIntersectionObserver(
        {
            "callback": useConstCallback(({ entry, observer }) => {
                if (
                    autoPlayTimeInterval === undefined ||
                    autoPlayTimeInterval === 0
                ) {
                    observer.unobserve(entry.target);
                    return;
                }
                setIsPlaying(entry.isIntersecting);
            }),
        },
        [],
    );

    const onClickFactory = useCallbackFactory(
        ([direction]: ["left" | "right"]) => {
            if (emblaApi === undefined) {
                return;
            }

            if (autoPlayTimeInterval !== undefined) {
                setIsPlaying(false);
            }

            switch (direction) {
                case "left":
                    emblaApi.scrollPrev();
                    break;
                case "right":
                    emblaApi.scrollNext();
            }
        },
    );

    const onMouseDown = useConstCallback(() => {
        setIsPlaying(false);
    });

    const { classes, cx } = useStyles(
        {
            width,
            "numberOfVisibleSlides": numberOfVisibleSlides ?? 1
        },
        { props },
    );

    return (
        <section ref={ref} className={cx(classes.root, className)}>
            {title !== undefined && (
                <Text className={classes.heading} typo="page heading">
                    {title}
                </Text>
            )}
            <div className={classes.sliderWrapper}>
                <div className={classes.viewport} ref={emblaRef}>
                    <div className={classes.container}>
                        {slides !== undefined &&
                            slides.map((slide, index) => (
                                <div
                                    onMouseDown={onMouseDown}
                                    key={index}
                                    className={classes.slide}
                                >
                                    {slide}
                                </div>
                            ))}
                    </div>
                </div>
                <div className={classes.arrowWrapper}>
                    <Icon
                        iconId="arrowBack"
                        className={cx(classes.arrows, classes.prev)}
                        onClick={onClickFactory("left")}
                    />
                    <Icon
                        iconId="arrowForwards"
                        className={cx(classes.arrows, classes.next)}
                        onClick={onClickFactory("right")}
                    />

                </div>
            </div>
        </section>
    );
});

const useStyles = makeStyles<{
    width: number | string | undefined;
    numberOfVisibleSlides: number;
}>({ "name": { Slider } })((theme, { width, numberOfVisibleSlides }) => ({
    "root": {
        ...theme.spacing.rightLeft("padding", `${theme.spacing(7)}px`),
        ...theme.spacing.topBottom("margin", `${theme.spacing(7)}px`),
    },
    "heading": {
        "marginBottom": theme.spacing(7),
        "textAlign": "center",
    },
    "sliderWrapper": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "width": width ?? "100%",
    },
    "viewport": {
        "overflow": "hidden",
        "userSelect": "none",
        "width": "100%"
    },
    "container": {
        "display": "flex",
        "alignItems": "center",
    },

    "arrows": {
        "transition": "transform 300ms",
        ":hover": {
            "transform": "scale(1.2)",
        },
    },
    "arrowWrapper": {



    },
    "slide": {
        "minWidth": `${100 / numberOfVisibleSlides}%`,
        "display": "flex",
        "justifyContent": "center",
        "overflow": "hidden",
        "padding": theme.spacing({
            "rightLeft": 1,
            "topBottom": 4,
        }),
    },
    "prev": {
        "marginRight": theme.spacing(4)
    },
    "next": {
        "marginLeft": theme.spacing(4)

    },
}));