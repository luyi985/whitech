class Pagination {
    constructor(dataList, numPerPage) {
        if (!Array.isArray(dataList) || !dataList.length) {
            throw new Error(
                'DataList input is not correct in pagination class'
            );
        }

        if (typeof numPerPage != 'number' || numPerPage <= 0) {
            throw new Error(
                'numPerPage is not a positive integer in pagination class'
            );
        }

        this.dataList = dataList;
        this.numPerPage = numPerPage;
        this.totalItems = this.dataList.length;
        this.totalPages = Math.ceil(this.totalItems / this.numPerPage);
        this.currentPage = 1;
    }

    getItems(pageNumber = 1) {
        let hasNext = true;
        this.currentPage = pageNumber;

        if (pageNumber < 1) {
            this.currentPage = 1;
        }

        if (pageNumber > this.totalPages - 1) {
            this.currentPage = this.totalPages;
            hasNext = false;
        }

        const start = (this.currentPage - 1) * this.numPerPage;
        const end =
            this.numPerPage * this.currentPage > this.totalItems
                ? this.totalItems
                : this.numPerPage * this.currentPage;

        return {
            currentPage: this.currentPage,
            numPerPage: this.numPerPage,
            totalItems: this.totalItems,
            totalPage: this.totalPages,
            hasNext,
            items: this.dataList.slice(start, end),
        };
    }
}

module.exports = Pagination;
