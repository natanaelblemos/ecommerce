import React from 'react';
import Ban from '../Components/Banner';
import HeaderSection from '../Components/Header';
import MoreViews from '../Components/MoreViews';
import PickEventos from '../Components/PickEventos';
import NewsLetter from '../Components/Newsletter';
import FooterSection from '../Components/Footer';


export default function Home(){

    return(
        <>
            <HeaderSection />

            <Ban />

            <PickEventos />

            <MoreViews />

            <NewsLetter />

            <FooterSection />
        </>
    )

}