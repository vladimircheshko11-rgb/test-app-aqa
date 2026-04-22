const { locator } = require('@qavajs/steps-playwright/po.js');

/**
 * Page Object: QavaJS Docs > Intro page
 * URL: https://qavajs.github.io/docs/intro
 *
 * Mapped feature (proposed): Verify "What's new in v2" link and "Steps" dropdown on QavaJS docs
 * Scenarios covered:
 *  - "What's new in v2" link is present and clickable
 *  - Clicking "What's new in v2" opens the correct page and title matches expected
 *  - "Steps" dropdown is present and expands on click
 *  - Clicking "Steps" dropdown displays a list of packages
 *  - The "Steps" dropdown package list must exactly match the expected package list
 *  - Negative/edge scenarios (presence, clickability, duplicates) via assertions in steps
 */
module.exports = class QavaDocsIntroPage {
  /** Root selector used by built-in steps like "I expect '<PO>' to be visible" */
  selector = 'body';

  /** Navigation link in the left menu (or top menu) */
  WhatsNewInV2Link = locator('a', { hasText: "What's new in v2" });

  /**
   * "Steps" navigation group toggle.
   * Docusaurus renders this as a button with aria-controls / aria-expanded.
   */
  StepsDropdownToggle = locator('button', { hasText: 'Steps' });

  /** List items inside the expanded "Steps" group */
  StepsDropdownItems = locator('a.menu__link');
};
