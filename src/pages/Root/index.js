import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../../actions/root';
import Picker from '../../widget/Picker';
import Posts from '../../widget/Posts';

class AsyncApp extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }
    fetchPost = props => {
        const {dispatch, selectSubreddit} = props;
        dispatch(fetchPostsIfNeeded(selectSubreddit));
    }
    componentDidMount() {
        this.fetchPost(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectSubreddit !== this.props.selectSubreddit) {
            this.fetchPost(nextProps);
        }
    }
    handleRefreshClick(e) {
        e.preventDefault();

        const {dispatch, selectSubreddit} = this.props;
        console.log('再次刷新', selectSubreddit);
        dispatch(invalidateSubreddit(selectSubreddit));
        dispatch(fetchPostsIfNeeded(selectSubreddit));
    }
    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
      }
    render() {
        const {selectSubreddit, posts, isFetching, lastUpdated} = this.props;
        console.log('this.props = ', this.props);
        return (
            <div>
                <Picker
                    value={selectSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}
                />
                <p>
                    {
                        lastUpdated && (
                            <span>
                                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{''}
                            </span>
                        )
                    }
                    {
                        !isFetching
                        && <a href="#" onClick={this.handleRefreshClick}>更新</a>
                    }
                </p>
                {isFetching && posts.length === 0 && <h2>正在为您急速加载...</h2>}
                {!isFetching && posts.length === 0 && <h2>数据为空</h2>}
                {posts.length > 0
                    && <div style={{opacity: isFetching ? 0.5 : 1}}>
                        <Posts posts={posts} />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {selectSubreddit, postsBySubreddit} = state;
    const {isFetching, lastUpdated, items: posts} = postsBySubreddit[selectSubreddit]
        || {
            isFetching: true,
            items: []
        };
    return {
        selectSubreddit,
        posts,
        isFetching,
        lastUpdated
    };
}

AsyncApp.propTypes = {
    selectSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(AsyncApp);
