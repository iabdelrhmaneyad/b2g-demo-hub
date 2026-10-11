// iSchool Reports Generator - Client-Side Interactive Controller (English)
document.addEventListener('DOMContentLoaded', () => {
  // Real Authentic Sample Database from DECI Batch
  const DEFAULT_DECI_DATA = {
    name: "DECI Official Batch Sample DB",
    rowsCount: 11,
    sheetName: "Sheet1",
    headers: [
      "Batch", "SID", "Student AR Name", "Student EN Name", "Student NID", "Updated NID",
      "Gender", "BirthDate", "Student Email", "Updated E-mail", "Student Mobile",
      "Grad 25-26", "Updated Grade", "Updated Grade Violation", "Level(25-26)",
      "Updated Level", "School Type", "School Name In Arabic", "School Name In English",
      "Holiday", "School language", "Ar. Gov", "City", "Physical Sessions Area",
      "Address", "Guardian Name", "Guardian NID", "Guardian Gender", "Guardian Mobile",
      "Guardian Email", "Updated Guardian Email", "Is Obst.", "Obst. Type",
      "son of shaheed", "VIP", "Birth Cert", "Enrollment Cert", "Grades Cert",
      "Guardian ID", "Declaration", "Notes", "Reason", "MCIT Graduation Status",
      "Continue Survey", "DEMI3 Status", "Docs Cont. status", "Tender Item",
      "Doc Status2", "Activation Status", "M1 Start Status"
    ],
    sampleRows: [
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10002", "Student AR Name": "مريم محمد عبدالله درويش",
        "Student NID": "31406148800388", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 2",
        "Ar. Gov": "Gharbia", "Tender Item": "Item 1", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10005", "Student AR Name": "عبيدة محمد عبدالرازق محمد",
        "Student NID": "31304120103854", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 2",
        "Ar. Gov": "Cairo", "Tender Item": "Item 1", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10009", "Student AR Name": "أنس أحمد بهجت عبدالفتاح",
        "Student NID": "31312261203014", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 2",
        "Ar. Gov": "Dakahlia", "Tender Item": "Item 1", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10014", "Student AR Name": "سلمى طارق إبراهيم خليل",
        "Student NID": "31405230104922", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 2",
        "Ar. Gov": "Giza", "Tender Item": "Item 1", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10022", "Student AR Name": "يوسف كريم عادل الشربيني",
        "Student NID": "31310150201931", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 3",
        "Ar. Gov": "Alexandria", "Tender Item": "Item 2", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10031", "Student AR Name": "خديجة عمر حسام الدين",
        "Student NID": "31408191202844", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 3",
        "Ar. Gov": "Dakahlia", "Tender Item": "Item 2", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10045", "Student AR Name": "حمزة أحمد مصطفى الجوهري",
        "Student NID": "31309110103115", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 3",
        "Ar. Gov": "Cairo", "Tender Item": "Item 2", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10053", "Student AR Name": "نور الدين سامح عيسى",
        "Student NID": "31311048801923", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 1",
        "Ar. Gov": "Gharbia", "Tender Item": "Item 3", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10068", "Student AR Name": "فاطمة الزهراء وليد الشافعي",
        "Student NID": "31401290105128", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 1",
        "Ar. Gov": "Giza", "Tender Item": "Item 3", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10077", "Student AR Name": "علي محمود شعبان إبراهيم",
        "Student NID": "31307180204192", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 1",
        "Ar. Gov": "Alexandria", "Tender Item": "Item 3", "Activation Status": "Active", "Reason": ""
      },
      {
        "Batch": "DEMI-Batch 2", "SID": "DEMI-S-10089", "Student AR Name": "زياد هشام عبدالمجيد قاسم",
        "Student NID": "31303120102981", "Grad 25-26": "Grade 5", "Level(25-26)": "Level 2",
        "Ar. Gov": "Cairo", "Tender Item": "Item 1", "Activation Status": "Revoke", "Reason": "Exceeded maximum allowed absences"
      }
    ]
  };

  // State
  const state = {
    currentStep: 1,
    activeDataset: DEFAULT_DECI_DATA,
    mappings: {
      student_name_col: 'Student AR Name',
      nid_col: 'Student NID',
      gov_col: 'Ar. Gov',
      tender_item_col: 'Tender Item',
      grade_col: 'Grad 25-26',
      level_col: 'Level(25-26)',
      batch_col: 'Batch',
      status_col: 'Activation Status',
      reason_col: 'Reason'
    }
  };

  // DOM Elements
  const stepNavs = [1, 2, 3, 4].map(n => document.getElementById(`stepNav${n}`));
  const stepPanes = [1, 2, 3, 4].map(n => document.getElementById(`stepPane${n}`));
  const btnGoToStep2 = document.getElementById('btnGoToStep2');
  const btnBackToStep1 = document.getElementById('btnBackToStep1');
  const btnGoToStep3 = document.getElementById('btnGoToStep3');
  const btnBackToStep2 = document.getElementById('btnBackToStep2');
  const btnStartGeneration = document.getElementById('btnStartGeneration');
  const btnAutoRemap = document.getElementById('btnAutoRemap');
  const btnRestartWizard = document.getElementById('btnRestartWizard');
  const btnDownloadPDF = document.getElementById('btnDownloadPDF');

  const excelDropzone = document.getElementById('excelDropzone');
  const excelFileInput = document.getElementById('excelFileInput');
  const excelRowCount = document.getElementById('excelRowCount');
  const excelColCount = document.getElementById('excelColCount');
  const mappingFieldsGrid = document.getElementById('mappingFieldsGrid');
  const statusColumnSelect = document.getElementById('statusColumnSelect');
  const reasonColumnSelect = document.getElementById('reasonColumnSelect');
  const matrixChipsContainer = document.getElementById('matrixChipsContainer');
  const matrixTotalSummary = document.getElementById('matrixTotalSummary');
  const previewLimitSelect = document.getElementById('previewLimitSelect');
  const mockupDynamicContent = document.getElementById('mockupDynamicContent');
  const mockupDocTitle = document.getElementById('mockupDocTitle');

  const customTitleBatch = document.getElementById('customTitleBatch');
  const customTitleLevel = document.getElementById('customTitleLevel');
  const customTitleGrade = document.getElementById('customTitleGrade');
  const startPageNumInput = document.getElementById('startPageNumInput');
  const contCriteriaInput = document.getElementById('contCriteriaInput');
  const exclCriteriaInput = document.getElementById('exclCriteriaInput');

  const progressRunningCard = document.getElementById('progressRunningCard');
  const generationSuccessBanner = document.getElementById('generationSuccessBanner');
  const progressBarFill = document.getElementById('progressBarFill');
  const metricPercent = document.getElementById('metricPercent');
  const metricProcessed = document.getElementById('metricProcessed');
  const metricSpeed = document.getElementById('metricSpeed');
  const metricRemaining = document.getElementById('metricRemaining');
  const mascotImg = document.getElementById('mascotImg');
  const toastMsg = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');

  function showToast(message) {
    if (!toastMsg) return;
    toastText.innerText = message;
    toastMsg.style.display = 'flex';
    setTimeout(() => { toastMsg.style.display = 'none'; }, 3500);
  }

  function setStep(step) {
    state.currentStep = step;
    stepPanes.forEach((p, idx) => {
      if (idx + 1 === step) p.classList.add('active');
      else p.classList.remove('active');
    });

    stepNavs.forEach((nav, idx) => {
      const stepNum = idx + 1;
      nav.classList.remove('active', 'completed');
      if (stepNum === step) nav.classList.add('active');
      else if (stepNum < step) nav.classList.add('completed');
    });

    if (step === 2) {
      renderMappingControls();
      updateMatrixBreakdown();
    } else if (step === 3) {
      renderDocumentMockup();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Preset Selection
  document.querySelectorAll('#excelFilesList .dataset-preset-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('#excelFilesList .dataset-preset-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const type = card.getAttribute('data-type');

      if (type === 'preset-deci') {
        state.activeDataset = DEFAULT_DECI_DATA;
        excelRowCount.innerText = '11 rows';
        excelColCount.innerText = '123 columns';
        showToast('Loaded DECI Official Sample DB (11 rows)');
      } else {
        state.activeDataset = generateLargeSimulation();
        excelRowCount.innerText = '1,250 rows';
        excelColCount.innerText = '123 columns';
        showToast('Loaded Large DB Simulation (1,250 rows)');
      }
    });
  });

  // Client-Side Excel Upload
  excelDropzone.addEventListener('click', () => excelFileInput.click());
  excelFileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
  });

  function handleFile(file) {
    if (!window.XLSX) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const wb = XLSX.read(data, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(ws, { header: 1 });
        if (json.length < 2) return;

        const headers = json[0].map(h => String(h || '').trim());
        const rows = json.slice(1).map(r => {
          const obj = {};
          headers.forEach((h, i) => { obj[h] = r[i] !== undefined ? String(r[i]) : ''; });
          return obj;
        });

        state.activeDataset = {
          name: file.name,
          rowsCount: rows.length,
          headers: headers,
          sampleRows: rows
        };

        excelRowCount.innerText = `${rows.length} rows`;
        excelColCount.innerText = `${headers.length} columns`;
        showToast(`Successfully loaded ${file.name} (${rows.length} records)!`);
      } catch (err) {
        showToast('Failed to parse file: ' + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  function generateLargeSimulation() {
    const rows = [];
    const govs = ['Cairo', 'Giza', 'Alexandria', 'Dakahlia', 'Gharbia'];
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const levels = ['Level 1', 'Level 2', 'Level 3'];
    const names = ['Ahmed Ibrahim', 'Mohamed Hassan', 'Omar El-Mahdy', 'Mariam Darwish', 'Salma Khalil', 'Youssef El-Sherbiny', 'Khadija Hossam'];

    for (let i = 1; i <= 1250; i++) {
      const isRevoke = (i % 12 === 0);
      rows.push({
        "Batch": "DEMI-Batch 2",
        "SID": `DEMI-S-${10000 + i}`,
        "Student AR Name": names[i % names.length],
        "Student NID": `3130${1000000000 + i}`,
        "Grad 25-26": "Grade 5",
        "Level(25-26)": levels[i % levels.length],
        "Ar. Gov": govs[i % govs.length],
        "Tender Item": items[i % items.length],
        "Activation Status": isRevoke ? 'Revoke' : 'Active',
        "Reason": isRevoke ? 'Exceeded allowable absences' : ''
      });
    }
    return { name: "1,250 Rows Simulation", rowsCount: 1250, headers: DEFAULT_DECI_DATA.headers, sampleRows: rows };
  }

  // Render Step 2
  function renderMappingControls() {
    const headers = state.activeDataset.headers;
    const fields = [
      { id: 'student_name_col', label: 'Student Name', default: 'Student AR Name', icon: 'fa-user' },
      { id: 'nid_col', label: 'National ID (NID)', default: 'Student NID', icon: 'fa-id-card' },
      { id: 'gov_col', label: 'Governorate', default: 'Ar. Gov', icon: 'fa-location-dot' },
      { id: 'tender_item_col', label: 'Tender Item', default: 'Tender Item', icon: 'fa-tag' },
      { id: 'grade_col', label: 'Grade', default: 'Grad 25-26', icon: 'fa-graduation-cap' },
      { id: 'level_col', label: 'Training Level', default: 'Level(25-26)', icon: 'fa-stairs' }
    ];

    let html = '';
    fields.forEach(f => {
      let val = state.mappings[f.id] || '';
      if (!val) {
        val = headers.find(h => h.toLowerCase() === f.default.toLowerCase()) ||
              headers.find(h => h.toLowerCase().includes(f.default.toLowerCase())) || '';
        state.mappings[f.id] = val;
      }
      const opts = headers.map(h => `<option value="${h}" ${h === val ? 'selected' : ''}>${h}</option>`).join('');
      html += `
        <div class="mapping-row-item">
          <div class="mapping-label-box">
            <i class="fa-solid ${f.icon}" style="color: var(--ischool-blue);"></i>
            <div>
              <span class="field-title">${f.label}</span>
            </div>
          </div>
          <select class="mapping-select" data-field="${f.id}">
            <option value="">-- Select Column --</option>
            ${opts}
          </select>
        </div>
      `;
    });
    mappingFieldsGrid.innerHTML = html;

    mappingFieldsGrid.querySelectorAll('.mapping-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        state.mappings[e.target.getAttribute('data-field')] = e.target.value;
        updateMatrixBreakdown();
      });
    });

    statusColumnSelect.innerHTML = headers.map(h => `<option value="${h}" ${h === state.mappings.status_col ? 'selected' : ''}>${h}</option>`).join('');
    reasonColumnSelect.innerHTML = headers.map(h => `<option value="${h}" ${h === state.mappings.reason_col ? 'selected' : ''}>${h}</option>`).join('');
  }

  function updateMatrixBreakdown() {
    const rows = state.activeDataset.sampleRows || [];
    const itemCol = state.mappings.tender_item_col || 'Tender Item';
    const levelCol = state.mappings.level_col || 'Level(25-26)';
    const statusCol = state.mappings.status_col || 'Activation Status';

    const activeTerms = (contCriteriaInput.value || '').split(',').map(s => s.trim().toLowerCase());
    const revokeTerms = (exclCriteriaInput.value || '').split(',').map(s => s.trim().toLowerCase());

    const matrix = {};
    let totalActive = 0, totalRevoke = 0;

    rows.forEach(r => {
      const item = r[itemCol] || 'Item 1';
      const level = r[levelCol] || 'Level 1';
      const status = String(r[statusCol] || '').trim().toLowerCase();
      const isActive = activeTerms.some(t => status.includes(t)) || (!revokeTerms.some(t => status.includes(t)));

      if (isActive) totalActive++; else totalRevoke++;
      const k = `${item} - ${level}`;
      if (!matrix[k]) matrix[k] = { active: 0, revoke: 0 };
      if (isActive) matrix[k].active++; else matrix[k].revoke++;
    });

    matrixTotalSummary.innerText = `Total: ${rows.length} Students (${totalActive} Active, ${totalRevoke} Revoked)`;

    let chipsHtml = '<div style="display:flex; flex-wrap:wrap; gap:0.6rem;">';
    Object.keys(matrix).forEach(k => {
      const e = matrix[k];
      chipsHtml += `
        <div style="background:#FFFFFF; border:1px solid #BFDBFE; border-radius:6px; padding:0.35rem 0.75rem; font-size:0.82rem; display:flex; align-items:center; gap:0.4rem;">
          <strong style="color:#0369A1;">${k}:</strong>
          <span style="background:#DCFCE7; color:#166534; padding:1px 6px; border-radius:4px; font-weight:700;">${e.active} Active</span>
          <span style="background:#FEE2E2; color:#991B1B; padding:1px 6px; border-radius:4px; font-weight:700;">${e.revoke} Revoked</span>
        </div>
      `;
    });
    chipsHtml += '</div>';
    matrixChipsContainer.innerHTML = chipsHtml;
  }

  // Render Step 3
  function renderDocumentMockup() {
    mockupDocTitle.innerText = customTitleBatch.value;
    const limit = parseInt(previewLimitSelect.value, 10) || 10;
    const rows = (state.activeDataset.sampleRows || []).slice(0, limit);

    const nameCol = state.mappings.student_name_col;
    const nidCol = state.mappings.nid_col;
    const govCol = state.mappings.gov_col;
    const gradeCol = state.mappings.grade_col;
    const levelCol = state.mappings.level_col;
    const statusCol = state.mappings.status_col;
    const reasonCol = state.mappings.reason_col;

    const activeTerms = (contCriteriaInput.value || '').split(',').map(s => s.trim().toLowerCase());
    const revokeTerms = (exclCriteriaInput.value || '').split(',').map(s => s.trim().toLowerCase());

    const activeList = [];
    const revokeList = [];

    rows.forEach(r => {
      const status = String(r[statusCol] || '').trim().toLowerCase();
      const isActive = activeTerms.some(t => status.includes(t)) || (!revokeTerms.some(t => status.includes(t)));
      if (isActive) activeList.push(r); else revokeList.push(r);
    });

    let docHtml = `
      <div style="margin-bottom: 1.5rem; padding-bottom: 0.8rem; border-bottom: 2px solid #0F172A;">
        <h4 style="font-size: 1.15rem; color: #0F172A; margin-bottom: 0.3rem; font-weight: 800;">
          ${customTitleBatch.value} — ${customTitleLevel.value} (${customTitleGrade.value})
        </h4>
        <p style="font-size: 0.88rem; color: #475569; margin: 0;">
          Total students continued after first period: ${state.activeDataset.rowsCount} students
        </p>
      </div>

      <!-- Active Students -->
      <div style="margin-bottom: 2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
          <h5 style="color:#166534; font-weight:800; font-size:0.95rem; margin:0;">
            Continuing Students List (${activeList.length} shown):
          </h5>
          <span style="font-size:0.8rem; color:#64748B;">Page ${startPageNumInput.value || 1}</span>
        </div>
        <table class="mockup-table">
          <thead>
            <tr>
              <th style="width: 40px;">#</th>
              <th>Student Name</th>
              <th>National ID</th>
              <th>Governorate</th>
              <th>Grade</th>
              <th>Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${activeList.map((r, i) => `
              <tr>
                <td><strong>${i + 1}</strong></td>
                <td style="font-weight:700;">${r[nameCol] || '-'}</td>
                <td style="font-family:monospace;">${r[nidCol] || '-'}</td>
                <td>${r[govCol] || '-'}</td>
                <td>${r[gradeCol] || customTitleGrade.value}</td>
                <td>${r[levelCol] || customTitleLevel.value}</td>
                <td><span class="mockup-badge-active">Active</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Revoked Students -->
      <div>
        <h5 style="color:#991B1B; font-weight:800; font-size:0.95rem; margin-bottom:0.6rem;">
          Excluded / Revoked Students List (${revokeList.length} shown):
        </h5>
        <table class="mockup-table">
          <thead>
            <tr>
              <th style="width: 40px;">#</th>
              <th>Student Name</th>
              <th>National ID</th>
              <th>Governorate</th>
              <th>Reason / Notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${revokeList.length === 0 ? '<tr><td colspan="6" style="color:#64748B;">No revoked students in this preview sample</td></tr>' : ''}
            ${revokeList.map((r, i) => `
              <tr>
                <td><strong>${i + 1}</strong></td>
                <td style="font-weight:700;">${r[nameCol] || '-'}</td>
                <td style="font-family:monospace;">${r[nidCol] || '-'}</td>
                <td>${r[govCol] || '-'}</td>
                <td style="color:#B91C1C;">${r[reasonCol] || 'Exceeded allowable absences'}</td>
                <td><span class="mockup-badge-revoke">Revoked</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    mockupDynamicContent.innerHTML = docHtml;
  }

  // Step 4 Simulation
  function startSimulation() {
    setStep(4);
    progressRunningCard.style.display = 'block';
    generationSuccessBanner.style.display = 'none';

    const total = state.activeDataset.rowsCount || 11;
    let curr = 0;
    const start = Date.now();
    const skins = ['./img/ibot skins-01.png', './img/ibot skins-02.png', './img/ibot skins-06.png'];
    let idx = 0;

    const timer = setInterval(() => {
      curr += Math.max(1, Math.floor(total / 20));
      if (curr >= total) {
        curr = total;
        clearInterval(timer);
        setTimeout(() => {
          progressRunningCard.style.display = 'none';
          generationSuccessBanner.style.display = 'block';
          if (mascotImg) mascotImg.src = './img/ibot skins-05.png';
          showToast('Report generated successfully!');
        }, 400);
      }
      const pct = Math.min(100, Math.floor((curr / total) * 100));
      progressBarFill.style.width = `${pct}%`;
      metricPercent.innerText = `${pct}%`;
      metricProcessed.innerText = `${curr} / ${total}`;
      const sec = (Date.now() - start) / 1000;
      const speed = sec > 0 ? Math.floor(curr / sec) : 340;
      metricSpeed.innerText = `${speed} rows/sec`;
      metricRemaining.innerText = `${speed > 0 ? Math.max(0, Math.ceil((total - curr) / speed)) : 0}s`;

      idx = (idx + 1) % skins.length;
      if (mascotImg) mascotImg.src = skins[idx];
    }, 110);
  }

  // Listeners
  btnGoToStep2.addEventListener('click', () => setStep(2));
  btnBackToStep1.addEventListener('click', () => setStep(1));
  btnGoToStep3.addEventListener('click', () => setStep(3));
  btnBackToStep2.addEventListener('click', () => setStep(2));
  btnStartGeneration.addEventListener('click', startSimulation);

  btnAutoRemap.addEventListener('click', () => {
    state.mappings = {};
    renderMappingControls();
    updateMatrixBreakdown();
    showToast('Columns auto-remapped successfully!');
  });

  btnRestartWizard.addEventListener('click', () => {
    setStep(1);
    progressBarFill.style.width = '0%';
  });

  btnDownloadPDF.addEventListener('click', () => {
    setStep(3);
    window.print();
  });

  previewLimitSelect.addEventListener('change', renderDocumentMockup);

  renderMappingControls();
  updateMatrixBreakdown();
});
