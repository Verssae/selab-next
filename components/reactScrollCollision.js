import React, { PureComponent } from 'react';

class ScrollCollision extends PureComponent {
    constructor (props){
        super(props);
        this.wrapperRef = React.createRef();
    }

    state = {
        allBlocks: null,
        blockClass: null,
        style:{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0'
        },
        originOuter: 0,
        cloneOuter: 0,
        base: 100,
        element:{
            top: 0,
            bottom: 0,
            height: 0
        }
    }
  
    componentDidMount = () => {
        const blocks = document.querySelectorAll('[data-clippath]');
        this.updateElement();
 
        this.setState({
            ...this.state,
            allBlocks: blocks,
            cloneOuter: this.state.base
        });

        window.addEventListener("scroll", this.handleScroll);
    }

    componentDidUpdate = () => {
        this.updateElement();
    }

    handleScroll = (event) => {
        
        this.testCollision();
    }

    testCollision = () => {
        const {allBlocks, element} = {...this.state};
        for (let i = 0; i < allBlocks.length; i++) {
            const block = this.getBlockInfos(allBlocks[i]);
            let newOrigin = 0;
            let newClone = 0;

            if (element.bottom >= block.top && element.top <= block.top && this.isInBoundaries()){
                newOrigin =  block.top - element.bottom;
                newClone = block.top - element.top;
                return this.updateOverlay(newOrigin, newClone, block.class);
            }

            if (element.bottom >= block.bottom && element.top <= block.bottom && this.isInBoundaries()) {
                newOrigin = block.bottom - element.top;
                newClone = block.bottom - element.bottom;
                return this.updateOverlay(newOrigin, newClone, block.class);
            }

            if (element.top > block.top && element.bottom < block.bottom) return this.updateOverlay(-110, 0, block.class);
        };

        return this.updateOverlay(0,110,null);

    }

    updateElement = () => {
        const newElem = this.getBlockInfos(this.wrapperRef.current);
        if (this.state.element.top !== newElem.top || this.state.element.bottom !== newElem.bottom) {
            const element = {
                top: newElem.top,
                bottom: newElem.bottom,
                height: newElem.bottom - newElem.top
            };
            this.setState({
                ...this.state,
                element: element
            });
        }
    }

    updateOverlay = (origin, clone, blockClass) => {
        const tempOrigin = this.getPercent(origin);
        const tempClone = this.getPercent(clone);

        this.setState({
            ...this.state,
            blockClass: blockClass,
            originOuter: tempOrigin,
            cloneOuter: tempClone
        });
    }

    isInBoundaries = () => {
        const {originOuter, cloneOuter, base} = {...this.state};
        return originOuter <= base && originOuter >= - base && cloneOuter <= base && cloneOuter >= - base
    }

    getPercent = (value) => {
        const {base} = {...this.state};
        let percent = (value * base) / this.state.element.height;
        if (percent > base) percent = base;
        else if (percent < - base) percent = - base;
        return percent;
    }

    getBlockInfos = (elem) => {
        const position = elem.getBoundingClientRect();
        const blockClass = elem.dataset? elem.dataset.clippath : null;
        const element = {top: position.top, bottom: position.bottom, class: blockClass};
      
        return element;
    }

    render() {
        
        const {className, children, style} = {...this.props};
        
        return (
            <div className={"clippath-wrapper " + className} ref={this.wrapperRef} style={style}>
                <div className="clippath-origin" style={{...this.state.style, overflow: 'hidden', transform: "translateY(" + this.state.originOuter +  "%)" }}>
                    <div className="clippath-inner" style={{...this.state.style, overflow: 'auto', transform: "translateY(" + - this.state.originOuter +  "%)" }}>
                        <div>{children}</div>
                    </div>
                </div>
                <div className={"clippath-clone " + this.state.blockClass} style={{...this.state.style, overflow: 'hidden', transform: "translateY(" + this.state.cloneOuter +  "%)" }}>
                    <div className="clippath-inner" style={{...this.state.style, overflow: 'auto', transform: "translateY(" + - this.state.cloneOuter +  "%)" }}>
                        <div>{children}</div>
                    </div>
                </div>        
            </div> 
        );
    }
}

export default ScrollCollision;