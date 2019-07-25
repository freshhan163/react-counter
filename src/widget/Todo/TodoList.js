import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        let {todos, onTodoClick} = this.props;
        return (
            <ul>
                {todos.map((todo, index) => {
                    <Todo key={index}
                        onClick={() => onTodoClick(index)}
                        {...todo}
                    />
                })}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.id.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;