# qavajs
## Docs
https://qavajs.github.io/docs/intro

## POM ↔ Feature mapping
- `features/docs-intro.feature` → `page_object/QavaDocsIntroPage.js`
  - Business intent: ensure users can find "What's new in v2" and validate the list of Step packages
  - Technical mapping:
    - "What's new in v2" link checks → `QavaDocsIntroPage.WhatsNewInV2Link` and `QavaDocsIntroPage.openWhatsNewInV2()`
    - "Steps" dropdown checks → `QavaDocsIntroPage.StepsDropdownToggle`, `QavaDocsIntroPage.expandStepsDropdown()`
    - Package list checks → `QavaDocsIntroPage.getStepsPackageNames()` / `QavaDocsIntroPage.stepsPackageLink(name)`

## Install Modules
```bash
npm install
```
## Execute Tests
```bash
npx qavajs run --config config.js
```
## Project Structure
- [config](./config.js) - main config
- [features](./features) - test cases
- [memory](./memory) - test data
- [page_object](./page_object) - page objects
- [step_definitions](./step_definitions) - project specific step definitions
- [report](./report) - reports
