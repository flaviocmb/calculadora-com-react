import { ButtonContainer } from "./styles";

const Button = ({label, onClick, isButtonTwoBlocks }) => {
  return (
    <ButtonContainer isButtonTwoBlocks={isButtonTwoBlocks} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};

export default Button;