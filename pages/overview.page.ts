import { Page, Locator, expect } from '@playwright/test';

export class OverviewPage {
    readonly page: Page;
    readonly url = 'https://onskeskyen.dk/overview';

    // Locators
    readonly userHeaderName: Locator;
    readonly addWishlistSidePlusButton: Locator;
    readonly createWishlistButton: Locator;
    readonly wishlistCarousel: Locator;
    readonly inspirationCarousel: Locator;
    readonly seasonalTrendsCarousel: Locator;
    readonly brandsCarousel: Locator;
    readonly trendingCarousel: Locator;
    readonly eventsCarousel: Locator;

    // Expected regexes
    readonly expectedWishlistCarouselText = /My wishlists/;
    readonly expectedInspirationCarouselText = /Inspiration/;
    readonly expectedTrendsCarouselText = /Seasonal trends/;
    readonly expectedBrandsCarouselText = /Brands/;
    readonly expectedTrendingCarouselText = /Trending/;
    readonly expectedEventsCarouselText = /Events/;

    constructor(page: Page) {
        this.page = page;
        this.userHeaderName = page.getByText("Q.A. Tester");
        this.addWishlistSidePlusButton = page.getByTestId('plus-button').nth(0);
        this.createWishlistButton = page.getByTestId('plus-button').nth(1);
        this.wishlistCarousel = page.getByTestId('carouselContainer').nth(0);
        this.inspirationCarousel = page.getByTestId('carouselContainer').nth(1);
        this.seasonalTrendsCarousel = page.getByTestId('carouselContainer').nth(2);
        this.brandsCarousel = page.getByTestId('carouselContainer').nth(3);
        this.trendingCarousel = page.getByTestId('carouselContainer').nth(4);
        this.eventsCarousel = page.getByTestId('carouselContainer').nth(5);
    }

    async goto() {
        await this.page.goto(this.url);
        await this.page.waitForURL(this.url, { waitUntil: 'load' });
    }

    async verifyHeaderAndButtons() {
        await expect(this.userHeaderName).toBeVisible();
        await expect(this.addWishlistSidePlusButton).toBeVisible();
        await expect(this.createWishlistButton).toBeVisible();
    }

    async verifyCarousel(carousel: Locator, expectedText: RegExp) {
        await expect(carousel).toHaveText(expectedText);
        await expect(carousel.locator('.slick-list')).toBeVisible();
        await expect(carousel.locator('.slick-slide').first()).toBeVisible();
    }

    async verifyAllCarousels() {
        await this.verifyCarousel(this.wishlistCarousel, this.expectedWishlistCarouselText);
        await this.verifyCarousel(this.inspirationCarousel, this.expectedInspirationCarouselText);
        await this.verifyCarousel(this.seasonalTrendsCarousel, this.expectedTrendsCarouselText);
        await this.verifyCarousel(this.brandsCarousel, this.expectedBrandsCarouselText);
        await this.verifyCarousel(this.trendingCarousel, this.expectedTrendingCarouselText);
        await this.verifyCarousel(this.eventsCarousel, this.expectedEventsCarouselText);
    }
}
