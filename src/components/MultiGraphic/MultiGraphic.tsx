import BigNumber from 'bignumber.js';
import React, { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Select from 'react-select';

import { miltuGraphicState, tableInitialValue } from './content';
import s from './MultiGraphic.module.sass';

import { Table } from '../Table';

import { GraphicInterface, IndicatorsType, SelectType } from '../../types/common';
import { generateIndicatorsValue } from '../../utils/helprers';
import { options } from '../../content/graphic';
import { indicatorsAll } from '../../content/indicators';
import { yearsSelect } from '../../content/selects';
import { COLUMNS_NAMES_THREE, TABLE_DATA_THREE } from '../../content/table-three';

export const MultiGraphic: React.FC = () => {
  const [multiIndicators, setMultiIndicators] = useState<SelectType[]>([]);
  const [multiYears, setMultiYears] = useState<SelectType[]>([]);
  const [multiGrapics, setMultiGraphics] = useState<GraphicInterface>(miltuGraphicState);
  const [situation, setSituation] = useState<string>('');
  const [integralIndicators, setIntegralIndicators] = useState<Record<string, number>>({});
  const [multiGraphicsValue, setMltiGraphicsValue] = useState<{ id?: number, year: string, value: number, state: number }[]>([]);
  const [data, setData] = useState<any>(TABLE_DATA_THREE);

  // Add indicators id to table
  useEffect(() => {
    const tableData = multiGraphicsValue.reduce((acc: IndicatorsType, value) => {
      return {
        ...acc,
        [value.year]: {
          ks: [...acc[value.year].ks, value.state === 0 ? `x${value.id} ` : ''].filter(item => item),
          pks: [...acc[value.year].pks, value.state === 1 ? `x${value.id} ` : ''].filter(item => item),
          ns: [...acc[value.year].ns, value.state === 2 ? `x${value.id} ` : ''].filter(item => item),
        }
      }
    }, tableInitialValue);

    const prepareData = Object.keys(tableData).map((item) => ({
      year: item,
      ks: tableData[item].ks,
      pks: tableData[item].pks,
      ns: tableData[item].ns,
    }));

    setData(prepareData);
  }, [multiGraphicsValue]);
  
  useEffect(() => {
    const findAllIndicators = indicatorsAll.filter(
      (item) => 
        multiIndicators.some((el) => el?.value === item.id.toString()));

    let output: { id?: number, year: string, value: number, state: number }[] = [];
    let localSituation: string[] = [];
    findAllIndicators.forEach((item) => {
      item.data.forEach((el) => {
        multiYears.forEach((year) => {
          if (year?.value === el.year) {
            if (el.value > item.normalValue) {
              let state = 0;
              if (item.criticalValue <= el.value) {
                state = 0;
              } else if (item.criticalValue > el.value && item.preCriticalValue <= el.value) {
                state = 1;
              } else if (item.preCriticalValue > el.value) {
                state = 2;
              }
              const z = item.normalValue / el.value;
              output = [
                ...output,
                {
                  id: item.id,
                  year: el.year,
                  value: z * item.weight * item.economicsWeight,
                  state,
                }
              ]
            } else {
              const z = el.value / item.normalValue;
              let state = 0;
              if (item.criticalValue <= el.value) {
                state = 0;
              } else if (item.criticalValue > el.value && item.preCriticalValue <= el.value) {
                state = 1;
              } else if (item.preCriticalValue > el.value) {
                state = 2;
              }
              output = [
                ...output,
                {
                  id: item.id,
                  year: el.year,
                  value: z * item.weight * item.economicsWeight,
                  state,
                }
              ]
            }
            
            if (item.criticalValue > item.normalValue) {
              if (item.criticalValue <= el.value) {
                localSituation.push('Кризовий стан');
              } else if (item.criticalValue > el.value && item.preCriticalValue <= el.value) {
                localSituation.push('Предкризовий стан');
              } else if (item.preCriticalValue > el.value) {
                localSituation.push('Нормальний стан');
              }
            } else {
              if (item.criticalValue >= el.value) {
                localSituation.push('Кризовий стан');
              } else if (item.criticalValue < el.value && item.preCriticalValue >= el.value) {
                localSituation.push('Предкризовий стан');
              } else if (item.preCriticalValue < el.value) {
                localSituation.push('Нормальний стан');
              }
            }
          }
        })
      });
    });

    setMltiGraphicsValue(output);
  
    if (localSituation && localSituation.length) {
      if (localSituation.includes('Кризовий стан')) {
        setSituation('Кризовий стан');
      } else if (localSituation.includes('Предкризовий стан')) {
        setSituation('Предкризовий стан');
      } else {
        setSituation('Нормальний стан');
      }
    }
    
    const result = output.reduce(
      (acc: any, currentValue: { year: string, value: number, state?: any }) => {
        if (acc.hasOwnProperty(currentValue.year)) {
          return {
            ...acc,
            [currentValue.year]: currentValue.value + acc[currentValue.year]
          }
        } else {
          return {
            ...acc,
            [currentValue.year]: currentValue.value
          }
        }
      }, {});

    setIntegralIndicators(result);
  }, [multiIndicators, multiYears]);

  useEffect(() => {
    const prepareData = multiGraphicsValue.map((item) => ({ ...item, state: item.state }));
    
    const filter = prepareData.reduce((acc: any, item) => {
      if (acc.hasOwnProperty(item.year)) {
        return {
          ...acc,
          [item.year]: [...acc[item.year], item.state],
        }
      } else {
        return {
          ...acc,
          [item.year]: [item.state]
        }
      }
    }, {
      '2015': [],
      '2016': [],
      '2017': [],
      '2018': [],
      '2019': [],
      '2020': [],
    });

    const minValues = Object.keys(filter).map((item) => {
      return {
        state: filter[item].sort((a: number, b: number) => a - b)[0],
        year: item,
      };
    });

    const prepareColors = minValues.map((item) => {
      if (item.state === 0) {
        return {
          ...item,
          state: 'rgba(255, 0, 0, 0.4)'
        }
      } else if (item.state === 1) {
        return {
          ...item,
          state: 'rgba(253, 208, 78, 0.4)'
        }
      } else if (item.state === 2) {
        return {
          ...item,
          state: 'rgba(13, 201, 11, 0.4)'
        }
      }
      return undefined;
    });
    
    setMultiGraphics((prev) => ({
      labels: [...prev.labels],
      datasets: [{
        ...prev.datasets[0],
        backgroundColor: prepareColors.filter((item) => item).map((item) => item!.state) as [],
        borderColor: prepareColors.filter((item) => item).map((item) => item!.state) as [],
      }],
    }));
  }, [multiGraphicsValue]);

  const resultIndicator = useMemo(() => {
    return Object.keys(integralIndicators).map((item) => ({
      year: item,
      value: integralIndicators[item],
    }))
  }, [integralIndicators]);

  useEffect(() => {
    if (resultIndicator) {
      const data: { labels: string[], data: number[] } = {
        labels: [],
        data: [],
      };
      resultIndicator.forEach((item) => {
        data.labels.push(item.year);
        data.data.push(item.value);
      });
      setMultiGraphics((prev: any) => ({
        labels: [...data.labels],
        datasets: [{
          ...prev.datasets[0],
          data: [...data.data]
        }],
      }));
    }
  }, [resultIndicator]);


  const handleChangeSelectMultiYears = (e: SelectType[]) => {  
    setMultiYears(e);
  };

  const handleChangeSelectMultiIndicators = (e: SelectType[]) => {
    setMultiIndicators(e);
  };

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <h3 className={s.integralsTitle}>
          Інтегральний індикатор за кожною сферою ЕКБ:
        </h3> 
        <div className={s.multiWrapper}>
          <Select
            value={multiYears}
            onChange={(e) => handleChangeSelectMultiYears(e as any)}
            options={yearsSelect.filter((el) => el.value !== 'all')}
            isMulti
            name="years"
            placeholder="Оберіть роки..."
            className={s.select}
          />
          <Select 
            value={multiIndicators}
            onChange={(e) => handleChangeSelectMultiIndicators(e as any)}
            options={generateIndicatorsValue()} 
            isMulti
            name="indicators"
            classNamePrefix="select"
            placeholder="Оберіть індикатори..."
            className={s.multiSelect} 
          />
        </div>
        <div className={s.integrals}>
          <h3>Сума всіх значень за кожен рік:</h3>
          {resultIndicator.map((item, idx) => (
            <div key={idx} className={s.item}>
              {`${item.year}: ${new BigNumber(item.value).decimalPlaces(6).toFixed()}`}
            </div>
          ))}
        </div>

        <div className={s.graphic}>
          <Bar 
            data={multiGrapics} 
            options={options as any} 
          />
        </div>

        {multiYears.length && multiIndicators.length ? situation && (
        <h3>{`Ситуація належить до класу: ${situation}`}</h3>
        ) : null}
      </div>

      <hr />
      <h3 className={s.integralsTitle}>
        Результати розрахунку на основі теорії нечітких множин:
      </h3> 
      <Table coumns={COLUMNS_NAMES_THREE} data={data} />
    </div>
  )
}
