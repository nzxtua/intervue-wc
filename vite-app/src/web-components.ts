import { defineCustomElement } from 'vue'

import ControlButtons from './components/ControlButtons.ce.vue'
import ControlPane from './components/ControlPane.ce.vue'
import I18nHost from './components/I18nHost.ce.vue'
import LocalePicker from './components/LocalePicker.ce.vue'
import MetricsDisplay from './components/MetricsDisplay.ce.vue'

const I18nHostElement = defineCustomElement(I18nHost)
const LocalePickerElement = defineCustomElement(LocalePicker)
const MetricsDisplayElement = defineCustomElement(MetricsDisplay)
const ControlPaneElement = defineCustomElement(ControlPane)
const ControlButtonsElement = defineCustomElement(ControlButtons)

// Registers the web components.
export const registerWebComponents = () => {
	customElements.define('i18n-host', I18nHostElement)
	customElements.define('locale-picker', LocalePickerElement)
	customElements.define('metrics-display', MetricsDisplayElement)
	customElements.define('control-pane', ControlPaneElement)
	customElements.define('control-buttons', ControlButtonsElement)
}
