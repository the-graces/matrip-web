import { styled } from 'styled-components';

export const NotificationBox = styled.div`
  width: 100%;
`;

export const NotificationMsg = styled.div`
  border: solid #000 1px;
  border-radius: 16px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const NotificationTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const NotificationTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
