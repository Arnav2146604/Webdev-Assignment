import React, {useState} from 'react'
import { Input, TextArea, Form } from 'semantic-ui-react'

const StudentPage = () => {
    const [rollNum, setRollNum] = useState("");
    const [typedText, setTypedText] = useState("");
    console.log("rollNumber", rollNum)

    return ( 
        <>
            <Input placeholder="Roll Number" value={rollNum} type='text' onChange={(e, val) => {setRollNum(val.value)}} />
            <Input type='file' />
            <Form>
                <TextArea value={typedText} onChange={(e, val) => {setTypedText(val.value)}} placeHolder="Start Typing..." type="text" />
            </Form>
            
        </>
     );
}
 
export default StudentPage;