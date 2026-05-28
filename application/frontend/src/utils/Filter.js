const Filter = {};

Filter.findValues = (cards, filterName) => {
  const compSet = new Set();
  for (let i = 0; i < cards.length; i += 1) {
    compSet.add(cards[i][filterName]);
  }
  return Array.from(compSet);
};

Filter.filterCategory = (cards, category) => {
  let results = cards;

  if (cards.length > 0 && category !== "") {
    results = results.filter((card) => {
      return card["category"] === category;
    });
  }

  return results;
};

Filter.filterPrize = (cards, prizeOrder) => {
  let results = cards;
  let filterName = "prize";

  if (cards.length > 0 && prizeOrder !== "") {
    if (prizeOrder === "less than 1000") {
      results = results.filter((card) => {
        return card[filterName] < 1000;
      });
    } else if (prizeOrder === "1000 to 3000") {
      results = results.filter((card) => {
        return card[filterName] >= 1000 && card[filterName] <= 3000;
      });
    } else if (prizeOrder === "3000 to 5000") {
      results = results.filter((card) => {
        return card[filterName] >= 3000 && card[filterName] <= 5000;
      });
    } else if (prizeOrder === "5000 to 10000") {
      results = results.filter((card) => {
        return card[filterName] >= 5000 && card[filterName] <= 10000;
      });
    } else if (prizeOrder === "more than 10000") {
      results = results.filter((card) => {
        return card[filterName] > 10000;
      });
    }
  }

  return results;
};

Filter.filterFee = (cards, feeOrder) => {
  let results = cards;
  let filterName = "fee";

  if (cards.length > 0 && feeOrder !== "") {
    if (feeOrder === "less than 10") {
      results = results.filter((card) => {
        return card[filterName] < 10;
      });
    } else if (feeOrder === "10 to 50") {
      results = results.filter((card) => {
        return card[filterName] >= 10 && card[filterName] <= 50;
      });
    } else if (feeOrder === "50 to 100") {
      results = results.filter((card) => {
        return card[filterName] >= 50 && card[filterName] <= 100;
      });
    } else if (feeOrder === "more than 100") {
      results = results.filter((card) => {
        return card[filterName] > 100;
      });
    }
  }

  return results;
};

Filter.filterActive = (cards, active) => {
  let results = cards;

  if (cards.length > 0 && active !== "") {
    results = results.filter((card) => {
      let status = "Active";
      if (card["active"]) {
        status = "Inactive";
      }
      return status === active;
    });
  }

  return results;
};

module.exports = Filter;
