Feature: Verify "What's new in v2" link and "Steps" dropdown on QavaJS docs
  In order to ensure users can access updated information and package listings reliably
  As a test automation engineer
  I want automated checks (using QavaJS library steps) that validate the "What's new in v2" link and the "Steps" dropdown on https://qavajs.github.io/docs/intro

  Background:
    Given I open 'https://qavajs.github.io/docs/intro' url

  Scenario: "What's new in v2" link is present and clickable (C: Context, T: Test Data)
    Then I expect 'Qava Docs Intro Page > Whats New In V2 Link' to be visible
    And I expect 'Qava Docs Intro Page > Whats New In V2 Link' to be enabled

  Scenario: Clicking "What's new in v2" opens the correct page and title matches expected (C,R,E,A,T)
    When I click 'Qava Docs Intro Page > Whats New In V2 Link'
    Then I expect page title to equal 'What\'s new in v2'

  Scenario: "Steps" dropdown is present and expands on click (C,R,E)
    Then I expect 'Qava Docs Intro Page > Steps Dropdown Toggle' to be visible
    And I click 'Qava Docs Intro Page > Steps Dropdown Toggle'
    And I expect 'Qava Docs Intro Page > Steps Dropdown Toggle' to be enabled

  Scenario: Clicking the "Steps" dropdown displays a list of packages (C,R,E)
    When I click 'Qava Docs Intro Page > Steps Dropdown Toggle'
    Then I expect 'Qava Docs Intro Page > Steps Dropdown Items' list to contain:
      | @qavajs/core       |
      | @qavajs/playwright |
      | @qavajs/webdriver  |
      | @qavajs/selenide   |
      | @qavajs/cucumber   |

  Scenario: The "Steps" dropdown package list must exactly match the expected package list (C,R,E,T)
    When I click 'Qava Docs Intro Page > Steps Dropdown Toggle'
    Then I expect 'Qava Docs Intro Page > Steps Dropdown Items' list to equal:
      | @qavajs/core       |
      | @qavajs/playwright |
      | @qavajs/webdriver  |
      | @qavajs/selenide   |
      | @qavajs/cucumber   |
