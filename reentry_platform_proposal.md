# Project Proposal & Approach Presentation
**Client:** Natasha Patterson, Founder & CEO  
**Organization:** The House of Mary Corporation  
**Project Name:** Mary's Link (Case Management & EHR Platform)  
**Repository Link:** [https://github.com/GiridhariDutta/mary](https://github.com/GiridhariDutta/mary)

---

## 1. Approach Email Draft

**Subject:** Proposal & Interactive Sandbox: Custom Case Management & EHR Platform ("Mary's Link")

Dear Natasha,

I hope this email finds you well.

Following up on your organization's requirements for a modern, cloud-based Case Management and Electronic Health Record (EHR) platform for transitional housing and justice-involved reentry services, we have designed and built a high-fidelity interactive prototype named **Mary's Link**. 

This platform matches the enterprise capabilities of industry standards like **CaseWorthy** and **Social Solutions Apricot** but has been custom-tailored specifically to fit the reentry workflows and transitional housing capacity rules of **The House of Mary Corporation**.

We have successfully uploaded the repository and configured the core database seeds. You can view the complete codebase and project files here:
**GitHub Repository:** [https://github.com/GiridhariDutta/mary](https://github.com/GiridhariDutta/mary)

Below, we have compiled a brief summary of your program's specific requirements, a walkthrough of what we have built in this sandbox, and a direct comparison showing how the platform matches enterprise alternatives.

We are excited to partner with you to help women successfully transition back to the community. We look forward to your feedback on this initial prototype.

Best regards,

[Your Name/Team Name]  
Development Lead  
[Contact Information]

---

## 2. Requirement Overview (What You Wanted)
The House of Mary Corporation required an integrated software system to replace scattered spreadsheets and manual records. Key needs included:
* **Caseload Tracking:** Registry of justice-involved women returning to the community.
* **Justice-System Metrics:** Monitoring recidivism risk ratings, parole/probation officer contacts, release dates, and charge sheets.
* **Housing/Bed Management:** Tracking bed capacity, check-ins, and vacant beds across transitional properties.
* **Clinical Health Records (EHR):** Logging clinical progress notes, active medication logs, and tracking mental health/substance abuse assessments.

---

## 3. Implemented Capabilities (What We Built)
We built an interactive single-page application dashboard running on a Node.js development server with a responsive dark-slate design matching your brand assets:

1. **Active Client Registry:** A database listing active caseloads with custom tags for risk levels, current bed assignments, PO details, and overall screening completions.
2. **Interactive Bed Registry & Floorplan:** A visual room-by-room grid (Rooms 101–104) indicating Bed status. Includes a programmatic check-in selector to dynamically assign unhoused clients to vacant bed slots.
3. **EHR Suite & Clinical Charting:** A HIPAA-compliant clinical logging tab with provider digital signature lock validations (freezes notes from editing once signed).
4. **Auto-Scoring Assessments:** Fully integrated **PHQ-9 (Depression Screener)** and **DAST-10 (Drug Abuse Screener)** diagnostic modals that auto-calculate scores and outcomes instantly.
5. **Drag-and-Drop Form Builder & Sandbox Simulator:** An interactive canvas allowing case managers to construct custom intake fields and run a live submission simulation.
6. **Supportive Referrals Pipeline:** Service log tracking status (Pending, Approved, Denied) for Mental Health, Employment, and Legal services.

---

## 4. Enterprise Feature Comparison

| Enterprise Feature | Social Solutions Apricot / CaseWorthy | Mary’s Link Implementation |
| :--- | :--- | :--- |
| **Reentry Data Model** | Requires manual customization and database alterations to support parole or probation metrics. | **Natively supported.** Tracks PO contacts, release dates, charge logs, and risk levels out-of-the-box. |
| **Transitional Housing** | Requires purchasing separate, expensive housing modules. | **Built-in Bed Manager.** Includes room-by-room status monitors and a dynamic check-in selector. |
| **Diagnostic Assessments** | Often requires paper logs or manually typing calculated scores. | **Auto-calculating forms.** Modals automatically run PHQ-9 and DAST-10 score mapping on selection. |
| **Clinical Logging Audits** | Standard locked charting. | **Immutable Sign & Lock validation.** Progress notes require signature and title inputs and freeze on submission. |
| **System Flexibilty** | Locked form builder interfaces. | **Built-in Form Builder & Simulator.** Lets case managers draft, test, and save intake templates on the fly. |

---
