// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money Box $${saveCoins}`);
// }
// miAlcancia(5);
// miAlcancia(2);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins
        console.log(`Money Box $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox=moneyBox();

myMoneyBox(5);
myMoneyBox(2);
myMoneyBox(9);

const moneyBoxAna=moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);
