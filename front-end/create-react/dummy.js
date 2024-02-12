let reviews = [{ name: 'vel', rating: 3 }]

let ratings = reviews.reduce((acc, review) => {
    return review.rating + acc;
}, 0) / reviews.length

ratings = isNaN(ratings) ? 0 : ratings;

console.log(ratings);

// # DB_LOCAL_URI = mongodb://127.0.0.1:27017/kumazon
