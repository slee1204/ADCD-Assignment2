import { test, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlBj = "http://localhost:3000/benNjerry";
let urlHd = "http://localhost:3000/haagen_dazs";

test.beforeAll(async () => {
  console.log('Before tests');
});

test.afterAll(async () => {
  console.log('After tests');
});

test.describe('Header area', () => {
  test('The title tag', async({ page }) => {
      await page.goto(urlHome)

      await expect(page).toHaveTitle('Find Icecream');
  })
})

test.describe('Main content test', () => {
  test('Should contain a heading Find a variety of Icecream flavours!', async ({ page }) =>{
      await page.goto(urlHome);
      await expect(page.locator('h1')).toContainText("Find a variety of Icecream flavours!");
  })
})