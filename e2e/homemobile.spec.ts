import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('testing for colours on iPhone XR',async({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('body');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(252, 250, 235)");
    })

    test('testing for font size on iPhone XR',async({ page }) => {
        await page.goto('http://localhost:3000/')

        const headerContainer = page.locator('.header > h1');

        const checkingFontSize = await headerContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingFontSize);
        expect(checkingFontSize).toBe("32px");
    })
})