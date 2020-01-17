import RESTSerializer from '@ember-data/serializer/rest';

export default RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {
            configurations: payload,
        };
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
