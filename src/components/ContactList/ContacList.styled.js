import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
  padding: 3px 10px;
  height: 50px;
  width: 447px;

  /* background: rgb(231, 218, 232);
  background: linear-gradient(
    90deg,
    rgba(231, 218, 232, 1) 70%,
    rgba(224, 244, 243, 1) 99%
  ); */
  border: 1px solid #4abda7;
  color: #000;

  border-radius: 5px;

  transition: box-shadow 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);

  &:hover,
  :focus {
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
    background-color: rgba(74, 189, 167, 0.2);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactNameBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ButtonStyle = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;

  cursor: pointer;
  background-color: transparent;
  border: 0;
  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);

  &:hover,
  :focus {
    scale: 1.2;
  }
`;

// export const ButtonUpdate = styled.button`
//   background-color: #4abda7;
//   &:hover,
//   :focus {
//     scale: 1.2;
//   }
// `;
