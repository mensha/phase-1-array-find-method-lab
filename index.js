function superbowlWin(record) {
    const answer = record.find(r => r.result === "W")
    return !!answer ? answer.year : undefined
    // const found = array1.find(element => element > 10);
}
