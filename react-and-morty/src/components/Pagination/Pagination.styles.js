import styled from "styled-components";

export const Wrapper = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  color: #5e6776;
  margin-top: 2rem;
  height: 20px;
`;

export const ListItem = styled.li`
  background-color: #fff;
  width: 20%;
  text-align: center;
  border: 1px solid #607d8b;
  border-radius: 50%;
  margin: 0 0.5rem;
  padding: 8px 15px;
  list-style-type: none;
  cursor: pointer;

  &.active {
    background-color: #e9e9eb;
  }
`;
