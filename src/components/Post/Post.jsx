import styles from './Post.module.scss'
import myvid from '../../assets/vid1.mp4'

const Post = ({ url }) => {

    function handleOnVideoClick({ target: { paused, pause, play } }) {

        // if (paused) {

        //     play();

        // } else {
        //     pause();
        // }

        return
    }

    return (<li className={styles.post}>

        <video width="320" height="240" onClick={handleOnVideoClick} autoPlay muted loop>
            <source src={myvid} type="video/mp4" />
        </video>
    </li>
    );
}

export default Post;

