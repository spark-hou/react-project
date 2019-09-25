/**
 * @author  :spark Hou
 * @date  : 2019-09-23 11:24
 * @Description :
 */

import axios from "axios"

axios.interceptors.request.use(
    config => {
        console.log("我是请求拦截器", config);
        return config
    },
    err => {
        return Promise.reject(err)
    })
axios.interceptors.response.use(
    response => {
        //拦截响应，做统一处理
        console.log("我是响应拦截器", response);
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    })

export default class Http {
    get(url, params) {

        let pro = new Promise((resolve, reject) => {

            axios.get(url, {
                params: params,
            })

                .then(result => {
                    resolve(result);
                })

                .catch(reason => {
                    reject(reason)
                })


        });
        return pro;

    }

    post(url, params) {

        let pro = new Promise((resolve, reject) => {

            // if (url) {
            //     BaseVue.methods.showLoading(true);
            // }
            axios.post(url, params)

                .then(result => {
                    resolve(result);
                })

                .catch(reason => {
                    reject(reason)
                })

            // .finally(() => {
            //     if (url) {
            //         BaseVue.methods.showLoading(false);
            //     }
            // })

        });

        return pro;
    }

}
