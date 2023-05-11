function rand() {
    this.name = "rand.js";
    this.version = 0.1;
    this.preview = true;
    this.deprecated = false;
};

rand.prototype.pseudoSeeded = function(seed) {
    seed *= 5692034 + Number.MAX_SAFE_INTEGER + 348920359283 + 49785235;
    seed = seed / Number.MAX_SAFE_INTEGER;
    return (seed - 0) / (Number.MAX_SAFE_INTEGER - 0);
};
