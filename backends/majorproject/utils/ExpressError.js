class ExpressError extends Error {
  constructor(status, message) {
    super(message); // Pass message to Error constructor
    this.status = status;
  }
}

module.exports = ExpressError;
