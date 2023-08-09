import React from 'react';

const ExampleCarouselImage = ({ text }) => {
    return (
        <div style={{ position: 'relative', overflow:'hidden' }}>
            <img
                src="/images/carasol.jpg"
                alt={text}
                style={{ width: '100vw', height: '625px', objectFit: 'cover' }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                    fontSize: '4rem',
                }}
            >
                {text}
            </div>
        </div>
    );
};

export default ExampleCarouselImage;
