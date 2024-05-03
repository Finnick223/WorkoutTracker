export default function Table() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th rowSpan={2}>Exercise</th>
          <th colSpan={2}>Set1</th>
          <th colSpan={2}>Set2</th>
          <th colSpan={2}>Set3</th>
        </tr>
        <tr>
          <th>weight</th>
          <th>reps</th>
          <th>weight</th>
          <th>reps</th>
          <th>weight</th>
          <th>reps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ława</td>
          <td>50</td>
          <td>5</td>
          <td>55</td>
          <td>5</td>
          <td>50</td>
          <td>5</td>
        </tr>
        <tr>
          <td>siady</td>
          <td>100</td>
          <td>10</td>
          <td>150</td>
          <td>5</td>
          <td>150</td>
          <td>4</td>
        </tr>
      </tbody>
      {/* <tfoot>
        <tr>
          <td>Sum</td>
          <td>$180</td>
        </tr>
      </tfoot> */}
    </table>
  );
}
