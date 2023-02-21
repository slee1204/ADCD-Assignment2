import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180}
})

test.describe("Testing for home tablet", () => {
    test("Checking the margin of the grid", async ({ page }) => {
        await page.goto('http://localhost:3000/benNjerry')

        const gridContainer = page.locator('.grid');
        const checkingMarginSize = await gridContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin-bottom")
        })
        console.log(checkingMarginSize);
        expect(checkingMarginSize).toBe("120px");
    })
    test("Checking grid template", async ({ page }) => {
        await page.goto('http://localhost:3000/benNjerry')

        const gridContainer = page.locator('.grid');
        const checkingGrid = await gridContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("grid-template-columns")
        })
        console.log(checkingGrid);
        expect(checkingGrid).toBe("240px 240px 240px");
    })
})