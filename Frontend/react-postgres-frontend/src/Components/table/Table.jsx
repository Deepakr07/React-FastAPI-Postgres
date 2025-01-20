import "./table.css"
import { Element } from 'react-scroll';

export default function TableSection(){
    return(
        <Element name = "tablesection">
            <div className="table-section">
                <p className="hero-text">Cultivator<span className="cultivator-text">Details</span></p>
                <div className="table-container">
                <table border={1}>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Company ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Active
                        </th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>14</td>
                        <td>Cultivator D</td>
                        <td>True</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>15</td>
                        <td>Cultivator C</td>
                        <td>True</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>16</td>
                        <td>Cultivator E</td>
                        <td>True</td>
                    </tr>
                </table>
                </div>
            </div>
        </Element>
    )
}