import React from 'react'

function removeUserProp (WrappedComponent) {
    return class WrappingComponent extends React.Component {
        render() {
            const {user, ...otherporps} = this.props;
            return <WrappedComponent {...otherporps} />
        }
    }
}

export default removeUserProp;

function removeUserPropExt (WrappedComponent) {
    return class NewComponent extends WrappedComponent {
        render() {
            const {user, ...otherporps} = this.props;
            this.props = otherporps;
            return super.render();
        }
    };
}

const modifyPropsHOC = (WrappedComponent) => {
    return class NewComponent extends WrappedComponent {
        render() {
            const eles = super.render();
            const newStyle = {
                color: (eles && eles.type === 'div' ? 'red' : 'green')
            }
            const newProps = {...this.props, style: newStyle};
            return React.cloneElement(eles, newProps);
        }
    }
}

export const refsHOC = (WrappedComponent) => {
    return class HOCComponent extends React.Component {
        constructor() {
            super(...arguments);
            this.linkRef = this.linkRef.bind(this);
        }
        linkRef(wrappedInstance) {
            this._root = wrappedInstance;
        }
        render() {
            const props = {...props, ref: this.linkRef};
            return (<WrappedComponent {...props}></WrappedComponent>);
        }
    };
};

const onlyForLoggedinHOC = (WrappedComponent) => {
    return class NewComponent extends WrappedComponent {
        render() {
            if (this.props.loggedIn) {
                return super.render();
            } else {
                return null;
            }
        }
    }
}


