import { declareComponentKeys, useTranslation } from "i18n";

export function Home() {
	const { t } = useTranslation({ Home })
	return <div>{t("title")}</div>
}

export const { i18n } = declareComponentKeys<
	"title"
>()({ Home });