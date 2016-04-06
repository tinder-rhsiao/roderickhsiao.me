module.exports = {
    'breakPoints': {
        'xs': '@media screen and (max-width:700px)',
        'sm': '@media screen and (min-width:700px)',
        'md': '@media screen and (min-width:999px)',
        'lg': '@media screen and (min-width:1200px)'
    },
    custom: {
        '$c-grey-50': '#fafafa',
        '$c-indigo-500': '#3f51b5',
        '$card-padding': '16px',
        '$header-box-shadow': '0 2px 5px rgba(0,0,0,0.26)',
        '$top-header-height': '54px',
        // material design shadow
        '$shadow-1dp':
            '0 2px 1px -1px rgba(0,0,0,.2),' +
            '0 1px 1px 0 rgba(0,0,0,.14),' +
            '0 1px 3px 0 rgba(0,0,0,.12)',
        '$shadow-2dp':
            '0 3px 1px -2px rgba(0,0,0,.2),' +
            '0 2px 2px 0 rgba(0,0,0,.14),' +
            '0 1px 5px 0 rgba(0,0,0,.12)',
        '$shadow-3dp':
            '0 3px 3px -2px rgba(0,0,0,.2),' +
            '0 3px 4px 0 rgba(0,0,0,.14),' +
            '0 1px 8px 0 rgba(0,0,0,.12)',
        '$shadow-4dp':
            '0 2px 4px -1px rgba(0,0,0,.2),' +
            '0 4px 5px 0 rgba(0,0,0,.14),' +
            '0 1px 10px 0 rgba(0,0,0,.12)'
    }
};
