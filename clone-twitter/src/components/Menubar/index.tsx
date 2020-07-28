import React from 'react';
import { Container, TopSide, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, PerfilIcon, BotSide, Avatar, ProfileData, ExitIcon } from './styles';
import Button from '../Button';

const Menubar: React.FC = () => {
    return (
        <Container>
            <TopSide>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton className="active">
                    <PerfilIcon />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                   <span>Tweetar</span> 
                </Button>
            </TopSide>

            <BotSide>
            <Avatar src="https://i.imgur.com/uG9kYcO.png" alt=""/>
                <ProfileData>
                    <strong>Suane Vallim</strong>
                    <span>@suanev</span>
                </ProfileData>

                <ExitIcon />
            </BotSide>
        </Container>
    );
}

export default Menubar;