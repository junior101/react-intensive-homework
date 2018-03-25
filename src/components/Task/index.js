//Core
import React, {Component} from 'react';

//Instruments
import Styles from './styles.scss';
import CheckBox from '../../theme/assets/Checkbox';
import Star from '../../theme/assets/Star';
import Edit from '../../theme/assets/Edit';
import Delete from '../../theme/assets/Delete';
import {bool, string} from 'prop-types';

export default class Task extends Component {
    static propTypes = {
        completed: bool.isRequired,
        created: string.isRequired,
        favorite: bool.isRequired,
        id: string.isRequired,
        message: string.isRequired,
        modified: string.isRequired,
    };

    render() {
        return (
            <li className={Styles.task}>
                <div>
                    <CheckBox
                    color1 = '#3B8EF3'
                    color2 = '#FFF'
                    />
                    <input type='text' value='message'/>
                </div>

                <div>

                   <Star/>
                    <Edit/>
                    <Delete/>

                </div>
            </li>

        );
    }
}
