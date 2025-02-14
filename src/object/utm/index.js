export function getUtmSourceUrl(basePath, { utmSource, utmMedium, utmCampaign, utmTerm, utmContent }) {
    if (!basePath) {
        throw new Error(`Invalid basePath: ${basePath}`);
    }
    if ([utmSource, utmCampaign, utmMedium].some((utm) => !utm)) {
        throw new Error("Invalid params! Source, medium, and campaign are required fields, please pass correct params.");
    }
    try {
        const url = new URL(basePath);
        url.searchParams.append("utm_source", utmSource);
        url.searchParams.append("utm_medium", utmMedium);
        url.searchParams.append("utm_campaign", utmCampaign);
        if (utmContent)
            url.searchParams.append("utm_content", utmContent);
        if (utmTerm)
            url.searchParams.append("utm_term", utmTerm);
        return url.toString();
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
