export default function TextField(props){
    return(
    <div>
        <label htmlFor={props.label} className="block text-gray-700 text-sm font-bold mb-2">
            {props.label} : </label>
            <input
            type={props.type}
            id={props.label}
            name={props.label}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
    </div>
    )
}