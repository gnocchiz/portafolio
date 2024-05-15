import React, { useState } from 'react';
import Sound from 'react-sound';
import TheOtherSide from '../assets/thedayofnight.mp3';

const PlaySound = ({ handleSongLoading, handleSongPlaying, handleSongFinishedPlaying }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div class="player">
            <div class='control-panel'>
        <div>

        <div class="controls">
            <div class="prev"></div>
                <div id="play" class="play" onClick={() => setIsPlaying(!isPlaying)}>
        
            </div>
            <div class="next"></div>
            <Sound
                url={TheOtherSide}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
                autoLoad={true}
            />
            </div>
        </div>
        </div>
        </div>
    );
};

export default PlaySound;
