import React from 'react';
import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImgContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar src="https://i.imgur.com/uG9kYcO.png" alt=""/>
                <Content>
                    <Header>
                        <strong>Meu perfil no github</strong>
                        <span>@suanev</span>
                        <Dot />
                        <time>27 jul</time>
                    </Header>

                    <Description>Status atuais do meu perfil no github</Description>
                    <ImgContent src="https://i.imgur.com/OhWUsWS.png" alt="" />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            29
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;