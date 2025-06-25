
# 🌿 VerdeFlow UI

**VerdeFlow** is a front-end web application built with **Vue 3**, **Vuetify**, and the **Materio Vue template**. It provides developers and teams with insights into the sustainability of their API implementations — including energy consumption, CPU usage, memory, and response time — powered by automated measurements from Raspberry Pi agents.

---

## 🖥️ Features

- 🌱 Project and Branch Management
- ⚡ Real-Time Measurement Dashboards
- 🔁 Commit & Branch Comparisons
- 📊 Visualizations using ApexCharts
- 📦 Modular component structure
- 🎨 Built on Materio + Remix Icon support

---

## 🛠️ Tech Stack

| Layer       | Tech                       |
|-------------|----------------------------|
| Framework   | [Vue 3](https://vuejs.org) |
| UI Library  | [Vuetify 3](https://vuetifyjs.com) |
| Template    | [Materio Vuetify](https://themeselection.com/products/materio-vuetify-vuejs-admin-template/) |
| Icons       | [Remix Icon](https://remixicon.com/) |
| Charts      | [ApexCharts](https://apexcharts.com/vue-chart-demos/) |

---

## 📂 Project Structure

```
src/
├── assets/
├── components/
├── views/
│   ├── projects/
│   │   ├── ProjectTabOverview.vue
│   │   ├── ProjectTabCharts.vue
│   │   └── CommitComparisonTable.vue
├── router/
├── store/
├── layouts/
└── App.vue
```

---

## 🚀 Setup & Development

### 1. Clone the repo

```bash
git clone https://github.com/your-org/verdeflow-ui.git
cd verdeflow-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start dev server

```bash
npm run dev
```

> The app will be available at `http://localhost:5173` (or your configured port)

---

## 🔗 API Integration

- Base URL is defined in `useApi()` hooks.
- Communicates with the VerdeFlow backend API (Node.js + Prisma).
- Secure via JWT (handled in auth module).

---

## 📊 Sample Visualizations

- Green Score over Time
- Power Usage per Endpoint
- CPU vs RAM per Request
- Dev vs Main Branch Comparisons
- Commit Performance Tracking

---

## 📥 Environment Variables

Create a `.env` file with:

```env
VITE_API_BASE_URL=https://api.verdeflow.example.com
```

---

## 🧪 Testing

Basic unit testing setup coming soon.

---

## 📄 License

MIT © 2025 VerdeFlow Team

---

## 🙋 Support

For questions or contributions, reach out via [issues](https://github.com/your-org/verdeflow-ui/issues) or email the dev team.
