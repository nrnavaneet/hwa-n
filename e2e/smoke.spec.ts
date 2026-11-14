import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", heading: /A cinema/i },
  { path: "/craft", heading: /performance/i },
  { path: "/making", heading: /From hide/i },
  { path: "/makers", heading: /families/i },
  { path: "/stage", heading: /Move the lamp/i },
  { path: "/learn", heading: /Your first/i },
  { path: "/sources", heading: /Where this/i },
];

for (const route of routes) {
  test(`${route.path} renders its heading without console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto(route.path, { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { level: 1 })).toContainText(route.heading);
    expect(errors).toEqual([]);
  });
}

test("an unknown route shows the 404 scene", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/never staged/i);
});
