import "../styles/input-field.css"

export default function InputField ({ title, info, setFunction, valueToChange, id = false }) {
    return (
        <div className="input-field">
            <h4>{title}</h4>
            <input type="text" value={info[valueToChange]} placeholder={"Enter " + title} 
                    onChange={id === false
                                    ? (e) => setFunction({...info, [valueToChange]: e.target.value}) 
                                    : (e) => setFunction(id, [valueToChange], e.target.value)}/>
        </div>
    )
}