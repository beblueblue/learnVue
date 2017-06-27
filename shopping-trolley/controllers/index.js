module.exports = {
    'GET /': async (ctx,next) => {
        ctx.render('cart.html');
    }
};