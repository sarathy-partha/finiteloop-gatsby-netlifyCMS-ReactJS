import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import getPageContext from './getPageContext';
import JssProvider from 'react-jss/lib/JssProvider';

function withRoot(Component) {
    class WithRoot extends React.Component {
        componentWillMount() {
            this.pageContext = this.props.pageContext || getPageContext();
        }

        componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }

        pageContext = null;

        render() {
            // MuiThemeProvider makes the theme available down the React tree thanks to React context.
            return (
                <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
                    <MuiThemeProvider
                        theme={this.pageContext.theme}
                        sheetsManager={this.pageContext.sheetsManager}>
                        <Component {...this.props} />
                    </MuiThemeProvider>
                </JssProvider>
            );
        }
    }

    WithRoot.propTypes = {
        pageContext: PropTypes.object,
    };

    return WithRoot;
}

export default withRoot;