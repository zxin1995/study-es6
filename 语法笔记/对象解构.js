{
    let o = {p:42, q:true};
    let {p, q} =0;
    console.log(p, q); //42  true
}

{
        /* a 默认值为10 覆盖为3  b默认值为5 */
    let {a=10, b=5} = {a:3};
    console.log(a, b); //3,5
}


{
    /* json 对象解构*/
    let metaDate = {
        title : 'abc',
        test :[{
            title :'test',
            desc:'description'
        }]
    }
    /*  !!!格式对应  */
    let {title:esTitle,test:[{title:cnTitle}]} = metaDate;
    console.log(esTitle,cnTitle);

}
