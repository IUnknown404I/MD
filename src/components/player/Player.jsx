import React from 'react';
import ReactPlayer from 'react-player'

const Player = ({isMobile, chapter, numeric, title}) => {
    const url = `video/chap${chapter}/${chapter}-${numeric}.m3u8`
    const playerContainerClassName = `player-container ${chapter}${numeric}`;
    const playerClassName = `react-player rp${chapter}${numeric}`;

    return isMobile
        ?
        <div className={playerContainerClassName}>
            <div className='player-title'>
                <strong>{numeric}.</strong> {title}
            </div>

            <video className="video-js vjs-default-skin video-dimensions"
                   controls
                   preload="true"
                   data-setup='{}'>
                <source src={url}
                        type="application/x-mpegURL"/>
            </video>
        </div>
        :
        <div className={playerContainerClassName}>
            <div className='player-title'>
                <strong>{numeric}.</strong> {title}
            </div>

            {/*<video*/}
            {/*    // preload='auto'*/}
            {/*    autoPlay muted controls */}
            {/*style={{width: '100%', height: '100%'}}*/}
            {/*>*/}
            {/*    <source src="1-1.m3u8" type="application/x-mpegURL" />*/}
            {/*</video>*/}

            <ReactPlayer
                className={playerClassName}
                url={url}
                width='100%'
                height='fit-content'
                controls={true}
                playsInline
                config={{
                    file: {
                        forceHLS: true,
                    }
                }}
            />
        </div>
};

export default Player;