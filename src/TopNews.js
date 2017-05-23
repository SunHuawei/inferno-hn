import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import CommonListItem from './CommonListItem';
import ListPage from './ListPage';

export default (props) =>
    <ListPage Item={CommonListItem} apiPath='news' {...props}/>