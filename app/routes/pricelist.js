import Route from '@ember/routing/route';

export default class PricelistRoute extends Route {
    model() {
        return this.modelFor('navigation');
    }
};
