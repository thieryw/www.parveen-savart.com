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
	typeof import ("App").i18n |
	typeof import ("pages/Media").i18n |
	typeof import ("pages/Bio").i18n 
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
				"Media":  {
					"galleryTitle": "MES IMAGES",
					"galleryMiniTitle": "GALERIE",
					"videoTitle": "MES VIDEOS",
					"videoMiniTitle": "RECENTES"
				},
				"Bio": {
					"bioMiniTitle": "BIOGRAPHIE",
					"bioTitle": "MON HISTOIRE",
					"bioText": `Après des études de violon et une scolarité à la maitrise de Radio France puis au CRR de Paris, la soprano Parveen Savart poursuit sa formation au Conservatoire National Supérieur de Musique de Paris dans la classe d'Élène Golgévit. Tout au long de son parcours, elle bénéficie des conseils de personnalités musicales telles que Nathalie Stutzmann, Sofi Jeannin, Inva Mula, Anne Le Bozec, Jeff Cohen, Margreet Hönig, ou encore Regina Werner.
Elle est lauréate de l'Académie des Frivolités Parisiennes ainsi que des Fondations de France, de Tarrazzi et SAFRAN.

Parveen Savart est régulièrement invitée par des ensembles et chefs d'orchestres tels que le Palais Royal, l'Orchestre Colonne avec le chef Marc Korovitch lors d'un récital d'airs d'opéra au Théâtre des Champs-Élysées, ou encore Maxime Pascal avec Le Balcon pour le concert d'inauguration de la Scala Paris où elle interprète les Apparitions de George Crumb avec le pianiste Alphonse Cemin. En septembre 2021, elle se produit avec l'ensemble des Frivolités Parisiennes, dans le cadre de leur festival à l'Orangerie de Bagatelle à Paris. Sur scène, Parveen Savart incarne les rôles d'Eurydice dans Orphée aux Enfers d'Offenbach, Sigismondo dans Arminio de Haendel, Zéphyr dans Psyché de Lully. Elle chante également la Jeune Fille dans l'opéra Jakob Lenz de Wolfgang Rihm au Théâtre de l'Athénée à Paris (dir. Maxime Pascal), repris en 2022 au festival de Salzbourg, puis La Fée dans Cendrillon de Massenet. En 2021, elle incarne le rôle de Miss Jessel dans The Turn of the Screw de Britten ainsi que Gemmira dans Eliogabalo de Cavalli au Festival de musique ancienne de Saorge. 

Plus récemment, Parveen fait ses débuts dans le rôle de Rosalinde dans l'opéra Die Fledermaus de Johann Strauss ainsi que dans le rôle de Zlabya dans le Chat du Rabbin, une création des Frivolités Parisiennes.
Affectionnant tout autant l'oratorio, elle interprète notamment le rôle-titre dans Esther de Haendel, les parties solistes du Requiem de Michael Haydn, ou encore la Servante dans la Passion selon Saint-Marc de Michaël Levinas à la Philharmonie de Paris avec l'Orchestre de Chambre de Paris dirigé par Maxime Pascal. 
Très sensible à l'univers de la mélodie et particulièrement attirée par le répertoire russe, Parveen Savart forme des duos avec les pianistes Gaspard Thomas, Alphonse Cemin et Natallia Yeliseyeva lors de récitals dans des lieux prestigieux tels que l'Auditorium du Grand Palais, le Palais de Tokyo, la Cité de la Musique ou le Musée des Archives à Paris, ou encore la Philharmonie de Minsk. 
Elle travaille actuellement en étroite collaboration avec le compositeur Arthur Lavandier pour la création d'un cycle de mélodies françaises qui sera enregistré par le label du CNSMDP en 2023. 
Prochainement, Parveen Savart se produira dans le rôle de Chimène avec le Concert de la Loge et l’Arcal lyrique pour la création de Chimène de Sacchini. On pourra également l’entendre dans le rôle de Suzanne dans Un mari à la porte d’Offenbach.
					
`
				}
			}
    }
);