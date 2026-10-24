import type { SiteConfig } from "@/config/site";

export default function Timetable({ siteConfig }: { siteConfig: SiteConfig }) {
  const { timetable } = siteConfig;
  return (
    <section className="section section--alt" id="timetable">
      <div className="container">
        <div className="eyebrow">Timetable</div>
        <h2 className="h2">Weekly classes</h2>
        <p className="note">{timetable.note}</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Time</th>
                {timetable.days.map((d) => (
                  <th scope="col" key={d}>
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.rows.map((row) => (
                <tr key={row.time}>
                  <th scope="row">{row.time}</th>
                  {row.slots.map((s, i) => (
                    <td key={i} className={s === "Closed" ? "is-closed" : undefined}>
                      {s}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
