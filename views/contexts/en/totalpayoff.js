module.exports = function(settings, headers) {
    var coins = settings.pp.COINS;

    return {
        "title": "Total Payoff",
        "totalpayoff": "Total Payoff",
        "payoff": "Your total payoff is:::: " + coins + ".",
        "submit": "Continue"
    };
};
