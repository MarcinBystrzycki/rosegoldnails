import Model, {attr} from '@ember-data/model';

export default class IndexModel extends Model {
    @attr carousel;
    @attr carouselBottomLink;
    @attr mainLogo;
    @attr map;
    @attr address;
    @attr contactInfo;
}
