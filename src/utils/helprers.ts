import { indicatorsAll } from "../content/indicators";

export const generateIndicatorsValue = () => {
  return indicatorsAll.map((item) => ({
    value: item.id.toString(), 
    label: item.name.length < 50 ? item.name : item.name.substring(0, 50) + '...', 
  }));
}
