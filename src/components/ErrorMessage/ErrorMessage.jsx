import styles from "./ErrorMessage.module.css";
import video from './Video/han-solo.mp4'
import UiVideo from '@ui/UiVideo'
const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won. <br /> We cannot display data. <br /> Come back
        when we fix everything
      </p>
      <UiVideo 
        src={video}
        classes={styles.video}
        playbackRate={0.5}
      >

      </UiVideo>
    </>
  );
};

export default ErrorMessage;
