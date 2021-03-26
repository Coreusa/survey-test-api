module.exports = async function (context, req) {
    const questions = [
        'Will people look for entertainment online more than they do today?',
        'Who is your favorite racer this season?',
        'Have you heard about Hest International?',
        'Have you won any bets on Horse Racing lately?',
        'Have you watched any tournaments in the last month?',
        'I think more countries should be allowed to participate in Horse Racing Tournaments',
        'Adding more new types of events would benefit local participation',
        'Would you like to see more providers offer Horse Racing Streams?',
        'Prioritizing home work before spare time activities is important',
        'On a scale from 1 to 5, how likely would you be to recommend Horse Racing tournaments to your friends?',
        'Could tournaments be arranged more locally?',
        'Horse Racing is important for my day',
        'Training every day is important for both physical and mental health',
        'How has the internet affected your work?'
    ]
    const options = [
        {
            text: 'Like today',
            value: 5
        },
        {
            text: 'That sounds interesting',
            value: 4
        },
        {
            text: 'Not sure',
            value: null
        },
        {
            text: 'Totally agree',
            value: 5
        },
        {
            text: 'Totally disagree',
            value: 1
        },
        {
            text: 'I don\'t remember / Recall',
            value: null
        },
        {
            text: 'Agree',
            value: 4
        },
        {
            text: 'Yes',
            value: 3
        },
        {
            text: 'To some extent',
            value: 2
        },
        {
            text: 'No',
            value: 0
        },
        {
            text: 'I am considering',
            value: 2
        },
        {
            text: 'Somewhat agree',
            value: 3
        },
        {
            text: 'I have no idea',
            value: null
        },
        {
            text: 'It is a vital part of my day',
            value: 5
        }
    ]

    let shuffled = questions.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1])

    shuffled = shuffled.map(e => {
        return {
            questionText: e,
            answer: options[Math.floor(Math.random() * options.length)]
        }
    })
    // Question Text
    // User answer
    // Answer value
    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            answers: shuffled
        },

    };
};