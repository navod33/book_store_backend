export const authenticateUser = (req, res, next) => {
    // Check if user is logged in (e.g., check for authentication token in request headers)
    const isAuthenticated = true; // Placeholder, implement your authentication logic here
    if (!isAuthenticated) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  };
  