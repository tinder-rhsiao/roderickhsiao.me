import React, {Component, PropTypes} from 'react';

import Img from './Img.jsx';

import classNames from 'classnames';

class Smartlink extends Component {
    render () {
        let {smartlink} = this.props;

        if (!smartlink) {
            return null;
        }
        let {thumbnail} = smartlink || {};
        let ratio = thumbnail.height / thumbnail.width * 100;
        const isLargeTemplate = smartlink.type === 'large';
        return (
            <a
                className='Bd My(10px) Bdc($c-black-4) Cf D(b) Cur(p) Td(n) Td(n):h Bxsh($shadow-2dp) Bxsh($shadow-4dp):h Trsdu($trsdu-fast)'
                href={smartlink.url}
                target='_black'
            >
                <div>
                    {
                        isLargeTemplate ? (
                            <div className='H(0) Pos(r) W(100%)' style={{paddingBottom: ratio + '%'}}>
                                <Img src={thumbnail.url} className='StretchedBox H(100%) W(100%)' />
                            </div>
                        ) : (
                            <Img
                                nodeName='div'
                                src={thumbnail.url}
                                className='M(-1px) Bgz(ct) W(150px) H(150px) H(100px)!--xs W(100px)!--xs D(ib) Bgr(nr) Fl(start) Bgc(#000.12)'
                            />
                        )
                    }
                    <div className={
                            classNames(
                                'P(10px) C($c-black-1) P(6px)!--xs', {
                                'Va(t) Mstart(160px) Mstart(100px)!--xs Bxz(bb)': !isLargeTemplate
                            })
                        }
                    >
                        <div className='Fz(1.4em) Fz(1.2em)!--xs My(10px) My(2px)!--xs'>
                            {
                                smartlink.title
                            }
                        </div>
                        <div className='C($c-black-2) My(10px) My(2px)!--xs LineClamp(3,84px)'>
                            {
                                smartlink.description
                            }
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default Smartlink;