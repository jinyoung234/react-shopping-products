import styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/style.constant';

export const NavigationContainer = styled.div`
  width: 430px;
  left: calc((100% - 430px) / 2);
  height: ${SIZE.navigationHeight};
  background-color: ${COLOR.black};
  padding: 16px 24px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
  position: fixed;
  z-index: 999;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationButton = styled.button`
  cursor: pointer;
`;
