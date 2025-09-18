const firstYearStudents = [{
  name: 'Amrutha',
  class: 1,
  marks: 25
}, {
  name: 'Chandhini',
  class: 1,
  marks: 30
}, {
  name: 'Arun',
  class: 1,
  marks: 40
}, {
  name: 'Vinay',
  class: 1,
  marks: 45
}, {
  name: 'Yesu',
  class: 1,
  marks: 35
}, {
  name: 'Pavani',
  class: 1,
  marks: 32
}, {
  name: 'Gnanika',
  class: 1,
  marks: 45
}, {
  name: 'Kathyayani',
  class: 1,
  marks: 34
}, {
  name: 'Srinivas',
  class: 1,
  marks: 50
}, {
  name: 'Vijayadurga',
  class: 1,
  marks: 48
}];

const secondYearStudents = [];

for (let i = 0; i < firstYearStudents.length; i++) {
  if (firstYearStudents[i].marks >= 35) {
    secondYearStudents.push({
      name: firstYearStudents[i].name,
      class: 2,
      marks: firstYearStudents[i].marks
    });
  }
}

let html = `
  <table border="1" width="25%" cellpadding="8" cellspacing="0" style="text-align: center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Class</th>
        <th>Marks</th>
      <tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3">
          <strong>
            First Year Students
          </strong>
        </td>
      </tr>
`;

for (let i = 0; i < firstYearStudents.length; i++) {
  if (firstYearStudents[i].marks < 35) {
    html += `
      <tr>
        <td>${firstYearStudents[i].name}</td>
        <td>${firstYearStudents[i].class}</td>
        <td>${firstYearStudents[i].marks}</td>
      </tr>
    `;
  }
}

html += `
  <tr>
    <td colspan="3">
      <strong>
        Second Year Students
      </strong>
    </td>
  </tr>
`;

for (let i = 0; i < secondYearStudents.length; i++) {
  html += `
    <tr>
      <td>${secondYearStudents[i].name}</td>
      <td>${secondYearStudents[i].class}</td>
      <td>${secondYearStudents[i].marks}</td>
    </tr>
  `;
}

html += `
    <tbody>
  <table>
`;

document.querySelector('.js-promoted-students')
  .innerHTML = html;