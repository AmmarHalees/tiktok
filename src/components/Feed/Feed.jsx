import Post from '../Post/Post'
import styles from './Feed.module.scss'
const Feed = () => {
    return (
        <ul className={styles.feed}>

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />


        </ul>);
}

export default Feed;