import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const MainLayout = props => (
  <div>
    <AppBar>
      <Container maxWidth='lg' >
        <Toolbar disableGutters>
          <PageNav/>
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg' >
      <Toolbar />
      {props.children}
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;