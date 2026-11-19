import { expect, test } from "@playwright/test"

test("home renders the portfolio", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1, name: "Krishna Kumar Tummala" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Featured projects" })).toBeVisible()
  await expect(page.getByRole("link", { name: "GitHub" })).toHaveCount(0)
})

test("theme toggle stores the light theme", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("html")).toHaveClass(/dark/)
  await page.getByRole("button", { name: "Switch to light theme" }).click()
  await expect(page.locator("html")).toHaveClass(/light/)
  await expect(page.getByRole("button", { name: "Switch to dark theme" })).toHaveAttribute("aria-pressed", "false")
  await expect.poll(() => page.evaluate(() => localStorage.getItem("theme"))).toBe("light")
})

test("mobile menu jumps to about", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  await page.getByRole("button", { name: "Open menu" }).click()
  await page.getByRole("dialog").getByRole("link", { name: "About" }).click()
  await expect(page).toHaveURL(/#about/)
  await expect(page.locator("#about")).toBeInViewport()
})

test("project filter is shareable", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("radio", { name: "Backend" }).click()
  await expect(page).toHaveURL(/focus=backend/)
  const projects = page.locator("#projects")
  await expect(projects.getByRole("link", { name: /Package Tracking System/ })).toBeVisible()
  await expect(projects.getByRole("link", { name: /Automated CI\/CD Pipeline/ })).toHaveCount(0)
})

test("interview project opens its system design", async ({ page }) => {
  await page.goto("/")
  await page.locator("#projects").getByRole("link", { name: /Interview Management Platform/ }).click()
  await expect(page.getByRole("heading", { level: 1, name: "Interview Management Platform" })).toBeVisible()
  await page.getByRole("link", { name: "View system design" }).click()
  await expect(page.getByRole("heading", { level: 1, name: /system design/i })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Request path" })).toBeVisible()
})

test("contact form explains invalid fields", async ({ page }) => {
  await page.goto("/#contact")
  await page.getByRole("button", { name: "Send message" }).click()
  await expect(page.getByText("Enter your name.")).toBeVisible()
  await expect(page.getByText("Enter a valid email address.")).toBeVisible()
})
