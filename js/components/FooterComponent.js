/**
 * Created by jycr753 on 7/26/15.
 */
var React = require('react');

var FooterComponent = React.createClass({
    render: function(){
        return(
            <div className="Footer">
                <div className="Footer-container">
                    <span className="Footer-text">©GoBox</span>
                    <span className="Footer-spacer">·</span>
                    <a className="Footer-link" href="/">Home</a>
                    <span className="Footer-spacer">·</span>
                    <a className="Footer-link" href="#">Privacy</a>
                </div>
            </div>
        );
    }
});

module.exports = FooterComponent;