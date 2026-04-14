import { Main } from "../components/Main";
import { connectToDatabase } from "../lib/db";
import { TourModel } from "../lib/tourModel";

export async function getServerSideProps() {
  const db_connection = await connectToDatabase();
  if (!db_connection) {
    console.log("Error connecting to db");
    return { error: "error connecting to db" };
  }
  const tours = await TourModel.find({});
  if (!tours) {
    console.log("Error not tours not found");
    return { error: "Error not tours not found" };
  }
  return {
    props: {
      tours: JSON.stringify(tours),
    },
  };
}

const View = ({ tours }) => {
  return <Main tours = {JSON.parse(tours)}/>;
};
export default View;
