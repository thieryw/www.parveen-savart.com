import {createRouter, defineRoute} from "type-route";
import {makeThisModuleAnExecutableRouteLister} from "github-pages-plugin-for-type-route";

export const routeDefs = {
	"home": defineRoute("/"),
	"bio": defineRoute("/biography"),
	"legal": defineRoute("/mentions-legal"),
	"agenda": defineRoute("/agenda"),
	"media": defineRoute("/media"),
	"contact": defineRoute("/contact")
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const {RouteProvider, routes, useRoute} = createRouter(
	routeDefs
);