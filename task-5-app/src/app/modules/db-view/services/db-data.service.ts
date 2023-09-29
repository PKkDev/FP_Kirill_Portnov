import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { formatDate } from '@angular/common';

@Injectable()
export class DbDataService {

  public getTestData(): Country[] {
    const result: Country[] = [];

    result.push({
      info: {
        language: 'en'
      },
      name: 'USA',
      trips: [
        {
          name: 'trip-1',
          end: formatDate(new Date("2023-09-01"), 'dd.MM.yyyy', 'ru'),
          start: formatDate(new Date("2023-09-26"), 'dd.MM.yyyy', 'ru'),
          persons: [
            {
              fName: 'fName-1',
              lName: 'lName-1',
              age: 15,
              hikers: [
                {
                  name: 'будильник',
                  count: 1
                }
              ]
            },
            {
              fName: 'fName-2',
              lName: 'lName-2',
              age: 25,
              hikers: [
                {
                  name: 'часы',
                  count: 2
                }
              ]
            },
            {
              fName: 'fName-3',
              lName: 'lName-3',
              age: 35,
              hikers: [
                {
                  name: 'лопата',
                  count: 1
                }
              ]
            }
          ]
        },
        {
          name: 'trip-2',
          end: formatDate(new Date("2023-08-05"), 'dd.MM.yyyy', 'ru'),
          start: formatDate(new Date("2023-08-20"), 'dd.MM.yyyy', 'ru'),
          persons: [
            {
              fName: 'fName-4',
              lName: 'lName-4',
              age: 18,
              hikers: [
                {
                  name: 'вейер',
                  count: 2
                }
              ]
            },
            {
              fName: 'fName-5',
              lName: 'lName-5',
              age: 22,
              hikers: [
                {
                  name: 'бутылка',
                  count: 3
                }
              ]
            },
            {
              fName: 'fName-6',
              lName: 'lName-6',
              age: 26,
              hikers: [
                {
                  name: 'сумка',
                  count: 1
                }
              ]
            }
          ]
        }
      ]
    });

    result.push({
      info: {
        language: 'en'
      },
      name: 'Thailand',
      trips: [
        {
          name: 'trip-3',
          end: formatDate(new Date("2023-09-05"), 'dd.MM.yyyy', 'ru'),
          start: formatDate(new Date("2023-09-20"), 'dd.MM.yyyy', 'ru'),
          persons: [
            {
              fName: 'fName-7',
              lName: 'lName-7',
              age: 19,
              hikers: []
            },
            {
              fName: 'fName-8',
              lName: 'lName-8',
              age: 18,
              hikers: []
            }
          ]
        },
        {
          name: 'trip-4',
          end: formatDate(new Date("2023-10-11"), 'dd.MM.yyyy', 'ru'),
          start: formatDate(new Date("2023-10-25"), 'dd.MM.yyyy', 'ru'),
          persons: [
            {
              fName: 'fName-9',
              lName: 'lName-9',
              age: 49,
              hikers: []
            }
          ]
        },
        {
          name: 'trip-5',
          end: formatDate(new Date("2023-11-15"), 'dd.MM.yyyy', 'ru'),
          start: formatDate(new Date("2023-11-29"), 'dd.MM.yyyy', 'ru'),
          persons: [
            {
              fName: 'fName-10',
              lName: 'lName-10',
              age: 50,
              hikers: [
                {
                  name: 'сумка',
                  count: 1
                },
                {
                  name: 'лопата',
                  count: 1
                }
              ]
            }
          ]
        }
      ]
    });

    return result;
  }

}
