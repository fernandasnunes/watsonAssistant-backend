const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');
const assistantRoutes = require('express').Router()

const assistant = new AssistantV1({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    url: process.env.URL,
    version: process.env.VERSION
});

assistantRoutes.post('/conversation', (req, res) => {
    const text = req.body.message;

    if (req.body.context) {
        context = req.body.context
    }

    const params = {
        input: {
            text
        },
        workspace_id: '0405a11b-e0a7-4963-a84f-33469f0d87e5',
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


module.exports = assistantRoutes