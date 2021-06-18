import { useEffect, useRef, useState } from 'react';
import styles from './Post.module.scss'
import myvid from '../../assets/vid1.mp4'

const Post = ({ url, id }) => {

    const [muted, setMuted] = useState(true);

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
        setMuted(false)
    }
    useEffect(() => {

        console.log(myref?.current?.getBoundingClientRect().top)

    }, [myref?.current?.getBoundingClientRect().top])

    return (<li className={styles.post}>
        <button onClick={handleOnVideoClick} >

            <video width="320" height="240" autoPlay={id === "2"} muted={muted} loop preload="metadata" ref={myref}>
                <source src={myvid} type="video/mp4" />
            </video>
        </button>

    </li>
    );
}

export default Post;

