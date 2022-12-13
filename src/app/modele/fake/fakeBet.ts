import { FakeGambler } from "./fakeGambler";

export class FakeBet {

    constructor(
        public id: number,
        public bet: number,
        public gambler: FakeGambler
        
    ) {}
}