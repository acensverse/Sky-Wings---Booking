const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    const statusCode = error.status || 500; // Default to 500 if status is not provided
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

export { asyncHandler };
