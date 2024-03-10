import { expect, test } from '@playwright/test'

test.describe('Locale Picker Component', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to the page where the component is rendered
		await page.goto('/')
	})

	test('should have the default selected language as French', async ({
		page,
	}) => {
		// Check if the default selected language is 'fr'
		const selectedLocale = await page.$eval(
			'locale-picker select#locale-picker',
			select => select.value
		)
		expect(selectedLocale).toBe('fr')

		// Check if the displayed text for the selected option is 'Français'
		const selectedOptionText = await page.$eval(
			'locale-picker select#locale-picker option:checked',
			option => option.textContent
		)
		expect(selectedOptionText).toBe('Français')
	})

	test('should render the locale picker with options', async ({ page }) => {
		// Check if the locale picker is rendered
		const localePicker = await page.$('locale-picker select#locale-picker')
		expect(localePicker).not.toBeNull()

		// Check if the locale picker has options
		const optionsCount = await localePicker.$$eval(
			'option',
			options => options.length
		)
		expect(optionsCount).toBeGreaterThan(0)
	})

	test('should have the default selected language as French and display "Sélecteur de Langue"', async ({
		page,
	}) => {
		// Check if the default selected language is 'fr'
		const selectedLocale = await page.$eval(
			'locale-picker select#locale-picker',
			select => select.value
		)
		expect(selectedLocale).toBe('fr')

		// Check if the displayed text for the selected option is 'Français'
		const selectedOptionText = await page.$eval(
			'locale-picker select#locale-picker option:checked',
			option => option.textContent
		)
		expect(selectedOptionText).toBe('Français')

		// Check if the <h3> title is "Sélecteur de Langue"
		const h3Title = await page.$eval('locale-picker h3', h3 => h3.textContent)
		expect(h3Title).toBe('Sélecteur de Langue')
	})

	test('should change locale on selection and update the <h3> title', async ({
		page,
	}) => {
		// Select a locale from the picker
		await page.selectOption('locale-picker select#locale-picker', 'en')

		// Check if the selected locale is 'English'
		const selectedLocale = await page.$eval(
			'locale-picker select#locale-picker',
			select => select.value
		)
		expect(selectedLocale).toBe('en')

		// Check if the <h3> title changes to "Locale Picker"
		const h3Title = await page.$eval('locale-picker h3', h3 => h3.textContent)
		expect(h3Title).toBe('Locale Picker')
	})

	test('should change locale and title only for the first group', async ({
		page,
	}) => {
		// Select a locale from the picker
		await page.selectOption('locale-picker select#locale-picker', 'en')

		// Check if the selected locale is 'English'
		const selectedLocale = await page
			.locator('locale-picker select#locale-picker')
			.last()
			.inputValue()
		expect(selectedLocale).toBe('en')

		// Check if the <h3> title changes to "Sélecteur de Langue"
		const h3Title = await page.locator('locale-picker h3').last().textContent()
		expect(h3Title).toBe('Sélecteur de Langue')
	})
})
