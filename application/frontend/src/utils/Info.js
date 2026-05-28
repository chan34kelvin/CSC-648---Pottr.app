const Info = {};

Info.getAllInfoForCompetition = (cards) => {
  //extract from card the info: image, title, category, id, {details: fee, prize, use finddays to get day}
  let results = [];
  if (cards) {
    for (let i = 0; i < cards.length; i += 1) {
      const card = cards[i];
      const details = {
        prize: card["prizePool"],
        fee: card["entryFee"],
        time: card["endTime"],
        active: card["winningPost"],
      };
      const result = {
        image: card["picturePath"],
        title: card["competitionName"],
        category: card["categoryName"],
        id: card["competitionId"],
        categoryId: card["categoryId"],
        active: card["winningPost"],
        time: card["endTime"],
        fee: card["entryFee"],
        prize: card["prizePool"],
        details: details,
      };
      results[i] = result;
    }
  }

  return results;
};

module.exports = Info;
