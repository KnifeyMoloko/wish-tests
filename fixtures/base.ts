import { test as base, expect } from '@playwright/test';
import { OverviewPage } from '../pages/overview.page';

type Fixtures = {
  overviewPage: OverviewPage;
};

export const test = base.extend<Fixtures>({
  overviewPage: async ({ page }, use) => {
    const overviewPage = new OverviewPage(page);
    await use(overviewPage);
  },
});

export { expect };
