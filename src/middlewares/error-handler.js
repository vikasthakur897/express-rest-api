const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: err.message || 'An unexpected error occurred'
    });
}

export default errorHandler;