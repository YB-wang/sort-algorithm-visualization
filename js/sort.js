import $draw from "./draw.js";

const $sort = [{
        name: "冒泡排序",
        handler: async function (params) {
            let arr = JSON.parse(JSON.stringify(params))
            let len = arr.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) { //相邻元素两两对比
                        let temp = arr[j + 1]; //元素交换
                        arr[j + 1] = arr[j];
                        arr[j] = temp;
                    }
                }
                await $draw.drawAll(arr) // 一边排序一边重新画
            }
            return arr;
        }
    },
    {
        name: "选择排序",
        handler: async function (params) {
            let arr = JSON.parse(JSON.stringify(params))
            let len = arr.length;
            let minIndex, temp;
            for (let i = 0; i < len - 1; i++) {
                minIndex = i;
                for (let j = i + 1; j < len; j++) {
                    if (arr[j] < arr[minIndex]) { //寻找最小的数
                        minIndex = j; //将最小数的索引保存
                    }
                }
                temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                await $draw.drawAll(arr)
            }
            return arr;
        }
    }
]
export default $sort