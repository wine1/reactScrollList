//react相关
import React from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Swiper from "swiper";
import axios from 'axios'
import 'swiper/dist/css/swiper.css';
import List from "src/components/List"
// const iconArrowDown = require('../../asserts/images/icon-arrow-down.png').default


class Home extends React.Component<RouteComponentProps>{

    swiper: any

    state={
        datalist1:{
            list:[]
        },
         datalist2:{
            list:[]
        },
         currentIndex :1,
         pageIndex:1,
         pageSize:10
    }

    componentDidMount() {
        this.initData()
    }

    componentDidUpdate() {
        this.initSwiper()
    }

    initSwiper = () => {
        if (this.swiper) {
            return this.swiper
        }
        let that: any = this
        this.swiper = new Swiper('.swiper-container', {
            // loop: true, // 循环模式选项
            // autoplay: true,
            pagination: {
                el: '.swiper-tab',
                clickable: true,
                type: 'custom',
                // @ts-ignore
                renderCustom: function (swiper, current) {
                    that.setState({
                        currentIndex: current
                    })
                }
            },
        })
    }

    initData=async()=>{
        let {pageIndex,pageSize}=this.state
        axios.post('/list/query', {
            params: {
                pageIndex,
                pageSize
            }
        })
        .then((res)=>{
            console.log(res.data)
            
        })
        .catch((err)=>{
           // console.log(err)
        })

    }

    render() {
        return (
            <div className="wrap-home">
                {this.renderSwiper()}
            </div>
        )
    }

    renderSwiper = () => {
        let { datalist1, datalist2 } = this.state

        const changeTab = (e: any) => {
            let currentIndex = parseInt(e.target.dataset.index)
            // console.log(this.companySwiper,currentIndex) 
            this.swiper.slideTo(currentIndex - 1);

            this.setState({
                currentIndex
            })

        }
        // console.log(newList.list, hotList.list)
        return (
            <div>
                <div className="swiper-tab">
                    <span className={this.state.currentIndex === 1 ? 'active' : 'tab'} onClick={(e) => changeTab(e)} data-index='1'>已公布</span>
                    <span className={this.state.currentIndex === 2 ? 'active' : 'tab'} onClick={(e) => changeTab(e)} data-index='2'>待公布</span>
                </div>
                <div className="swiper-container-company">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <List index={0} list={datalist1.list} isLoading={true} noData={true} onBottom={()=>this.onBottom()}></List>
                        </div>
                        <div className="swiper-slide">
                            <List index={1} list={datalist2.list}  isLoading={true} noData={true} onBottom={()=>this.onBottom()}></List>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    onBottom=()=>{

    }

}
export default withRouter(Home)