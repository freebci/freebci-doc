import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import FeaturesSection from '../components/homepage/FeaturesSection';
import NewsFeed from '../components/homepage/NewsFeed';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Homepage() {
  return (
    <Layout
      title="The FreeBCI Project — Open Source Brain-Computer Interface"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <HeroSection />
      <FeaturesSection />
      <NewsFeed />
      <CommunitySection />
      <HomeFooter />
    </Layout>
  );
}
