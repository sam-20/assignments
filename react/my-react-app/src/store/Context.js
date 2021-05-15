import { createContext, useState } from 'react'


const MyContext = createContext();

console.log(MyContext);


function MyProvider(props) {

    const [username, setUsername] = useState()



    return (
        <MyContext.Provider value={{username, setUsername}} >

            {
                props.children
            }

        </MyContext.Provider>
    )

}


export { MyContext, MyProvider }


