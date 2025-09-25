import React from 'react';

const StatisticsPanel: React.FC = () => {
    const fakeStatistics = {
        energySavings: Math.floor(Math.random() * 100) + ' kWh',
        usageTime: Math.floor(Math.random() * 24) + ' hours',
        operationalStatus: Math.random() > 0.5 ? 'Operational' : 'Maintenance Required'
    };

    return (
        <div className="statistics-panel">
            <h2>Solar Roller Shutter Statistics</h2>
            <ul>
                <li>Energy Savings: {fakeStatistics.energySavings}</li>
                <li>Usage Time: {fakeStatistics.usageTime}</li>
                <li>Operational Status: {fakeStatistics.operationalStatus}</li>
            </ul>
        </div>
    );
};

export default StatisticsPanel;