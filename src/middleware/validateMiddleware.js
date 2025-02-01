
const validate = (schema) => (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
  
      next();
    } catch (err) {
      return res.status(400).send(err);
    }
  };

module.exports = { validate }