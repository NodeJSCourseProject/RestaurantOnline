class AboutController {
    constructor(data) {
        this.data = data;
    }

    getInfo(req, res) {
        return res.render('about');
    }
}

const init = (data) => {
    return new AboutController(data);
};

module.exports = { init };