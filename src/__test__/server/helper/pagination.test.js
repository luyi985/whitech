import Pagination from '../../../helper/pagination';

describe('Pagination', () => {

    describe('if not pass correct arguments to constructor', () => {
        it('shoudl throw error if argument dataList is not an array or an empty array', () => {
            expect(() => {new Pagination(null, 1)}).toThrow();
            expect(() => {new Pagination([], 1)}).toThrow();
        })

        it('shoudl throw error if argument numPerPage is not a positive integer', () => {
            expect(() => {new Pagination([1,2,3,4], 0)}).toThrow();
            expect(() => {new Pagination([1,2,3,4], null)}).toThrow();
            expect(() => {new Pagination([1,2,3,4], -1)}).toThrow();
        })
    })

    describe('if not pass correct arguments to constructor', () => {
        let pagination;
        let sampleDataList;
        let perPage;

        beforeEach(() => {
            sampleDataList = [1,2,3,4,5,6,7,8,9,10];
            perPage = 3;
            pagination = new Pagination(sampleDataList, perPage);
        })

        it('should get total item 10', () => {
            expect(pagination.totalItems).toBe(10);
        })

        it('should get total page num of 4', () => {
            expect(pagination.totalPages).toBe(4);
        })

        it('should get total page num of 4', () => {
            expect(pagination.totalPages).toBe(4);
        })

        it('should get initial current page of 1', () => {
            expect(pagination.currentPage).toBe(1);
        })

        it('should get correct return on page 1', () => {
            expect(pagination.getItems()).toEqual({
                currentPage: 1,
                numPerPage: 3,
                totalItems: 10,
                totalPage: 4,
                hasNext: true,
                items: [ 1, 2, 3 ] });
        })

        it('should get correct return on page 2', () => {
            expect(pagination.getItems(2)).toEqual({
                currentPage: 2,
                numPerPage: 3,
                totalItems: 10,
                totalPage: 4,
                hasNext: true,
                items: [ 4, 5, 6 ] });
        })

        it('should get correct return on page 3', () => {
            expect(pagination.getItems(3)).toEqual({
                currentPage: 3,
                numPerPage: 3,
                totalItems: 10,
                totalPage: 4,
                hasNext: true,
                items: [ 7, 8, 9 ] });
        })

        it('should get correct return on page 4', () => {
            expect(pagination.getItems(4)).toEqual({
                currentPage: 4,
                numPerPage: 3,
                totalItems: 10,
                totalPage: 4,
                hasNext: false,
                items: [ 10 ] });
        })
    })
})