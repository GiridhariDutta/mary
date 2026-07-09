# House of Mary Case Management & EHR Platform

A modern, cloud-based Case Management and Electronic Health Record (EHR) platform prototype custom-tailored for nonprofit reentry and transitional housing organizations. Designed to manage workflows similar to platforms like CaseWorthy and Apricot, but optimized specifically for justice-involved women returning to the community.

## Technology Stack
- **Frontend Core**: Semantic HTML5, CSS3, and modern Vanilla ES6+ JavaScript.
- **Styling**: Responsive Vanilla CSS utilizing CSS Custom Properties (Variables), custom theme toggling (Dark & Light modes), fluid typography (`Inter` font family), glassmorphism components, and subtle interactive animations.
- **State & Data**: Rich client-side state engine with auto-sync and persistent data storage utilizing the browser's `localStorage` API. No server-side database installation is required for this dashboard.
- **Visuals**: Dynamically generated charts and reports rendered in pure responsive SVG.

## Core Features
1. **Interactive Dashboard**: Highlights key service metrics (active client caseloads, transitional housing bed occupancy rates, referral statuses) and displays recent client logs and a performance tracking chart.
2. **Client Registry**: A searchable directory of justice-involved clients. Contains complete profiles with tabs for Demographics, Justice History, EHR records, Case Progress Notes, and Service Plans.
3. **Multi-Step Intake Wizard**: Standardized forms to capture demographic details, needs analysis, risk levels (ORAS/LSI-R scoring ranges), and health records during a client's intake.
4. **Housing & Bed Registry**: Visual floor plan map representing a 4-room, 16-bed transitional shelter. Staff can click on any room to check-in active clients, view occupant details, or complete a checkout.
5. **Electronic Health Records (EHR)**:
   - Clinical Screening Forms: Interactive standard PHQ-9 (depression) and DAST-10 (substance use) screeners with auto-calculated severity levels.
   - Medication Tracker: Records prescribed medications, dosages, frequency, and prescribing doctors.
   - Secure Clinical Notes: Case managers and clinical staff can create contact logs, sign them digitally, and "lock" the record from future edits.
6. **Apricot-style Form Builder**: Admin panel allowing drag-and-drop / click-to-add form creation. Admins can construct custom screens with text inputs, textareas, select menus, or checkboxes, preview the form layout instantly, and simulate submissions.

## Running Locally
To launch the platform locally:
1. Double-click the `index.html` file to open it directly in any modern web browser.
2. Alternatively, run a lightweight local server from the root directory:
   ```bash
   npx serve .
   ```
   Or use Python:
   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your web browser.
