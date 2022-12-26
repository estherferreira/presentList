import './styles.css';

//The form below is the destructuring
export function Card({name, time}) {
    return (
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}

/*Other write form the properties
export function Card(props) {
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}
*/