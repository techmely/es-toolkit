export type UtmSourceParams = {
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    utmContent: string;
    utmTerm?: string;
};
export declare function getUtmSourceUrl(basePath: string, { utmSource, utmMedium, utmCampaign, utmTerm, utmContent }: UtmSourceParams): string;
