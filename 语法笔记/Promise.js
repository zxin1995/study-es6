/* 异步编程 */

/*  a 之后就执行b */

/* 回调 */

// 实际触发 

{
    let ajax = function (callback) {
        console.log('执行');
        setTimeout(function () {
            callback && callback.call();
        }, 1000);
    };
    ajax(function () {
        console.log('timeout1')
    });
}
{
    let ajax = function () {
        console.log('执行2');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        })
    };

    ajax().then(function () {
        console.log('promise', 'timeout2');
    })
}


{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        })
    };

    ajax().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 2000);
        });
    })
        .then(function () {
            console.log('timeout3');
        })
}

{
    let ajax = function (num) {
        console.log('执行4');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve()
            } else {
                throw new Error('出错了');
            }
        });
    }

    ajax(6).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err);
    });

    ajax(4).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err);
    });
}

{
    /* 所有图片加载到页面 */

    function loadImg(src) {
        return new Promise((resolve,reject)=>{
            let img =document.createElement('img');
            img.src =src;
            img.onload = function(){
                resolve(img);
            };
            img.onerror = function(err){
                reject(err);
            }
        })
    }

    function showImgs(imgs){
        imgs.foEach(function(img){
            document.body.appendChild(img);
        })
    }

    /* 所有 promise都完成之后才会 触发 then */
    Promise.all([
        loadImg('srcdizh'),
        loadImg('srcdizh'),
        loadImg('srcdizh'),
        loadImg('srcdizh')
    ]).then(showImgs);
}

{
    /* 先到就想返回  有一个就加载*/
        /* 所有图片加载到页面 */

        function loadImg(src) {
            return new Promise((resolve,reject)=>{
                let img =document.createElement('img');
                img.src =src;
                img.onload = function(){
                    resolve(img);
                };
                img.onerror = function(err){
                    reject(err);
                }
            })
        }
    
        function showImgs(imgs){
            let p =document.createElement('p');
            p.appendChild(img);
            document.body.appendChild(p);
            // imgs.foEach(function(img){
            //     document.body.appendChild(img);
            // })
        }
        
        /* 有一个改变就ok 其他忽略不管 */
        Promise.race([
            loadImg('srcdizh'),
            loadImg('srcdizh'),
            loadImg('srcdizh'),
            loadImg('srcdizh')
        ]).then(showImgs);

}
