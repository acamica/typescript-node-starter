import {createInterface} from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

export const ask = (question: string) => new Promise<string>(resolve => {
    rl.question(question, (answer: string) => resolve(answer));
});

export function askDefault (question: string, def: string) {
    return ask(question).then(ans => ans.trim() === '' ? def : ans);
}
export const close = () => rl.close();
