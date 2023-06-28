import{_ as C,T as N}from"./ButtonBase-9665f477.js";import{_ as D}from"./inheritsLoose-a02b825e.js";import{R as m}from"./index-8db94870.js";import{R as v}from"./index-8ce4a492.js";const S={disabled:!1};var O=function(s){return s.scrollTop},x="unmounted",l="exited",f="entering",h="entered",T="exiting",u=function(p){D(s,p);function s(i,e){var t;t=p.call(this,i,e)||this;var n=e,r=n&&!n.isMounting?i.enter:i.appear,a;return t.appearStatus=null,i.in?r?(a=l,t.appearStatus=f):a=h:i.unmountOnExit||i.mountOnEnter?a=x:a=l,t.state={status:a},t.nextCallback=null,t}s.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===x?{status:l}:null};var o=s.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==h&&(t=f):(n===f||n===h)&&(t=T)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,t,n,r;return t=n=r=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,r=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:r}},o.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&O(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:x})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[v.findDOMNode(this),r],c=a[0],E=a[1],b=this.getTimeouts(),g=r?b.appear:b.enter;if(!e&&!n||S.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,E),this.safeSetState({status:f},function(){t.props.onEntering(c,E),t.onTransitionEnd(g,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,E)})})})},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:l},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:T},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(r)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=a[0],E=a[1];this.props.addEndListener(c,E)}e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===x)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=C(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return m.createElement(N.Provider,{value:null},typeof n=="function"?n(e,r):m.cloneElement(m.Children.only(n),r))},s}(m.Component);u.contextType=N;u.propTypes={};function d(){}u.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};u.UNMOUNTED=x;u.EXITED=l;u.ENTERING=f;u.ENTERED=h;u.EXITING=T;const _=u,I=p=>p.scrollTop;function L(p,s){var o,i;const{timeout:e,easing:t,style:n={}}=p;return{duration:(o=n.transitionDuration)!=null?o:typeof e=="number"?e:e[s.mode]||0,easing:(i=n.transitionTimingFunction)!=null?i:typeof t=="object"?t[s.mode]:t,delay:n.transitionDelay}}export{_ as T,L as g,I as r};
//# sourceMappingURL=utils-3df70432.js.map
