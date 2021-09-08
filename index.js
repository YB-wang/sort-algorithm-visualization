    import $draw from "./js/draw.js"
    import $sort from "./js/sort.js"
    import data from "./js/data.js"
    ///初始化canvas
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white' // 设置点的颜色
    ctx.translate(300, 300) // 设置原点到(300, 300)

    //初始画布
    $draw.drawAll(data);

    //添加button 绑定事件
    let container = document.getElementById('btnContainer')
    $sort.map(fn => {
        let btn = document.createElement("button");
        btn.classList.toggle('btn');
        btn.innerText = fn.name;
        btn.addEventListener('click', () => {
            fn.handler(data)
        });
        container.appendChild(btn);
    })
    document.getElementById('reset').addEventListener('click', () => {
        $draw.reset(data)
    })