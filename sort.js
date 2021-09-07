import $draw from "./draw.js";
export async function bubbleSort(params) {
    let arr = JSON.parse(JSON.stringify(params))
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { //相邻元素两两对比
                var temp = arr[j + 1]; //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
        await $draw.drawAll(arr) // 一边排序一边重新画
    }
    $draw.download()
    return arr;
}