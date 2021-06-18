import { useRef } from 'react';
import styles from './Post.module.scss'
import myvid from '../../assets/vid1.mp4'

const Post = ({ url }) => {

    const myref = useRef();

    async function handleOnVideoClick() {

        if (myref.current.paused) {
            try {
                await myref.current.play();

            } catch (err) {
            }
        } else {
            try {
                await myref.current.pause();

            } catch (err) {
            }
        }


    }

    return (<li className={styles.post}>
        <button onClick={handleOnVideoClick} >

            <video width="320" height="240" autoPlay muted loop preload="metadata" ref={myref}>
                <source src={myvid} type="video/mp4" />
            </video>
        </button>

    </li>
    );
}

export default Post;

