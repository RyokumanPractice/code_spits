const working = () => {};
for (let i; i < 10000; i++) working();

const nbFor = (max, load, block) => {
    let i = 0;
    const f = (time) => {
        let curr = load; // 사용값 주기
        while (curr-- && i < max) {
            // 사용값이 0이 되거나 i 가 최대횟수 달성
            block();
            i++;
        }
        console.log(i);
        if (i < max - 1) requestAnimationFrame(f); // 루프
    };
    requestAnimationFrame(f); // 마지막 실행
};
