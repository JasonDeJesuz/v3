import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import PeopleHero from '../components/sections/peopleHero';
import People from '../components/sections/people';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const PeoplePage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <PeopleHero />
      <People />
    </StyledMainContainer>
  </Layout>
);

PeoplePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PeoplePage;
