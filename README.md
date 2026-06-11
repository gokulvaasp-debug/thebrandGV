Gelixer Shipment Control Tower 📦🟣

A premium, cloud-connected operational dashboard built for the Gelixer logistics team. This application streamlines the management of daily e-commerce shipments (via WamaShip), automates priority triaging, tracks follow-up history, and syncs live with a Google Sheets backend database.

✨ Key Features

☁️ Live Cloud Database Sync: Authenticate via Google Workspace to securely read and write data directly to a master Google Spreadsheet.

🧠 Automated Priority Engine: Automatically classifies shipments into Critical, Deliver Today, Watch List, Transit Delayed, RTO, and Completed based on Estimated Delivery Dates (EDD) and courier statuses.

📥 Smart WamaShip Uploads: Drag-and-drop daily Excel/CSV exports from WamaShip. The system intelligently detects duplicates, updates tracking statuses without erasing history, and logs new entries.

💬 Command Panel & Timelines: Click any shipment to open the command panel. Add internal operational comments, mark escalations, and view an immutable timeline of system and user-generated status changes.

📊 Export Engine: Instantly download filtered views, critical action lists, or RTO reports back to Excel with one click.

🛠️ Technology Stack

Frontend: Single-file HTML5 architecture.

Styling: Tailwind CSS (via CDN) with Gelixer brand design tokens.

Icons: Phosphor Icons.

Data Parsing: SheetJS (xlsx).

Backend / Auth: Google Identity Services (OAuth 2.0) & Google Sheets API v4.

🚀 Setup & Installation

This application requires a local web server to run due to Google's strict OAuth security policies. You cannot open this file directly by double-clicking it (file:// protocol).

1. Running Locally

Clone this repository.

Serve the control-tower.html file over a local HTTP server.

Using VS Code: Install the Live Server extension, right-click the HTML file, and select "Open with Live Server".

Using Python: Open your terminal in the project folder and run python -m http.server 8000. Then open http://localhost:8000/control-tower.html in your browser.

2. Google Cloud Console Setup (OAuth)

To allow Google Login to work on your local machine or hosted domain:

Go to your Google Cloud Console Credentials.

Select your OAuth 2.0 Client ID.

Under Authorized JavaScript origins, click ADD URI.

Enter the exact URL of your local server (e.g., http://localhost:5500 or http://127.0.0.1:8000). Do not include a trailing slash.

Save changes. (Note: It may take Google up to 5 minutes to propagate these changes).

3. Google Sheets Backend Setup

The application connects to a specific Google Spreadsheet ID. Ensure your Google Sheet contains exactly these three sheet tabs:

Shipment_Master (Columns A to M)

Followup_History (Columns A to G)

Upload_Log (Columns A to E)

Ensure your Google account has Editor access to the linked spreadsheet.

📋 Daily Morning Workflow

Open & Authenticate: Open the dashboard and click "Sign in with Google" to connect the live database.

Upload Report: Go to the "Upload WamaShip" tab and drop today's .xlsx or .csv tracking report.

Automated Triage: The system will sync the data to the cloud and calculate priorities.

Action Criticals: Go to the Critical Action view. Open the Command Panel for delayed shipments, leave escalation comments, and track resolutions.

Monitor: Use the dashboard to keep an eye on active RTOs and shipments marked for "Deliver Today".

Designed for Nitta Gelatin India Limited operations. Wellness from Within.
