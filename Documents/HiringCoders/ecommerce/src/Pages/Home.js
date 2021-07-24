import React from 'react';
import Ban from '../Components/Banner';
import HeaderSection from '../Components/Header';
import MoreViews from '../Components/MoreViews';
import PickEventos from '../Components/PickEventos';
import NewsLetter from '../Components/Newsletter';
import FooterSection from '../Components/Footer';
import ban1 from '../img/banner2.jpg';
import styled from 'styled-components';


const HomeSection = styled.section`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    width:100%;
    height:auto;
`

export default function Home(){

    return(
        <HomeSection>
            <HeaderSection />

            <Ban img={ban1}/>

            <PickEventos />

            <MoreViews />

            <NewsLetter />

            <FooterSection />
        </HomeSection>
    )

}