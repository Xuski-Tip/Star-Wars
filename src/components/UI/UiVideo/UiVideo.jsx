import PropTypes from 'prop-types';
import cn from 'classnames'
import styles from './UiVideo.module.css';
import { useEffect, useRef } from 'react';

const UiVideo = ({
    playbackRate=1.0,
    src,
    classes
}) => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, [])
    return (
        <video
            Loop
            outoPlay
            muted
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src}></source>
        </video>
    )
}



UiVideo.propTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    classes: PropTypes.string,
}

export default UiVideo;