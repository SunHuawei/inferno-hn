import { Link } from 'inferno-router';

export default function Header({ navs }) {
    return (
        <nav>
            <ul>
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
