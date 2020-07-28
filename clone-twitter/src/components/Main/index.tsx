import React from 'react';
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';
import ProfilePage from '../ProfilePage/index'

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Suane Vallim</strong>
                    <span>56,3 mil Tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage />

            <BottomMenu>
                <HomeIcon className="active"/>
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    );
}

export default Main;