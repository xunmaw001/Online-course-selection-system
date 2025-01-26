const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmw2l3j/",
            name: "ssmw2l3j",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmw2l3j/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上选课系统的设计与实现"
        } 
    }
}
export default base
