import { ContainerSpinner, LdsDualRing } from "./styles";
export const Spinner = ({ message }) => {
  return (
    <ContainerSpinner>
      <LdsDualRing></LdsDualRing>
      <p>{message || "Loading..."}</p>
    </ContainerSpinner>
  );
};
