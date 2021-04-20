import React, { Fragment } from 'react';

import Header from 'components/Header';
import HomeDetail from 'components/HomeDetail';
import CardsFooter from "components/Footers/CardsFooter.js";

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <HomeDetail />
                <CardsFooter />
            </Fragment>
        )
    };
}

export default Home;