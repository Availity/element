import { Space } from '../spaces-types';

export type DisclaimerModalProps = {
  parentPayerSpaces: Space[];
  name: string;
  state: { selectedOption: Space };
  setState: (state: object) => void;
};
