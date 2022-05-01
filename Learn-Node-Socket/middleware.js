"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireLogin = void 0;
function requireLogin(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }
    else {
        return res.redirect("/login");
    }
}
exports.requireLogin = requireLogin;
