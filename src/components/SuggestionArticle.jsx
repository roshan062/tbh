import React from 'react'
import styles from './SuggestionArticle.module.css'

const SuggestionArticle = () => {
    return (
        <div className={styles.suggestion_article}>
            <div className={styles.hanging_container}>
                <div className={styles.box}><p>NEWS</p></div>
                <div className={styles.box2}></div>
            </div>
            <div className={styles.grid_container}>
                <div className={styles.article_cards}>Article 2</div>
                <div className={styles.article_cards}>Article 1</div>
                <div className={styles.article_cards}>Article 3</div>
                <div className={styles.article_cards}>Article 4</div>
            </div>

            <div className={styles.show_more}>
                <p><span>+</span><br />Show More</p>
            </div>
        </div>
    )
}

export default SuggestionArticle