import RESTSerializer from '@ember-data/serializer/rest';

export default RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {
            index: payload,
        };
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
