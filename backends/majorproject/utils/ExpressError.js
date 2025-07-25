class ExpressError extends Error {
  constructor(status, message) {
    super(); // Pass message to Error constructor
    this.status = status;
    this.message = message;
  }
}

module.exports = ExpressError;
