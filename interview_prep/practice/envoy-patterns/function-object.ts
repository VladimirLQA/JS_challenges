// Function object

class Average {
  private sum = 0;
  private count = 0;

  call(value: number): number {
    this.sum += value;
    this.count++;
    return Math.round(this.sum / this.count);
  }

  calculate(...values: number[]): number {
    const distilledValues = values.filter((v) => Boolean(v));
    this.sum += distilledValues.reduce((s, v) => s + v, 0);
    this.count += distilledValues.length;
    return Math.round(this.sum / this.count);
  }
}

const avgWithCall = new Average();

avgWithCall.call(10);
avgWithCall.call(15);
console.log('Average with call');
console.log(avgWithCall.call(33));

const avgWithCalculate = new Average();
console.log('Average with calculate');
console.log(avgWithCalculate.calculate(10, 15, 33));
