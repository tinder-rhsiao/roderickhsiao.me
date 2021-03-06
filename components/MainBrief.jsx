import React, {PureComponent, PropTypes} from 'react';

import Card from './common/Card.jsx';
import Img from './common/Img.jsx';
import StaticContentStore from '../stores/StaticContentStore';

import {connectToStores} from 'fluxible-addons-react';
import {map} from 'lodash';
import fetchStaticDataAction from '../actions/fetchStaticData';

class MainBrief extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.store = context.getStore(StaticContentStore);
        this.state = {
            summary: this.store.getData('summary') || {}
        }
    }

    componentWillMount () {
        this.context.executeAction(fetchStaticDataAction, {
            resource: 'summary'
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    renderThumbnail (data, name) {
        let {url, width, height} = data;
        if (!url) {
            return null;
        }
        return (
            <Img
                src={url}
                width={width}
                height={height}
                className='Bdrs(100%) Mend(10px)'
                alt={name}
                itemProp='image'
            />
        );
    }

    renderListItem (data) {
        let {list} = data;
        if (!list || !list.length) {
            return null;
        }

        let node = map(list, (item, i) => {
            return (
                <li {...item.props} key={i}>
                    {
                        data[item.field]
                    }
                </li>
            );
        });
        return node;
    }

    renderSummary (data) {
        return (
            <div className='BdT Bdtc($c-black-4) Mt(10px)'>
                <h5 className='My(10px) Mx(0) C($c-black-2) Fw(400)'>
                    Summary
                </h5>
                <ol className='Mend(10px)'>
                    {
                        map(data, (item, i) => {
                            return (
                                <li key={i}>
                                    {
                                        item
                                    }
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        );
    }

    render () {
        let {profile} = this.state.summary;
        if (!profile) {
            return null;
        }
        return (
            <Card itemScope='' itemType='http://schema.org/Person'>
                <div className='D(ib) Va(t)'>
                    {
                        this.renderThumbnail(profile.thumbnail, profile.name)
                    }
                </div>
                <div className='D(ib) Va(t)'>
                    <ul className='M(0) C($c-black-1)'>
                        {
                            this.renderListItem(profile)
                        }
                    </ul>
                </div>
                {
                    this.renderSummary(profile.summary)
                }
            </Card>
        );
    }
}
MainBrief.displayName = 'MainBrief';

MainBrief.contextTypes = {
    executeAction: PropTypes.func,
    getStore: PropTypes.func
};

MainBrief = connectToStores(MainBrief, [StaticContentStore], (context, props) => {
    return {
        summary: context.getStore(StaticContentStore).getData('summary')
    };
});

export default MainBrief;
