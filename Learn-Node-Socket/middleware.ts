import { Request, Response, NextFunction } from "express";
export function requireLogin(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.redirect("/login");
  }
}
