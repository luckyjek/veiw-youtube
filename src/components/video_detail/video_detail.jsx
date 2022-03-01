/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({video, video:{snippet}}) => (
    <section className={styles.detail}>
        <iframe 
        className={styles.detail}
        type="text/html" 
        width="720" 
        height="405"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0" 
        allowfullscreen
        ></iframe>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
    </section>

);

export default VideoDetail;