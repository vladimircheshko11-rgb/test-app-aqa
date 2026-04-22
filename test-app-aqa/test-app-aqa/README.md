# qavajs
## Docs
https://qavajs.github.io/docs/intro

## POM ↔ Feature mapping
- `features/docs-intro.feature` → `page_object/QavaDocsIntroPage.js`
  - verifies "What's new in v2" link and "Steps" dropdown contents on QavaJS docs intro page

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
