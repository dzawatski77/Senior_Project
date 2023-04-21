import * as React from 'react';
import { GridComponent, ColumnsDirective, Group, ColumnDirective, Page, Inject, ContextMenu, Resize, Sort, Filter, ExcelExport, PdfExport, Edit} from '@syncfusion/ej2-react-grids';
import { attendeeData } from '../data/dummy';
import { Header } from '../components';



function Attendees() {
    let gridInstance;
    const filterSettings = { type: 'Menu' };
    


    return (<div className=' m-2 md:m-10 p-2 md:p-10 drop-shadow-2xl dark:text-gray-200 dark:bg-main-dark-bg bg-white rounded-3xl'>
      <Header category="Page" title="Attendees" />
            <div className='control-section row drop-shadow-2xl'>
                <GridComponent dataSource={attendeeData} allowSorting={true} allowPaging={true} ref={grid=>gridInstance=grid} pageSettings={{ pageSize: 15, pageCount: 5 }} allowFiltering={true}  filterSettings={filterSettings} allowGrouping={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='UserID' headerText='User Id' width='120' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='Name' headerText='Name' width='150'></ColumnDirective>
                        <ColumnDirective field='Phone' headerText='Phone' width='150' textAlign='Right'/>
                        <ColumnDirective field='Email' headerText='Email' width='120' textAlign='Right'/>
                        <ColumnDirective field='DateJoined' headerText='Date Joined' width='120' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='CheckInTime' headerText='Check-in Time' width='120'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Resize, Page, Group, Sort, ContextMenu, Filter, ExcelExport, Edit, PdfExport]}/>
                </GridComponent>
            </div>
        </div>);
}
export default Attendees;
