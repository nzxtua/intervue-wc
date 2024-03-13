import { createI18n } from 'vue-i18n'
import * as messages from './locale'

/**
 * Initializes the i18n library with the specified configuration.
 *
 * @return {I18n} The initialized i18n instance.
 */
export const i18nInit = () =>
	createI18n<false>({
		legacy: false,
		globalInjection: false,
		locale: 'fr',
		fallbackLocale: 'en',
		messages,
	})

export type Ti18n = ReturnType<typeof i18nInit>
