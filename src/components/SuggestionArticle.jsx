import React from 'react'
import styles from './SuggestionArticle.module.css'

const SuggestionArticle = () => {
    return (
        <div className={styles.suggestion_article}>
            <div className={styles.hanging_container}>
                <div className={styles.box}><p>NEWS</p></div>
                <div className={styles.box2}></div>
            </div>

        </div>
    )
}

export default SuggestionArticle