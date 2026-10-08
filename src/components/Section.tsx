import type { FC, ReactNode } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

type Props = {
  id: string;
  title: string;
  description: ReactNode | string;
};

export const Section: FC<Props> = ({ id, title, description }) => (
  <PageSection id={id} aria-labelledby={`${id}-title`}>
    <Container>
      <SectionTitle id={`${id}-title`}>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </Container>
  </PageSection>
);

const PageSection = styled.section`
  padding-block: 64px;

  @media (max-width: 767px) {
    padding-block: 44px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const SectionDescription = styled.div`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 0;
`;
