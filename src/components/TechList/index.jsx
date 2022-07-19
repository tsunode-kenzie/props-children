function TechList(props) {
    return (
        <>
            {
                props.stack ?
                    <ul>
                        {
                            props.stack.map((tech, index) =>
                                <li key={index}>{tech}</li>
                            )
                        }
                    </ul>
                    :
                    <span>Error</span>
            }
        </>
    )
}

export default TechList;