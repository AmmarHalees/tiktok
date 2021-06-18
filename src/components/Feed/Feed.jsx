import Post from '../Post/Post'
import styles from './Feed.module.scss'
import feedJSON from '../../data/feed.json'
const Feed = () => {
    return (
        <ul className={styles.feed}>

            {feedJSON.data.map(({ url, title, id }) => {

                return <Post key={id} id={id} url={url} title={title} />

            })}

        </ul>);
}

export default Feed;