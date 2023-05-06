import type { ConcertSectionProps } from "components/ConcertSection";
export type ConcertProps = Omit<ConcertSectionProps, 
	"className" |
	"buttonLabel" |
	"link"
	>;

export const concerts: {
	fr: ConcertProps;
	href?: string;
}[] = [
	{
		"fr": {
				"date": "Mardi 25 Avril",
				"hour": "12:00",
				"address": "14 rue des moutons égorgés 23456 Chantilly sur ognion",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		},
		"href": "https://example.com"
	},
	{
		"fr": {
				"date": "Mardi 25 Avril",
				"hour": "12:00",
				"address": "14 rue des moutons égorgés 23456 Chantilly sur ognion",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		},
		"href": "https://example.com"
	},
	{
		"fr": {
				"date": "Mardi 25 Avril",
				"hour": "12:00",
				"address": "14 rue des moutons égorgés 23456 Chantilly sur ognion",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		},
		"href": "https://example.com"
	},
	{
		"fr": {
				"date": "Mardi 25 Avril",
				"hour": "12:00",
				"address": "14 rue des moutons égorgés 23456 Chantilly sur ognion",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		},
		"href": "https://example.com"
	},

]