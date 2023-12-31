//---------- Data uri function used to send the data in buffer mode
const DataUriParser = require('datauri/parser');
const path = require('path');

//Function to send data in buffer
const getDataUri = (file) => {
    try {

        const parser = new DataUriParser();
        
        let extName = path.extname(file.originalname).toString();

        return parser.format(extName, file.buffer);

    } catch (error) { throw new Error(error.message); }
}

module.exports = getDataUri;