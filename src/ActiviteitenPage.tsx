import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Section } from "./components/Section";
import beachOne from "./assets/images/beach-1.jpg";
import mainHouseTwo from "./assets/images/main-house-2.jpeg";
import guestHouseOne from "./assets/images/guest-house-1.jpeg";
import guestHouseTwo from "./assets/images/guest-house-2.jpeg";
import pool from "./assets/images/pool.jpg";
import { Navbar } from "./components/Navbar";

export const ActiviteitenPage = () => (
  <Page>
    <Navbar />
    <main>
      <Intro>
        <Container>
          <BackLink href="/">&larr; Terug naar FinnCon</BackLink>
          <Title>Activiteiten</Title>
        </Container>
      </Intro>
      <Section
        id="what-to-do"
        title="Wat is er te doen?"
        description={
          <>
            <p>
              Naast de gezelligheid van de andere conventie gangers is het
              natuurlijk leuk om je tijd te verdrijven met andere activiteiten.
              Hier vindt je een aantal dingen die in de buurt te doen zijn.
            </p>
            <h3>Strand 🏖️</h3>
            <p>
              Natuurlijk, het strand grenzend aan de atlantische oceaan. Een
              heerlijk warme zon, zacht zand en mooie golven. Ook vind je hier
              vaak surfers en is er (als het goed is) een surfschool.
            </p>
            <HouseImages>
              <HouseImage alt="impression one" src={beachOne} />
            </HouseImages>
            <br />
            <h3>Bos 🌳</h3>
            <p>
              Dit gebouw is wat kleiner, en heeft z'n eigen badkamer. Er staat
              een twee persoonsbed in een aparte slaapkamer. Nog twee extra
              mensen kunnen hun nacht overbruggen op de slaapbank. Alle ramen in
              dit huis zijn voorzien van rolluiken (behalve de voordeur).
            </p>
            <HouseImages>
              <HouseImage alt="impression one" src={guestHouseOne} />
              <HouseImage alt="impression two" src={guestHouseTwo} />
            </HouseImages>
          </>
        }
      />
      <Section
        id="pool"
        title="Zwembad"
        description={
          <>
            <p>
              Zo'n verblijf is natuurlijk niet compleet zonder zwembad!
              Gedurende het hele verblijf staat het zwembad tot je beschikking.
              Door de bebossing heeft niemand zicht op ons. Je zou dus zelfs
              naakt kunnen zwemmen! Maar doe maar niet. Dat deed m'n oma wel
              eens en dat was nooit heel prettig.
            </p>
            <HouseImages>
              <HouseImage alt="impression one" src={pool} />
            </HouseImages>
          </>
        }
      />
    </main>
  </Page>
);

const Page = styled.div`
  min-height: 100vh;
  color: #282522;
  background: #f8f5ef;
`;

const Intro = styled.section`
  padding-block: 44px 30px;
`;

const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 34px;
  color: #8a2334;
`;

const Title = styled.h1`
  margin-bottom: 12px;
  font-family: "Irish Grover", Georgia, serif;
  font-size: 56px;

  @media (max-width: 767px) {
    font-size: 42px;
  }
`;

const LocationCopy = styled.div`
  margin-bottom: 22px;
`;

const Address = styled.a`
  color: #8a2334;
`;

const HouseImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 28px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const HouseImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  max-height: 360px;
  object-fit: cover;
  background: #e7e0d5;

  &:only-child {
    grid-column: 1 / -1;
  }
`;

const MapFrame = styled.iframe`
  display: block;
  width: 100%;
  height: 420px;
  border: 0;

  @media (max-width: 767px) {
    height: 340px;
  }
`;
