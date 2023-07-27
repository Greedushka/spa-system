import React, {useState} from 'react';
import Aside from "../../components/aside/aside";
import style from './style.css'

const Tasks = () => {
    const [boards, setBoards] = useState(
        [
            {id: 1, title: 'Ожидание', items: [{id:1, title: 'Испечь пирог'},{id:2, title: 'Испечь пирог'},{id:3, title: 'Испечь пирог'}]},
            {id: 2, title: 'В процессе', items: [{id:4, title: 'Испечь пирог'},{id:5, title: 'Испечь пирог'},{id:6, title: 'Испечь пирог'}]},
            {id: 3, title: 'Готово', items: [{id:7, title: 'Испечь пирог'},{id:8, title: 'Испечь пирог'},{id:9, title: 'Испечь пирог'}]},
        ]
    )
    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    function dragOverHandler(e) {
        e.preventDefault()
        if(e.target.className == 'content-card'){
            e.target.style.boxShadow = '1px 1px 10px grey'
        }
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandler(e, board, item) {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if(b.id === board.id){
                return board
            }
            if(b.id === currentBoard.id){
                return currentBoard
            }
            return b
        }))
        e.target.style.boxShadow = 'none';
    }

    function dropCardHandler(e, board) {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if(b.id === board.id){
                return board
            }
            if(b.id === currentBoard.id){
                return currentBoard
            }
            return b
        }))
        e.target.style.boxShadow = 'none';
    }

    return (
        <div className='section'>
            <Aside />
            <div className="wrapper">
                <div className="main-title">Задачи</div>
                <div className="main">
                    <div className="tasks-board">
                        {boards.map(board =>
                        <div className='board-table'
                             onDragOver={(e) => dragOverHandler(e)}
                             onDrop={(e) => dropCardHandler(e, board)}

                        >
                            <div className='table-title'>{board.title}</div>
                            {board.items.map(item =>
                                <div className='table-content'>
                                    <div
                                        onDragOver={(e) => dragOverHandler(e)}
                                        onDragLeave={(e)=> dragLeaveHandler(e)}
                                        onDragStart={(e) => dragStartHandler(e, board, item)}
                                        onDragEnd={(e) => dragEndHandler(e)}
                                        onDrop={(e) => dropHandler(e, board, item)}
                                        className='todo'
                                        draggable='true'
                                        className="content-card">{item.title}</div>
                                </div>
                            )}
                        </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;