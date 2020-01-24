import Model, { attr } from '@ember-data/model';

export default class ConfigurationModel extends Model {
    @attr('string') appTitle;
    @attr navLinks;
    @attr socialButtons;
    @attr logo;
}
