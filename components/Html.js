import React, {Component, PropTypes} from 'react';

class HtmlComponent extends Component {
    render () {
        let {markup, state} = this.props;
        return (
            <html id='atomic'>
                <head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />

                    <title>Roderick Hsiao</title>
                    <meta name='description' content='Nothing important' />
                    <meta property='og:type' content='website' />
                    <meta property='og:image' content='https://c2.staticflickr.com/2/1585/25832501265_89b28a6aa5_b.jpg' />

                    <link href='https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,400italic' rel='stylesheet' type='text/css' />
                    <link href='/public/css/normalize.css' rel='stylesheet' type='text/css' />
                    <link href='/public/css/atomic.css' rel='stylesheet' type='text/css' />
                    <link href='/public/css/theme.css' rel='stylesheet' type='text/css' />
                    <script src='/public/js/client.js' defer async />
                </head>
                <body className='Bgc($c-grey-50)'>
                    <div
                        id='app'
                        dangerouslySetInnerHTML={{__html: markup}}
                    />
                    <script dangerouslySetInnerHTML={{__html: state}} />
                </body>
            </html>
        );
    }
}

HtmlComponent.propTypes = {
    context: PropTypes.object.isRequired,
    markup: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
};

export default HtmlComponent;
