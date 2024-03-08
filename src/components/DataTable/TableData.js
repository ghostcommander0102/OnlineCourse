export const tableColumns = [
    {
      name : "No",
      selector : (row) => row.num,
      sortable : true,
      width : '10%'
    },
    {
      name: "News Ttitle (English)",
      selector: (row) => row.name,
      sortable: true,
      width : '70%'
    },
    {
      name : "Action",
      selector : (row) => row.action,
      sortable : true,
      width : "20%"
    }
    
];

const editItem = (id) => {
  // alert(id);
}

const removeItem = (id) => {
  // alert(id);
}



export const tableData = [
    {
      id: 0,
      num : 1,
      name: "Francine Kirby",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(0)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(0)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 1,
      num : 2,
      name: "Reva Best",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(1)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(1)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 2,
      num : 3,
      name: "Alexis Flores",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(2)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(2)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 3,
      num : 4,
      name: "Nixon Sullivan",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(3)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(3)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 4,
      num : 5,
      name: "Foreman Wooten",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(4)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(4)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 5,
      num : 6,
      name: "Franco Davis",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(5)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(5)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 6,
      num : 7,
      name: "Francine Kirby",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(6)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(6)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 7,
      num : 8,
      name: "Reva Best",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(7)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(7)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 8,
      num : 9,
      name: "Alexis Flores",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(8)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(8)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 9,
      num : 10,
      name: "Nixon Sullivan",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(9)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(9)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 10,
      num : 11,
      name: "Foreman Wooten",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(10)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(10)}><em className='icon ni ni-file-remove'></em></button>
              </>
    },
    {
      id: 11,
      num : 12,
      name: "Franco Davis",
      action: <>
                <button className="btn"><em className="icon ni ni-check-thick"></em></button>
                <button className="btn" onClick={() => editItem(11)}><em className='icon ni ni-edit-alt'></em></button>
                <button className="btn" onClick={() => removeItem(11)}><em className='icon ni ni-file-remove'></em></button>
              </>
    }
];