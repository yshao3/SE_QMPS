export class Item {
    constructor(
        public farm: string,
        public date: string,
        public observer: string,
        public group: string,
        public clean: number,
        public slightly_dirt: number,
        public moderately_dirt: number,
        public caked_on_dirt: number
    ){}
}
