import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import api from './api';

const PAGE_SIZE = 30

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: null,
            fetching: false,
            page: 1
        }
    }

    render () {
        let {fetching, list, page} = this.state;
        let {Item} = this.props;

        return (
            <div>
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
                        </div>
                    )
                }
            </div>
        )
    }

    componentDidMount() {
        let {apiPath} = this.props;
        this.setState({fetching: true})
        api.fetchList(apiPath, this.state.page).then(list => {
            this.setState({list, fetching: false})
        })
    }
}