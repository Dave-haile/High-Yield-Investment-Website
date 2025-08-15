export function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query
    });
    if (!result.success) {
      const issues = result.error.issues.map(i => ({
        path: i.path.join('.'),
        message: i.message
      }));
      return res.status(400).json({ error: 'Validation failed', issues });
    }
    // attach parsed data if you want
    req.validated = result.data;
    next();
  };
}
