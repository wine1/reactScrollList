1. react 自动分页 
 <strong>intersection-observer-polyfill</strong>

核心代码
```
  try {
            const node: any = document.getElementById(`loading${this.props.index}`)
            this.observer = new IntersectionObserver(this.insideViewportCb);
            node && this.observer.observe(node);
        } catch (err) {
            console.log("err in finding node", err);
        }
```

2. mock 分页

3. 长列表加载优化
