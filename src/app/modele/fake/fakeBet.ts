import { FakeGambler } from "./fakeGambler";

export class FakeBet {

    constructor(
        public id: number,
        public gambler: FakeGambler,
        public gamblerBet: number
    ) {}
}