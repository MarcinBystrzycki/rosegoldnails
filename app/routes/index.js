import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
    model() {
        return RSVP.hash({
            configuration: this.store.modelFor('configuration'),
            page: this.store.query('index', {}),
        })
    }
};
