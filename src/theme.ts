import { createMakeStyles } from "tss-react";
import { createThemeProvider, 
	defaultGetTypographyDesc, 
	createDefaultColorUseCases, 
	breakpointsValues as defaultBreakpointValues ,
	defaultPalette
} from "onyxia-ui";
import { createIcon } from "onyxia-ui/Icon";
import { createText } from "onyxia-ui/Text";


export const { useTheme, ThemeProvider } = createThemeProvider({
	"getTypographyDesc": params => {
		const typographyDesk = defaultGetTypographyDesc(params);
		return {
			...typographyDesk,
			"fontFamily": '"Poppins", sans-serif',
			"variants": {
				...typographyDesk.variants,
				"my title": {
					"htmlComponent": "h1",
					"fontWeight": 100,
					"fontSizeRem": 3,
					"lineHeightRem": 3,
					"fontFamily": "'Yeseva One', cursive"
				},
				"my section title": {
					"htmlComponent": "h3",
					"fontWeight": 100,
					"fontSizeRem": 3,
					"lineHeightRem": 3,
					"fontFamily": "'EB Garamond', serif"
				}
			}
		}
	},
	"defaultIsDarkModeEnabled": false,
	"createColorUseCases": params => ({
		...createDefaultColorUseCases(params),
		"surfaces": {
			"background": "#fffdf0",
			"surface1": "#f0eee6",
			"surface2": "#f5f4f0"
		}
	}),
	"palette": {
		...defaultPalette,
		"customGradientColor": "linear-gradient(90deg, hsla(0, 100%, 6%, 1) 0%, hsla(0, 94%, 13%, 1) 100%)",
		"buttonColor": "#a65959"

	}
});

export const { makeStyles } = createMakeStyles({ useTheme });
export const { Text } = createText({ useTheme });
export const breakpointsValues = {
	...defaultBreakpointValues,
	"lg+": 1400 as const
};

export const Icon = createIcon({});