import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Section } from "./components/Section";
import mainHouseOne from "./assets/images/main-house-1.jpeg";
import mainHouseTwo from "./assets/images/main-house-2.jpeg";
import guestHouseOne from "./assets/images/guest-house-1.jpeg";
import guestHouseTwo from "./assets/images/guest-house-2.jpeg";
import pool from "./assets/images/pool.jpg";

export const VerblijfPage = () => (
  <Page>
    <Navbar />
    <main>
      <Intro>
        <Container>
          <BackLink href="/">&larr; Terug naar FinnCon</BackLink>
          <Title>Het verblijf</Title>
        </Container>
      </Intro>
      <Section
        id="houses"
        title="Huizen"
        description={
          <>
            <p>
              Op het terrein staan 2 huizen; het algemene gebouw en het gasten
              gebouw. Beide gebouwen hebben een tafel en stoelen voor de deur
              voor gezelligheid in de buitenlucht.
            </p>
            <h3>Algemeen gebouw</h3>
            <p>
              In dit gebouw staat een 2 persoons bed, maar het idee is om hier 4
              mensen kwijt te kunnen. Dat betekend dat we dus nog 2 slaapplekken
              moeten fabriceren. Hier is wel een kamer voor, we zoeken enkel nog
              een creatieve oplossingen voor de slaapplekken zelf.
            </p>
            <HouseImages>
              <HouseImage alt="impression one" src={mainHouseOne} />
              <HouseImage alt="impression two" src={mainHouseTwo} />
            </HouseImages>
            <br />
            <h3>Gasten gebouw</h3>
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
      <Section
        id="address"
        title="Het adres"
        description={
          <>
            <LocationCopy>
              <Address href="https://maps.app.goo.gl/G6tQvJu65h4k2Skz6">
                40 Av. de l'Europe, Frankrijk
              </Address>
            </LocationCopy>
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.8364567147273!2d-1.1475122233452906!3d45.37229513956548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48018ea95d84164f%3A0xb3bbf15a4ab62650!2s40%20Av.%20de%20l'Europe%2C%2033930%20Vendays-Montalivet%2C%20France!5e0!3m2!1sen!2snl!4v1791398310336!5m2!1sen!2snl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kaart van het verblijf in Vendays-Montalivet"
            />
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

const TopBar = styled.header`
  padding-block: 14px;
  background: #8a2334;
`;

const Brand = styled.a`
  color: #fff;
  font-family: Georgia, serif;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
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
  object-fit: cover;
  background: #e7e0d5;
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
