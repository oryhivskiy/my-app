export type SelectType = SingleValue<{
  value: string;
  label: string;
}>

export interface GraphicInterface {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
};

type IndicatorsType = Record<string, { ks: string[], pks: string[], ns: string[] }>
export interface IndicatorsInterface extends IndicatorsType {}
