import { DefineComponent, defineCustomElement } from 'vue'
import * as components from './components'

interface Components {
	[key: string]: DefineComponent
}

/**
 * Converts a PascalCase string to kebab-case.
 *
 * @param {string} str - The PascalCase string to be converted to kebab-case
 * @return {string} The kebab-case string
 */
const convertPascalToKebab = (str: string): string =>
	str.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase()

/**
 * Register web components for custom elements.
 */
const registerWebComponents = () => {
	for (const componentName in components) {
		if (Object.prototype.hasOwnProperty.call(components, componentName)) {
			customElements.define(
				convertPascalToKebab(componentName),
				defineCustomElement(
					(components as unknown as Components)[componentName]
				)
			)
		}
	}
}

export { registerWebComponents }
