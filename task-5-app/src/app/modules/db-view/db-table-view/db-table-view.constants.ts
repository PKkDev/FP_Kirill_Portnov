import { TableType } from "../model/types";

export const getColumns = (type: TableType): string[] => {
    switch (type) {
        case TableType.Country:
            return ['name'];
        case TableType.CountryInfo:
            return ['language'];
        case TableType.Trip:
            return ['name', 'start', 'end'];
        case TableType.Persona:
            return ['fName', 'lName', 'age'];
        case TableType.Hiker:
            return ['name', 'count'];
        default: return [];
    }
}

export const GetTitle = (type: TableType): string => {
    switch (type) {
        case TableType.Country:
            return 'Страны';
        case TableType.CountryInfo:
            return 'Информация по стране';
        case TableType.Trip:
            return 'Туры';
        case TableType.Persona:
            return 'Туристы';
        case TableType.Hiker:
            return 'Вещи';
        default: return '';
    }
}