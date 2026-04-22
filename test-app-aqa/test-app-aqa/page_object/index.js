const { locator } = require("@qavajs/steps-playwright/po.js");
const QavaHomePage = require("./QavaHomePage");
const QavaDocsIntroPage = require("./QavaDocsIntroPage");

module.exports = class App {
  QavaHomePage = locator.as(QavaHomePage);

  // Feature: Verify "What's new in v2" link and "Steps" dropdown on QavaJS docs
  QavaDocsIntroPage = locator.as(QavaDocsIntroPage);
}
