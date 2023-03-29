import { createI18nApi, declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

export const languages = ["fr"] as const;

export const fallbackLanguage = "fr";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const { 
	useTranslation, 
	resolveLocalizedString, 
	useLang, 
	$lang,
	useResolveLocalizedString,
	getTranslation 
} = createI18nApi<
	typeof import ("pages/Home").i18n |
	typeof import ("App").i18n
>()(
    { languages, fallbackLanguage },
    {
			"fr": {
				"App": {
					"home": "ACCEUIL",
					"bio": "BIOGRAPHIE",
					"contact": "CONTACT",
					"agenda": "AGENDA",
					"media": "MEDIA",
					"copyRight": "Copyright © 2021 Parveen Savart. Tous droits réservés",
					"author": "Conçu et développé par StarkerDesign.",
					"legal": "Mentions Légales"
				},
				"Home": {
					"title": "Home",
					"bioMiniTitle": "BIOGRAPHIE",
					"bioSectionTitle": "Apprenez-en plus sur",
					"bioSectionTitleItalic": "moi",
					"bioText": `Après des études de violon et une scolarité à la
maitrise de Radio France puis au 
CRR de Paris, la soprano Parveen Savart poursuit 
sa formation au Conservatoire National 
Supérieur de Musique de Paris dans la classe d'Élène Golgévit. 
Tout au long de son parcours, elle bénéficie des 
conseils de personnalités musicales telles que 
Nathalie Stutzmann, Sofi Jeannin, Inva Mula, 
Anne Le Bozec, Jeff Cohen, Margreet Hönig, ou encore Regina Werner...`,
					"bioButtonText": "BIOGRAPHIE",
					"mediaMiniTitle": "media",
					"mediaTitle": "Découvrez mes images & vidéos",
					"mediaButtonText": "VOIR PLUS",
					"nextConcertMiniTitle": "LIVE",
					"nextConcertTitle": "PROCHAINS CONCERTS",
					"nextConcertButtonText": "DATES",
					"contactTitle": "Prenons Contact",
					"contactMiniTitle": "CONTACT",
					"contactButtonText": "CONTACT",
					"contactText": "N'hésitez pas à m'écrire et à vous informer sur mon actualité en me suivant sur les réseaux sociaux."
				},
			}
    }
);