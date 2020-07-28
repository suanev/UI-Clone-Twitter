import React from 'react';
import StickyBox from 'react-sticky-box';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const Sidebar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion name="Dua Lipa" nickname="@dualipa" src="https://i.imgur.com/xWG8bpv.jpg" />,
                            <FollowSuggestion name="Selena Gomez" nickname="@selenagomez" src="https://i.imgur.com/wMAAAi7.jpg" />,
                            <FollowSuggestion name="Eliza Jane" nickname="@elizajaneface" src="https://i.imgur.com/cCBGplA.jpg" />
                        ]} />
                    <List
                        title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]} />
                    <List
                        title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]} />
                    <List
                        title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]} />
                </Body>
            </StickyBox>
        </Container>
    );
}

export default Sidebar;