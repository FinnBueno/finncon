import type { FC } from "react";
import { Container, Navbar as BSNavbar, Nav } from "react-bootstrap";
import styled from "styled-components";

export const Navbar: FC = () => (
  <SiteNavbar expand="md" collapseOnSelect>
    <Container>
      <SiteName href="#home">FinnCon</SiteName>
      <BSNavbar.Toggle
        aria-controls="site-navigation"
        aria-label="Toggle navigation"
      />
      <BSNavbar.Collapse id="site-navigation">
        <Navigation>
          <NavigationLink href="/finncon/verblijf.html">Verblijf</NavigationLink>
          <NavigationLink href="/finncon/activiteiten.html">
            Activiteiten
          </NavigationLink>
        </Navigation>
      </BSNavbar.Collapse>
    </Container>
  </SiteNavbar>
);

const SiteNavbar = styled(BSNavbar)`
  padding-block: 20px;
  background: #8a2334;

  @media (max-width: 767px) {
    padding-block: 12px;
  }
`;

const SiteName = styled(BSNavbar.Brand)`
  font-family: Georgia, serif;
  font-size: 28px;
  font-weight: 700;
  color: white;

  &:hover {
    color: white;
  }

  &:focus {
    color: white;
  }
`;

const Navigation = styled(Nav)`
  margin-left: auto;
  color: white;
`;

const NavigationLink = styled(Nav.Link)`
  &&& {
    color: var(--event-ink);
    padding-inline: 18px;

    @media (max-width: 767px) {
      padding: 12px 0;
    }
  }
`;
