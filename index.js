// code your solution here

function superbowlWin(record){
    let winningYear = record.find(i => i.result === 'W');
    if (typeof winningYear === 'object') {
        return winningYear.year;
    } else {
        return undefined;
    }
}