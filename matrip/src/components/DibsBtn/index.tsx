import React from 'react';
import { styled } from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

function DibsBtn() {
  return (
    <DibsBtnBox>
      <AiOutlineHeart size='24' />
    </DibsBtnBox>
  );
}

const DibsBtnBox = styled.button`
  border: none;
  background: none;
  padding: 0 10px;
`;

export default DibsBtn;
