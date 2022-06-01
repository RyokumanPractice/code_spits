const Item = class {
    time;
    block;
    constructor(time, block) {
        this.block = block;
        this.time = time + performance.now();
    }
};
