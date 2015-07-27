/**
 * Created by jycr753 on 7/26/15.
 */
var React = require('react');
var invariant = require('react/lib/invariant');
//var Location = require('../../core/Location');
var canUseDOM =  require('react/lib/ExecutionEnvironment');
var Dispatcher = require('flux');

var NavibarComponent = React.createClass({
    handleClick: function(event){
        // If not left mouse click
        if (event.button !== 0) {
            return;
        }

        // If modified event
        if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
            return;
        }

        var el = event.currentTarget;

        invariant(el && el.nodeName === 'A', 'The target element must be a link.');

        // Rebuild path
        var path = el.pathname + el.search + (el.hash || '');

        event.preventDefault();
        this.navigateTo(path);
    },

    navigateTo: function(path, options){
        if (canUseDOM) {
            if (options && options.replace) {
                window.history.replaceState({}, document.title, path);
            } else {
                window.history.pushState({}, document.title, path);
            }
        }

        Dispatcher.dispatch({
            type: ActionTypes.CHANGE_LOCATION,
            path
        });

    },

    render: function(){
        var person = JSON.parse(localStorage.getItem('person'));
        return (
            <div className="Header">
                <div className="Header-container">
                    <a className="Header-brand" href="/" onClick={this.handleClick}>
                        <img className="Header-brandImg" src="img/gobox_logo.png" alt="React" />
                    </a>
                    <div className='Navigation' role="navigation">
                        <a className="Navigation-link active" href="/">Mine Kasser</a>
                        <a className="Navigation-link" href="#">Kunderservice</a>
                        <span className="Navigation-spacer"> | </span>
                        {person.map(function(client, index){
                            //console.log(client);
                            return(
                                <a className="Navigation-link" id="nav-trigger" key={index} href="#">Hello, {client.name}</a>
                            );
                        })}

                    </div>
                </div>
                <div className="userContent" id="userContent">
                    {person.map(function(client, index){
                       //console.log(client);
                        return(
                           <div className="row" key={index}>
                               <div className="col-sm-11 col-md-11 col-md-offset-1">
                                   <div className="thumbnail">
                                       <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDE5MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTRlY2JmOTRmMDAgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNGVjYmY5NGYwMCI+PHJlY3Qgd2lkdGg9IjE5MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI3MC4wNTQ2ODc1IiB5PSIxMDQuNSI+MTkyeDIwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" alt="" />
                                   </div>
                                   <h4>Hello, {client.name} </h4>
                                   <address>
                                       <strong>Mail</strong><br/>
                                       <a href="mailto:{client.user.email}">{client.user.email}</a><br/>

                                       <strong>Address</strong><br/>
                                       {client.address1}<br/>
                                       {client.postal_code}, {client.city}<br/>
                                       <abbr title="Phone">P:</abbr> {client.tlf}<br/>
                                   </address>
                               </div>
                           </div>
                       );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = NavibarComponent;