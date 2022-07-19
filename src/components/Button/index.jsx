function Button(props) {
    return (
        <>
            <button type={props.type} />
            <img src="" alt="" />
            <p> {props.children}</p>
        </>
    )

}


export default Button;