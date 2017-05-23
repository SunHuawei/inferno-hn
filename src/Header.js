import { Link } from 'inferno-router';
import Logo from './Logo.js'
import styles from './Header.css'

export default function Header({ navs }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}><Logo /></div>
            <ul className={styles.ul}>
                <li>
                    <Link to="/news">
                        Hacker News
                    </Link>
                </li>
                <li>
                    <Link to="/newest">
                        new
                    </Link>
                </li>
                <li>
                    <Link to="/show">
                        show
                    </Link>
                </li>
                <li>
                    <Link to="/ask">
                        ask
                    </Link>
                </li>
                <li>
                    <Link to="/jobs">
                        job
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
