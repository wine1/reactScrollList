
import React from "react";
import IntersectionObserver from 'intersection-observer-polyfill';

interface ListProps {
    list: any,
    onBottom: any,
    index: number,
    isLoading: boolean,
    noData: boolean
}
interface listState {
    stateList: any,
    scrollTop: number,
    recordScroll: boolean
}

export default class List extends React.Component<ListProps, listState> {

    constructor(props) {
        super(props)
        this.state = {
            stateList: this.props.list,
            scrollTop: 0,
            recordScroll: false
        }
        this.handleOnScroll = this.handleOnScroll.bind(this)

    }

    observer: any

    componentDidMount() {
        // scroll
        try {
            const node: any = document.getElementById(`loading${this.props.index}`)
            this.observer = new IntersectionObserver(this.insideViewportCb);
            node && this.observer.observe(node);
        } catch (err) {
            console.log("err in finding node", err);
        }
        window.addEventListener("scroll", this.handleOnScroll);

    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleOnScroll)
        const node: any = document.getElementById(`loading${this.props.index}`)
        this.observer.unobserve(node);
        this.observer.disconnect();
    }

    static getDerivedStateFromProps(nextProps, preState) {
        console.log(nextProps,preState)
        if (nextProps.list !== preState.stateList) {
            return {
                stateList: nextProps.list
            }
        }
        return null
    }

    insideViewportCb = () => {
        this.setState({
            recordScroll: true
        })
        let { scrollTop } = this.state
        console.log('onbottom', scrollTop)

        if (this.props.list.length && scrollTop !== 0) {
            this.props.onBottom()
        }
    }

    handleOnScroll(e) {
        let { recordScroll } = this.state
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (recordScroll) {
            this.setState({
                scrollTop,
                recordScroll: false
            })
        }
    }

    render() {
        const { isLoading, noData } = this.props
        let { stateList } = this.state

        return (
            <div className="component-list" >
                {!!stateList?.length && stateList.map((item)=>{
                    return(
                        <div key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="name">{item.name}</div>
                        </div>
                    )
                }) }
                {<div id={`loading${this.props.index}`} className={`${!noData && isLoading ? 'show-loading' : 'hide-loading'} loading`}> 加载中··· </div>}
                { noData && <div className="no-data" > <div>暂无数据 </div></div>}
                { !noData && !isLoading && <div className="no-more" > 已经到底了 </div>}  
            </div>)
    }
}

