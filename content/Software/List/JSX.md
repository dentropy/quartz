---
id: veFGtmqbBQbdo24NOx8l3
title: JSX
desc: ''
updated: 1637183215161
created: 1637183199806
---

``` jsx
<table style={{ border: "1px solid black" }} >
    <tr style={{ border: "1px solid black" }}>
    {
        column_table_heading
    }
    </tr>
    {mah_data.map((tmp_row) => {
    return(
        <tr> 
        <td style={{ border: "1px solid black" }}>{tmp_row.id}</td>
        <td style={{ border: "1px solid black" }}>{tmp_row.username}</td>
        <td style={{ border: "1px solid black" }}>{tmp_row.topic}</td>
        <td style={{ border: "1px solid black" }}>{tmp_row.team}</td>
        <td style={{ border: "1px solid black" }}>{tmp_row.body}</td>
        </tr>
    )
    })}
</table>
</div>
```
