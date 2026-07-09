/**
 * Mary's Link - Case Management & EHR Logic Engine
 * Custom-built for The House of Mary Corporation, East St. Louis, IL
 */

// --- Default Data Seeds ---
const DEFAULT_CLIENTS = [
    {
        id: "CM-2061",
        firstName: "Jane",
        lastName: "Doe",
        dob: "1992-04-12",
        phone: "+1 (618) 555-0199",
        email: "jane.doe@example.com",
        emergencyName: "John Doe (Spouse)",
        emergencyPhone: "+1 (618) 555-9988",
        poName: "Officer Robert Miller",
        poPhone: "+1 (618) 555-4040",
        releaseDate: "2026-06-15",
        charges: "Parole alignment for minor drug possession. Weekly PO visits required.",
        riskLevel: "Medium",
        housingStatus: "housed",
        bedId: "101-A",
        consent: true,
        admittedDate: "2026-06-16",
        medications: [
            { id: 1, name: "Sertraline", dosage: "50mg", frequency: "Once daily (Morning)", prescriber: "Dr. Sarah Johnson, MD", purpose: "Anxiety & Mood support", dateLogged: "2026-06-17" }
        ],
        screenings: [
            { id: 1, tool: "PHQ-9 Depression Screener", date: "2026-06-16", score: 8, severity: "Mild Depression", assessor: "Natasha Patterson, LCSW" },
            { id: 2, tool: "DAST-10 Drug Abuse Screener", date: "2026-06-16", score: 3, severity: "Moderate Substance Risk", assessor: "Natasha Patterson, LCSW" }
        ],
        notes: [
            { id: 1, text: "Client settled in well. Attended the initial reentry orientation. Bed 101-A is clean and suitable.", providerName: "Natasha Patterson", providerRole: "Founder & CEO", date: "2026-06-16 16:30", locked: true }
        ],
        referrals: [
            { id: 1, type: "Substance Abuse Recovery", agency: "East St. Louis Counseling Services", notes: "Weekly group sessions starting Thursday.", status: "In Progress", date: "2026-06-18" }
        ]
    },
    {
        id: "CM-2062",
        firstName: "Michelle",
        lastName: "Patterson",
        dob: "1988-11-23",
        phone: "+1 (618) 555-0112",
        email: "michelle.p@example.com",
        emergencyName: "Alice Patterson (Mother)",
        emergencyPhone: "+1 (618) 555-8822",
        poName: "Officer Robert Miller",
        poPhone: "+1 (618) 555-4040",
        releaseDate: "2026-05-10",
        charges: "Reentry transitions following grand larceny probation completion.",
        riskLevel: "Low",
        housingStatus: "housed",
        bedId: "101-C",
        consent: true,
        admittedDate: "2026-05-12",
        medications: [],
        screenings: [
            { id: 1, tool: "PHQ-9 Depression Screener", date: "2026-05-12", score: 3, severity: "Minimal Depression", assessor: "Natasha Patterson, LCSW" }
        ],
        notes: [
            { id: 1, text: "Completed Job placement seminar. Applying for local logistics operator jobs.", providerName: "Natasha Patterson", providerRole: "Founder & CEO", date: "2026-06-20 11:00", locked: true }
        ],
        referrals: [
            { id: 1, type: "Job Training & Employment", agency: "Illinois Reentry Jobs Coalition", notes: "Resume support and vocational class mapping.", status: "Completed", date: "2026-05-15" }
        ]
    },
    {
        id: "CM-2063",
        firstName: "Tasha",
        lastName: "Smith",
        dob: "1995-08-04",
        phone: "+1 (618) 555-0144",
        email: "t.smith95@example.com",
        emergencyName: "Clara Smith (Sister)",
        emergencyPhone: "+1 (618) 555-0155",
        poName: "Officer Evelyn Harris",
        poPhone: "+1 (618) 555-3030",
        releaseDate: "2026-07-01",
        charges: "Felony retail theft. Released on early transitional program.",
        riskLevel: "High",
        housingStatus: "unhoused",
        bedId: null,
        consent: true,
        admittedDate: "2026-07-02",
        medications: [
            { id: 1, name: "Fluoxetine", dosage: "20mg", frequency: "Once daily (Morning)", prescriber: "Dr. Sarah Johnson, MD", purpose: "PTSD Support", dateLogged: "2026-07-03" }
        ],
        screenings: [
            { id: 1, tool: "PHQ-9 Depression Screener", date: "2026-07-02", score: 17, severity: "Moderately Severe Depression", assessor: "Natasha Patterson, LCSW" },
            { id: 2, tool: "DAST-10 Drug Abuse Screener", date: "2026-07-02", score: 7, severity: "Substantial Substance Risk", assessor: "Natasha Patterson, LCSW" }
        ],
        notes: [
            { id: 1, text: "Client expressing high anxiety. Strongly recommend transitional housing check-in as soon as a bed opens.", providerName: "Natasha Patterson", providerRole: "Founder & CEO", date: "2026-07-03 09:15", locked: true }
        ],
        referrals: [
            { id: 1, type: "Mental Health Care", agency: "Mary's Wellness Group", notes: "Trauma-informed cognitive behavioral therapy intake scheduled.", status: "Pending", date: "2026-07-04" }
        ]
    }
];

const DEFAULT_BEDS = [
    { id: "101-A", room: "Room 101", label: "Bed A", occupiedBy: "CM-2061" },
    { id: "101-B", room: "Room 101", label: "Bed B", occupiedBy: null },
    { id: "101-C", room: "Room 101", label: "Bed C", occupiedBy: "CM-2062" },
    { id: "101-D", room: "Room 101", label: "Bed D", occupiedBy: null },
    
    { id: "102-A", room: "Room 102", label: "Bed A", occupiedBy: null },
    { id: "102-B", room: "Room 102", label: "Bed B", occupiedBy: null },
    { id: "102-C", room: "Room 102", label: "Bed C", occupiedBy: null },
    { id: "102-D", room: "Room 102", label: "Bed D", occupiedBy: null },
    
    { id: "103-A", room: "Room 103", label: "Bed A", occupiedBy: null },
    { id: "103-B", room: "Room 103", label: "Bed B", occupiedBy: null },
    { id: "103-C", room: "Room 103", label: "Bed C", occupiedBy: null },
    { id: "103-D", room: "Room 103", label: "Bed D", occupiedBy: null },
    
    { id: "104-A", room: "Room 104", label: "Bed A", occupiedBy: null },
    { id: "104-B", room: "Room 104", label: "Bed B", occupiedBy: null },
    { id: "104-C", room: "Room 104", label: "Bed C", occupiedBy: null },
    { id: "104-D", room: "Room 104", label: "Bed D", occupiedBy: null }
];

const DEFAULT_LOGS = [
    { id: 1, type: "system", text: "Database initial seeds loaded.", time: "2 hours ago" },
    { id: 2, type: "intake", text: "Jane Doe intake successfully registered.", time: "1 hour ago" },
    { id: 3, type: "housing", text: "Jane Doe check-in completed to Room 101 - Bed A.", time: "1 hour ago" }
];

const DEFAULT_FORMS = [
    {
        id: "form-default-intake",
        name: "Custom Housing Assessment",
        fields: [
            { type: "text", label: "Prior Housing History", placeholder: "List former shelters, streets, or rentals" },
            { type: "dropdown", label: "Frequency of Homelessness Episodes", options: ["First Time", "2-3 Times", "Chronic (4+ Times)"] },
            { type: "textarea", label: "Supportive Goals Required", placeholder: "Detail what goals the client wishes to focus on first" },
            { type: "checkbox", label: "Requires Medical Accommodations", checked: false }
        ]
    }
];

const PHQ9_QUESTIONS = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead or of hurting yourself in some way"
];

const DAST10_QUESTIONS = [
    "Have you used drugs other than those required for medical reasons?",
    "Do you abuse more than one drug at a time?",
    "Are you always able to stop using drugs when you want to?", // Standard DAST: No = 1 point. We will display the questions and calculate points logically.
    "Have you had blackouts or flashbacks as a result of drug use?",
    "Do you ever feel bad or guilty about your drug use?",
    "Does your spouse (or parents) ever complain about your involvement with drugs?",
    "Have you neglected your family because of your use of drugs?",
    "Have you engaged in illegal activities in order to obtain drugs?",
    "Have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs?",
    "Have you had medical problems as a result of your drug use (e.g. memory loss, hepatitis, convulsions, bleeding)?"
];

// --- State Class Definition ---
class AppState {
    constructor() {
        this.loadState();
    }

    loadState() {
        this.clients = JSON.parse(localStorage.getItem("hl_clients")) || DEFAULT_CLIENTS;
        this.beds = JSON.parse(localStorage.getItem("hl_beds")) || DEFAULT_BEDS;
        this.logs = JSON.parse(localStorage.getItem("hl_logs")) || DEFAULT_LOGS;
        this.forms = JSON.parse(localStorage.getItem("hl_custom_forms")) || DEFAULT_FORMS;
        this.formSubmissions = JSON.parse(localStorage.getItem("hl_form_submissions")) || [];
        this.theme = localStorage.getItem("hl_theme") || "light";
    }

    saveState() {
        localStorage.setItem("hl_clients", JSON.stringify(this.clients));
        localStorage.setItem("hl_beds", JSON.stringify(this.beds));
        localStorage.setItem("hl_logs", JSON.stringify(this.logs));
        localStorage.setItem("hl_custom_forms", JSON.stringify(this.forms));
        localStorage.setItem("hl_form_submissions", JSON.stringify(this.formSubmissions));
        localStorage.setItem("hl_theme", this.theme);
    }

    resetState() {
        localStorage.clear();
        this.loadState();
        this.saveState();
    }

    addClient(client) {
        this.clients.push(client);
        this.addLog("intake", `${client.firstName} ${client.lastName} intake completed successfully.`);
        this.saveState();
    }

    addLog(type, text) {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ", Today";
        this.logs.unshift({ id: Date.now(), type, text, time: timestamp });
        if (this.logs.length > 25) this.logs.pop();
        this.saveState();
    }
}

// Instantiate state globally
const state = new AppState();

// --- View Router & Controller ---
document.addEventListener("DOMContentLoaded", () => {
    // Initialise Lucide icons
    lucide.createIcons();
    
    // Initialize Theme
    document.documentElement.setAttribute("data-theme", state.theme);
    updateThemeUI();

    // Event Listeners initialization
    initRouting();
    initThemeToggler();
    initModals();
    initSearch();
    initIntakeWizard();
    initBedManager();
    initClinicalSuite();
    initReferrals();
    initFormBuilder();
    initSettings();
    
    // Initial Render of Dashboards
    renderDashboard();
    renderClientRegistry();
    
    // Handle Quick Header Button Intake trigger
    document.getElementById("header-intake-btn").addEventListener("click", () => {
        switchView("intake-view");
    });
    
    // Clear logs button
    document.getElementById("clear-logs-btn").addEventListener("click", () => {
        state.logs = [];
        state.saveState();
        renderDashboard();
    });
});

// Switch screen views helper
function switchView(targetViewId) {
    document.querySelectorAll(".view-section").forEach(view => {
        view.classList.remove("active");
    });
    const activeView = document.getElementById(targetViewId);
    if (activeView) activeView.classList.add("active");
    
    // Update active sidebar nav button
    document.querySelectorAll(".nav-btn").forEach(btn => {
        if (btn.getAttribute("data-target") === targetViewId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update headers text dynamically
    const headerTitle = document.getElementById("view-title");
    const headerSubtitle = document.getElementById("view-subtitle");
    
    switch (targetViewId) {
        case "dashboard-view":
            headerTitle.textContent = "Dashboard";
            headerSubtitle.textContent = "Real-time program metrics and active client activities.";
            renderDashboard();
            break;
        case "clients-view":
            headerTitle.textContent = "Client Registry";
            headerSubtitle.textContent = "Directory of active, transitional, and graduated program clients.";
            renderClientRegistry();
            break;
        case "intake-view":
            headerTitle.textContent = "Intake Wizard";
            headerSubtitle.textContent = "Log a new reentry client demographics, PO parameters, and initial screenings.";
            resetIntakeWizard();
            break;
        case "housing-view":
            headerTitle.textContent = "Bed Registry Map";
            headerSubtitle.textContent = "Mary's Haven transitional housing bed spaces assignment layout.";
            renderBedLayout();
            break;
        case "clinical-view":
            headerTitle.textContent = "Clinical EHR Suite";
            headerSubtitle.textContent = "Electronic Health Record charting, medical logs, and mental screenings.";
            renderClinicalSuite();
            break;
        case "referrals-view":
            headerTitle.textContent = "Referrals & Services";
            headerSubtitle.textContent = "Track external healthcare, housing placements, and employment referrals.";
            renderReferrals();
            break;
        case "form-builder-view":
            headerTitle.textContent = "Apricot Custom Form Builder";
            headerSubtitle.textContent = "Design templates, add customizable fields, and run intake simulations.";
            renderFormBuilder();
            break;
        case "settings-view":
            headerTitle.textContent = "Settings Panel";
            headerSubtitle.textContent = "Manage database cache, theme, and system organization parameters.";
            break;
    }
}

function initRouting() {
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target");
            switchView(target);
        });
    });

    // Link triggers from other buttons in templates
    document.querySelectorAll("[data-trigger-target]").forEach(element => {
        element.addEventListener("click", () => {
            const target = element.getAttribute("data-trigger-target");
            switchView(target);
        });
    });
}

// --- Theme Controllers ---
function initThemeToggler() {
    const btn = document.getElementById("theme-toggle");
    btn.addEventListener("click", () => {
        state.theme = state.theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", state.theme);
        state.saveState();
        updateThemeUI();
    });
}

function updateThemeUI() {
    const darkIcon = document.querySelector(".theme-icon-dark");
    const lightIcon = document.querySelector(".theme-icon-light");
    if (state.theme === "light") {
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
    } else {
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
    }
}

// --- Dashboard Render Methods ---
function renderDashboard() {
    // 1. Metric widgets
    const activeCount = state.clients.filter(c => c.housingStatus !== "discharged").length;
    const occupiedCount = state.beds.filter(b => b.occupiedBy !== null).length;
    const pendingReferralsCount = state.clients.reduce((acc, c) => acc + (c.referrals ? c.referrals.filter(r => r.status === "Pending").length : 0), 0);
    
    document.getElementById("metric-active-clients").textContent = activeCount;
    document.getElementById("metric-bed-occupancy").textContent = `${occupiedCount}/16`;
    document.getElementById("metric-pending-referrals").textContent = pendingReferralsCount;

    const occupancyRate = ((occupiedCount / 16) * 100).toFixed(0);
    document.getElementById("occupancy-percentage").textContent = `${occupancyRate}%`;
    document.getElementById("occupancy-progress").style.width = `${occupancyRate}%`;

    // Change trend display depending on count
    const refTrend = document.getElementById("metric-referrals-trend");
    if (pendingReferralsCount > 0) {
        refTrend.innerHTML = `<i data-lucide="clock"></i> ${pendingReferralsCount} Action Required`;
        refTrend.className = "metric-trend trend-down";
    } else {
        refTrend.innerHTML = `<i data-lucide="check"></i> Caseload Clear`;
        refTrend.className = "metric-trend trend-up";
    }
    
    // 2. Render SVG Line Chart (Reentry Placements Trends)
    renderSVGChart();

    // 3. System activity log feed
    const activityFeed = document.getElementById("dashboard-activity-feed");
    if (state.logs.length === 0) {
        activityFeed.innerHTML = `<p class="text-secondary text-sm text-center py-4">No recent activity logs.</p>`;
    } else {
        activityFeed.innerHTML = state.logs.map(log => {
            let icon = "info";
            let colorClass = "bg-indigo";
            if (log.type === "intake") { icon = "user-plus"; colorClass = "trend-up"; }
            if (log.type === "housing") { icon = "home"; colorClass = "trend-down"; }
            if (log.type === "clinical") { icon = "clipboard-list"; colorClass = "icon-bg-indigo"; }
            if (log.type === "referral") { icon = "git-pull-request"; colorClass = "icon-bg-amber"; }
            
            return `
                <div class="activity-item">
                    <div class="activity-icon-bullet ${colorClass}">
                        <i data-lucide="${icon}"></i>
                    </div>
                    <div class="activity-text">
                        <p class="font-normal text-sm">${log.text}</p>
                        <span class="activity-meta">${log.time}</span>
                    </div>
                </div>
            `;
        }).join("");
    }

    // 4. Quick Action list table
    const quickTable = document.getElementById("dashboard-quick-table");
    const activeClientsList = state.clients.filter(c => c.housingStatus !== "discharged").slice(0, 4);
    
    if (activeClientsList.length === 0) {
        quickTable.innerHTML = `<tr><td colspan="6" class="text-center">No active clients in registry yet. Use "New Intake" to add one.</td></tr>`;
    } else {
        quickTable.innerHTML = activeClientsList.map(c => {
            let riskBadge = `<span class="badge badge-risk-low">Low</span>`;
            if (c.riskLevel === "Medium") riskBadge = `<span class="badge badge-risk-medium">Medium</span>`;
            if (c.riskLevel === "High") riskBadge = `<span class="badge badge-risk-high">High</span>`;

            const bedLoc = c.bedId ? `Room ${c.bedId.split("-")[0]} - Bed ${c.bedId.split("-")[1]}` : `<span class="text-muted text-xs">Unassigned</span>`;
            const ehrStatus = c.screenings && c.screenings.length > 0 
                ? `<span class="badge badge-risk-low text-xs"><i data-lucide="check" class="mr-2"></i> Assessed</span>` 
                : `<span class="badge badge-risk-high text-xs">Pending EHR</span>`;

            return `
                <tr>
                    <td><strong>${c.firstName} ${c.lastName}</strong></td>
                    <td>${bedLoc}</td>
                    <td>${riskBadge}</td>
                    <td>${ehrStatus}</td>
                    <td>${c.poName || "N/A"}</td>
                    <td>
                        <button class="text-btn text-sm" onclick="showClientDetail('${c.id}')">Open Profile</button>
                    </td>
                </tr>
            `;
        }).join("");
    }
    lucide.createIcons();
}

function renderSVGChart() {
    const container = document.getElementById("dashboard-chart-container");
    if (!container) return;
    
    // Sample monthly dataset (Past 6 months placements vs admissions)
    // Jan, Feb, Mar, Apr, May, Jun
    const dataPlacements = [3, 5, 8, 12, 14, 18];
    const dataAdmissions = [5, 6, 9, 14, 15, 20];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    
    const width = container.clientWidth || 500;
    const height = 280;
    const padding = 45;
    
    const maxVal = 24;
    
    // Calculate coordinates helper
    const getX = (index) => padding + (index * (width - 2 * padding) / (months.length - 1));
    const getY = (val) => height - padding - (val * (height - 2 * padding) / maxVal);
    
    // Build grids
    let svgContent = `
        <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="overflow: visible;">
            <defs>
                <!-- Gradients for Area Shading -->
                <linearGradient id="area-grad-placements" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--secondary)" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="var(--secondary)" stop-opacity="0.00" />
                </linearGradient>
                <linearGradient id="area-grad-admissions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.00" />
                </linearGradient>
                
                <!-- Glowing Filter -->
                <filter id="glow-indigo" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="var(--primary)" flood-opacity="0.3" />
                </filter>
                <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="var(--secondary)" flood-opacity="0.3" />
                </filter>
            </defs>
            <!-- Gridlines -->
    `;
    
    for (let i = 0; i <= 4; i++) {
        const val = i * 6;
        const y = getY(val);
        svgContent += `
            <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="var(--border-color)" stroke-dasharray="4" stroke-width="1"/>
            <text x="${padding - 12}" y="${y + 4}" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="end">${val}</text>
        `;
    }
    
    // X Axis Labels
    months.forEach((m, idx) => {
        const x = getX(idx);
        svgContent += `
            <text x="${x}" y="${height - padding + 22}" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">${m}</text>
        `;
    });

    // Generate Path lines
    let pathPlacements = "";
    let areaPlacements = "";
    let pathAdmissions = "";
    let areaAdmissions = "";
    
    dataPlacements.forEach((val, idx) => {
        const x = getX(idx);
        const y = getY(val);
        if (idx === 0) {
            pathPlacements += `M ${x} ${y}`;
            areaPlacements += `M ${x} ${height - padding} L ${x} ${y}`;
        } else {
            pathPlacements += ` L ${x} ${y}`;
            areaPlacements += ` L ${x} ${y}`;
        }
        if (idx === dataPlacements.length - 1) {
            areaPlacements += ` L ${x} ${height - padding} Z`;
        }
    });
    
    dataAdmissions.forEach((val, idx) => {
        const x = getX(idx);
        const y = getY(val);
        if (idx === 0) {
            pathAdmissions += `M ${x} ${y}`;
            areaAdmissions += `M ${x} ${height - padding} L ${x} ${y}`;
        } else {
            pathAdmissions += ` L ${x} ${y}`;
            areaAdmissions += ` L ${x} ${y}`;
        }
        if (idx === dataAdmissions.length - 1) {
            areaAdmissions += ` L ${x} ${height - padding} Z`;
        }
    });

    // Draw Shaded Areas
    svgContent += `
        <path d="${areaPlacements}" fill="url(#area-grad-placements)" />
        <path d="${areaAdmissions}" fill="url(#area-grad-admissions)" />
    `;

    // Draw Placement line (Teal Accent)
    svgContent += `
        <path d="${pathPlacements}" fill="none" stroke="var(--secondary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow-teal)"/>
    `;
    
    // Draw Admission line (Indigo Accent)
    svgContent += `
        <path d="${pathAdmissions}" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow-indigo)"/>
    `;
    
    // Draw Dots
    dataPlacements.forEach((val, idx) => {
        const x = getX(idx);
        const y = getY(val);
        svgContent += `
            <circle cx="${x}" cy="${y}" r="5" fill="var(--bg-surface)" stroke="var(--secondary)" stroke-width="2.5" class="chart-dot" style="cursor: pointer; transition: r 0.2s ease;" />
        `;
    });
    
    dataAdmissions.forEach((val, idx) => {
        const x = getX(idx);
        const y = getY(val);
        svgContent += `
            <circle cx="${x}" cy="${y}" r="5" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="2.5" class="chart-dot" style="cursor: pointer; transition: r 0.2s ease;" />
        `;
    });

    svgContent += `</svg>`;
    container.innerHTML = svgContent;
}

// --- Client Registry Table ---
function renderClientRegistry() {
    const tableBody = document.getElementById("registry-table-body");
    const searchVal = document.getElementById("filter-search").value.toLowerCase();
    const housingVal = document.getElementById("filter-housing").value;
    const riskVal = document.getElementById("filter-risk").value;
    
    // Filter logic
    const filtered = state.clients.filter(c => {
        if (c.housingStatus === "discharged") return false;
        
        const fullName = `${c.firstName} ${c.lastName}`.toLowerCase();
        const matchesSearch = fullName.includes(searchVal) || c.id.toLowerCase().includes(searchVal);
        
        let matchesHousing = true;
        if (housingVal === "housed") matchesHousing = c.bedId !== null;
        if (housingVal === "unhoused") matchesHousing = c.bedId === null;
        
        let matchesRisk = true;
        if (riskVal !== "all") matchesRisk = c.riskLevel === riskVal;
        
        return matchesSearch && matchesHousing && matchesRisk;
    });

    // Populate registry table
    document.getElementById("table-entries-count").textContent = `Showing ${filtered.length} of ${state.clients.filter(c => c.housingStatus !== "discharged").length} active clients`;
    
    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-secondary">No clients found matching current filter query parameters.</td></tr>`;
        return;
    }

    tableBody.innerHTML = filtered.map(c => {
        let riskBadge = `<span class="badge badge-risk-low">Low Risk</span>`;
        if (c.riskLevel === "Medium") riskBadge = `<span class="badge badge-risk-medium">Medium Risk</span>`;
        if (c.riskLevel === "High") riskBadge = `<span class="badge badge-risk-high">High Risk</span>`;

        const bedLoc = c.bedId 
            ? `<span class="badge badge-housed"><i data-lucide="home" class="mr-2"></i> Rm ${c.bedId.split("-")[0]} - Bed ${c.bedId.split("-")[1]}</span>` 
            : `<span class="badge badge-unhoused">Pending Bed</span>`;

        const ehrComplete = c.screenings && c.screenings.length >= 2 
            ? `<span class="badge badge-risk-low"><i data-lucide="check" class="mr-2"></i> Comprehensive</span>`
            : c.screenings && c.screenings.length > 0 
                ? `<span class="badge badge-risk-medium"><i data-lucide="clock" class="mr-2"></i> Partial</span>` 
                : `<span class="badge badge-risk-high">Needs Intake Screening</span>`;

        return `
            <tr>
                <td><strong>${c.id}</strong></td>
                <td><strong>${c.firstName} ${c.lastName}</strong></td>
                <td>${c.admittedDate || "N/A"}</td>
                <td>${riskBadge}</td>
                <td>${bedLoc}</td>
                <td>${ehrComplete}</td>
                <td class="text-right">
                    <div class="actions-cell">
                        <button class="btn btn-secondary text-sm" onclick="showClientDetail('${c.id}')">
                            <i data-lucide="user"></i>
                            <span>View Profile</span>
                        </button>
                        <button class="btn btn-primary text-sm" onclick="openEhrChart('${c.id}')">
                            <i data-lucide="clipboard-list"></i>
                            <span>EHR Chart</span>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
    lucide.createIcons();
}

function initSearch() {
    const inputSearch = document.getElementById("filter-search");
    const inputHousing = document.getElementById("filter-housing");
    const inputRisk = document.getElementById("filter-risk");
    const btnReset = document.getElementById("reset-filters-btn");
    
    const triggerSearch = () => renderClientRegistry();
    
    inputSearch.addEventListener("keyup", triggerSearch);
    inputHousing.addEventListener("change", triggerSearch);
    inputRisk.addEventListener("change", triggerSearch);
    
    btnReset.addEventListener("click", () => {
        inputSearch.value = "";
        inputHousing.value = "all";
        inputRisk.value = "all";
        triggerSearch();
    });

    // Global Top Search box redirect
    const globalSearch = document.getElementById("global-search");
    globalSearch.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            switchView("clients-view");
            inputSearch.value = globalSearch.value;
            renderClientRegistry();
            globalSearch.value = "";
        }
    });
}

// --- Intake Form Wizard ---
let currentWizardStep = 1;

function resetIntakeWizard() {
    currentWizardStep = 1;
    updateWizardStepUI();
    document.getElementById("intake-wizard-form").reset();
}

function initIntakeWizard() {
    const nextBtns = document.querySelectorAll(".next-step-btn");
    const prevBtns = document.querySelectorAll(".prev-step-btn");
    
    nextBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Basic check validity of current step pane
            const currentPane = document.querySelector(`.wizard-pane[data-step-pane="${currentWizardStep}"]`);
            const inputs = currentPane.querySelectorAll("input[required], select[required]");
            
            let allValid = true;
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    allValid = false;
                }
            });
            
            if (allValid) {
                currentWizardStep++;
                updateWizardStepUI();
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            currentWizardStep--;
            updateWizardStepUI();
        });
    });

    // Form submission complete
    const wizardForm = document.getElementById("intake-wizard-form");
    wizardForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const fName = document.getElementById("intake-firstname").value;
        const lName = document.getElementById("intake-lastname").value;
        const dob = document.getElementById("intake-dob").value;
        const phone = document.getElementById("intake-phone").value;
        const email = document.getElementById("intake-email").value;
        const emName = document.getElementById("intake-emergency-name").value;
        const emPhone = document.getElementById("intake-emergency-phone").value;
        
        const poName = document.getElementById("intake-po-name").value;
        const poPhone = document.getElementById("intake-po-phone").value;
        const releaseDate = document.getElementById("intake-release-date").value;
        const charges = document.getElementById("intake-charges").value;
        const riskLevel = document.getElementById("intake-risk").value;
        
        const meds = document.getElementById("intake-meds").value;
        const conditions = document.getElementById("intake-conditions").value;
        const substance = document.getElementById("intake-substance").value;
        const housingVal = document.getElementById("intake-housing-status").value;

        // Generate client record
        const nextId = "CM-" + (2060 + state.clients.length + 1);
        const newClient = {
            id: nextId,
            firstName: fName,
            lastName: lName,
            dob: dob,
            phone: phone || "Not Provided",
            email: email || "Not Provided",
            emergencyName: emName || "Not Provided",
            emergencyPhone: emPhone || "Not Provided",
            poName: poName || "Not Provided",
            poPhone: poPhone || "Not Provided",
            releaseDate: releaseDate,
            charges: charges || "No charges summaries available.",
            riskLevel: riskLevel,
            housingStatus: "unhoused",
            bedId: null,
            consent: true,
            admittedDate: new Date().toISOString().split("T")[0],
            medications: [],
            screenings: [],
            notes: [],
            referrals: []
        };

        // If meds entered, add it
        if (meds) {
            newClient.medications.push({
                id: 1,
                name: meds.split(" ")[0] || meds,
                dosage: meds.split(" ")[1] || "Prescribed dosage",
                frequency: "As directed",
                prescriber: "Intake Assessed Doctor",
                purpose: conditions || "Reentry support",
                dateLogged: newClient.admittedDate
            });
        }
        
        // If notes / history added
        if (substance || conditions) {
            newClient.notes.push({
                id: 1,
                text: `Initial intake diagnostics. Conditions list: ${conditions || "None declared"}. Substance involvement notes: ${substance || "None declared"}.`,
                providerName: "Natasha Patterson",
                providerRole: "Founder & CEO",
                date: new Date().toISOString().replace("T", " ").slice(0, 16),
                locked: true
            });
        }

        // Add client record
        state.addClient(newClient);
        
        // Route according to housing demand
        if (housingVal === "housed") {
            switchView("housing-view");
        } else {
            switchView("clients-view");
        }
        
        resetIntakeWizard();
    });
}

function updateWizardStepUI() {
    // Pane display
    document.querySelectorAll(".wizard-pane").forEach(pane => {
        pane.classList.remove("active");
    });
    document.querySelector(`.wizard-pane[data-step-pane="${currentWizardStep}"]`).classList.add("active");
    
    // Steps markers
    document.querySelectorAll(".wizard-step").forEach(step => {
        const stepNum = parseInt(step.getAttribute("data-target") || step.getAttribute("data-step"));
        step.classList.remove("active", "completed");
        if (stepNum === currentWizardStep) {
            step.classList.add("active");
        } else if (stepNum < currentWizardStep) {
            step.classList.add("completed");
        }
    });
}

// --- Bed Manager ---
function initBedManager() {
    const assignForm = document.getElementById("bed-assignment-form");
    assignForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const clientId = document.getElementById("bed-modal-client-select").value;
        const roomId = document.getElementById("bed-modal-room-id").value;
        const bedId = document.getElementById("bed-modal-bed-id").value;
        
        const fullBedKey = `${roomId}-${bedId}`;
        
        // Update Bed Database
        const bedIndex = state.beds.findIndex(b => b.id === fullBedKey);
        if (bedIndex !== -1) {
            state.beds[bedIndex].occupiedBy = clientId;
        }
        
        // Update Client Database
        const clientIndex = state.clients.findIndex(c => c.id === clientId);
        if (clientIndex !== -1) {
            state.clients[clientIndex].bedId = fullBedKey;
            state.clients[clientIndex].housingStatus = "housed";
            state.addLog("housing", `${state.clients[clientIndex].firstName} ${state.clients[clientIndex].lastName} check-in completed to Room ${roomId} - Bed ${bedId}.`);
        }
        
        state.saveState();
        closeModal("bed-assign-modal");
        renderBedLayout();
    });
}

function renderBedLayout() {
    const gridContainer = document.getElementById("rooms-grid-container");
    if (!gridContainer) return;
    
    // Group beds by room
    const rooms = ["101", "102", "103", "104"];
    
    gridContainer.innerHTML = rooms.map(roomNum => {
        const roomBeds = state.beds.filter(b => b.room === `Room ${roomNum}`);
        const occupiedCount = roomBeds.filter(b => b.occupiedBy !== null).length;
        
        const bedSlotsHTML = roomBeds.map(bed => {
            if (bed.occupiedBy === null) {
                return `
                    <div class="bed-slot vacant" onclick="openAssignBedModal('${roomNum}', '${bed.label.replace('Bed ', '')}')">
                        <div class="bed-info-left">
                            <span class="bed-slot-label">${bed.label}</span>
                            <span class="bed-status-text">Available</span>
                        </div>
                        <i data-lucide="plus" class="text-teal" style="width:16px;height:16px;"></i>
                    </div>
                `;
            } else {
                const client = state.clients.find(c => c.id === bed.occupiedBy);
                const initials = client ? `${client.firstName[0]}${client.lastName[0]}` : "??";
                const clientName = client ? `${client.firstName} ${client.lastName}` : "Unknown Occupant";
                
                return `
                    <div class="bed-slot occupied">
                        <div class="bed-info-left">
                            <div class="bed-avatar-mini">${initials}</div>
                            <div>
                                <span class="bed-occupant-name block">${clientName}</span>
                                <span class="bed-slot-label block text-xs">${bed.label}</span>
                            </div>
                        </div>
                        <button class="btn btn-secondary text-xs" style="padding: 4px 8px;" onclick="checkoutClient('${bed.id}')">
                            Checkout
                        </button>
                    </div>
                `;
            }
        }).join("");
        
        return `
            <div class="room-card">
                <div class="room-header">
                    <h3 class="room-title">Room ${roomNum}</h3>
                    <span class="badge badge-risk-medium text-xs">${occupiedCount}/4 Occupied</span>
                </div>
                <div class="bed-slots-list">
                    ${bedSlotsHTML}
                </div>
            </div>
        `;
    }).join("");
    
    // Update housing statistics counters
    const occupiedTotal = state.beds.filter(b => b.occupiedBy !== null).length;
    const vacantTotal = 16 - occupiedTotal;
    const rate = ((occupiedTotal / 16) * 100).toFixed(0);
    
    document.getElementById("housing-occupancy-ratio").textContent = `${occupiedTotal}/16 Beds Occupied`;
    document.getElementById("housing-occupancy-percent").textContent = `${rate}%`;
    document.getElementById("housing-beds-available").textContent = `${vacantTotal} Beds Vacant`;
    
    lucide.createIcons();
}

function openAssignBedModal(room, bedLabel) {
    document.getElementById("bed-modal-selection-label").innerHTML = `Assigning client to <strong>Room ${room} - Bed ${bedLabel}</strong>`;
    document.getElementById("bed-modal-room-id").value = room;
    document.getElementById("bed-modal-bed-id").value = bedLabel;
    
    // Load dropdown with unhoused clients
    const select = document.getElementById("bed-modal-client-select");
    const unhoused = state.clients.filter(c => c.bedId === null && c.housingStatus !== "discharged");
    
    if (unhoused.length === 0) {
        select.innerHTML = `<option value="">-- No pending clients needing housing --</option>`;
    } else {
        select.innerHTML = `
            <option value="">-- Choose client --</option>
            ${unhoused.map(c => `<option value="${c.id}">${c.firstName} ${c.lastName} (ID: ${c.id})</option>`).join("")}
        `;
    }
    
    openModal("bed-assign-modal");
}

function checkoutClient(bedId) {
    const bed = state.beds.find(b => b.id === bedId);
    if (!bed || !bed.occupiedBy) return;
    
    const client = state.clients.find(c => c.id === bed.occupiedBy);
    const clientName = client ? `${client.firstName} ${client.lastName}` : "the client";
    
    if (confirm(`Are you sure you want to discharge and check-out ${clientName} from Room ${bed.room.replace('Room ', '')} - ${bed.label}?`)) {
        // Clear Bed occupancy
        bed.occupiedBy = null;
        
        // Clear Client Bed linkage
        if (client) {
            client.bedId = null;
            client.housingStatus = "unhoused";
            state.addLog("housing", `${client.firstName} ${client.lastName} check-out completed from bed ${bedId}.`);
        }
        
        state.saveState();
        renderBedLayout();
    }
}

// --- EHR & Clinical Suite Controllers ---
let activeEhrClientId = null;

function renderClinicalSuite() {
    const listContainer = document.getElementById("clinical-client-list");
    const filterInput = document.getElementById("clinical-client-search");
    const filterVal = filterInput.value.toLowerCase();
    
    const activeClientsList = state.clients.filter(c => c.housingStatus !== "discharged");
    const filtered = activeClientsList.filter(c => {
        return `${c.firstName} ${c.lastName}`.toLowerCase().includes(filterVal) || c.id.toLowerCase().includes(filterVal);
    });
    
    if (filtered.length === 0) {
        listContainer.innerHTML = `<p class="text-secondary text-xs text-center py-4">No active clients found.</p>`;
    } else {
        listContainer.innerHTML = filtered.map(c => {
            const isActive = c.id === activeEhrClientId ? "active" : "";
            const bedLoc = c.bedId ? `Rm ${c.bedId}` : "Offsite";
            return `
                <button class="clinical-client-item ${isActive}" onclick="selectEhrClient('${c.id}')">
                    <div>
                        <strong class="block text-sm">${c.firstName} ${c.lastName}</strong>
                        <span class="text-secondary text-xs block">${c.id} | ${bedLoc}</span>
                    </div>
                </button>
            `;
        }).join("");
    }
    
    // Toggle layout panes
    const noSelCard = document.getElementById("clinical-no-selection");
    const chartCard = document.getElementById("clinical-chart-active");
    
    if (activeEhrClientId === null) {
        noSelCard.classList.remove("hidden");
        chartCard.classList.add("hidden");
    } else {
        noSelCard.classList.add("hidden");
        chartCard.classList.remove("hidden");
        renderPatientChart();
    }
}

function initClinicalSuite() {
    // Search input
    document.getElementById("clinical-client-search").addEventListener("keyup", () => {
        renderClinicalSuite();
    });

    // Clinical tab selectors
    document.querySelectorAll("[data-clinical-tab]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-clinical-tab]").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(btn.getAttribute("data-clinical-tab")).classList.add("active");
        });
    });

    // Screenings modals triggers
    document.getElementById("btn-trigger-phq9").addEventListener("click", () => {
        loadPhq9Questions();
        openModal("phq9-modal");
    });
    
    document.getElementById("btn-trigger-dast10").addEventListener("click", () => {
        loadDastQuestions();
        openModal("dast10-modal");
    });

    // Save notes
    document.getElementById("new-note-form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (!activeEhrClientId) return;
        
        const noteText = document.getElementById("note-text").value;
        const provider = document.getElementById("note-provider-name").value;
        const role = document.getElementById("note-provider-role").value;
        
        const clientIndex = state.clients.findIndex(c => c.id === activeEhrClientId);
        if (clientIndex !== -1) {
            state.clients[clientIndex].notes.unshift({
                id: Date.now(),
                text: noteText,
                providerName: provider,
                providerRole: role,
                date: new Date().toISOString().replace("T", " ").slice(0, 16),
                locked: true
            });
            state.addLog("clinical", `New Clinical Note locked for ${state.clients[clientIndex].firstName} ${state.clients[clientIndex].lastName}.`);
            state.saveState();
            
            document.getElementById("note-text").value = "";
            renderPatientChart();
        }
    });

    // Medications logger
    document.getElementById("new-medication-form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (!activeEhrClientId) return;
        
        const name = document.getElementById("med-name").value;
        const dosage = document.getElementById("med-dosage").value;
        const frequency = document.getElementById("med-frequency").value;
        const prescriber = document.getElementById("med-prescriber").value;
        const purpose = document.getElementById("med-purpose").value;
        
        const clientIndex = state.clients.findIndex(c => c.id === activeEhrClientId);
        if (clientIndex !== -1) {
            if (!state.clients[clientIndex].medications) state.clients[clientIndex].medications = [];
            state.clients[clientIndex].medications.push({
                id: Date.now(),
                name,
                dosage,
                frequency,
                prescriber,
                purpose,
                dateLogged: new Date().toISOString().split("T")[0]
            });
            state.addLog("clinical", `Medication ${name} logged for ${state.clients[clientIndex].firstName} ${state.clients[clientIndex].lastName}.`);
            state.saveState();
            
            document.getElementById("new-medication-form").reset();
            renderPatientChart();
        }
    });
}

function selectEhrClient(id) {
    activeEhrClientId = id;
    renderClinicalSuite();
}

function openEhrChart(id) {
    activeEhrClientId = id;
    switchView("clinical-view");
}

function renderPatientChart() {
    const client = state.clients.find(c => c.id === activeEhrClientId);
    if (!client) return;
    
    // Header Info
    document.getElementById("chart-patient-avatar").textContent = `${client.firstName[0]}${client.lastName[0]}`;
    document.getElementById("chart-patient-name").textContent = `${client.firstName} ${client.lastName}`;
    
    const birthYear = parseInt(client.dob.split("-")[0]);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    document.getElementById("chart-patient-meta").textContent = `ID: ${client.id} | DOB: ${client.dob} (Age: ${age})`;
    
    // Badges details
    const riskBadge = document.getElementById("chart-patient-risk");
    riskBadge.textContent = `${client.riskLevel} Risk`;
    riskBadge.className = `badge badge-risk-${client.riskLevel.toLowerCase()}`;
    
    const housingBadge = document.getElementById("chart-patient-housing");
    if (client.bedId) {
        housingBadge.textContent = `Rm ${client.bedId.split("-")[0]} - Bed ${client.bedId.split("-")[1]}`;
        housingBadge.className = "badge badge-housed";
    } else {
        housingBadge.textContent = "Unhoused (Pending)";
        housingBadge.className = "badge badge-unhoused";
    }
    
    // Render Clinical Notes List
    const notesTimeline = document.getElementById("notes-timeline-list");
    if (!client.notes || client.notes.length === 0) {
        notesTimeline.innerHTML = `<p class="text-secondary text-sm text-center py-4">No progress notes logged yet.</p>`;
    } else {
        notesTimeline.innerHTML = client.notes.map(note => `
            <div class="timeline-note-card">
                <div class="note-header">
                    <span>Date: ${note.date}</span>
                    <span class="badge badge-risk-low text-xs"><i data-lucide="lock" class="mr-2" style="width:12px;height:12px;"></i> Signed & Locked</span>
                </div>
                <p class="note-body">${note.text}</p>
                <div class="note-signature-line">
                    Digitally Signed By: ${note.providerName}, ${note.providerRole}
                </div>
            </div>
        `).join("");
    }
    
    // Render Screening list table
    const screeningsHistory = document.getElementById("screenings-history-body");
    if (!client.screenings || client.screenings.length === 0) {
        screeningsHistory.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-secondary">No assessments conducted yet.</td></tr>`;
    } else {
        screeningsHistory.innerHTML = client.screenings.map(s => `
            <tr>
                <td><strong>${s.tool}</strong></td>
                <td>${s.date}</td>
                <td><span class="font-bold">${s.score}</span></td>
                <td><span class="badge ${s.score > 10 ? 'badge-risk-high' : s.score > 4 ? 'badge-risk-medium' : 'badge-risk-low'}">${s.severity}</span></td>
                <td>${s.assessor}</td>
            </tr>
        `).join("");
    }
    
    // Render Medications table list
    const medsHistory = document.getElementById("medications-table-body");
    if (!client.medications || client.medications.length === 0) {
        medsHistory.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-secondary">No current active prescriptions.</td></tr>`;
    } else {
        medsHistory.innerHTML = client.medications.map(m => `
            <tr>
                <td><strong>${m.name}</strong></td>
                <td>${m.dosage}</td>
                <td>${m.frequency}</td>
                <td>${m.prescriber}</td>
                <td>${m.purpose}</td>
                <td>${m.dateLogged}</td>
                <td>
                    <button class="text-btn btn-danger text-xs" onclick="deleteMedication(${m.id})">Remove</button>
                </td>
            </tr>
        `).join("");
    }
    
    lucide.createIcons();
}

function deleteMedication(medId) {
    if (!activeEhrClientId) return;
    const client = state.clients.find(c => c.id === activeEhrClientId);
    if (!client) return;
    
    if (confirm("Are you sure you want to remove this medication prescription from the EHR record?")) {
        client.medications = client.medications.filter(m => m.id !== medId);
        state.addLog("clinical", `Medication record deleted for ${client.firstName} ${client.lastName}.`);
        state.saveState();
        renderPatientChart();
    }
}

// Diagnostic screeners forms generating
function loadPhq9Questions() {
    const list = document.querySelector(".screener-questions-list");
    list.innerHTML = PHQ9_QUESTIONS.map((q, idx) => `
        <div class="screener-row">
            <div class="screener-question-text">${idx + 1}. ${q}</div>
            <div class="screener-options-group">
                <label class="screener-option"><input type="radio" name="phq-${idx}" value="0" required checked onclick="calculatePhq9()"> 0 - Not at all</label>
                <label class="screener-option"><input type="radio" name="phq-${idx}" value="1" onclick="calculatePhq9()"> 1 - Several days</label>
                <label class="screener-option"><input type="radio" name="phq-${idx}" value="2" onclick="calculatePhq9()"> 2 - Half the days</label>
                <label class="screener-option"><input type="radio" name="phq-${idx}" value="3" onclick="calculatePhq9()"> 3 - Nearly every day</label>
            </div>
        </div>
    `).join("");
    calculatePhq9();
}

function calculatePhq9() {
    let total = 0;
    for (let i = 0; i < 9; i++) {
        const val = document.querySelector(`input[name="phq-${i}"]:checked`);
        if (val) total += parseInt(val.value);
    }
    document.getElementById("phq9-total-score").textContent = total;
    
    const severityLabel = document.getElementById("phq9-score-severity");
    if (total <= 4) { severityLabel.textContent = "Minimal Depression (None)"; severityLabel.className = "badge badge-risk-low ml-4"; }
    else if (total <= 9) { severityLabel.textContent = "Mild Depression"; severityLabel.className = "badge badge-risk-low ml-4"; }
    else if (total <= 14) { severityLabel.textContent = "Moderate Depression"; severityLabel.className = "badge badge-risk-medium ml-4"; }
    else if (total <= 19) { severityLabel.textContent = "Moderately Severe Depression"; severityLabel.className = "badge badge-risk-high ml-4"; }
    else { severityLabel.textContent = "Severe Depression"; severityLabel.className = "badge badge-risk-high ml-4"; }
}

document.getElementById("phq9-screener-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeEhrClientId) return;
    
    const score = parseInt(document.getElementById("phq9-total-score").textContent);
    const severity = document.getElementById("phq9-score-severity").textContent;
    
    const clientIndex = state.clients.findIndex(c => c.id === activeEhrClientId);
    if (clientIndex !== -1) {
        state.clients[clientIndex].screenings.unshift({
            id: Date.now(),
            tool: "PHQ-9 Depression Screener",
            date: new Date().toISOString().split("T")[0],
            score,
            severity,
            assessor: "Natasha Patterson, LCSW"
        });
        state.addLog("clinical", `PHQ-9 screener run for ${state.clients[clientIndex].firstName} ${state.clients[clientIndex].lastName} (Score: ${score}).`);
        state.saveState();
        closeModal("phq9-modal");
        renderPatientChart();
    }
});

function loadDastQuestions() {
    const list = document.querySelector(".dast-questions-list");
    list.innerHTML = DAST10_QUESTIONS.map((q, idx) => `
        <div class="screener-row">
            <div class="screener-question-text">${idx + 1}. ${q}</div>
            <div class="screener-options-group">
                <label class="screener-option"><input type="radio" name="dast-${idx}" value="${idx === 2 ? '0' : '1'}" required checked onclick="calculateDast10()"> Yes</label>
                <label class="screener-option"><input type="radio" name="dast-${idx}" value="${idx === 2 ? '1' : '0'}" onclick="calculateDast10()"> No</label>
            </div>
        </div>
    `).join("");
    calculateDast10();
}

function calculateDast10() {
    let total = 0;
    for (let i = 0; i < 10; i++) {
        const val = document.querySelector(`input[name="dast-${i}"]:checked`);
        if (val) total += parseInt(val.value);
    }
    document.getElementById("dast10-total-score").textContent = total;
    
    const severityLabel = document.getElementById("dast10-score-severity");
    if (total === 0) { severityLabel.textContent = "No issues reported"; severityLabel.className = "badge badge-risk-low ml-4"; }
    else if (total <= 2) { severityLabel.textContent = "Low Substance Risk"; severityLabel.className = "badge badge-risk-low ml-4"; }
    else if (total <= 5) { severityLabel.textContent = "Moderate Substance Risk"; severityLabel.className = "badge badge-risk-medium ml-4"; }
    else if (total <= 8) { severityLabel.textContent = "Substantial Substance Risk"; severityLabel.className = "badge badge-risk-high ml-4"; }
    else { severityLabel.textContent = "Severe Substance Risk"; severityLabel.className = "badge badge-risk-high ml-4"; }
}

document.getElementById("dast10-screener-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeEhrClientId) return;
    
    const score = parseInt(document.getElementById("dast10-total-score").textContent);
    const severity = document.getElementById("dast10-score-severity").textContent;
    
    const clientIndex = state.clients.findIndex(c => c.id === activeEhrClientId);
    if (clientIndex !== -1) {
        state.clients[clientIndex].screenings.unshift({
            id: Date.now(),
            tool: "DAST-10 Drug Abuse Screener",
            date: new Date().toISOString().split("T")[0],
            score,
            severity,
            assessor: "Natasha Patterson, LCSW"
        });
        state.addLog("clinical", `DAST-10 screener run for ${state.clients[clientIndex].firstName} ${state.clients[clientIndex].lastName} (Score: ${score}).`);
        state.saveState();
        closeModal("dast10-modal");
        renderPatientChart();
    }
});

// --- Referrals Log Controllers ---
function renderReferrals() {
    const list = document.getElementById("referrals-timeline-container");
    const select = document.getElementById("referral-client");
    
    // Build select box items list
    const activeClientsList = state.clients.filter(c => c.housingStatus !== "discharged");
    select.innerHTML = `
        <option value="">Select client...</option>
        ${activeClientsList.map(c => `<option value="${c.id}">${c.firstName} ${c.lastName}</option>`).join("")}
    `;
    
    // Compile references values
    let allRefs = [];
    state.clients.forEach(c => {
        if (c.referrals) {
            c.referrals.forEach(r => {
                allRefs.push({
                    clientId: c.id,
                    clientName: `${c.firstName} ${c.lastName}`,
                    ...r
                });
            });
        }
    });
    
    allRefs.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (allRefs.length === 0) {
        list.innerHTML = `<p class="text-secondary text-sm text-center py-4">No referrals logged yet.</p>`;
    } else {
        list.innerHTML = allRefs.map(r => {
            let badge = `<span class="badge badge-risk-medium">${r.status}</span>`;
            if (r.status === "Completed") badge = `<span class="badge badge-risk-low">${r.status}</span>`;
            if (r.status === "Pending") badge = `<span class="badge badge-risk-high">${r.status}</span>`;
            
            return `
                <div class="card p-4 flex-row justify-between mb-4">
                    <div>
                        <h4 class="font-bold text-sm text-primary mb-1">${r.type}</h4>
                        <p class="text-secondary text-xs mb-2">Agency: <strong>${r.agency}</strong> | Client: <strong>${r.clientName} (ID: ${r.clientId})</strong></p>
                        <p class="text-xs italic text-secondary">"${r.notes || 'No description notes provided.'}"</p>
                    </div>
                    <div class="text-right">
                        ${badge}
                        <span class="block text-xs text-muted mt-2">${r.date}</span>
                    </div>
                </div>
            `;
        }).join("");
    }
}

function initReferrals() {
    const refForm = document.getElementById("new-referral-form");
    refForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const clientId = document.getElementById("referral-client").value;
        const type = document.getElementById("referral-type").value;
        const agency = document.getElementById("referral-agency").value;
        const notes = document.getElementById("referral-notes").value;
        const status = document.getElementById("referral-status").value;
        
        const clientIndex = state.clients.findIndex(c => c.id === clientId);
        if (clientIndex !== -1) {
            if (!state.clients[clientIndex].referrals) state.clients[clientIndex].referrals = [];
            
            state.clients[clientIndex].referrals.unshift({
                id: Date.now(),
                type,
                agency,
                notes,
                status,
                date: new Date().toISOString().split("T")[0]
            });
            
            state.addLog("referral", `New referral logged for ${state.clients[clientIndex].firstName} ${state.clients[clientIndex].lastName} to ${agency}.`);
            state.saveState();
            
            refForm.reset();
            renderReferrals();
        }
    });
}

// --- Custom Form Builder (Apricot-style) ---
let activeCanvasFields = [];

function renderFormBuilder() {
    const container = document.getElementById("canvas-drop-container");
    const emptyNotice = document.getElementById("canvas-empty-notice");
    
    if (activeCanvasFields.length === 0) {
        emptyNotice.classList.remove("hidden");
    } else {
        emptyNotice.classList.add("hidden");
    }
    
    // Remove previous dynamic fields but keep notice
    const items = container.querySelectorAll(".builder-field-card");
    items.forEach(el => el.remove());
    
    // Append fields
    activeCanvasFields.forEach((field, index) => {
        const div = document.createElement("div");
        div.className = "builder-field-card card p-4 mb-2";
        
        let controlHtml = "";
        if (field.type === "text") {
            controlHtml = `<input type="text" placeholder="${field.placeholder}" disabled class="w-full">`;
        } else if (field.type === "textarea") {
            controlHtml = `<textarea rows="2" placeholder="${field.placeholder}" disabled class="w-full"></textarea>`;
        } else if (field.type === "dropdown") {
            controlHtml = `
                <select disabled class="w-full">
                    ${field.options.map(o => `<option>${o}</option>`).join("")}
                </select>
            `;
        } else if (field.type === "checkbox") {
            controlHtml = `
                <label class="flex-row items-center font-normal">
                    <input type="checkbox" disabled>
                    <span class="ml-2">${field.label}</span>
                </label>
            `;
        }
        
        div.innerHTML = `
            <div class="form-group mb-2">
                <label class="font-bold">${field.type === 'checkbox' ? 'Checkbox Option' : field.label}</label>
                ${controlHtml}
            </div>
            <div class="form-grid mb-2 mt-4 text-xs">
                <div class="col-span-3">
                    <label class="block text-secondary mb-1">Field Label / Header</label>
                    <input type="text" value="${field.label}" onchange="updateFieldConfig(${index}, 'label', this.value)" style="padding:4px 8px;font-size:12px;" class="w-full">
                </div>
                ${field.type === 'dropdown' ? `
                    <div class="col-span-3">
                        <label class="block text-secondary mb-1">Options (comma separated)</label>
                        <input type="text" value="${field.options.join(',')}" onchange="updateFieldConfig(${index}, 'options', this.value)" style="padding:4px 8px;font-size:12px;" class="w-full">
                    </div>
                ` : field.type !== 'checkbox' ? `
                    <div class="col-span-3">
                        <label class="block text-secondary mb-1">Placeholder Tip</label>
                        <input type="text" value="${field.placeholder}" onchange="updateFieldConfig(${index}, 'placeholder', this.value)" style="padding:4px 8px;font-size:12px;" class="w-full">
                    </div>
                ` : '<div class="col-span-3"></div>'}
            </div>
            <div class="field-actions">
                <button class="text-btn btn-danger text-xs" onclick="removeBuilderField(${index})">Delete</button>
            </div>
        `;
        container.appendChild(div);
    });

    // Sync Simulator template dropdown choices
    const select = document.getElementById("simulator-form-select");
    select.innerHTML = `
        <option value="none">-- Select Template --</option>
        ${state.forms.map(f => `<option value="${f.id}">${f.name}</option>`).join("")}
    `;
}

function updateFieldConfig(index, key, val) {
    if (key === "options") {
        activeCanvasFields[index].options = val.split(",").map(o => o.trim());
    } else {
        activeCanvasFields[index][key] = val;
    }
    renderFormBuilder();
}

function removeBuilderField(index) {
    activeCanvasFields.splice(index, 1);
    renderFormBuilder();
}

function initFormBuilder() {
    // Add Buttons events
    document.getElementById("fbtn-text").addEventListener("click", () => {
        activeCanvasFields.push({ type: "text", label: "Short Text Label", placeholder: "Type text response..." });
        renderFormBuilder();
    });
    
    document.getElementById("fbtn-textarea").addEventListener("click", () => {
        activeCanvasFields.push({ type: "textarea", label: "Multi-line Description", placeholder: "Type paragraph details..." });
        renderFormBuilder();
    });
    
    document.getElementById("fbtn-dropdown").addEventListener("click", () => {
        activeCanvasFields.push({ type: "dropdown", label: "Select Assessment Category", options: ["Option A", "Option B", "Option C"] });
        renderFormBuilder();
    });
    
    document.getElementById("fbtn-checkbox").addEventListener("click", () => {
        activeCanvasFields.push({ type: "checkbox", label: "Approve and consent parameters layout" });
        renderFormBuilder();
    });

    document.getElementById("btn-clear-canvas").addEventListener("click", () => {
        activeCanvasFields = [];
        renderFormBuilder();
    });

    // Save Template
    document.getElementById("btn-save-custom-form").addEventListener("click", () => {
        const name = document.getElementById("custom-form-name").value;
        if (!name) { alert("Please input a valid form template name."); return; }
        if (activeCanvasFields.length === 0) { alert("Please add at least one field input to the canvas."); return; }
        
        const templateId = "form-" + Date.now();
        state.forms.push({
            id: templateId,
            name: name,
            fields: [...activeCanvasFields]
        });
        
        state.addLog("system", `Custom assessment template "${name}" designed and compiled.`);
        state.saveState();
        
        activeCanvasFields = [];
        document.getElementById("custom-form-name").value = "New Custom Assessment";
        
        renderFormBuilder();
        alert(`Form template "${name}" has been successfully added to simulated databases!`);
    });

    // Simulator selection listener
    const formSelect = document.getElementById("simulator-form-select");
    const clientSelect = document.getElementById("sim-client-select");
    const fieldsContainer = document.getElementById("sim-fields-container");
    const submitBtn = document.getElementById("btn-submit-simulation");
    
    formSelect.addEventListener("change", () => {
        const val = formSelect.value;
        if (val === "none") {
            fieldsContainer.innerHTML = `<p class="text-secondary text-sm text-center py-4">Choose a template above to generate intake input fields.</p>`;
            submitBtn.classList.add("hidden");
            return;
        }
        
        // Find template
        const template = state.forms.find(f => f.id === val);
        if (!template) return;
        
        // Load Client select dropdown options
        const activeClientsList = state.clients.filter(c => c.housingStatus !== "discharged");
        clientSelect.innerHTML = `
            <option value="">-- Choose Client --</option>
            ${activeClientsList.map(c => `<option value="${c.id}">${c.firstName} ${c.lastName}</option>`).join("")}
        `;
        
        // Render inputs
        fieldsContainer.innerHTML = template.fields.map((field, index) => {
            let input = "";
            if (field.type === "text") {
                input = `<input type="text" id="sim-input-${index}" required placeholder="${field.placeholder}" class="w-full">`;
            } else if (field.type === "textarea") {
                input = `<textarea id="sim-input-${index}" required rows="3" placeholder="${field.placeholder}" class="w-full"></textarea>`;
            } else if (field.type === "dropdown") {
                input = `
                    <select id="sim-input-${index}" required class="w-full">
                        <option value="">-- Choose selection --</option>
                        ${field.options.map(o => `<option value="${o}">${o}</option>`).join("")}
                    </select>
                `;
            } else if (field.type === "checkbox") {
                input = `
                    <label class="flex-row items-center font-normal">
                        <input type="checkbox" id="sim-input-${index}">
                        <span class="ml-2">${field.label}</span>
                    </label>
                `;
            }
            
            return `
                <div class="form-group mb-4">
                    <label for="sim-input-${index}">${field.type === 'checkbox' ? 'Required Action' : field.label}</label>
                    ${input}
                </div>
            `;
        }).join("");
        
        submitBtn.classList.remove("hidden");
    });

    // Handle Simulation submissions
    const simForm = document.getElementById("form-simulation-runner");
    simForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const templateId = formSelect.value;
        const clientId = clientSelect.value;
        
        const template = state.forms.find(f => f.id === templateId);
        const client = state.clients.find(c => c.id === clientId);
        if (!template || !client) return;
        
        // Build answer model
        const responseData = {};
        template.fields.forEach((field, index) => {
            const inputEl = document.getElementById(`sim-input-${index}`);
            if (field.type === "checkbox") {
                responseData[field.label] = inputEl.checked ? "Checked (Consent)" : "Unchecked";
            } else {
                responseData[field.label] = inputEl.value;
            }
        });
        
        // Store submission outcome
        const record = {
            id: Date.now(),
            templateName: template.name,
            clientName: `${client.firstName} ${client.lastName}`,
            clientId: client.id,
            data: responseData,
            timestamp: new Date().toLocaleTimeString() + ", Today"
        };
        
        state.formSubmissions.unshift(record);
        state.addLog("system", `Simulated form submission recorded for "${template.name}" with client ${client.firstName}.`);
        state.saveState();
        
        // Reset form
        simForm.reset();
        formSelect.value = "none";
        fieldsContainer.innerHTML = `<p class="text-secondary text-sm text-center py-4">Choose a template above to generate intake input fields.</p>`;
        submitBtn.classList.add("hidden");
        
        renderSimulationLog();
    });

    renderSimulationLog();
}

function renderSimulationLog() {
    const logContainer = document.getElementById("simulation-submission-log");
    if (state.formSubmissions.length === 0) {
        logContainer.innerHTML = `<p class="text-secondary text-xs text-center py-4">No submissions simulated yet.</p>`;
    } else {
        logContainer.innerHTML = state.formSubmissions.map(item => `
            <div style="background-color: var(--bg-surface); padding:8px; border: 1px solid var(--border-color); border-radius:8px; margin-bottom:8px; font-size:11px;">
                <div class="flex-row justify-between mb-1" style="border-bottom: 1px solid var(--border-color); padding-bottom: 2px;">
                    <strong>${item.templateName}</strong>
                    <span class="text-secondary font-semibold">${item.timestamp}</span>
                </div>
                <p class="text-xs mb-2">Client: <strong>${item.clientName}</strong> (${item.clientId})</p>
                <div class="answers-view" style="color: var(--text-secondary);">
                    ${Object.entries(item.data).map(([key, val]) => `<strong>${key}:</strong> ${val}<br>`).join("")}
                </div>
            </div>
        `).join("");
    }
}

// --- Settings Section ---
function initSettings() {
    const resetBtn = document.getElementById("settings-clear-database-btn");
    resetBtn.addEventListener("click", () => {
        if (confirm("WARNING: Are you sure you want to restore the application database to its factory seeds? This deletes all custom clients, notes, and beds logs!")) {
            state.resetState();
            alert("Database variables restored successfully! Reloading configuration...");
            window.location.reload();
        }
    });
}

// --- Modal Helper Functions ---
function initModals() {
    // Esc key bindings and overlay click cancels
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
        
        const cancelBtn = overlay.querySelector(".modal-cancel-btn");
        if (cancelBtn) {
            cancelBtn.addEventListener("click", () => {
                closeModal(overlay.id);
            });
        }
    });

    // Close buttons X icons
    document.getElementById("phq9-close").addEventListener("click", () => closeModal("phq9-modal"));
    document.getElementById("dast10-close").addEventListener("click", () => closeModal("dast10-modal"));
    document.getElementById("bed-modal-close").addEventListener("click", () => closeModal("bed-assign-modal"));
    document.getElementById("detail-modal-close").addEventListener("click", () => closeModal("client-detail-modal"));
    document.getElementById("detail-modal-close-footer-btn").addEventListener("click", () => closeModal("client-detail-modal"));

    // Notifications toggle menu
    const notificationBtn = document.getElementById("notification-btn");
    const notificationMenu = document.getElementById("notifications-menu");
    
    notificationBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        notificationMenu.classList.toggle("hidden");
        renderNotifications();
    });

    document.addEventListener("click", () => {
        notificationMenu.classList.add("hidden");
    });
}

function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
}

function renderNotifications() {
    const list = document.getElementById("notifications-list");
    // Filter alerts to show items like "needs assessment", "unhoused client"
    const unhousedCount = state.clients.filter(c => c.bedId === null && c.housingStatus !== "discharged").length;
    const pendingReferrals = state.clients.reduce((acc, c) => acc + (c.referrals ? c.referrals.filter(r => r.status === "Pending").length : 0), 0);
    
    let alerts = [];
    if (unhousedCount > 0) {
        alerts.push({ text: `${unhousedCount} clients awaiting Bed Assignment.`, type: "housing", time: "Just now" });
    }
    if (pendingReferrals > 0) {
        alerts.push({ text: `${pendingReferrals} referrals require scheduling follow-up.`, type: "referral", time: "10 mins ago" });
    }
    
    if (alerts.length === 0) {
        list.innerHTML = `<p class="text-secondary text-xs text-center py-6">No pending action items or alerts.</p>`;
    } else {
        list.innerHTML = alerts.map(alert => {
            let color = "icon-bg-amber";
            let icon = "alert-circle";
            if (alert.type === "housing") { color = "icon-bg-indigo"; icon = "home"; }
            
            return `
                <div class="notification-item unread">
                    <div class="notification-item-icon ${color}">
                        <i data-lucide="${icon}" style="width:14px;height:14px;"></i>
                    </div>
                    <div class="notification-item-content">
                        <p class="font-semibold text-xs">${alert.text}</p>
                        <span class="notification-time">${alert.time}</span>
                    </div>
                </div>
            `;
        }).join("");
    }
    lucide.createIcons();
}

// --- Client Detail Modal Profile Drawer ---
function showClientDetail(clientId) {
    const client = state.clients.find(c => c.id === clientId);
    if (!client) return;
    
    // Set Header titles
    document.getElementById("detail-modal-client-name").textContent = `${client.firstName} ${client.lastName}`;
    document.getElementById("detail-modal-client-id").textContent = `ID: ${client.id} | Admitted: ${client.admittedDate || "N/A"}`;
    
    // Load Demographics tab
    document.getElementById("d-name").textContent = `${client.firstName} ${client.lastName}`;
    document.getElementById("d-dob").textContent = client.dob;
    document.getElementById("d-phone").textContent = client.phone || "Not Provided";
    document.getElementById("d-email").textContent = client.email || "Not Provided";
    document.getElementById("d-emergency-name").textContent = client.emergencyName || "Not Provided";
    document.getElementById("d-emergency-phone").textContent = client.emergencyPhone || "Not Provided";
    
    // Load Justice System Details tab
    document.getElementById("d-po-name").textContent = client.poName || "Not Provided";
    document.getElementById("d-po-phone").textContent = client.poPhone || "Not Provided";
    document.getElementById("d-release-date").textContent = client.releaseDate || "N/A";
    
    const dRisk = document.getElementById("d-risk-level");
    dRisk.textContent = `${client.riskLevel} Risk`;
    dRisk.className = `badge badge-risk-${client.riskLevel.toLowerCase()}`;
    
    document.getElementById("d-charges").textContent = client.charges || "No detailed log entries saved.";
    
    // Load Medical tab
    const prescriptionsList = document.getElementById("d-prescriptions-list");
    if (!client.medications || client.medications.length === 0) {
        prescriptionsList.innerHTML = `<p class="text-secondary text-sm p-3 border rounded text-center" style="border-radius:10px; border-style:dashed;">No active prescription meds recorded in EHR.</p>`;
    } else {
        prescriptionsList.innerHTML = client.medications.map(m => `
            <div class="med-card">
                <div class="med-icon-box">
                    <i data-lucide="pill"></i>
                </div>
                <div class="med-details">
                    <div class="med-title-row">
                        <span class="med-name-bold">${m.name}</span>
                        <span class="med-dosage-badge">${m.dosage}</span>
                    </div>
                    <div class="med-meta-text">
                        Taken <strong>${m.frequency}</strong> for <em>${m.purpose}</em>. Prescribed by ${m.prescriber}.
                    </div>
                </div>
            </div>
        `).join("");
    }
    
    const assessmentsTable = document.getElementById("d-screenings-list");
    if (!client.screenings || client.screenings.length === 0) {
        assessmentsTable.innerHTML = `<tr><td colspan="4" class="text-center text-secondary py-2">No clinical assessments conducted yet.</td></tr>`;
    } else {
        assessmentsTable.innerHTML = client.screenings.map(s => `
            <tr>
                <td><strong>${s.tool}</strong></td>
                <td>${s.date}</td>
                <td><strong class="font-bold">${s.score}</strong></td>
                <td><span class="badge ${s.score > 9 ? 'badge-risk-high' : s.score > 4 ? 'badge-risk-medium' : 'badge-risk-low'}">${s.severity}</span></td>
            </tr>
        `).join("");
    }
    
    // Load Progress Notes tab
    const notesLog = document.getElementById("d-notes-timeline");
    if (!client.notes || client.notes.length === 0) {
        notesLog.innerHTML = `<p class="text-secondary text-sm text-center py-4">No progress notes written.</p>`;
    } else {
        notesLog.innerHTML = client.notes.map(n => `
            <div class="timeline-note-card mb-3">
                <div class="note-header">
                    <span>${n.date}</span>
                    <span class="badge badge-risk-low text-xs"><i data-lucide="lock" class="mr-2" style="width:12px;height:12px;"></i> Signed & Locked</span>
                </div>
                <p class="note-body">${n.text}</p>
                <div class="note-signature-line text-right">Signed By: ${n.providerName}, ${n.providerRole}</div>
            </div>
        `).join("");
    }
    
    // Load Referrals tab
    const refLog = document.getElementById("d-referrals-list");
    if (!client.referrals || client.referrals.length === 0) {
        refLog.innerHTML = `<p class="text-secondary text-sm text-center py-4">No service referrals logged.</p>`;
    } else {
        refLog.innerHTML = client.referrals.map(r => {
            let badge = `<span class="badge badge-risk-medium">${r.status}</span>`;
            if (r.status === "Completed") badge = `<span class="badge badge-risk-low">${r.status}</span>`;
            if (r.status === "Pending") badge = `<span class="badge badge-risk-high">${r.status}</span>`;
            
            return `
                <div style="background-color: var(--bg-app); border: 1px solid var(--border-color); border-radius:10px; padding:12px; margin-bottom:8px;">
                    <div class="flex-row justify-between mb-1">
                        <strong>${r.type}</strong>
                        ${badge}
                    </div>
                    <p class="text-secondary text-xs mb-2">Agency: <strong>${r.agency}</strong> | Logged: ${r.date}</p>
                    <p class="text-xs italic text-secondary">"${r.notes}"</p>
                </div>
            `;
        }).join("");
    }
    
    // Init Drawer Nav Tabs
    const drawerNavs = document.querySelectorAll(".drawer-nav-btn");
    const drawerPanes = document.querySelectorAll(".drawer-pane");
    
    drawerNavs.forEach(nav => {
        // Reset tabs to default Demographics active state
        nav.classList.remove("active");
        if (nav.getAttribute("data-drawer-tab") === "dtab-demographics") {
            nav.classList.add("active");
        }
        
        nav.onclick = () => {
            drawerNavs.forEach(b => b.classList.remove("active"));
            drawerPanes.forEach(p => p.classList.remove("active"));
            
            nav.classList.add("active");
            document.getElementById(nav.getAttribute("data-drawer-tab")).classList.add("active");
        };
    });
    
    drawerPanes.forEach(pane => {
        pane.classList.remove("active");
    });
    document.getElementById("dtab-demographics").classList.add("active");
    
    // Handle Discharge delete trigger
    const dischargeBtn = document.getElementById("detail-modal-delete-btn");
    dischargeBtn.onclick = () => {
        if (confirm(`CRITICAL WARNING: Are you sure you want to completely discharge ${client.firstName} ${client.lastName}? This will clean their bed assignments, archive their record, and mark it inactive.`)) {
            // Discharge bed
            if (client.bedId) {
                const bed = state.beds.find(b => b.id === client.bedId);
                if (bed) bed.occupiedBy = null;
                client.bedId = null;
            }
            
            client.housingStatus = "discharged";
            state.addLog("system", `Client ${client.firstName} ${client.lastName} has been officially discharged from program registries.`);
            state.saveState();
            
            closeModal("client-detail-modal");
            renderClientRegistry();
            renderDashboard();
        }
    };
    
    openModal("client-detail-modal");
    lucide.createIcons();
}

// Global functions for inline calls in HTML template elements
window.showClientDetail = showClientDetail;
window.openEhrChart = openEhrChart;
window.selectEhrClient = selectEhrClient;
window.openAssignBedModal = openAssignBedModal;
window.checkoutClient = checkoutClient;
window.deleteMedication = deleteMedication;
window.removeBuilderField = removeBuilderField;
window.updateFieldConfig = updateFieldConfig;
window.calculatePhq9 = calculatePhq9;
window.calculateDast10 = calculateDast10;
