import styles from './Post.module.scss'
import myvid from '../../assets/vid1.mp4'

const Post = ({ url }) => {

    const handleOnVideoClick = ({ target: { paused, pause, play } }) => {

        // paused ? play() : pause()
    }

    return (<li className={styles.post}>

        {/* autoPlay */}
        <video width="320" height="240" onClick={handleOnVideoClick}>
            <source src={myvid} type="video/mp4" />
        </video>
    </li>
    );
}

export default Post;

