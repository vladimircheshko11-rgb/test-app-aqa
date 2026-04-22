const { locator } = require('@qavajs/steps-playwright/po.js');

/**
 * Page Object Model (POM): QavaJS Docs > Intro page
 * URL: https://qavajs.github.io/docs/intro
 *
 * Why this POM exists (non-technical friendly):
 * - It centralizes selectors ("where on the page") AND common actions ("what we do")
 * - This keeps Gherkin scenarios readable, while allowing engineers to reuse UI logic
 *
 * Feature mapping:
 * - Feature: Verify "What's new in v2" link and "Steps" dropdown on QavaJS docs
 */
module.exports = class QavaDocsIntroPage {
  /** Root selector used by built-in steps like: "I expect '<PO>' to be visible" */
  selector = 'body';

  // ---------------------------------------------------------------------------
  // Locators (page elements)
  // ---------------------------------------------------------------------------

  /** Navigation link in the docs menu */
  WhatsNewInV2Link = locator('a', { hasText: "What's new in v2" });

  /** "Steps" navigation group toggle (Docusaurus sidebar group button) */
  StepsDropdownToggle = locator('button', { hasText: 'Steps' });

  /**
   * All menu links (we filter these down in helper methods).
   * Note: we intentionally keep this generic to avoid brittle selectors.
   */
  MenuLinks = locator('a.menu__link');

  // ---------------------------------------------------------------------------
  // Helper / abstraction methods (encapsulate interactions for reuse)
  // ---------------------------------------------------------------------------

  /**
   * Returns a locator for a specific Steps package link by visible text.
   * @param {string} packageName e.g. "@qavajs/core"
   */
  stepsPackageLink(packageName) {
    return locator('a.menu__link', { hasText: packageName });
  }

  /**
   * Expands the "Steps" dropdown (safe to call even if already expanded).
   * Can be used from custom steps, if you want higher-level actions than raw clicks.
   */
  async expandStepsDropdown() {
    const expanded = await this.StepsDropdownToggle.getAttribute('aria-expanded');
    if (expanded !== 'true') {
      await this.StepsDropdownToggle.click();
    }
  }

  /** Collapses the "Steps" dropdown (safe to call even if already collapsed). */
  async collapseStepsDropdown() {
    const expanded = await this.StepsDropdownToggle.getAttribute('aria-expanded');
    if (expanded === 'true') {
      await this.StepsDropdownToggle.click();
    }
  }

  /** Clicks "What's new in v2" in the docs menu. */
  async openWhatsNewInV2() {
    await this.WhatsNewInV2Link.click();
  }

  /**
   * Reads visible package names shown under the expanded "Steps" group.
   * Important: this returns only the expected @qavajs/* items, not every sidebar link.
   */
  async getStepsPackageNames() {
    // Ensure the group is expanded so the items are visible and queryable.
    await this.expandStepsDropdown();

    // Collect texts and filter down to only the package entries.
    const allLinksText = await this.MenuLinks.getAllTextContents();
    return allLinksText
      .map(t => t.trim())
      .filter(Boolean)
      .filter(t => t.startsWith('@qavajs/'));
  }
};
