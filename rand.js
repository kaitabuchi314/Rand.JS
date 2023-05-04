function rand() {
    this.name = "rand.js";
    this.version = 0.1;
    this.preview = true;
    this.deprecated = false;
};

rand.prototype.pseudoSeeded = function(seed) {
    seed *= 569203485892375814652947562934697978769;
    seed = seed / 34564766565669879465245476234523452345345346456775823424;
    return (seed - 0) / (Number.MAX_SAFE_INTEGER - 0);
};
