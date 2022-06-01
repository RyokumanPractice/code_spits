const Item = class {
    time;
    block;
    constructor(time, block) {
        this.block = block;
        this.time = time + performance.now(); // date.now 에 비하여 나노 초도 볼 수 있다.
    }
};
