import type { FC, ReactNode } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

type Props = {
  id: string;
  title: string;
  description: ReactNode | string;
  image?: string;
  alt?: string;
};

export const Section: FC<Props> = ({ id, title, description, image, alt }) => (
  <PageSection id={id} aria-labelledby={`${id}-title`}>
    <Flexbox>
      <FlexChild size={2}>
        <SectionTitle id={`${id}-title`}>{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </FlexChild>
      {image && alt ? (
        <FlexChild>
          <Image src={image} alt={alt} />
        </FlexChild>
      ) : (
        <></>
      )}
    </Flexbox>
  </PageSection>
);

const FlexChild = styled(Container)<{ size?: number }>`
  display: flex;
  flex: ${(props) => props.size ?? 1};
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  flex: 1;
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const Flexbox = styled(Container)`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

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
