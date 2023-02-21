import { test, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlBj = "http://localhost:3000/benNjerry";
let urlHd = "http://localhost:3000/haagen_dazs";

test.beforeAll(async () => {
  console.log("Before tests");
});

test.afterAll(async () => {
  console.log("After tests");
});

test.describe('Navigation test', () => {
  test('Link Tag on navigation', async ({ page }) => {
    await page.goto(urlBj);

    await page.click('text=Home')
    await expect(page).toHaveURL('http://localhost:3000/')
    await page.click('text=Haagen Dazs')
    await expect(page).toHaveURL('http://localhost:3000/haagen_dazs')
  });
});



test.describe("Main content test", () => {
  test("Should have 2 headings in header", async ({ page }) => {
    await page.goto('http://localhost:3000/benNjerry');
    await expect(page.locator('.header > h1')).toHaveCount(1);
    await expect(page.locator('.header > h3')).toHaveCount(1);
  });
});
