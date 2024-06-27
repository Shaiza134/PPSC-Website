const advertisements = [
    { srNo: 1, adNo: '10/2024', caseNo: '3362024', postName: 'Director General (EPC) (Environmental Policy Centre)', fee: 600, department: 'Punjab Environment Protection and Climate Change Department', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 2, adNo: '10/2024', caseNo: '4862024', postName: 'Director General (EMC) (Environmental Monitoring Centre)', fee: 600, department: 'Punjab Environment Protection and Climate Change Department', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 3, adNo: '10/2024', caseNo: '3462024', postName: 'Director (Policy and Sustainable Development) (Environmental Policy Centre)', fee: 600, department: 'Punjab Environment Protection and Climate Change Department', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 4, adNo: '10/2024', caseNo: '3562024', postName: 'Director (Environment and Climate Change Research) (Environmental Policy Centre)', fee: 600, department: 'Punjab Environment Protection and Climate Change Department', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 5, adNo: '10/2024', caseNo: '4962024', postName: 'Director (Monitoring) (Environmental Monitoring Centre)', fee: 600, department: 'Punjab Environment Protection and Climate Change Department', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 6, adNo: '10/2024', caseNo: '5062024', postName: 'Director (Laboratories) (Environmental Monitoring Centre)', fee: 600, department: 'Punjab Environment Protection and Climate Change Department', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 7, adNo: '10/2024', caseNo: '8C2024', postName: 'Assistant Librarian (Lahore)', fee: 600, department: 'Archives & Libraries Wing, Services & General Administration Department, Govt. Model Town Library, Lahore', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 8, adNo: '10/2024', caseNo: '9C2024', postName: 'Classifer / Cataloguer (Sheikhupura)', fee: 600, department: 'Public Library Sharqpur, Sheikhupura', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 9, adNo: '10/2024', caseNo: '10C2024', postName: 'Assistant Librarian (T.T. Singh)', fee: 600, department: 'Govt. Raza Farooq Memorial Library, Pir Mahal, Toba Tek Singh', adDate: '23-06-2024', closingDate: '08-07-2024' },
    { srNo: 10, adNo: '10/2024', caseNo: '11C2024', postName: 'Classifer / Cataloguer (Okara)', fee: 600, department: 'Public Library Basirpur, Okara', adDate: '23-06-2024', closingDate: '08-07-2024' }
];

function populateTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    advertisements.forEach(ad => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ad.srNo}</td>
            <td>${ad.adNo}</td>
            <td>${ad.caseNo}</td>
            <td>${ad.postName}</td>
            <td>${ad.fee}</td>
            <td>${ad.department}</td>
            <td>${ad.adDate}</td>
            <td>${ad.closingDate}</td>
        `;
        tbody.appendChild(row);
    });
}

function prevPage() {
    // Add pagination logic here
}

function nextPage() {
    // Add pagination logic here
}

document.addEventListener('DOMContentLoaded', populateTable);
