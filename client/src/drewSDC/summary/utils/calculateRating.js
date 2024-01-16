
const calculateRating = (positiveReviews, negativeReviews) => {
    // Calculate the total number of positive and negative reviews
    const totalReviews = positiveReviews + negativeReviews;
    // Calculate the ratio of reviews
    const positiveRatio = positiveReviews / totalReviews;
    const negativeRatio = negativeReviews / totalReviews;
    // Convert the ratio to a percentage
    const positivePercentage = (positiveRatio * 100).toFixed();
    const negativePercentage = (negativeRatio * 100).toFixed();
    // Recommendation based on the percentage of positive reviews
    let recommendation = '';
    if (positivePercentage >= 95) {
        recommendation = 'Overwhelmingly Positive';
    } else if (positivePercentage >= 80 && positivePercentage <= 94) {
        recommendation = 'Very Positive';
    } else if (positivePercentage >= 70 && positivePercentage <= 79) {
        recommendation = 'Mostly Positive';
    } else if (positivePercentage >= 40 && positivePercentage <= 69) {
        recommendation = 'Mixed';
    } else if (positivePercentage >= 20 && positivePercentage <= 39) {
        recommendation = 'Mostly Negative';
    } else if (positivePercentage >= 10 && positivePercentage <= 19) {
        recommendation = 'Very Negative';
    } else {
        recommendation = 'Overwhelmingly Negative';
    }

    return {
        positivePercentage,
        negativePercentage,
        recommendation
    };
};

export default calculateRating;