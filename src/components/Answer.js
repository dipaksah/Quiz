import React,{memo} from 'react';
import {Container} from 'reactstrap';
import {useDrag} from 'react-dnd';
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
function Answer({i,id,correctAns,isDropped}) {

    const [{opacity},drag] = useDrag(()=>({
        type:"text",
        item:{id:id},
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }));

    return (
        <Container>
            <div key={i} ref={drag} role={Answer} className='answer1' style={{ ...style, opacity }}>
                {correctAns}
            </div>   
        </Container>    
    )
};

export default Answer;