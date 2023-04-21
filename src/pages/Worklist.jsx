import * as React from "react";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from "../data/dummy";
import { Header } from "../components";
/**
 * Kanban Local Data sample
 */


function Worklist() {
    return (<div className='kanban-control-section'>
            <div className='col-lg-12 control-section m-2 md:m-10 mt-24 p-2 md:p-10 drop-shadow-2xl dark:text-gray-200 dark:bg-main-dark-bg bg-white rounded-3xl'>
                <Header category="App" title="Worklist" />
                <p className=' pl-2 text-sm dark:text-gray-200'>(Drag and drop items and double click to edit)</p>
                <div className='control-wrapper'>
                    <KanbanComponent className='drop-shadow-md' id="kanban" keyField="Status" dataSource={kanbanData} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
                        <ColumnsDirective>
                            <ColumnDirective headerText="To Do" keyField="To Do"/>
                            <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                            <ColumnDirective headerText="Done" keyField="Done"/>
                        </ColumnsDirective>
                    </KanbanComponent>
                </div>
            </div>
            
        </div>);
}
export default Worklist;