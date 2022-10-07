import React from 'react'
import Table from './Table'
export default function table() {
  return (
    <div className='container'>
    <table>
            <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
            </tr>
        </table>
        <table class = "tables">
            <tr>
                <td class = "tb brright ">10001</td>
                <td>Thomas</td>
                <td>M</td>
                <td className='brleft'>32</td>
            </tr>
            <tr>
                <td class = "tb brright">10002</td>
                <td>Sally</td>
                <td>F</td>
                <td className='brleft'>28</td>
            </tr>
            <tr>
                <td class = "tb brright">10003</td>
                <td>Anthony</td>
                <td>M</td>
                <td className='brleft'>24</td>
            </tr>
        </table>
    </div>
  )
}
