from playwright.sync_api import sync_playwright

def verify_mobile_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile viewport size
        page = browser.new_page(viewport={"width": 375, "height": 812})

        # Navigate to the app (using port 3000 as defined in vite.config.ts)
        page.goto("http://localhost:3000")

        # Wait for the page to load
        page.wait_for_load_state("networkidle")

        # Click Explore Event if on landing page
        try:
            explore_btn = page.get_by_text("Explore Event")
            if explore_btn.is_visible(timeout=2000):
                explore_btn.click()
                page.wait_for_timeout(1000)
        except:
            print("Landing page not present or skipped")

        # Screenshot 1: Initial state (menu closed)
        page.screenshot(path="/tmp/mobile_menu_closed.png")
        print("Captured mobile_menu_closed.png")

        # Click the menu button
        menu_button = page.locator("button.p-2").first
        menu_button.click()

        # Wait for animation
        page.wait_for_timeout(500)

        # Screenshot 2: Menu open
        page.screenshot(path="/tmp/mobile_menu_open.png")
        print("Captured mobile_menu_open.png")

        # Verify Sponsors page height fix
        # Navigate to Sponsors page via menu - use the visible one in the mobile menu
        # The desktop one is hidden via CSS but might still be in DOM, so we target the one in the mobile menu container
        # The mobile menu container has class "pb-4 px-4" based on Navigation.tsx
        mobile_menu = page.locator(".md\\:hidden.pb-4.px-4")
        sponsors_link = mobile_menu.get_by_text("Sponsors")
        sponsors_link.click()

        # Wait for navigation
        page.wait_for_timeout(500)

        # Screenshot 3: Sponsors page
        page.screenshot(path="/tmp/sponsors_page.png")
        print("Captured sponsors_page.png")

        browser.close()

if __name__ == "__main__":
    verify_mobile_navigation()
