import React, { Fragment } from 'react';

import Header from 'components/Header';
import Contents from 'components/Contents';
import Navbars from 'components/Navbars';
import CardsFooter from "components/Footers/CardsFooter.js";

class Project extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbars />
        <Header />
        <Contents />
        <CardsFooter />
      </Fragment>
    )
  };
}

export default Project;