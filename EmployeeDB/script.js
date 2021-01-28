// import {employeeTable} from './dbms.js';
const employeeTable = require('./dbms.js')

(function() {
    const newCompany = new employeeTable();
    newCompany.display();
})();
