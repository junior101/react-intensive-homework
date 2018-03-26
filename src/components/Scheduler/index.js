//Core
import React, {Component} from 'react';
import Styles from './styles.scss';
import Checkbox from '../../theme/assets/Checkbox';
import Task from '../Task';
import {getUniqueID} from '../../helpers';

export default class Scheduler extends Component {
    constructor() {
        super();
        this.addTask = ::this._addTask;
        this.handleTaskChange = ::this._handleTaskChange;
    }

    state = {
        tasks: [],
        task: ''
    }

    _addTask(event) {
        const {task} = this.state;
        this.setState(({tasks}) => ({
            tasks: [{id: getUniqueID(), message: task}, ...tasks]
        }));
        
        event.preventDefault();

    }

    _handleTaskChange({target: {value}}) {
        this.setState(() => ({
            task: value
        }));
    }

    render() {
        const {task} = this.state;

        return (
            <div className={Styles.scheduler}>
                <main>
                    <section>
                        <header>
                            <h1>Планировщик задач</h1>
                            <input type='text' placeholder='Поиск'/>
                        </header>
                        <form onSubmit={this.addTask}>
                            <input type='text' value={task} onChange={this.handleTaskChange}/>
                            <button type='sumbit'>Добавить задачу</button>
                        </form>
                        <ul>

                            <Task completed={true} created={'created'} favorite={true} id={'id'} message={'message'} modified={'madif'}/>
                        </ul>
                    </section>
                    <footer>
                        <code>
                            <Checkbox
                                color1='#3B8EF3'
                                color2='#FFF'
                            />
                            <span>Все задачи выполнены</span>
                        </code>
                    </footer>
                </main>
            </div>
        );
    }
}
