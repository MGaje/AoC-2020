import { IRunnable } from './shared/interfaces';
import { Day1 } from './day1';
import { Day2 } from './day2';

function run<T>(day: IRunnable<T>, runPart2: boolean = false): void {
    const result: T = (!runPart2) ? day.runPart1() : day.runPart2();
    console.log(`Result: ${result}`);
}

// run(new Day1(), true);
run(new Day2(), true);