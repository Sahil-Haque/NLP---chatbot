const {NlpManager, Language} = require('node-nlp');
const manager = new NlpManager(({languages: ['en']}));

//add documents
//third argument shows the intent of the text shown in the second arg
manager.addDocument('en', 'hello', 'greeting');
manager.addDocument('en', 'yo', 'greeting');
manager.addDocument('en', 'hi', 'greeting');
manager.addDocument('en', 'good morning', 'greeting');
manager.addDocument('en', 'good afternoon', 'greeting');
manager.addDocument('en', 'hey you', 'greeting');
manager.addDocument('en', 'good day', 'greeting');

//add answers
manager.addAnswer('en','greeting', 'Hey!');
manager.addAnswer('en','greeting', 'Yo');
manager.addAnswer('en','greeting', 'Hi');
manager.addAnswer('en','greeting', 'Wassup');

//train model
//training a model returns a promise which means we must use either the await command or .then
manager.train().then(async () => {
    manager.save();
    let response = await manager.process('en', 'hey sir');
    console.log(response);
})


