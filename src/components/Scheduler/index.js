//Core
import React, {Component} from 'react';
import Styles from './styles.scss';
import Checkbox from '../../theme/assets/Checkbox';
import Task from "../Task";

export default class Scheduler extends Component {
    render() {

        return (
            <div className={Styles.scheduler}>
                <main>
                    <section>
                        <header>
                            <h1>Планировщик задач</h1>
                            <input type='text' placeholder='Поиск'/>
                        </header>
                        <form>
                            <input type='text'/>
                            <button type='sumbit'>Добавить задачу</button>
                        </form>
                        <ul>

                            <Task completed={true} created={'created'} favorite={true} id={'id'} message={'message'} modified={'madif'}/>
                        </ul>
                    </section>
                    <footer>
                        <code>
                            <Checkbox/>
                            <span>Все задачи выполнены</span>
                        </code>
                    </footer>
                </main>
            </div>
        );
    }
}
