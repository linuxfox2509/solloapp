import React from 'react';
import RollerShutterControl from '../components/RollerShutterControl';
import StatisticsPanel from '../components/StatisticsPanel';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Solar Roller Shutter Control</h1>
            <RollerShutterControl />
            <StatisticsPanel />
        </div>
    );
};

export default Home;