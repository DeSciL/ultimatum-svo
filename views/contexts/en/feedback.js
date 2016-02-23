module.exports = function(settings, headers) {
    var coins = settings.pp.COINS;

    return {
        "title": "Feedback",
        "feedback": "Feedback",
        "choices": "The other player has made the following choices...",
        "payoff": "Your payoff in this round: " + coins + ".",
        "youReceivedAnOffer1": "First value offered: ",
        "youReceivedAnOffer2": "Second value offered: ",
        "submit": "Continue"
    };
};
