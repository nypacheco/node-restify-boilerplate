module.exports = function (req, res, next) {
    res.send('Hello ' + req.params.name);
    next();
};