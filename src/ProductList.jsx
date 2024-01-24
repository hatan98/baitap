import React, { useState } from 'react';

function ProductList({list}) {
    const [sates,setState] = useState()
    const sapxep=()=>{
        const result = list.sort((a,b)=>a.cost-b.cost)
        setState({result})
        console.log(sates.result)
    }
    
  return (
    <div className='baitap'>
        <h1>Bài tập 2</h1>
        <table >
        <thead>
        <tr>
            <th>id</th>
            <th>tên sản phẩm </th>
            <th>giá</th>
        </tr>
        </thead>
        <tbody>
        {list.map(list=>(
            <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.cost} vnđ</td>
            </tr>
        )    
        )}
        </tbody>
        </table>
        <button onClick={sapxep}>sắp xếp lại theo giá cả</button>

    </div>
  )
}

export default ProductList
