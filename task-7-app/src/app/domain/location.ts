export interface LocationDto {
    name: string;
    local_names: LocalNamesDto;
    lat: number;
    lon: number;
    country: string;
    state: string;
};

export interface LocalNamesDto {
    ru: string;
}