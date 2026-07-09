# PROJECT PROPOSAL
## Custom Reentry Case Management & EHR Platform ("Mary's Link")

**Prepared For:** Natasha Patterson, Founder & CEO  
**Organization:** The House of Mary Corporation  
**Project Name:** Mary's Link (Case Management & EHR Platform)  
**Status:** Interactive Prototype Complete  
**Live Site URL:** [https://giridharidutta.github.io/mary/](https://giridharidutta.github.io/mary/)  
**GitHub Repository:** [https://github.com/GiridhariDutta/mary](https://github.com/GiridhariDutta/mary)

---

### 1. Executive Summary
The House of Mary Corporation provides essential transitional housing and supportive services for justice-involved women returning to the community in Illinois. To streamline operations, eliminate fragmented spreadsheets, and meet clinical auditing standards, the organization requires a unified Case Management and Electronic Health Record (EHR) platform.

**Mary's Link** is a custom cloud-based software system built specifically to address these requirements. It matches the enterprise-level capabilities of industry standards like CaseWorthy and Social Solutions Apricot, but features direct out-of-the-box support for reentry profiles, probation metrics, bed management, and HIPAA-compliant clinical progress charting.

---

### 2. Implemented System Capabilities (Interactive Sandbox)
The current prototype features a fully functional front-end interface deployed live at [https://giridharidutta.github.io/mary/](https://giridharidutta.github.io/mary/), demonstrating the following core modules:

#### A. Active Client Registry
A centralized dashboard listing all active clients. It allows case managers to:
* Search name or ID instantly.
* Filter caseloads dynamically by risk level or housing status.
* View individual demographics and justice profiles (Parole Officer contact info, release dates, recidivism risk rating).

#### B. Transitional Bed Registry & Floorplan
A graphical bed management system that mirrors properties and rooms (Rooms 101–104):
* Displays vacant and occupied beds with occupant details and custom avatars.
* Includes an interactive check-in manager that allows case managers to select any unhoused client and assign them to an available bed.
* Auto-calculates overall capacity and occupancy rates.

#### C. Clinical EHR Suite
A dedicated workspace for clinical tracking and mental health charting:
* **EHR Progress Notes:** Enables writing detailed interaction logs.
* **Signature Lock Audit:** Progress notes require a provider signature name and credentials (e.g., Natasha Patterson, LCSW) and are permanently locked on submission (preventing retroactive modifications).
* **Clinical Timeline:** Displays a chronological log of historical notes.

#### D. Auto-Scoring Screeners & Diagnostics
Fully interactive digital modals for standard clinical screeners:
* **PHQ-9 (Depression Screener):** Dynamically sums question scores (0-27) and maps results to clinical severity levels.
* **DAST-10 (Drug Abuse Screener):** Scores substance risk (0-10) and maps them to risk categories.
* Completed assessments are instantly saved directly to the patient's EHR scorecard.

#### E. Form Builder & Sandbox Simulator
An administration panel that allows case managers to:
* Construct custom intake form templates with drag-and-drop elements (text, select lists, checkboxes).
* Run a sandbox simulation to fill out and submit the custom form for any client, dynamically recording data logs.

---

### 3. Comparison with Enterprise Competitors

| Capabilities | Social Solutions Apricot / CaseWorthy | Mary’s Link System |
| :--- | :--- | :--- |
| **Reentry Workflows** | Requires expensive custom database alterations to support justice metrics. | **Natively supported.** Tracks PO contacts, release dates, charge sheets, and risk scores out-of-the-box. |
| **Housing Management** | Usually requires buying and configuring separate, high-cost housing modules. | **Built-in Bed Manager.** Includes room-by-room status monitors and a dynamic check-in selector. |
| **Clinical Assessments** | Often requires paper logs or manual math to calculate scoring levels. | **Auto-calculating forms.** Modals automatically run PHQ-9 and DAST-10 score mapping on selection. |
| **Data Log Audits** | Standard charting. | **Immutable Sign & Lock validation.** Progress notes require signature and title inputs and freeze on submission. |
| **Custom Intake Fields** | Complex administrative setup required. | **Built-in Form Builder & Simulator.** Lets case managers draft, test, and save intake templates on the fly. |

---

### 4. Next Steps
If this prototype aligns with the vision of The House of Mary Corporation, we are prepared to proceed with the full implementation phase:
1. **Feedback & Iteration:** Gather input from case managers on prototype layout and workflows.
2. **Production Setup:** Configure backend servers, secure SQL databases, and user login controls.
3. **Audit Compliance:** Validate system encryption (HIPAA-compliant hosting standards).

We are available to schedule a meeting or video call to align on these next phases.
