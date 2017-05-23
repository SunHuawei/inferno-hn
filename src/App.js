import Header from './Header'
import styles from './App.css'

export default function App({ children }) {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.content}>
                { children }
            </div>
        </div>
    );
}
