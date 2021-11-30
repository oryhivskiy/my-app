export const indicatorsAll = [
  {
    id: 1,
    name: 'Відношення дефіциту державного бюджету до ВВП, %',
    criticalValue: 3,
    preCriticalValue: 2,
    normalValue: 1,
    weight: 0.064,
    economicsWeight: 0.11127,
    data: [
      {
        year: '2015',
        value: 2.3,
      },
      {
        year: '2016',
        value: 2.9,
      },
      {
        year: '2017',
        value: 1.6,
      },
      {
        year: '2018',
        value: 1.7,
      },
      {
        year: '2019',
        value: 2,
      },
      {
        year: '2020',
        value: 2.1,
      },
    ],
  },
  {
    id: 2,
    name: 'Відношення обсягу державного боргу та гарантованого державою боргу до ВВП, %',
    criticalValue: 60,
    preCriticalValue: 50,
    normalValue: 30,
    weight: 0.077,
    economicsWeight: 0.11127,
    data: [
      {
        year: '2015',
        value: 79.1,
      },
      {
        year: '2016',
        value: 80.9,
      },
      {
        year: '2017',
        value: 71.8,
      },
      {
        year: '2018',
        value: 60.9,
      },
      {
        year: '2019',
        value: 50.3,
      },
      {
        year: '2020',
        value: 54.5,
      },
    ]
  },
  {
    id: 3,
    name: 'Обсяг валового зовнішнього боргу, % від ВВП',
    criticalValue: 70,
    preCriticalValue: 55,
    normalValue: 40,
    weight: 0.053,
    economicsWeight: 0.11127,
    data: [
      {
        year: '2015',
        value: 129.3,
      },
      {
        year: '2016',
        value: 120.5,
      },
      {
        year: '2017',
        value: 102.9,
      },
      {
        year: '2018',
        value: 87.6,
      },
      {
        year: '2019',
        value: 79.2,
      },
      {
        year: '2020',
        value: 75.3,
      },
    ]
  },
  {
    id: 4,
    name: 'Зміна обмінного курсу гривні до долара США (у середньому за період),% до попереднього року',
    criticalValue: 110,
    preCriticalValue: 90,
    normalValue: 75,
    weight: 0.131,
    economicsWeight: 0.11127,
    data: [
      {
        year: '2015',
        value: 182.8,
      },
      {
        year: '2016',
        value: 117,
      },
      {
        year: '2017',
        value: 104.1,
      },
      {
        year: '2018',
        value: 102.3,
      },
      {
        year: '2019',
        value: 95,
      },
      {
        year: '2020',
        value: 96.2,
      },
    ]
  },
  {
    id: 5, // Реверс
    name: 'Валові міжнародні резерви України, місяців імпорту',
    criticalValue: 3,
    preCriticalValue: 5,
    normalValue: 6,
    weight: 0.132,
    economicsWeight: 0.11127,
    data: [
      {
        year: '2015',
        value: 3,
      },
      {
        year: '2016',
        value: 3,
      },
      {
        year: '2017',
        value: 3.2,
      },
      {
        year: '2018',
        value: 3.3,
      },
      {
        year: '2019',
        value: 4.9,
      },
      {
        year: '2020',
        value: 5,
      },
    ]
  },
  {
    id: 6, // Реверс
    name: 'Частка довгострокових кредитів у загальному обсязі наданих кредитів, %',
    criticalValue: 25,
    preCriticalValue: 40,
    normalValue: 60,
    weight: 0.128,
    economicsWeight: 0.11127,
    data: [
      {
        year: '2015',
        value: 15.2,
      },
      {
        year: '2016',
        value: 23.8,
      },
      {
        year: '2017',
        value: 25.8,
      },
      {
        year: '2018',
        value: 22.5,
      },
      {
        year: '2019',
        value: 20.04,
      },
      {
        year: '2020',
        value: 19,
      },
    ]
  },
  {
    id: 7,
    name: 'Ступінь зносу основних засобів в промисловості, %',
    criticalValue: 80,
    preCriticalValue: 60,
    normalValue: 30,
    weight: 0.105,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 76.9,
      },
      {
        year: '2016',
        value: 69.4,
      },
      {
        year: '2017',
        value: 59.1,
      },
      {
        year: '2018',
        value: 66.4,
      },
      {
        year: '2019',
        value: 59.1,
      },
      {
        year: '2020',
        value: 58.2,
      },
    ]
  },
  {
    id: 8,
    name: 'Ступінь зносу основних засобів в будівництві, %',
    criticalValue: 80,
    preCriticalValue: 60,
    normalValue: 30,
    weight: 0.211,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 53,
      },
      {
        year: '2016',
        value: 36,
      },
      {
        year: '2017',
        value: 45.7,
      },
      {
        year: '2018',
        value: 44.5,
      },
      {
        year: '2019',
        value: 51.4,
      },
      {
        year: '2020',
        value: 53.3,
      },
    ]
  },
  {
    id: 9,
    name: 'Ступінь зносу основних засобів в галузі транспорту та зв\'язку, % ',
    criticalValue: 80,
    preCriticalValue: 60,
    normalValue: 30,
    weight: 0.2,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 51.7,
      },
      {
        year: '2016',
        value: 50.6,
      },
      {
        year: '2017',
        value: 47.6,
      },
      {
        year: '2018',
        value: 62.9,
      },
      {
        year: '2019',
        value: 54.1,
      },
      {
        year: '2020',
        value: 52.7,
      },
    ]
  },
  {
    id: 10, // Реверс
    name: 'Частка високотехнологічної продукції у загальному обсязі реалізованої промислової продукції, %',
    criticalValue: 2,
    preCriticalValue: 5,
    normalValue: 9,
    weight: 0.17,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 3.15,
      },
      {
        year: '2016',
        value: 9.1,
      },
      {
        year: '2017',
        value: 3.06,
      },
      {
        year: '2018',
        value: 2.94,
      },
      {
        year: '2019',
        value: 1.9,
      },
      {
        year: '2020',
        value: 1.85,
      },
    ]
  },
  {
    id: 11,
    name: 'Енергоємність ВВП (витрати первинної енергії на одиницю ВВП), кг н. е. на міжнародний долар за ПКС 2011',
    criticalValue: 0.25,
    preCriticalValue: 0.20,
    normalValue: 0.15,
    weight: 0.03,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 0.282,
      },
      {
        year: '2016',
        value: 0.288,
      },
      {
        year: '2017',
        value: 0.267,
      },
      {
        year: '2018',
        value: 0.269,
      },
      {
        year: '2019',
        value: 0.271,
      },
      {
        year: '2020',
        value: 0.266,
      },
    ]
  },
  {
    id: 12,
    name: 'Матеріалоємність ВВП, % до рівня 2015 року',
    criticalValue: 95,
    preCriticalValue: 90,
    normalValue: 80,
    weight: 0.133,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 100,
      },
      {
        year: '2016',
        value: 100,
      },
      {
        year: '2017',
        value: 98.2,
      },
      {
        year: '2018',
        value: 97.2,
      },
      {
        year: '2019',
        value: 96.2,
      },
      {
        year: '2020',
        value: 96,
      },
    ]
  },
  {
    id: 13,
    name: `Частка доданої вартості за витратами виробництва підприємств, які належать до середньовисокотехнологічного сектору переробної промисловості (зокрема, виробництва хімічної продукції; електричного устаткування; машин та устаткування; автотранспортних засобів, причепів і напівпричепів; інших транспортних засобів відповідно до КВЕД) у загальній доданій вартості за витратами виробництва, %`,
    criticalValue: 4,
    preCriticalValue: 7,
    normalValue: 9.6,
    weight: 0.122,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 4.7,
      },
      {
        year: '2016',
        value: 3.3,
      },
      {
        year: '2017',
        value: 3.4,
      },
      {
        year: '2018',
        value: 3.8,
      },
      {
        year: '2019',
        value: 3.9,
      },
      {
        year: '2020',
        value: 4,
      },
    ]
  },
  {
    id: 14, // Реверс
    name: `Частка працівників, зайнятих на підприємствах, які належать до високо- та середньо- високотехнологічних секторів переробної промисловості (зокрема, з виробництва фармацевтичних продуктів і препаратів; хімічної продукції; машинобудування; комп'ютерів, електронної та оптичної продукції; повітряних і космічних літальних апаратів, супутнього устаткування відповідно до КВЕД), у загальній кількості зайнятих працівників у промисловості, % `,
    criticalValue: 18,
    preCriticalValue: 23,
    normalValue: 28,
    weight: 0.085,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 21.2,
      },
      {
        year: '2016',
        value: 21.1,
      },
      {
        year: '2017',
        value: 21.5,
      },
      {
        year: '2018',
        value: 21.6,
      },
      {
        year: '2019',
        value: 21.7,
      },
      {
        year: '2020',
        value: 21.9,
      },
    ]
  },
  {
    id: 15,
    name: 'Відходоємність ВВП, % до рівня 2015 року',
    criticalValue: 95,
    preCriticalValue: 87,
    normalValue: 80,
    weight: 0.133,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 100,
      },
      {
        year: '2016',
        value: 92.5,
      },
      {
        year: '2017',
        value: 111.6,
      },
      {
        year: '2018',
        value: 104,
      },
      {
        year: '2019',
        value: 106,
      },
      {
        year: '2020',
        value: 107,
      },
    ]
  },
  {
    id: 16,
    name: 'Місце України у рейтингу легкості ведення бізнесу DoingBusiness',
    criticalValue: 50,
    preCriticalValue: 35,
    normalValue: 25,
    weight: 0.128,
    economicsWeight: 0.0769,
    data: [
      {
        year: '2015',
        value: 81,
      },
      {
        year: '2016',
        value: 80,
      },
      {
        year: '2017',
        value: 76,
      },
      {
        year: '2018',
        value: 71,
      },
      {
        year: '2019',
        value: 64,
      },
      {
        year: '2020',
        value: 62,
      },
    ]
  },
  {
    id: 17,
    name: 'Питома вага провідної країни - партнера у загальному обсязі експорту товарів, %',
    criticalValue: 25,
    preCriticalValue: 15,
    normalValue: 5,
    weight: 0.151,
    economicsWeight: 0.0901,
    data: [
      {
        year: '2015',
        value: 12.7,
      },
      {
        year: '2016',
        value: 9.9,
      },
      {
        year: '2017',
        value: 9.1,
      },
      {
        year: '2018',
        value: 7.7,
      },
      {
        year: '2019',
        value: 7.2,
      },
      {
        year: '2020',
        value: 7,
      },
    ]
  },
  {
    id: 18,
    name: 'Питома вага провідної країни - партнера у загальному обсязі імпорту товарів, %3',
    criticalValue: 25,
    preCriticalValue: 15,
    normalValue: 5,
    weight: 0.15,
    economicsWeight: 0.0901,
    data: [
      {
        year: '2015',
        value: 20,
      },
      {
        year: '2016',
        value: 13.1,
      },
      {
        year: '2017',
        value: 14.5,
      },
      {
        year: '2018',
        value: 14.1,
      },
      {
        year: '2019',
        value: 15.1,
      },
      {
        year: '2020',
        value: 15.4,
      },
    ]
  },
  {
    id: 19,
    name: 'Питома вага провідного товару (товарної групи) у загальному обсязі експорту товарів, %',
    criticalValue: 10,
    preCriticalValue: 7,
    normalValue: 5,
    weight: 0.121,
    economicsWeight: 0.0901,
    data: [
      {
        year: '2015',
        value: 21.2,
      },
      {
        year: '2016',
        value: 19.9,
      },
      {
        year: '2017',
        value: 20,
      },
      {
        year: '2018',
        value: 21,
      },
      {
        year: '2019',
        value: 19.2,
      },
      {
        year: '2020',
        value: 18.8,
      },
    ] 
  },
  {
    id: 20,
    name: 'Питома вага сировинного та низького ступеня переробки експорту промисловості у загальному обсязі експорту товарів, %',
    criticalValue: 60,
    preCriticalValue: 40,
    normalValue: 20,
    weight: 0.157,
    economicsWeight: 0.0901,
    data: [
      {
        year: '2015',
        value: 81.9,
      },
      {
        year: '2016',
        value: 83.8,
      },
      {
        year: '2017',
        value: 84.5,
      },
      {
        year: '2018',
        value: 84.5,
      },
      {
        year: '2019',
        value: 85.1,
      },
      {
        year: '2020',
        value: 86,
      },
    ]
  },
  {
    id: 21, // Реверс
    name: 'Частка експорту товарів з використанням у виробництві технологій високого і середньовисокого рівня у загальному обсязі експорту товарів, %',
    criticalValue: 15,
    preCriticalValue: 22,
    normalValue: 28,
    weight: 0.077,
    economicsWeight: 0.0901,
    data: [
      {
        year: '2015',
        value: 19.2,
      },
      {
        year: '2016',
        value: 17.3,
      },
      {
        year: '2017',
        value: 16.8,
      },
      {
        year: '2018',
        value: 17,
      },
      {
        year: '2019',
        value: 17.3,
      },
      {
        year: '2020',
        value: 17.9,
      },
    ]
  },
  {
    id: 22, // Реверс
    name: 'Чистий приріст прямих іноземних інвестицій, % від ВВП',
    criticalValue: 4,
    preCriticalValue: 5,
    normalValue: 6,
    weight: 0.071,
    economicsWeight: 0.0939,
    data: [
      {
        year: '2015',
        value: 0.4,
      },
      {
        year: '2016',
        value: 4.1,
      },
      {
        year: '2017',
        value: 3.3,
      },
      {
        year: '2018',
        value: 3.4,
      },
      {
        year: '2019',
        value: 3.4,
      },
      {
        year: '2020',
        value: 3.3,
      },
    ]
  },
  {
    id: 23, // Реверс
    name: 'Валове нагромадження основного капіталу, % від ВВП',
    criticalValue: 18,
    preCriticalValue: 22,
    normalValue: 25,
    weight: 0.074,
    economicsWeight: 0.0939,
    data: [
      {
        year: '2015',
        value: 13.5,
      },
      {
        year: '2016',
        value: 15.5,
      },
      {
        year: '2017',
        value: 15.8,
      },
      {
        year: '2018',
        value: 17.6,
      },
      {
        year: '2019',
        value: 18,
      },
      {
        year: '2020',
        value: 18.5,
      },
    ]
  },
  {
    id: 24, // Реверс
    name: 'Питома вага підприємств, що впроваджували інновації від загальної кількості промислових підприємств, %',
    criticalValue: 10,
    preCriticalValue: 17,
    normalValue: 25,
    weight: 0.064,
    economicsWeight: 0.0939,
    data: [
      {
        year: '2015',
        value: 15.2,
      },
      {
        year: '2016',
        value: 16.6,
      },
      {
        year: '2017',
        value: 14.3,
      },
      {
        year: '2018',
        value: 15.6,
      },
      {
        year: '2019',
        value: 13.8,
      },
      {
        year: '2020',
        value: 14.2,
      },
    ]
  },
  {
    id: 25, // Реверс
    name: 'Питома вага реалізованої інноваційної продукції в обсязі реалізованої продукції у промисловості, %',
    criticalValue: 7,
    preCriticalValue: 15,
    normalValue: 20,
    weight: 0.062,
    economicsWeight: 0.0939,
    data: [
      {
        year: '2015',
        value: 1.4,
      },
      {
        year: '2016',
        value: 1.4,
      },
      {
        year: '2017',
        value: 0.7,
      },
      {
        year: '2018',
        value: 0.8,
      },
      {
        year: '2019',
        value: 1.3,
      },
      {
        year: '2020',
        value: 1.4,
      },
    ]
  }, 
  {
    id: 26, // Реверс
    name: 'Загальні витрати на виконання наукових досліджень і розробок за рахунок держбюджету, % від ВВП',
    criticalValue: 0.5,
    preCriticalValue: 1.2,
    normalValue: 1.7,
    weight: 0.063,
    economicsWeight: 0.0939,
    data: [
      {
        year: '2015',
        value: 0.2,
      },
      {
        year: '2016',
        value: 0.16,
      },
      {
        year: '2017',
        value: 0.16,
      },
      {
        year: '2018',
        value: 0.17,
      },
      {
        year: '2019',
        value: 0.176,
      },
      {
        year: '2020',
        value: 0.18,
      },
    ]
  },
  {
    id: 27,
    name: 'Місце України у рейтингу за Глобальним інноваційним індексом',
    criticalValue: 60,
    preCriticalValue: 50,
    normalValue: 40,
    weight: 0.074,
    economicsWeight: 0.0939,
    data: [
      {
        year: '2015',
        value: 64,
      },
      {
        year: '2016',
        value: 56,
      },
      {
        year: '2017',
        value: 50,
      },
      {
        year: '2018',
        value: 43,
      },
      {
        year: '2019',
        value: 47,
      },
      {
        year: '2020',
        value: 46,
      },
    ]
  },
  {
    id: 28,
    name: 'Перевищення індексом реальної середньомісячної заробітної плати індексу продуктивності праці в Україні, в.п.',
    criticalValue: 12,
    preCriticalValue: 5,
    normalValue: 1,
    weight: 0.082,
    economicsWeight: 0.1005,
    data: [
      {
        year: '2015',
        value: 19.4,
      },
      {
        year: '2016',
        value: -5.5,
      },
      {
        year: '2017',
        value: -15.9,
      },
      {
        year: '2018',
        value: -10.4,
      },
      {
        year: '2019',
        value: -7.9,
      },
      {
        year: '2020',
        value: -7.5,
      },
    ]
  },
  {
    id: 29, // Реверс
    name: 'Індекс фізичного обсягу ВВП, %...',
    criticalValue: 100,
    preCriticalValue: 105,
    normalValue: 110,
    weight: 0.081,
    economicsWeight: 0.1005,
    data: [
      {
        year: '2015',
        value: 90.2,
      },
      {
        year: '2016',
        value: 102.4,
      },
      {
        year: '2017',
        value: 102.5,
      },
      {
        year: '2018',
        value: 103.4,
      },
      {
        year: '2019',
        value: 103.2,
      },
      {
        year: '2020',
        value: 103,
      },
    ]
  },
  {
    id: 30, // Реверс
    name: 'Індекс продуктивності праці, %',
    criticalValue: 100,
    preCriticalValue: 102,
    normalValue: 105,
    weight: 0.092,
    economicsWeight: 0.1005,
    data: [
      {
        year: '2015',
        value: 99.2,
      },
      {
        year: '2016',
        value: 103.5,
      },
      {
        year: '2017',
        value: 103.2,
      },
      {
        year: '2018',
        value: 102.1,
      },
      {
        year: '2019',
        value: 101.9,
      },
      {
        year: '2020',
        value: 102.3,
      },
    ]
  },
  {
    id: 31,
    name: 'Індекс споживчих цін на товари та послуги (до грудня попереднього року), %',
    criticalValue: 12,
    preCriticalValue: 5,
    normalValue: 2,
    weight: 0.092,
    economicsWeight: 0.1005,
    data: [
      {
        year: '2015',
        value: 43.3,
      },
      {
        year: '2016',
        value: 12.44,
      },
      {
        year: '2017',
        value: 13.74,
      },
      {
        year: '2018',
        value: 9.8,
      },
      {
        year: '2019',
        value: 4.15,
      },
      {
        year: '2020',
        value: 3.5,
      },
    ]
  },
  {
    id: 32,
    name: 'Рівень безробіття населення (за методологією МОП), %',
    criticalValue: 9,
    preCriticalValue: 6,
    normalValue: 3,
    weight: 0.087,
    economicsWeight: 0.1005,
    data: [
      {
        year: '2015',
        value: 9.1,
      },
      {
        year: '2016',
        value: 9.3,
      },
      {
        year: '2017',
        value: 9.5,
      },
      {
        year: '2018',
        value: 8.812,
      },
      {
        year: '2019',
        value: 8.2,
      },
      {
        year: '2020',
        value: 8.4,
      },
    ]
  },
  {
    id: 33, // Реверс
    name: 'Схильність населення до заощадження, %',
    criticalValue: 3,
    preCriticalValue: 8,
    normalValue: 15,
    weight: 0.072,
    economicsWeight: 0.1005,
    data: [
      {
        year: '2015',
        value: 2.3,
      },
      {
        year: '2016',
        value: 0.8,
      },
      {
        year: '2017',
        value: 1.5,
      },
      {
        year: '2018',
        value: 1.3,
      },
      {
        year: '2019',
        value: -4.1,
      },
      {
        year: '2020',
        value: -5.4,
      },
    ]
  }
]
