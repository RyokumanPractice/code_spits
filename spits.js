const Item = class {
    time;
    block;
    constructor(time, block) {
        this.block = block;
        this.time = time + performance.now(); // date.now 에 비하여 나노 초도 볼 수 있다.
    }
};

const queue = new Set(); // set에는 중복된 객체 혹은 값을 넣을 수 없다.

const f = (time) => {
    queue.forEach((item) => {
        if (item.time > time) return;
        queue.delete(item);
        item.block();
    });
    requestAnimationFrame(f); // f 를 무한 루프시키기 위해 존재
};

requestAnimationFrame(f); // f 를 실행시키기 위해 존재

const timeout = (block, time) => queue.add(new Item(block, time));

timeout(() => console.log("hello"), 1000);
