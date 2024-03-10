const { test, expect } = require('@playwright/test')

test.describe('Counter Components', () => {
	let page

	test.beforeEach(async ({ browser }) => {
		const context = await browser.newContext()
		page = await context.newPage()
	})

	test('metrics display shows the counter value', async () => {
		await page.goto('/')
		const counterValue = await page
			.locator('metrics-display #counter-value')
			.first()
			.textContent()
		expect(counterValue).toContain('0')
	})

	test('increment and decrement buttons change the counter value', async () => {
		await page.goto('/')

		const incrementButton = await page
			.locator('control-buttons button#plus-button')
			.first()
		const decrementButton = await page
			.locator('control-buttons button#minus-button')
			.first()

		await incrementButton.click()
		await incrementButton.click()
		await incrementButton.click()
		await decrementButton.click()
		await decrementButton.click()
		await decrementButton.click()
		await decrementButton.click()
		await decrementButton.click()

		const counterValue = await page
			.locator('metrics-display #counter-value')
			.first()
			.textContent()
		expect(counterValue).toContain('-2')
	})

	test('reset button resets the counter', async () => {
		await page.goto('/')
		const incrementButton = await page
			.locator('control-buttons button#plus-button')
			.first()

		await incrementButton.click()
		await incrementButton.click()
		await incrementButton.click()

		const resetButton = await page
			.locator('control-pane button#reset-button')
			.first()

		await resetButton.click()

		const counterValue = await page
			.locator('metrics-display #counter-value')
			.first()
			.textContent()

		expect(counterValue).toContain('0')
	})

	test('increment and decrement buttons change only the first group', async () => {
		await page.goto('/')

		const incrementButtonFirst = await page
			.locator('control-buttons button#plus-button')
			.first()
		await incrementButtonFirst.click()
		await incrementButtonFirst.click()
		await incrementButtonFirst.click()

		const decrementButtonLast = await page
			.locator('control-buttons button#minus-button')
			.last()
		await decrementButtonLast.click()
		await decrementButtonLast.click()
		await decrementButtonLast.click()
		await decrementButtonLast.click()
		await decrementButtonLast.click()

		const counterValueFirst = await page
			.locator('metrics-display #counter-value')
			.first()
			.textContent()
		expect(counterValueFirst).toContain('3')

		const resetButton = await page
			.locator('control-pane button#reset-button')
			.first()

		await resetButton.click()

		const counterValue = await page
			.locator('metrics-display #counter-value')
			.first()
			.textContent()

		expect(counterValue).toContain('0')

		const counterValueLast = await page
			.locator('metrics-display #counter-value')
			.last()
			.textContent()
		expect(counterValueLast).toContain('-5')
	})
})
