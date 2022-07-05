function handleError(ctx, error) {
  ctx.body = {
    code: 500,
    message: error.message
  }
}

module.exports = handleError