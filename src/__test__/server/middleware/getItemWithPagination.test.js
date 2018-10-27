import Pagination from '../../../server/helper/pagination';
import getItemWithPagination from '../../../server/middleware/getItemWithPagination';

jest.mock('../../../server/helper/pagination');

describe('getItemWithPagination', () => {
    let reqStub
    let nextFn;
    let paginationInstance;
    
    beforeEach(() => {
        Pagination.mockClear();
        reqStub = {
            query: {
                page: 10,
                perPage: 10
            },
            productList: [1,2,3]
        }
        nextFn = jest.fn();
        paginationInstance = Pagination.mock.instances;
    })

    it('should instantialize Pagination once', ()=> {
        getItemWithPagination(reqStub, {}, nextFn)
        expect(paginationInstance.length).toBe(1)
    })

    it('should call getItems function once', ()=> {
        getItemWithPagination(reqStub, {}, nextFn)
        expect(paginationInstance[0].getItems.mock.calls.length).toBe(1)
    })

    it('should call getItems function with correct arguments', ()=> {
        getItemWithPagination(reqStub, {}, nextFn)
        expect(paginationInstance[0].getItems.mock.calls[0][0]).toBe(10)
    })
})