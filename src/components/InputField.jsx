import "../styles/input-field.css"

export default function InputField ({ title, setFunction }) {
    return (
        <div className="input-field">
            <h4>{title}</h4>
            <input type="text" placeholder={"Enter " + title} onChange={(e) => setFunction(e.target.value)}/>
            
        </div>
    )
}