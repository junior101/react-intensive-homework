//Core
import React, { Component } from 'react';
import Styles from './styles.scss';
import Checkbox from '../../theme/assets/Checkbox';
import Task from '../Task';
import { getUniqueID } from '../../helpers';

export default class Scheduler extends Component {
    static _keyPress (event) {
        if (event.keyCode === 13) {
            console.log('press enter');
        }
    }

    constructor () {
        super();
        this.addTask = ::this._addTask;
        this.handleTaskChange = ::this._handleTaskChange;
        this.keyPress = ::Scheduler._keyPress;
    }

    state = {
        tasks: [],
        task:  '',
    };

    _addTask (event) {
        event.preventDefault();
        const { task } = this.state;

        if (task) {
            this.setState(({ tasks }) => ({
                tasks: [{ id: getUniqueID(), message: task }, ...tasks],
                task:  '',
            }));
        }
    }

    _handleTaskChange ({ target: { value }}) {
        const { task } = this.state;

        if (task.length < 46) {
            this.setState(() => ({
                task: value,
            }));
        }
    }
    _makeFavorite = (id) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.map((task) => task.id === id ? task.favorite = true : task),
        }));
    };

    render () {
        const { task, tasks } = this.state;
        const taskItems = tasks.map(({ message, id }) =>
            (<Task
                created = { 'created' }
                id = { id }
                key = { id }
                makeFavorite = { this._makeFavorite }
                message = { message }
                modified = { 'madif' }
            />));

        return (
            <div className = { Styles.scheduler }>
                <main>
                    <section>
                        <header>
                            <h1>Планировщик задач</h1>
                            <input placeholder = 'Поиск' type = 'text' />
                        </header>
                        <form onSubmit = { this.addTask }>
                            <input
                                type = 'text'
                                value = { task }
                                onChange = { this.handleTaskChange }
                                onKeyPress = { this.keyPress }
                            />
                            <button type = 'sumbit'>Добавить задачу</button>
                        </form>
                        <ul>
                            {taskItems}
                        </ul>
                    </section>
                    <footer>
                        <code>
                            <Checkbox
                                color1 = '#3B8EF3'
                                color2 = '#FFF'
                            />
                            <span>Все задачи выполнены</span>
                        </code>
                    </footer>
                </main>
            </div>
        );
    }
}
