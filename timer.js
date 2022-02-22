let countdown=10;
setTimeout(()=>{
    document.querySelector(".countdown").innerText = --countdown;
    setTimeout(()=>{
        document.querySelector(".countdown").innerText = --countdown;
        setTimeout(()=>{
            document.querySelector(".countdown").innerText = --countdown;
            setTimeout(()=>{
                document.querySelector(".countdown").innerText = --countdown;
                setTimeout(()=>{
                    document.querySelector(".countdown").innerText = --countdown;
                    setTimeout(()=>{
                        document.querySelector(".countdown").innerText = --countdown;
                        setTimeout(()=>{
                            document.querySelector(".countdown").innerText = --countdown;
                            setTimeout(()=>{
                                document.querySelector(".countdown").innerText = --countdown;
                            }, 1000)
                            setTimeout(()=>{
                                document.querySelector(".countdown").innerText = --countdown;
                                setTimeout(()=>{
                                    document.querySelector(".countdown").innerText = "Happy Independence Day";
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)