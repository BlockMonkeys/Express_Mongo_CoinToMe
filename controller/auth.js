import User from "../model/User";
import passport from "passport";

//로그인
export const getLogin = (req, res) => {
    res.render("auth_login");
};

export const postLogin = passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/",
});

//로그아웃
export const logout = (req, res) => {
    req.logout();
    res.redirect("/");
}

//회원가입페이지

export const getSignUp = (req, res) => {
    res.render("auth_signup");
};

export const postSignUp = async(req, res, next) => {
    const { nickname, email, password, verifyPassword } = req.body;
    if(password !== verifyPassword){
        //비밀번호 & 비밀번호 확인이 다를 때 처리,
        res.status(400);
        console.log("비밀번호가 다릅니다.");
    } else {
        //회원가입처리.
        try{
            const user = await User({
                nickname,
                email
            });
            await User.register(user, password);
            res.redirect("/login");
        } catch(error) {
            res.redirect("/signup");
        };
    };
};