import { RouteProvider } from "./router";
import { ThemeProvider } from "./theme";
import { Home } from "pages/Home";

export function App() {

	return <RouteProvider>
		<ThemeProvider>
			<Home />

		</ThemeProvider>

	</RouteProvider>
}