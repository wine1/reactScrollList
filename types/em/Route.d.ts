declare namespace EM {

    namespace Route {

        interface link {
            /**分享 */
            H5Path: {

                /**h5地址 */
                url: string

                theme?: 'w' | 'b' | ''

              
                /** 0为导航栏透明，1为隐藏导航栏，2为正常显示 */
                titlebarMode?: number

                /** null 不显示左边按钮 其他可按照emSetTitleRightBtn里面定义传  默认为关闭按钮 */
                leftbtn?: boolean

                /**  0:跳外部浏览器 */
                outBrowser?:boolean
            };
        }

    }

}

