// pages/image/image.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        imagepath: '',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleTap() {
            var _this = this
            wx.chooseImage({
                count: 1, // 默认为9
                sizeType: ['original', 'compressed'], // 指定原图或者压缩图
                sourceType: ['album', 'camera'], // 指定图片来源
                success: function(res) {
                    var tempFilePaths = res.tempFilePaths
                    _this.setData({
                        imagepath: tempFilePaths
                    })
                },
                fail: function(rej) {
                    console.log(rej);
                },
                complete: function(res) {
                    console.log(res);
                }
            })
        }
    }
})