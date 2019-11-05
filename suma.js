const sum = (...numbers) => {
    let carry = 0;
    const sumArray = [];
    const separatedNumbers = numbers.map((numberString, index) => numberString.split('').reverse());
    
    zeroFill(separatedNumbers);

    for(const index in separatedNumbers[0]) {
        const partialSum = (separatedNumbers.reduce((sum, numbers) => sum + parseInt(numbers[index]), 0) + 
        carry).toString();

        if(partialSum.length > 1){
            const partialSumSplitted = [...partialSum];

            sumArray.push(partialSumSplitted.pop());

            carry = parseInt(partialSumSplitted.reduce((concatedNumber, number) => concatedNumber + number));
        }else{
            sumArray.push(partialSum);
            carry = 0;
        }
    }

    const resultString = sumArray.reverse().reduce((result, number) => result + number, '');

    return resultString;
}

const zeroFill = (arrayNumbers) => {
    const maxLength = getMaxArrayLength(arrayNumbers);
    for(numbers of arrayNumbers) {
        while(numbers.length < maxLength) {
            numbers.push('0');
        }
    }
}

const getMaxArrayLength = (arrayNumbers) => {
    let maxLength = 0;

    for(numbers of arrayNumbers) {
        if(numbers.length > maxLength) {
            maxLength = numbers.length;
        }
    }

    return maxLength;
}