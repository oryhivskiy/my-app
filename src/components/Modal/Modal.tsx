import React from 'react';
import cx from 'classnames';

import s from './Modal.module.sass';

type ModalProps = {
  theme: 'add' | 'edit'
  onRequestClose: () => void
  className?: string
}

export const Modal: React.FC<ModalProps> = ({
  theme = 'add',
  onRequestClose,
  className,
}) => {
  const handleSubmit = () => {
    onRequestClose();
  }

  const isAddTheme = theme === 'add';

  return (
    <div className={cx(s.root, className)}>
      <div className={cx(s.container, { [s.edit]: !isAddTheme })}>
        <div 
          onClick={onRequestClose}
          className={s.close}
        >
          ✕
        </div>

        <div className={s.title}>
          {isAddTheme ? 'Додати індикатор' : 'Змінити індикатор'}
        </div>

        <div className={s.form}>
          <div className={s.col}>
            {!isAddTheme && (
              <div className={s.wrapper}>
                <label 
                  htmlFor="1" 
                  className={s.label}
                >
                  Номер індикатора
                </label>
                <input className={s.input} />
              </div>
            )}

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Назва
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Critical value
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Precritical value
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Normal value
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Weight
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Economics weight
              </label>
              <input className={s.input} />
            </div>
          </div>
          <div className={s.col}>
            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Значениия для 2015
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Значениия для 2016
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Значениия для 2017
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Значениия для 2018
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Значениия для 2019
              </label>
              <input className={s.input} />
            </div>

            <div className={s.wrapper}>
              <label 
                htmlFor="1" 
                className={s.label}
              >
                Значениия для 2020
              </label>
              <input className={s.input} />
            </div>
          </div>
        </div>
        {!isAddTheme && (
            <div className={s.newField}>
              <h3>
                Додати новий рік
              </h3>

              <div className={s.addWrapper}> 
                <div className={s.wrapper}>
                  <label 
                    htmlFor="1" 
                    className={s.label}
                  >
                    Рік
                  </label>
                  <input className={s.input} />
                </div>

                <div className={s.wrapper}>
                  <label 
                    htmlFor="1" 
                    className={s.label}
                  >
                    Значення 
                  </label>
                  <input className={s.input} />
                </div>
              </div>
            </div>
            )}
        <button 
          type="button"
          onClick={handleSubmit}
          className={s.button}
        >
          Підтвердити
        </button>
      </div>
    </div>
  );
} 
