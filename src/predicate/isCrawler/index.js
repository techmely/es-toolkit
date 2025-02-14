export function isCrawler() {
    return (typeof window !== "undefined" &&
        (!("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)));
}
