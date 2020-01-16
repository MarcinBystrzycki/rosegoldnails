import Model, { attr } from '@ember-data/model';

export default class NavigationModel extends Model {
    @attr('string') appTitle;
    @attr() links;
    @attr('string') logoSrc;
}
