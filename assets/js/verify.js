document.getElementById('verify-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const empNumber = document.getElementById('empNumber').value.trim().toUpperCase();
  const employees = [
    {
      number: "EMP001",
      name: "Somya Sharma",
      designation: "Founder & CEO",
      startDate: "2023-01-01",
      endDate: "",
      status: "Active"
    },
    {
      number: "EMP002",
      name: "Laxmi Prajapati",
      designation: "Co-Founder & COO",
      startDate: "2023-01-01",
      endDate: "",
      status: "Active"
    }
  ];
  const emp = employees.find(e => e.number === empNumber);
  const resultDiv = document.getElementById('result');
  if (emp) {
    resultDiv.innerHTML = `
      <div class="card border-0 shadow-sm rounded-4 p-3" style="background: #f8f9fa;">
        <div class="card-body text-center">
          <div class="mb-3">
            <i class="bi bi-patch-check-fill" style="font-size:2.5rem;color:#5a189a;"></i>
          </div>
          <h4 class="card-title mb-2" style="color:#5a189a;">Employee Verified</h4>
          <p class="mb-1"><span class="fw-semibold">Name:</span> ${emp.name}</p>
          <p class="mb-1"><span class="fw-semibold">Designation:</span> ${emp.designation}</p>
          <p class="mb-1"><span class="fw-semibold">Employee Number:</span> ${emp.number}</p>
          <p class="mb-1"><span class="fw-semibold">Start Date:</span> ${emp.startDate}</p>
          <p class="mb-1"><span class="fw-semibold">End Date:</span> ${emp.endDate || '<span class="badge bg-success">Present</span>'}</p>
          <p class="mb-0"><span class="fw-semibold">Status:</span> <span class="badge bg-success">${emp.status}</span></p>
        </div>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="card border-0 shadow-sm rounded-4 p-3" style="background: #fff3f6;">
        <div class="card-body text-center">
          <div class="mb-3">
            <i class="bi bi-x-circle-fill" style="font-size:2.5rem;color:#e63946;"></i>
          </div>
          <h4 class="card-title mb-2" style="color:#e63946;">Not Found</h4>
          <p class="mb-0 text-muted">Employee not found or not active.</p>
        </div>
      </div>
    `;
  }
});