import styled from "styled-components";
import { Button } from "react-bootstrap";
import logo from "../assets/finncon-logo.svg";

export const Hero = () => (
  <EventHero id="home" aria-labelledby="event-title">
    <Logo src={logo} alt="logo" />
    <HeroTitle id="event-title">FinnCon</HeroTitle>
    <HeroDates>2027, week 34 & 35*</HeroDates>
    {/* <HeroDescription>Zon, zee, seks.</HeroDescription> */}
    <ProgrammeButton variant="light" href="#about" role="link">
      Lees verder
    </ProgrammeButton>
  </EventHero>
);

const Logo = styled.img`
  width: 320px;
  height: auto;
  max-width: 40%;
`;

const ProgrammeButton = styled(Button)`
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: 700;
`;

const EventHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 420px;
  padding-block: 64px;
  color: #fff;
  background:
    linear-gradient(90deg, rgb(0 0 0 / 50%), rgb(0 0 0 / 25%)),
    url("https://upload.wikimedia.org/wikipedia/commons/7/73/MontalivetFromAir.jpg")
      center / cover;

  @media (max-width: 767px) {
    min-height: 380px;
    padding-block: 48px;
  }
`;

const HeroTitle = styled.h1`
  font-family: "Irish Grover", cursive;
  font-size: 92px;
  line-height: 1.1;
  margin-bottom: 18px;

  @media (max-width: 767px) {
    font-size: 52px;
  }
`;

const HeroDates = styled.h3`
  /* font-family: "Irish Grover", cursive; */
  font-size: 42px;
  line-height: 1.1;
  margin-bottom: 28px;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const HeroDescription = styled.p`
  font-size: 22px;
  max-width: 480px;
  margin-bottom: 28px;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
