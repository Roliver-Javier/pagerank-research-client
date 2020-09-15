import React from 'react';
import styles from './styles.module.scss';
import BottomAction from './components/bottomAction';
import TopSection from './components/topSection';
import GraphSection from './components/graph/graphSection';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <TopSection />
      <section className='panel'>
        <div className={styles.mainContent}>
          <GraphSection label='Rankings' sections={['absolute_position']} />
        </div>
      </section>
      <BottomAction />
    </div>
  );
};

export default HomePage;
