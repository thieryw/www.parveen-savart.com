import {createRouter, defineRoute} from "type-route";
import {makeThisModuleAnExecutableRouteLister} from "github-pages-plugin-for-type-route";

const publicUrl = process.env["PUBLIC_URL"];

export const routeDefs = {
	"home": defineRoute(publicUrl || "/"),
	"bio": defineRoute(publicUrl + "/biography"),
	"legal": defineRoute(publicUrl + "/mentions-legal"),
	"agenda": defineRoute(publicUrl + "/agenda"),
	"media": defineRoute(publicUrl + "/media"),
	"contact": defineRoute(publicUrl + "/contact")
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const {RouteProvider, routes, useRoute} = createRouter(
	routeDefs
);