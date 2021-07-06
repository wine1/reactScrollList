//react相关
import React from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Swiper from "swiper";
import axios from 'axios'
import 'swiper/dist/css/swiper.css';
import List from "src/components/List"


class Home extends React.Component<RouteComponentProps>{

    swiper: any

    state = {
        dataList: {
            list: [],
            isLoading: true,
            noData: false,
            pageIndex: 0
        },
        pageSize: 10
    }

    componentDidMount() {
        this.initData()
    }

    componentDidUpdate() {
    }

    initData = async () => {
        let { dataList, pageSize } = this.state
        let pageIndex = ++dataList.pageIndex
        console.log(pageIndex)
        axios.post('/list/query', {
            params: {
                pageIndex,
                pageSize
            }
        })
            .then((res) => {
                console.log(res.data)
                let list = res.data.data.content
                let isLoading = true
                let noData = false
                if (list.length === 0) {
                    isLoading = false
                    noData = false
                }
            
                this.setState((state: any, props) => {
                    list = state.dataList.list.concat(list)
                    return {
                        dataList: {
                            list,
                            isLoading,
                            noData,
                            pageIndex
                        }
                    }
                })

            })
            .catch((err) => {
                console.log(err)
            })

    }

    render() {
        return (
            <div className="wrap-home">
                {this.renderList()}
            </div>
        )
    }

    renderList = () => {
        let { dataList } = this.state
        return (
            <div>
                <List index={0} list={dataList.list} isLoading={dataList.isLoading} noData={dataList.noData} onBottom={() => this.Bottom()}></List>
            </div>
        )
    }
    Bottom = () => {
        this.initData()
    }

}
export default withRouter(Home)