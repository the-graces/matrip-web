import React from 'react';
import { styled } from 'styled-components';

type SubmitType = {
  text: string;
};

function FormSubmitBtn({ text }: SubmitType) {
  return <SubmitBtn>{text}</SubmitBtn>;
}

const SubmitBtn = styled.button`
  background-color: #056676;
  border: solid 1px #056676;
  border-radius: 35px;
  width: 100%;
  color: #fff;
  height: 56px;
  font-size: 18px;
`;

export default FormSubmitBtn;
