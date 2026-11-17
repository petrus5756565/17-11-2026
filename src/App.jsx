import s from './App.module.css'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { name: 'Jan', uv: 400, pv: 240 },
  { name: 'Fev', uv: 300, pv: 139 },
  { name: 'Mar', uv: 500, pv: 380 },
  { name: 'Abr', uv: 478, pv: 390 },
  { name: 'Mai', uv: 589, pv: 480 },
  { name: 'Jun', uv: 639, pv: 380 },
]

export default function App() {
  return (
    <main className={s.page}>
      <section className={s.chartCard} aria-labelledby="chart-title">
        <h1 id="chart-title">Visitas ao longo do tempo</h1>
        <LineChart
          style={{ width: '100%', aspectRatio: 1.618, maxWidth: 800, margin: 'auto' }}
          responsive
          data={data}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Line type="monotone" dataKey="uv" stroke="#30609a" />
          <Line type="monotone" dataKey="pv" stroke="#dba46d" />
          <Legend verticalAlign="top" align="right" />
        </LineChart>
      </section>
    </main>
  )
}
