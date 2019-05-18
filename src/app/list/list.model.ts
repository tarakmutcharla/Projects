export class List {
    public img: string;
    public name: string;
    public description: string;
    public date: string;

    constructor(imgpath: string, name: string, des:string, date:string) {
        this.img = imgpath;
        this.name = name;
        this.description = des;
        this.date = date;
    }
}