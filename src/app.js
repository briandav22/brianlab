import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter"
import configureStore from './store/configureStore'
import axios from 'axios';

import {getData} from './actions/scrutdata'
import {ip} from './ipinfo/ipaddress'
import "normalize.css/normalize.css";
import "./styles/styles.scss";


const store = configureStore();

const url = `https://10.60.1.69:8080/fcgi/scrut_fcgi.fcgi?`
const params = {
    "rm": "manageExporters",
    "view":"ManageExporters",
    "authToken": "cLgDzrsMkYLVGbuM7kAee5e1",
    session_state: {"client_time_zone":"America/New_York","order_by":[],"search":[],"query_limit":{"offset":0,"max_num_rows":50},"hostDisplayType":"dns"}

}


axios.get(url,{params}).then((response)=>{
    const exporters = {'data':[]}
    response.data.rows.map((row)=>{
      
        exporters.data.push(row[2]['exporter_label'])
 })
 console.log(exporters)
    store.dispatch(getData(exporters))
}

   )

const jsx = (
    <Provider store = {store}> 
        <AppRouter />
    </Provider>
    
);


ReactDOM.render( jsx, document.getElementById("app"))
