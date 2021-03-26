module.exports = async function(context, req) {
    const surveyKey = context.bindingData.surveyKey
    const dateObj =  new Date()
    const startDate = dateObj.setMonth(dateObj.getMonth() - 1)
    const endDate = dateObj.setMonth(dateObj.getMonth() + 2)
    const survey = {
        name: 'Hest International Survey',
        slug: 'hest-international-survey',
        surveyKey: surveyKey,
        customerKey: `hest-international-${surveyKey}`,
        description: 'The future of horse racing is here! The dawn of new and interesting advances in technology allows for even more engaging content to our users. Through this survey, you\'ll help us understand how to better cater to a broader audience.',
        logoImage: 'https://i.imgur.com/DiyCbNA.png',
        backgroundImage: 'https://imgur.com/vJxazQI.jpg',
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        anonymous: true,

    }
    context.res = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        survey: survey
      }
    };
  };
  