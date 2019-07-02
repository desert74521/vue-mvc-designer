export default {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'Person',
    description: 'Person',
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        age: {
            type: 'integer',
        },
        sex: {
            type: 'string',
        },
        address: {
            type: 'string',
        },
        phone: {
            type: 'string',
        },
    },
    required: ['name', 'age', 'sex', 'address', 'phone'],

};
