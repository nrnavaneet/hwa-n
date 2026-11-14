import { expect, test } from "@playwright/test";

test("the stage pose controls change the figure", async ({ page }) => {
  await page.goto("/stage");
  const dance = page.getByRole("button", { name: "Dance" });
  await dance.click();
  await expect(dance).toHaveAttribute("aria-pressed", "true");

  const arm = page.getByRole("slider").first();
  await arm.focus();
  await arm.press("ArrowRight");
  await expect(page.getByText(/Pose custom/i)).toBeAttached();
});

test("the lamp can be moved with the keyboard", async ({ page }) => {
  await page.goto("/stage");
  const lamp = page.getByRole("button", { name: /The lamp/i });
  await lamp.focus();
  const before = await lamp.getAttribute("aria-label");
  await lamp.press("ArrowLeft");
  await expect(lamp).not.toHaveAttribute("aria-label", before ?? "");
});

test("the learn checklist saves progress", async ({ page }) => {
  await page.goto("/learn");
  const first = page.getByRole("checkbox").first();
  await first.check();
  await expect(page.getByText("1 / 7 done")).toBeVisible();
  await page.reload();
  await expect(page.getByText("1 / 7 done")).toBeVisible();
});
