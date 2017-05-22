import Inferno from 'inferno';
import Component from 'inferno-component';
import JobListItem from './JobListItem';
import ListPage from './ListPage';

export default () => <ListPage Item={JobListItem} apiPath='jobs'/>