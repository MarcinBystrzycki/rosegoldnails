import Model, { attr } from '@ember-data/model';

export default class ApplicationModel extends Model {
    @attr() application;
}
