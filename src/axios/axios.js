/**
 * @author  :spark Hou
 * @date  : 2019-09-23 11:24
 * @Description :
 */

import axios from "axios"

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

            // .finally(() => {
            //     if (url) {
            //         BaseVue.methods.showLoading(false);
            //     }
            // })

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
