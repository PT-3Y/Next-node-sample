import styles from '../pages/page.module.css'

function BottomCard() {

    return(<div className={styles.grid}>
        <a
            href="Catfact"
            className={styles.card}
            rel="noopener noreferrer"
        >
            <h2>
                CatFact <span>-&gt;</span>
            </h2>
            <p>go to catfact</p>
        </a>

        <a
            href="Bitcoin"
            className={styles.card}
            rel="noopener noreferrer"
        >
            <h2>
                Bitcoin Price <span>-&gt;</span>
            </h2>
            <p>go to bitcoin price</p>
        </a>

        <a
            href="Activity"
            className={styles.card}
            rel="noopener noreferrer"
        >
            <h2>
                Activity <span>-&gt;</span>
            </h2>
            <p>go to activity</p>
        </a>

        <a
            href="Random"
            className={styles.card}
            rel="noopener noreferrer"
        >
            <h2>
                Dog Image <span>-&gt;</span>
            </h2>
            <p>
                go to dog image
            </p>
        </a>

    </div>)


}
    export default BottomCard;