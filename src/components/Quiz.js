import React from 'react'
import Answer from './Answer';
import {Col,Row,Container, Button} from 'reactstrap';
import {useState} from 'react';
import {useDrop} from 'react-dnd';

function Quiz() {

  const [list] = useState([
    {
      id: "1",
      question:"How many time zones are there in Russia?",
      answers: ["10", "9", "11", "7"],
      correct: "11"
    },
    {
      id: "2",
      question:"What's the national flower of Japan?",
      answers: ["Lutus", "Red Rose", "Cherry blossom", "Marry Gold"],
      correct: "Cherry blossom"
    },
    {
      id: "3",
      question:"What's the national animal of Australia?",
      answers: ["Kangaroo", "Gray Kangaroo", "Not Mentioned", "Red Kangaroo"],
      correct: "Red Kangaroo"
    }
  ]);

    const [correctAns, setCorrectAns] = useState([]);

  //   const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  //   function isDropped(boxName) {
  //       return droppedBoxNames.indexOf(boxName) > -1;
  //   }

  //   const handleDrop = useCallback((index, item) => {
  //     const { correctAns } = item;
  //     setDroppedBoxNames(update(droppedBoxNames, correctAns ? { $push: [correctAns] } : { $push: [] }));
  //     setCorrectAns(update(correctAns, {
  //         [index]: {
  //             lastDroppedItem: {
  //                 $set: item,
  //             },
  //         },
  //     }));
  // }, [droppedBoxNames, correctAns]);

    const [{isOver, canDrop}, drop] = useDrop(() => ({
        accept:"text",
        drop:(item) => dropCorrectToAnswerSheet(item.id),
        collect: (monitor) => ({
            isOver:!!monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));


    const dropCorrectToAnswerSheet = (id, index) => {
        const AnswerList = list.filter((ans) => id === ans.id);
        console.log(id);
        // setCorrectAns((CorrectAns) => [...CorrectAns, AnswerList[0]]);
        setCorrectAns([AnswerList[0]],index);
    };

    return (
        <>
                <div className='QuizBox'>
                   <h2>Quiz: Match The Right Answer </h2>
                   <hr></hr>
                     <Row className=''>  
                         <Col xs="6" className='questions'>
                         <ul className='list'>
                             {list.map((item) => (
                               <div className='listItem'>
                                 <li key={item.id}>{item.question}</li>
                               </div>
                             ))}
                         </ul>
                         </Col>
                         <Col xs="2"></Col>
            
                         <Col xs="4" className='answer' > 
                          {list.map((item,index)=>(
                            <div key={index} className='listanswer' ref={drop}> 
                                {correctAns.map((ans,index)=>{ 
                                      return <Answer key={index} id={ans.id} correctAns={ans.correct} />;
                                })} 
                              </div>
                              ))}
                         </Col>

                         </Row>
                            <div > 
                            <hr></hr> 
                                {list.map((ans)=>{
                                    return <Answer id={ans.id} correctAns={ans.correct} />;
                                })}
                            </div>

                            <Button>Submit</Button>
                </div>
        </>

    )
};

export default Quiz;
