import { createI18n } from 'vue-i18n'
import * as messages from './locale'

export const i18nInit = () =>
	createI18n<false>({
		legacy: false,
		globalInjection: false,
		locale: 'fr',
		fallbackLocale: 'en',
		messages,
	})

export type Ti18n = ReturnType<typeof i18nInit>
