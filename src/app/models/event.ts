export class Event {
    id: number;
    name: string;
    description: string;
    organizer: string;
    date: string;
    imgUrl: string;

    constructor(id: number, name: string, description: string, organizer: string, date: string, imgUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.organizer = organizer;
        this.date = date;
        this.imgUrl = imgUrl;
    }
}