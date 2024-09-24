
// Dynamic Component

function Hello(){

    let myName = 'Shivam'; // Using a Variable
    let fullName = () => { // Using a function
        return ' Kumar';
    }
    return(
        <h3>Hello {myName}{fullName()}, how are you?</h3>
    )
}

export default Hello;