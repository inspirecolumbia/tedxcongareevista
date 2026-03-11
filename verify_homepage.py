from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="homepage_with_date.png")
        print("Saved screenshot to homepage_with_date.png")
        browser.close()

if __name__ == "__main__":
    run()
