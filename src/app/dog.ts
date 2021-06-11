import { NumberValueAccessor } from "@angular/forms";

export class Dog {
    id: string;
    name: string;
    thumbnail: string;
    likeCount: number = 0;

    constructor(dog) {
        this.id = dog.id;
        this.name = dog.name;
        this.thumbnail = dog.thumbnail;
        this.likeCount = 0;
    }
}
