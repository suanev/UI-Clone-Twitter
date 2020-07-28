import React from 'react';
import { Container, Wrapper } from './styles';
import Main from '../Main/index';
import Menubar from '../Menubar';
import Sidebar from '../Sidebar';

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Menubar />
                <Main />
                <Sidebar />
            </Wrapper>
        </Container>
    );
}

export default Layout;