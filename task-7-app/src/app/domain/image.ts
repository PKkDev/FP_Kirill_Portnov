export interface ImageResultDto {
    total: number;
    total_pages: number;
    results: ImageDto[];
}
export interface ImageDto {
    id: string;
    urls: UrlsDto;
    links: LinksDto;
}

export interface UrlsDto {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface LinksDto {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

