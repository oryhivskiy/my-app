import React from 'react';

import s from './Overview.module.sass';

import { SimpleGraphic } from '../../components/SimpleGraphic';
import { MultiGraphic } from '../../components/MultiGraphic';
import { Table } from '../../components/Table';
import { COLUMNS_NAMES, TABLE_DATA } from '../../content/table-one';
import { COLUMNS_NAMES_TWO, TABLE_DATA_TWO } from '../../content/table-two';

export const Overview: React.FC = () => (
  <div className={s.root}>
    <h1 className={s.title}>
      Аналіз рівня економічної безпеки
      країни на основі методів нечіткої
      логіки
    </h1>
    <h1 className={s.title}>
      Виконав: студент групи ТР-01мп
    </h1>
    <h1 className={s.title}>
      Орихівський Євгеній Романович
    </h1>  
    <h1 className={s.title}>  
      Керівник: Караєва Наталія Веніамінівна
    </h1>

    <SimpleGraphic className={s.marginBottom} />
    <MultiGraphic />

    <hr />
    <h3 className={s.integralsTitle}>
      Характеристичні значення індикаторів у сфері економіки:
    </h3> 
    <Table coumns={COLUMNS_NAMES} data={TABLE_DATA} />

    <hr />
    <h3 className={s.integralsTitle}>
      Сфери економіки:
    </h3> 
    <Table coumns={COLUMNS_NAMES_TWO} data={TABLE_DATA_TWO} />
  </div>
)
