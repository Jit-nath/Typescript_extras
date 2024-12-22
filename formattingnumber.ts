

export function formatNumber(num: number): string {
    if (num == 0) {
        return "0";
    }

    const output: string[] = [];
    const isNegative = num < 0; // check if negetive 
    num = Math.abs(num); // stores absolute value

    let i = 0;
    while (num > 0) {
        const temp = num % 10; // takes the unit place
        output[i] = temp.toString(); // converts to char
        num = Math.floor(num / 10); // decreases number by 1 place
        i++;

        if (i > 0 && i % 3 === 0 && num > 0) {
            output[i] = ",";
            i++;
        }
    }

    output.reverse();

    let string: string = output.join("");

    if (isNegative) {
        string = "-" + string;
    }

    return string;
}