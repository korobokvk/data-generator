import { Injectable } from '@nestjs/common'

export interface RandomData {
  delimiter: Number
  data: Array<{ label: String; value: Number }>
}
@Injectable()
export class AppService {
  generateRandomData(): RandomData {
    return {
      delimiter: Math.round(Math.random() * 10),
      data: [
        {
          label: 'lab1',
          value: Math.round((Math.random() + 1) * 10),
        },
        {
          label: 'lab2',
          value: Math.round((Math.random() + 1) * 10),
        },
        {
          label: 'lab3',
          value: Math.round((Math.random() + 1) * 10),
        },
        {
          label: 'lab4',
          value: Math.round((Math.random() + 1) * 10),
        },
        {
          label: 'lab5',
          value: Math.round((Math.random() + 1) * 10),
        },
      ],
    }
  }

  getRandomData(): RandomData {
    return this.generateRandomData()
  }
}
