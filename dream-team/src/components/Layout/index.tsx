import React from 'react';

import { Grid } from './styles';
import MainHeader from '../MainHeader';
import Home from '../Home';
import Vision from '../Vision';
import Business from '../Business';

const Layout: React.FC = () => {
    return (
        <Grid>
            <MainHeader/>
            <Home/>
            <Vision/>
            <Business/>
        </Grid>
    );
}

export default Layout;