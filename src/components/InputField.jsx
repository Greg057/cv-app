
export default function InputField ({ title, placeholder }) {
    return (
        <div className="input-field">
            <h4>{title}</h4>
            <form>
                <input type="text" placeholder={placeholder} />
            </form>
            
        </div>
    )
}