exports.normalizePhoneNumber = (number) => {
  let cleaned = ("" + number).replace(/\D/g, "");

  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  return null;
};
exports.handleEditSalary = (amount) => {
  let cleaned = ("" + amount).replace(/..$/g, "").replace(/\D/g, "");
  return parseInt(cleaned);
};

exports.formatSalary = {
  formatAnnualSalary: function (amount) {
    return (
      "$" +
      parseInt(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
  },
  formatMonthlyWage: function (amount) {
    return (
      "$" +
      parseInt(amount / 12)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
  },
  formatWeeklyWage: function (amount) {
    return (
      "$" +
      parseInt(amount / 52)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
  },
  formatDailyWage: function (amount) {
    return (
      "$" +
      parseInt(amount / 262)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
  },
  formatHrWage: function (amount) {
    return (
      "$" +
      parseInt(amount / 52 / 40)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
  }
};
