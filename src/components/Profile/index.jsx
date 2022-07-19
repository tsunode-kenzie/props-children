import TechList from "../TechList";

function Profile(props) {
    return (
        <>
            <div>
                <span>{props.name}</span>
                <span>{props.age}</span>
                <TechList stack={props.stack} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat iste ea consequatur minima velit eligendi debitis similique est inventore nihil in assumenda explicabo aperiam aliquam laboriosam quaerat, voluptatibus commodi ab!</p>
        </>
    )
}

export default Profile