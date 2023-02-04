const incrementByOne = (num = 9) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(num + 1);
        }, 3000);
    });
}

const decrementByOne = (num = 9) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(num - 1);
        }, 3000);
    });
}

export { incrementByOne, decrementByOne }