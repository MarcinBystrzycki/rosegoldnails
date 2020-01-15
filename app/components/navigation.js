import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.set('navigation', {
            appTitle: 'Rose Gold Nails',
            links: [
                {
                    name: 'Start',
                    path: 'index',
                },
                {
                    name: 'O salonie',
                    path: 'about',
                },
                {
                    name: 'Cennik',
                    path: 'pricelist',
                },
                {
                    name: 'Kontakt',
                    path: 'contact',
                },
            ],
            logoSrc: '/assets/images/rosegoldnails-logo_text_w400.png',
        })
    },
});
