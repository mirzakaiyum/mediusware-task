import TabsContent1 from "./TabsContent1";
import TabsTitle1 from "./TabsTitle1";

export default function DataTable1({ data, show, handleClick}) {
  return (
    <div className="col-8">
          <TabsTitle1 show={show} handleClick={handleClick} />
          <TabsContent1 data={data} show={show} />
        </div>
  )
}
