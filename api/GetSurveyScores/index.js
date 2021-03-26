module.exports = async function(context, req) {
    let score = Math.random() * 5
    let rating = [
      'Poor',
      'Mediocre',
      'Passable',
      'Good',
      'Excellent'
    ]
    score = score.toFixed(2)
    context.res = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        score: score,
        rating: rating[Math.floor(score)]
      }
    };
  };
  