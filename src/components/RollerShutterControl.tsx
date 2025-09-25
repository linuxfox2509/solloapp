import React, { useState } from 'react';

const RollerShutterControl: React.FC = () => {
    const [position, setPosition] = useState(0); // Position in percentage (0 to 100)
    const [status, setStatus] = useState('Closed'); // Status of the shutter

    const openShutter = () => {
        setPosition(100);
        setStatus('Open');
    };

    const closeShutter = () => {
        setPosition(0);
        setStatus('Closed');
    };

    const adjustShutter = (newPosition: number) => {
        if (newPosition >= 0 && newPosition <= 100) {
            setPosition(newPosition);
            setStatus(newPosition === 0 ? 'Closed' : newPosition === 100 ? 'Open' : 'Partially Open');
        }
    };

    return (
        <div>
            <h2>Roller Shutter Control</h2>
            <p>Status: {status}</p>
            <p>Position: {position}%</p>
            <button onClick={openShutter}>Open</button>
            <button onClick={closeShutter}>Close</button>
            <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => adjustShutter(Number(e.target.value))}
            />
        </div>
    );
};

export default RollerShutterControl;