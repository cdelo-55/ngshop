export class LikeCounter {
    value: number = 0;
    dogID: string;

    constructor(dogID: string) {
        this.dogID = dogID;
    }
}
