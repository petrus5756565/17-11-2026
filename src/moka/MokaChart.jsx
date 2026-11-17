import s from './mokaChart.module.css'

const chartData = [
  {
    x: 'Category A',
    y: 54,
    goals: [
      {
        name: 'Expected',
        value: 52,
        strokeColor: '#9580da',
      },
    ],
  },
]

export function MokaChart() {
  const [category] = chartData
  const [goal] = category.goals

  return (
    <section className={s.card} aria-labelledby="goal-chart-title">
      <div className={s.header}>
        <div>
          <span className={s.kicker}>Resultado</span>
          <h2 id="goal-chart-title">{category.x}</h2>
        </div>
        <strong className={s.value}>{category.y}</strong>
      </div>

      <div
        className={s.track}
        role="img"
        aria-label={`${category.x}: ${category.y}; ${goal.name}: ${goal.value}`}
      >
        <div className={s.bar} style={{ width: `${category.y}%` }} />
        <span
          className={s.marker}
          style={{
            left: `${goal.value}%`,
            backgroundColor: goal.strokeColor,
          }}
        />
      </div>

      <div className={s.legend}>
        <span>Atual: {category.y}</span>
        <span>
          <i style={{ backgroundColor: goal.strokeColor }} />
          {goal.name}: {goal.value}
        </span>
      </div>
    </section>
  )
}
