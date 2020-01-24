import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ContactRoute extends Route {
    @service store;
    model() {
        return RSVP.hash({
            configuration: this.store.modelFor('configuration'),
            page: this.store.findRecord('contact', 1),
        })
    }
};
