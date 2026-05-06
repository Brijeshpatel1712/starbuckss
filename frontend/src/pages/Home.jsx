import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import HeroSection from '../components/HeroSection';
import PromoSection from '../components/PromoSection';
import NondairySection from '../components/NondairySection';
import RefillsSection from '../components/RefillsSection';
import FreeCupSection from '../components/FreeCupSection';
import FooterNav from '../components/FooterNav';
import Footer from '../components/Footer';
import GiftCardBanner from '../components/GiftCardBanner';
import AdditionalDisclaimer from '../components/AdditionalDisclaimer';
import BottomFooter from '../components/BottomFooter';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <HeroSection />
            <PromoSection />
            <NondairySection />
            <RefillsSection />
            <FreeCupSection />
            <GiftCardBanner />
            <FooterNav />
            <Footer />
            <AdditionalDisclaimer />
            <BottomFooter />
        </>
    );
};

export default Home;
