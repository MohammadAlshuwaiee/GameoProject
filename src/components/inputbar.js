import { Inputbarstyled } from "../style";

export const InputBar = (props) => {
  return (
    <Inputbarstyled
      onChange={(event) => props.setNumber(event.target.value)}
      placeholder="Enter number"
    />
  );
};
