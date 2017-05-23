import Inferno, { linkEvent } from 'inferno';
import { Link } from 'inferno-router';
import Component from 'inferno-component';
import api from './api';
import styles from './ListPage.css';

const PAGE_SIZE = 30

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: null,
            fetching: false
        }
    }

    render () {
        let {fetching, list} = this.state;
        let {Item, apiPath, params: {page}} = this.props;
        page = parseInt(page || 1, 10);

        return (
            <div className={styles.list}>
                {
                    fetching ? (
                        <div>Loading...</div>
                    ) : (
                        <div>
                            {
                                (list || []).map((item, index) => (
                                    <Item key={item.id} index={PAGE_SIZE * (page - 1) + index + 1} item={item}/>
                                ))
                            }

                            <div className={styles.actions}>
                                <Link to={`/${apiPath}/${page + 1}`}>More</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.page != this.props.params.page) {
            this.refreshList(nextProps)
        }
    }

    componentDidMount() {
        this.refreshList(this.props)
    }

    refreshList(props) {
        let {apiPath, params: {page}} = props;
        this.setState({fetching: true})
        api.fetchList(apiPath, page || 1).then(list => {
            this.setState({list, fetching: false})
        })
    }
}