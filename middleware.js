export const globalVar = (req, res, next) => {
    res.locals.siteName = "CoinToMe"
    res.locals.loggedUser = req.user || null;
    next();
};

export const authUser = (req, res, next) => {
    if(req.user){
        next();
    } else {
        res.redirect("/login");
    }
};

export const publicUser = (req, res, next) => {
    if(!req.user){
        next();
    } else {
        res.redirect("/");
    }
};