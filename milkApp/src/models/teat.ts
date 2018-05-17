export class Item {
    constructor(
        public farm: string,
        public date: string,
        public observer: string,
        public milker: string,
        public clean: number,
        public dip_present: number,
        public small_dirt: number,
        public large_dirt: number,
        public before_after: string
    ){}
}
