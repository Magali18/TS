interface Props{
    subs:Array <{
        nick: string
  subMonths: number
  avatar :string
  decription?: string 
    }>
}
const List =({subs}:Props)=>{
    return (
        <div>
            <ul>
{subs.map(sub=>{
    return (
        <li key={sub.nick}>
            <img src={sub.avatar} alt="Avatr" />
            <h4> {sub.nick} (<small> {sub.subMonths}</small>)</h4>
            <p> {sub.decription?.substring(0,100)}</p>

        </li>
    )
})
}  </ul>
       </div>
    )
};
export default List;