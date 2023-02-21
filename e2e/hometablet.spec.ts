import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180}
})

test.describe("Testing for home tablet", () => {
    test("Checking to see if two buttons are in the main area", async ({ page }) => {
        await page.goto('http://localhost:3000')

        await expect(page.locator('.main > .btn')).toHaveCount(2)

    })
})