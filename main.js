const numCheck = document.getElementById(`numCheck`);
let eat = 0;
let bite = 0;

const answerNum = document.getElementById(`answerNum`);


// 3桁の重複しない乱数の生成
const pcNum = [];
for (let i = 0; pcNum.length < 3; i++) {
    const number = Math.floor(Math.random() * 10)

    if (!pcNum.includes(number)) {
        pcNum.push(number);
    }
}
let Array1 = Array.from(pcNum, function (a) {
    return `` + a + ``;
});
console.log(Array1)
// 残り回数の表示
remainTurn = document.getElementById(`remainTurn`);
let count = 10;
remainTurn.textContent = (`あと残り10回です。`)



numCheck.addEventListener(`click`, function () {
    let answerInput = answerNum.value;
    // answerInputを配列へ変換
    const chars = answerInput.split('')

    // 配列から重複したものを削除
    let ary = chars.filter(function (x, i, self) {
        return self.indexOf(x) === i;
    });

    console.log(ary)
    if (answerInput.length != 3) {
        alert(`3桁の数を入れて下さい`)
    } else if (ary.length != 3) {
        alert(`同じ数を2回使ってはいけません`)
    } else {
        // 　判定を行う
        for (let i = 0; i < answerInput.length; i++) {
            for (let j = 0; j < Array1.length; j++) {
                if (answerInput[i] === Array1[j]) {
                    if (i === j) {
                        eat = eat + 1;
                    } else {
                        bite = bite + 1;
                    }
                }
            }
        }
        alert(`${eat}eat ${bite}bite`);
        if (eat === 3) {
            alert(`正解です！`);
            window.location.reload();
        }
        count--;
        remainTurn.textContent = (`あと残り${count}回です。`);
        if (count === 0) {
            remainTurn.textContent = (`終了です。答えは${pcNum}でした。`);
            numCheck.disabled = true
        };
    }
    eat = 0;
    bite = 0;
    answerNum.value = ``
    console.log(answerInput);
});

