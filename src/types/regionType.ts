import { stateType } from './stateType';
/**
 * Type with region and its states
 * @typedef {Object} regionType
 * @property {String} regionName - Name of the region
 * @property {stateType[]} states - Array with states of this region
 */
export type regionType = {
  regionName: string;
  states: stateType[];
};
