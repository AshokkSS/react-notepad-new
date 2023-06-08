import React from "react";
import styled from "styled-components";

function Header(props) {
  const { titleContent } = props;
  return (
    <StyledHeader>
      <Title>{titleContent}</Title>
    </StyledHeader>
  );
}
const StyledHeader = styled.div`
  display: fixed;
  align-items: center;
  background-color: purple;
  height: 90px;
  padding: 30px 25px;
`;
const Title = styled.h2`
  margin-right: 12px;
  color: white;
  width: 100%;
  font-weight: 700;
  font-size: 26px;
`;

export default Header;
