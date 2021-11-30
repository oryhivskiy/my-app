import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import { Bar } from 'react-chartjs-2';
import cx from 'classnames';

import { allYears, graphic } from './content';
import s from './SimpleGraphic.module.sass';

import { Modal } from '../Modal';

import { GraphicInterface, SelectType } from '../../types/common';
import { generateIndicatorsValue } from '../../utils/helprers';
import { yearsSelect } from '../../content/selects';
import { indicatorsAll } from '../../content/indicators';
import { options } from '../../content/graphic';

import Edit from '../../icons/edit.png';
import Add from '../../icons/plus.png';


type SimpleGraphicProps = {
  className?: string
}

export const SimpleGraphic: React.FC<SimpleGraphicProps> = ({
  className,
}) => {
  const [year, setYear] = useState<SelectType>(yearsSelect[0]);
  const [indicators, setIndicators] = useState<SelectType>(generateIndicatorsValue()[0]);
  const [currentIndicators, setCurrentIndicators] = useState<string | undefined>('');
  const [grapics, setGraphics] = useState<GraphicInterface>(graphic);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalTheme, setModalTheme] = useState<'add' | 'edit'>('add');

  const handleYear = useCallback(
    (e: SelectType) => {
      if (indicators) {
        const currentIndicator = indicatorsAll.find((item) => item.id === +indicators.value);

        if (allYears.includes(e?.value!)) {
          const currentItem = currentIndicator?.data.find((item) => item.year === e?.value);
          setGraphics((prev) => ({
            labels: [e?.value!],
            datasets: [{
              ...prev.datasets[0],
              data: [currentItem ? +currentItem?.value : 0]
            }],
          }));
        } else {
          const arrayOfData: number[] = [];
          currentIndicator?.data.forEach((item) => {
            arrayOfData.push(item.value);
          });
          setGraphics((prev) => ({
            labels: allYears,
            datasets: [{
              ...prev.datasets[0],
              data: arrayOfData,
            }],
          }));
        }
      }
    }, 
    [indicators]
  );

   // Логика взятия значения по конкретному индикатору
   useEffect(() => {
    handleYear(year);
  }, [handleYear, year]);

  useEffect(() => {
    const findIndicator = indicatorsAll.find((item) => indicators?.value === item.id.toString());
    setCurrentIndicators(findIndicator?.name);
  }, [indicators?.value]);

  const handleChangeSelectYear = (e: SelectType) => {  
    setYear(e);
    handleYear(e);
  };

  const handleChangeSelectIndicators = (e: SelectType) => {
    setIndicators(e);
  };

  const handleModal = (theme: 'add' | 'edit') => {
    setModalIsOpen(!modalIsOpen);
    setModalTheme(theme);
  }

  const onRequestClose = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className={cx(s.root, { [s.modal]: modalIsOpen }, className)}>
      <div className={s.actions}>
        <img 
          src={Add} 
          alt="Add"
          onClick={() => handleModal('add')}
          className={s.icon} 
        />
        <img 
          src={Edit} 
          alt="edit" 
          onClick={() => handleModal('edit')}
          className={s.icon}
        />
      </div>

      <div className={s.wrapper}>
        <div className={s.selectWrapper}>
          <span className={s.selectLabel}>Роки</span>
          <Select
            value={year}
            onChange={(e) => handleChangeSelectYear(e)}
            options={yearsSelect}
            className={s.yearSelect} 
          />
        </div>

        <div className={s.selectWrapper}>
          <span className={s.selectLabel}>Індикатори</span>
          <Select 
            value={indicators}
            onChange={(e) => handleChangeSelectIndicators(e as any)}
            options={generateIndicatorsValue()} 
            className={s.select} 
          />    
        </div>
      </div> 

      <div className={s.graphic}>
        <p>{`— ${currentIndicators}.`}</p>
        <Bar 
          data={grapics} 
          options={options as any} 
        />
      </div>
      
      {modalIsOpen && (
      <Modal 
        theme={modalTheme}
        onRequestClose={onRequestClose}
      />
      )}
    </div>
  )
}
