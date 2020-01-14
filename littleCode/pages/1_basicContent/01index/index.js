Page({
    data: ({
        name: '新手小白',
        stu: [
            { name: '123', age: 89, id: 1 },
            { name: '456', age: 34, id: 2 },
            { name: '789', age: 54, id: 3 },
            { name: '098', age: 65, id: 4 },
            { name: '765', age: 87, id: 5 },
        ],
        num: 0
    }),
    changeNum() {
        this.setData({
            num: this.data.num + 1
        })
    },
    changeNum2() {
        this.setData({
            num: this.data.num - 1
        })
    }
})