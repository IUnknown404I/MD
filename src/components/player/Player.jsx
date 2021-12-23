import React from 'react';
import ReactPlayer from 'react-player'

const Player = ({chapter, numeric, title}) => {
    const url = `video/${chapter}-${numeric}.m3u8`

    return (
        <div className='player-container'>
            <div className='player-title'>
                <strong>{numeric}.</strong> {title}
            </div>

            <ReactPlayer
                className='react-player'
                url={url}
                width='100%'
                height='fit-content'
                controls
                config={{
                    file: {
                        forceHLS: true,
                    }
                }}
            />
        </div>
    );
};

export default Player;