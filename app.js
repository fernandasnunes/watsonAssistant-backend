const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

const assistant = new AssistantV1({
    username: 'apikey',
    password: 'NTd-lV2uuKo6lS3ODz4q_3fD2Wr7HsqRky7v-hjXsHGw',
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '2018-02-16',
});

app.post('/conversation/', (req, res) => {
    const { text, context = {} } = req.body;

    const params = {
        input: { text },
        workspace_id: 'fad8d7c3-ac60-45f5-95f5-e2c6fc7c5a83',
        context,
    };

    assistant.message(params, (err, response) => {
        if (err) {
            console.error(err);
            res.status(500).json(err);
        } else {
            res.json(response);
        }
    });
});

app.listen(port, () => console.log(`Running on port ${port}`));