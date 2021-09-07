const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const $draw = {
    create: function (x, y, width, height) {
        return {
            x,
            y,
            width,
            height,
        }
    },
    draw: function (obj) {
        ctx.beginPath() // 开始画一个
        ctx.fillRect(obj.x, obj.y, obj.width, obj.height) // 画一个
        ctx.closePath() // 结束画一个
    },
    clearCanvas: function () {
        ctx.clearRect(-300, -300, 600, 600);
    },
    drawAll: function (arr) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.clearCanvas();
                const rects = [] // 用来存储720个长方形
                const CosandSin = []
                for (let i = 0; i < 360; i++) {
                    const jiaodu = i / 180 * Math.PI
                    CosandSin.push({
                        cos: Math.cos(jiaodu),
                        sin: Math.sin(jiaodu)
                    })
                }
                for (let i = 0; i < arr.length; i++) {
                    const num = arr[i]
                    const {
                        cos,
                        sin
                    } = CosandSin[Math.floor(i / 2)] // 一个角画两个
                    const x = num * cos // x = ρ * cosθ
                    const y = num * sin // y = ρ * sinθ
                    rects.push(this.create(x, y, 4, 4)) // 收集所有长方形
                }
                rects.forEach(item => {
                    this.draw(item)
                }) // 遍历渲染

                resolve('draw success')
            })
        })
    },
    reset: function (arr) {
        ctx.clearRect(-300, -300, 600, 600);
        this.drawAll(arr);
    },
    download: function () {
        const array = []
        let i = 0
        const recorder = setInterval(() => {
            if (i < 100) {
                canvas.toBlob(blob => {
                    array.push(blob);
                })
                i++;
            } else {
                clearInterval(recorder);
            }
        }, 100);
    }
}
export default $draw