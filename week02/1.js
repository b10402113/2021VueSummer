axios.get('https://randomuser.me/api').then(res=>{
    const seed = res.data.info.seed;
    console.log(res, seed);
    return axios.get('https://randomuser.me/api?seed='+seed).then(res=>{
        console.log(res);
    })
})