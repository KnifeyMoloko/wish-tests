import { test, expect } from '../fixtures/base';

test('create wishlist flow', async ({ overviewPage }) => {
   await overviewPage.goto();
   await overviewPage.createWishlistButton.click();
   await overviewPage.fillCreateOrEditWishlistInput("Listicle");
   await overviewPage.createWishlistAddAdditionalDetailsButton.click();
   await overviewPage.setCreatedWishlistVisibilityToHidden();
   await overviewPage.createWishlistSubmitButton.click();
   await overviewPage.verifyListicleWishlistCard();
})
