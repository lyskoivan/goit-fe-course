const uuidv1 = require('uuid/v1');
const shortid = require('shortid')

const sId = shortid.generate();
const id = uuidv1();
const generateId = () => {
    console.log(id);
    console.log(sId);
};
generateId();