// Stores config details for the application

const port = 3000;
const key = process.env.AZURE_KEY;
const endpoint = process.env.AZURE_RESOURCE_ENDPOINT;
const headers = {
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key' : key
}
const uriBase = endpoint + 'vision/v3.1/analyze';
const uriBase4 = endpoint + 'computervision/imageanalysis:analyze';

module.exports = {port, headers, uriBase, uriBase4};
