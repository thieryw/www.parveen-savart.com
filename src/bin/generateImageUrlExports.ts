import {generateMediaFile} from "./generateMediaFile";
import {join} from "path";

generateMediaFile({
	"acceptedFileExtensions": [".webp"],
	"mediaPath": join(__dirname, "..", "assets", "webp", "home", "miniGallery"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedWebpExportsHomeMiniGallery"
});

generateMediaFile({
	"acceptedFileExtensions": [".jpeg", ".png"],
	"mediaPath": join(__dirname, "..", "assets", "img", "home", "miniGallery"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedImgExportsHomeMiniGallery"
});


generateMediaFile({
	"acceptedFileExtensions": [".webp"],
	"mediaPath": join(__dirname, "..", "assets", "webp", "media", "gallery"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedWebpExportsMediaGallery"
});

generateMediaFile({
	"acceptedFileExtensions": [".jpeg", ".png"],
	"mediaPath": join(__dirname, "..", "assets", "img", "media", "gallery"),
	"generatedFilePath": join(__dirname, ".."),
	"generatedFileName": "generatedImgExportsMediaGallery"
});
