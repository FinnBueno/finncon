import { Container } from "react-bootstrap";
import type { ReactNode } from "react";
import styled from "styled-components";
import { Section } from "./components/Section";
import beachImg from "./assets/images/beach-1.jpg";
import forestImg from "./assets/images/forest.jpg";
import barImg from "./assets/images/bar.jpg";
import pool from "./assets/images/pool.jpg";
import restaurantImg from "./assets/images/restaurant.jpg";
import goKartImg from "./assets/images/gokart.png";
import climbingImg from "./assets/images/klimmen.png";
import paintballImg from "./assets/images/paintball.png";
import marketImg from "./assets/images/market.webp";
import concertImg from "./assets/images/concert.webp";
import sportImg from "./assets/images/sport.webp";
import bikeImg from "./assets/images/biking.webp";
import { Navbar } from "./components/Navbar";

type ActivityItem = {
  title: string;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
  link?: string;
};

const activities: { left: ActivityItem[]; right: ActivityItem[] } = {
  left: [
    {
      title: "Strand 🏖️",
      description: (
        <>
          Natuurlijk, het strand grenzend aan de Atlantische Oceaan. Een
          heerlijk warme zon, zacht zand en mooie golven. Ook vind je hier vaak
          surfers en is er (als het goed is) een surfschool. Er is verder op ook
          een nudisten strand, eigen risico.
        </>
      ),
      image: beachImg,
      imageAlt: "strand",
    },
    {
      title: "Bos 🌳",
      description: (
        <>
          Naast het verblijf is een naaldbos waar je prima kunt wandelen. Ik heb
          dat zelf nooit gedaan toen ik jong was, want dat was natuurlijk stom.
          Ik heb wel af en toe mee gemoeten met de honden daar uitlaten (met
          tegenzin), en van wat kleine ik me kan herinneren was het in ieder
          geval wel de moeite waard!
        </>
      ),
      image: forestImg,
      imageAlt: "Omgeving van het verblijf",
    },
    {
      title: "Concerten 🎶",
      description: (
        <>
          Op sommige avonden zijn er openlucht optredens op het dorps plein, van
          allerlei verschillende stijlen. Erg leuk om even van te genieten als
          je de nacht het dorp in gaat!
        </>
      ),
      image: concertImg,
      imageAlt: "Concert",
    },
    {
      title: "Going out 🍷",
      description: (
        <>
          Ik was te jong om toen der tijd hiervan te genieten, maar ik verneem
          dat je prima je tijd kan vermaken met wat drankjes in de avond.
          Proost!
        </>
      ),
      image: barImg,
      imageAlt: "bar",
    },
    {
      title: "Karten 🏎️",
      description: (
        <>
          Keihard elkaar van de baan rijden en proberen eerste te worden, wat
          leuk!
        </>
      ),
      image: goKartImg,
      imageAlt: "goKart",
    },
    {
      title: "Paintball 🫟",
      description: (
        <>
          Wat is er nou leuker dan lekker elkaar onder knallen met verf en met
          blauwe plekken thuis komen.
        </>
      ),
      image: paintballImg,
      imageAlt: "Paintball",
    },
  ],
  right: [
    {
      title: "Zwembad",
      description: (
        <>
          Zo&apos;n verblijf is natuurlijk niet compleet zonder zwembad!
          Gedurende het hele verblijf staat deze tot je beschikking. Het zwembad
          is niet zichtbaar vanaf buiten het terrein, dus het is heerlijk prive.
        </>
      ),
      image: pool,
      imageAlt: "Het zwembad bij het verblijf",
    },
    {
      title: "Restaurants",
      description: (
        <>
          Er zijn natuurlijk genoeg eet tentjes om er elke dag een te kiezen. We
          hebben ook een keuken en grilplaat tot onze beschikking, dus elke dag
          buiten de deur eten is zeker niet nodig, maar het kan wel!
        </>
      ),
      image: restaurantImg,
      imageAlt: "restaurant",
    },
    {
      title: "Markt 👒",
      description: (
        <>
          Natuurlijk is zo&apos;n plek niet compleet zonder markt. Hier vind je,
          naast natuurlijk allerlei geimporteerde troep, af en toe ook nog wat
          leuke pareltjes. Er zijn ook wijn tenten waar oude Fransen de hele
          ochtend aan t genieten zijn van drank en oesters, als dat je ding is.
          Zonder dollen, erg leuk.
        </>
      ),
      image: marketImg,
      imageAlt: "Markt",
    },
    {
      title: "Sport 🏐",
      description: (
        <>
          Deze is voor Kim. Er zijn (allegedly) veel sport mogelijkheden!
          Gedurende de zomer zijn er sport wedstrijden en andere dingen die in
          de buurt worden georganiseerd waar liefhebbers aan mee kunnen doen. Ik
          heb dit zelf uiteraard nooit gedaan, daar ben ik te lui voor. Van
          volleybal en tennis tournooien tot surf lessen, leef je uit!
        </>
      ),
      image: sportImg,
      imageAlt: "Sport",
    },
    {
      title: "Fietsen 🚴",
      description: (
        <>
          Fietsen is echt een heel ding hier. Er zijn meerdere plekken waar je
          fietsen kan huren, mountain bike en normaal. Er zijn speciale fiets
          routes in de buurt, en als je wil zou je echt je begin van de con
          kunnen vertrekken en aan t einde terug komen. Niet heel gezellig, maar
          het kan!
        </>
      ),
      image: bikeImg,
      imageAlt: "Bike",
    },
    {
      title: "Klimparkour 🐒",
      description: (
        <>
          Niet vallen! Ik vond dit toen ik jong was altijd heel eng. Geen idee
          hoe het is op een oudere leeftijd, maar daar kom je maar op 1 manier
          achter.
        </>
      ),
      image: climbingImg,
      imageAlt: "Klimmen",
    },
    {
      title: "En meer! 🎉",
      description: (
        <>
          Ik ken ook lang niet elke tent of alles in de buurt, dus loop vooral
          en rondje en ontdek! 😄
        </>
      ),
    },
  ],
};

export const ActiviteitenPage = () => (
  <Page>
    <Navbar />
    <main>
      <Intro>
        <Container>
          <BackLink href="/finncon">&larr; Terug naar FinnCon</BackLink>
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
            <ActivityColumns>
              <ActivityColumn>
                {activities.left.map((activity) => (
                  <ActivityCard key={activity.title} activity={activity} />
                ))}
              </ActivityColumn>
              <ActivityColumn>
                {activities.right.map((activity) => (
                  <ActivityCard key={activity.title} activity={activity} />
                ))}
              </ActivityColumn>
            </ActivityColumns>
          </>
        }
      />
    </main>
  </Page>
);

const ActivityCard = ({ activity }: { activity: ActivityItem }) => (
  <Activity>
    <h3>{activity.title}</h3>
    <p>{activity.description}</p>
    {activity.link && (
      <p>
        <a href={activity.link}>Lees meer</a>
      </p>
    )}
    {activity.image && activity.imageAlt && (
      <Image alt={activity.imageAlt} src={activity.image} />
    )}
  </Activity>
);

const ActivityColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 20px;
  margin-top: 24px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ActivityColumn = styled.div``;

const Activity = styled.article`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 12px;
  }
`;

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

const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  max-height: 360px;
  object-fit: cover;
  background: #e7e0d5;
  border-radius: 3px;

  &:only-child {
    grid-column: 1 / -1;
  }
`;
