import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWords } from './IWords';

@Injectable()
export abstract class NameGeneratorService {
    getIdanNext: () => string
    getShacharNext: () => string
    init: () => void
}

@Injectable()
export class SimpleNameGeneratorService implements NameGeneratorService {

    private idanWords: Array<string>;
    private shacharWords: Array<string>;

    constructor(private http: HttpClient) {
    }

    public init(): void {
        this.getData().subscribe(data => {
            this.idanWords = data.idanWords;
            this.shacharWords = data.shacharWords;
        });
    }

    public getIdanNext(): string {
        let first: string = 'עידן: ' + this.idanWords[this.getRandomInt(0, this.idanWords.length - 1)];
        return first;
    }

    public getShacharNext(): string {
        let second: string = 'שחר: ' + this.shacharWords[this.getRandomInt(0, this.shacharWords.length - 1)];
        return second;
    }

    private getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private getData() {
        return this.http.get<IWords>('./assets/words.json');
    }
}
