export type IRat = {
    looksLike(): string
}
export type IMeow = {
    looksLike(): string
}
export class Rat implements IRat {
    looksLike(): string {
        return '🐱';
    }
}
export class Cat implements IMeow {
    looksLike(): string {
        return '🐀';
    }
}
export default () => {
    const rat = new Rat();
    const cat = new Cat();
    console.log(`testing ${rat.looksLike()} ${cat.looksLike()}`);
}
