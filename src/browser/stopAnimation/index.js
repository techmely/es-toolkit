export function stopAnimations(el) {
    return Promise.all(el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
            const handleAnimationEvent = requestAnimationFrame(resolve);
            animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
            animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
            animation.cancel();
            cancelAnimationFrame(handleAnimationEvent);
        });
    }));
}
