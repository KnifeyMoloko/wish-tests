import { test, expect } from '@playwright/test';

const overviewURL = 'https://onskeskyen.dk/overview'

test('basic overview test', async ({ page }) => {
    const userHeaderName = page.getByText("Q.A. Tester")
    const addWishlistSidePlusButton = page.getByTestId('plus-button').nth(0)
    const createWishlistButton = page.getByTestId('plus-button').nth(1)
    const wishlistCarousel = page.getByTestId('carouselContainer').nth(0)
    const inspirationCarousel = page.getByTestId('carouselContainer').nth(1)
    const seasonalTrendsCarousel = page.getByTestId('carouselContainer').nth(2)
    const brandsCarousel = page.getByTestId('carouselContainer').nth(3)
    const trendingCarousel = page.getByTestId('carouselContainer').nth(4)
    const eventsCarousel = page.getByTestId('carouselContainer').nth(5)
    

    const expectedWishlistCarouselText = /My wishlists/
    const expectedInspirationCarouselText = /Inspiration/
    const expectedTrendsCarouselText = /Seasonal trends/
    const expectedBrandsCarouselText = /Brands/
    const expectedTrendingCarouselText = /Trending/
    const expectedEventsCarouselText = /Events/


    await page.goto(overviewURL)
    await page.waitForURL(overviewURL, {waitUntil: 'load'})
    
    await expect(userHeaderName).toBeVisible()
    await expect(addWishlistSidePlusButton).toBeVisible()
    await expect(createWishlistButton).toBeVisible()

    await expect(wishlistCarousel).toHaveText(expectedWishlistCarouselText)
    await expect(wishlistCarousel.locator('.slick-list')).toBeVisible();
    await expect(wishlistCarousel.locator('.slick-slide').first()).toBeVisible();

    await expect(inspirationCarousel).toHaveText(expectedInspirationCarouselText)
    await expect(inspirationCarousel.locator('.slick-list')).toBeVisible();
    await expect(inspirationCarousel.locator('.slick-slide').first()).toBeVisible();

    await expect(seasonalTrendsCarousel).toHaveText(expectedTrendsCarouselText)
    await expect(seasonalTrendsCarousel.locator('.slick-list')).toBeVisible();
    await expect(seasonalTrendsCarousel.locator('.slick-slide').first()).toBeVisible();

    await expect(brandsCarousel).toHaveText(expectedBrandsCarouselText)
    await expect(brandsCarousel.locator('.slick-list')).toBeVisible();
    await expect(brandsCarousel.locator('.slick-slide').first()).toBeVisible();

    await expect(trendingCarousel).toHaveText(expectedTrendingCarouselText)
    await expect(trendingCarousel.locator('.slick-list')).toBeVisible();
    await expect(trendingCarousel.locator('.slick-slide').first()).toBeVisible();

    await expect(eventsCarousel).toHaveText(expectedEventsCarouselText)
    await expect(eventsCarousel.locator('.slick-list')).toBeVisible();
    await expect(eventsCarousel.locator('.slick-slide').first()).toBeVisible();
});
