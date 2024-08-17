import React from 'react';
import Parallax02 from '@/components/parallax/Parallax02';
import LuxyScroll from '@/components/luxy/LuxyScroll';
import KeyVisual from '@/components/layout/KeyVisual';

const Home: React.FC = () => {
  return (
    <div>
      <KeyVisual />
      {/* <Parallax02 /> */}
      <LuxyScroll />
      <section style={{ height: '100vh', backgroundColor: '#333', color: '#fff', textAlign: 'center'}}>
        <h2>More Content</h2>
        <p>Scroll to see the parallax effect in action!</p>
      </section>
    </div>
  );
};

export default Home;