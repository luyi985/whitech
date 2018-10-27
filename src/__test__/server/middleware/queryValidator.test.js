import queryValidator from '../../../server/middleware/queryValidtor';

describe('queryValidator', () => {

    describe('if request contains proper page and perPage query string', () => {
        let reqMock;
        let nextFun;
        beforeEach(() => {
            reqMock = {
                query: {
                    page: 10,
                    perPage: 10
                }
            };

            nextFun = jest.fn();
        })
        it('it will call next function without arguments', () => {
            queryValidator(reqMock, {}, nextFun);
            expect(nextFun.mock.calls.length).toBe(1);
            expect(nextFun.mock.calls[0].length).toBe(0)
        })
    })

    describe('if request does not contain proper page or perPage query string', () => {
        let reqMock;
        let nextFun;
        beforeEach(() => {
            reqMock = {
                query: {
                    page: null,
                    perPage: 'abc'
                }
            };

            nextFun = jest.fn();
        })
        it('it will call next function with arguments', () => {
            queryValidator(reqMock, {}, nextFun);
            expect(nextFun.mock.calls[0].length > 0).toBe(true)
        })
    })
})