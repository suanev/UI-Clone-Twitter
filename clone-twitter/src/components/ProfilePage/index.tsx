import React from 'react';
import { Container, Banner, BannerImage, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <BannerImage src="https://i.imgur.com/csEwL7J.jpg" alt="" />
                <Avatar src="https://i.imgur.com/uG9kYcO.png" alt="" />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Suane Vallim</h1>
                <h2>@suanev</h2>

                <p>Software Engineering at <a href="http://ilegra.com.br/">Ilegra</a></p>

                <ul>
                    <li>
                        <LocationIcon />
                        Porto Alegre, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 21 de maio de 1997
                    </li>
                </ul>

                <Followage>
                    <span>seguindo <strong>123</strong></span>
                    <span> <strong>907 </strong> seguidores</span>
                </Followage>
            </ProfileData>
            <Feed />
        </Container>
    );
}

export default ProfilePage;