import asyncio
from playwright.async_api import async_playwright

async def verify_changes():
    async with async_playwright() as p:
        # Launch browser
        browser = await p.chromium.launch(headless=True)
        # Create a mobile context
        context = await browser.new_context(
            viewport={'width': 375, 'height': 812},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
        )
        page = await context.new_page()

        print("Navigating to localhost:3000...")
        try:
            await page.goto("http://localhost:3000", timeout=10000)
        except Exception as e:
            print(f"Error navigating: {e}")
            await browser.close()
            return

        # 1. Screenshot Footer Social Icons
        print("Scrolling to footer to check social icons...")
        # Scroll to bottom
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        # Wait a bit for layout
        await asyncio.sleep(1)
        await page.screenshot(path="/tmp/footer_icons.png")
        print("Captured /tmp/footer_icons.png")

        # 2. Test Mobile Menu Animation
        print("Scrolling back to top...")
        await page.evaluate("window.scrollTo(0, 0)")
        await asyncio.sleep(1)

        # Locate the menu button. It's an <button> with a child <svg> (Menu icon)
        # We can look for the button inside the nav that is not the 'Home' link.
        # Or more simply, the button that toggles the menu.
        # In Navigation.tsx: <button ... onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X/> : <Menu/>}</button>
        # We can select by the Menu icon presence.
        menu_button = page.locator("nav button:has(svg.lucide-menu)")

        if await menu_button.count() > 0:
            print("Found menu button, clicking...")
            await menu_button.click()
            # Wait for animation to likely complete or be in progress
            await asyncio.sleep(0.3)
            await page.screenshot(path="/tmp/mobile_menu_animation_open.png")
            print("Captured /tmp/mobile_menu_animation_open.png")

            # Wait for full open
            await asyncio.sleep(1)
            await page.screenshot(path="/tmp/mobile_menu_fully_open.png")
            print("Captured /tmp/mobile_menu_fully_open.png")
        else:
            print("Menu button not found!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_changes())
