import Component from '@ember/component';
import { computed, action } from '@ember/object';
import { debounce } from '@ember/runloop';

const RESIZE_DEBOUNCE_DELY = 250;
const MAX_NOT_DESKTOP_WIDTH = 992;
export default Component.extend({
    showNav: false,
    isMobile: computed(function() {
        return this.element.scrollWidth < MAX_NOT_DESKTOP_WIDTH;
    }),
    mobileShowNav: computed('showNav', 'isMobile', function () {
        return this.get('showNav') && this.get('isMobile');
    }),
    resizeWindow() {
        this.notifyPropertyChange('isMobile');
    },
    didInsertElement() {
        this._super(...arguments);
        this._boundResize = () => debounce(this, 'resizeWindow', RESIZE_DEBOUNCE_DELY);
        window.addEventListener('resize', this._boundResize, false);
    },
    willDestroyElement() {
        this._super(...arguments);
        window.removeEventListener('resize', this._boundResize, false);
        this._boundResize = null;
    },
    actions: {
        toggleMenu() {
            this.set('showNav', !this.get('showNav'))
        }
    }
});

