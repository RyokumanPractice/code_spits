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
        if (i < max - 1) requestAnimationFrame(f); // 루프 and i < max 로 해도 결과값은 같으나 1번 손해본다 (최대한 빨리 풀어주는게 맞다 왜냐면 동시성이거덩)
    };
    requestAnimationFrame(f); // 마지막 실행
};
