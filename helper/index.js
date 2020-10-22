function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
}

module.exports = { addDays }