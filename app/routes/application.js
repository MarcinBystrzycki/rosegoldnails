import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
    @service store;
    model() {
        return this.get('store').queryRecord('application', {});
    }
    @action
    loading(transition, originRoute) {
        let controller = this.controllerFor('application');
        controller.set('currentlyLoading', true);
        transition.promise.finally(function() {
            controller.set('currentlyLoading', false);
        });
        return true;
    }
}
