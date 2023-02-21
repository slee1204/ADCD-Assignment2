import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('testing for navbar colours on iPhone XR',async({ page }) => {
        await page.goto('http://localhost:3000/benNjerry')

        const navContainer = page.locator('.navbar');

        const checkingBackgroundColour = await navContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(255, 250, 205)");
    })

    test("Should have 2 columns of grid", async ({ page }) => {
        await page.goto('http://localhost:3000/benNjerry')

        const gridContainer = page.locator('.grid');
        const checkingGrid = await gridContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("grid-template-columns")
        })
        console.log(checkingGrid);
        expect(checkingGrid).toBe("178.305px 178.305px");
    })
})

test.describe("My List test", () => {
    test("Should have 0 item in the beginning", async ({ page }) => {
        await page.goto('http://localhost:3000/benNjerry');
        await expect(page.locator('.lists')).toHaveCount(0);
    });
});