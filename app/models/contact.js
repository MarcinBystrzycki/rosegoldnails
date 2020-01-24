import Model, {attr} from '@ember-data/model';

export default class ContactModel extends Model {
    @attr address;
    @attr contactInfo;
    @attr map;
}
