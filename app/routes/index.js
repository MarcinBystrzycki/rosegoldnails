import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service store;
    model() {
        return RSVP.hash({
            configuration: this.store.modelFor('configuration'),
            page: this.store.findRecord('index', 1),
        })
    }
};
