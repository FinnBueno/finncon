import type { FC } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

export const Footer: FC = () => (
  <FooterBox>
    <FooterContent>
      <FooterBrand>FinnCon</FooterBrand>
      <a href="#home">Back to top</a>
    </FooterContent>
  </FooterBox>
);

const FooterBox = styled.footer`
  border-top: 1px solid #dbe6df;
`;

const FooterContent = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  padding-block: 28px;
`;

const FooterBrand = styled.span`
  font-weight: 700;
`;
