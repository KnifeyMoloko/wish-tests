Tech task:
    Visit https://onskeskyen.dk
    Create an account.
    Using Playwright (TypeScript), write 2-3 automated tests that you consider the most important ones.

As a bonus:
    Set up CI workflow (e.g. GitHub Actions)
    Implement screenshot comparison assertions
    Handle authentication
    Use Playwright fixtures
    Enable parallel run

============================================================================================================
Done:
  - created 3 tests: an Overview page test with element assertions, a visual comparison test for a test 
  wishlist, a create-a-wishlist-flow test
  - created POM for Overview page
  - created a fixtrure for the Overview POM
  - setup project to run tests in parallel
  - used the global-setup pattern for shared auth steps
  - setup GitHub Action for automated CI tests
