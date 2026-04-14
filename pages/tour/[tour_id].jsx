import React from "react";
import { useRouter } from "next/router";
import SingleTour from "../../components/SingleTour";
import { connectToDatabase } from "../../lib/db";
import { TourModel } from "../../lib/tourModel";

export async function getServerSideProps({ params }) {
  const db_connection = await connectToDatabase();
  if (!db_connection) {
    console.log("Error connecting to db");
    return { error: "error connecting to db" };
  }
  console.log({ tour_id: params.tour_id });
  const tour = await TourModel.findById(params.tour_id).lean();
  const tours = await TourModel.find({});
  if (!tour) {
    console.log("Error not tour not found");
    return { error: "Error not tour not found" };
  }
  if (!tours) {
    console.log("Error not tours not found");
    return { error: "Error not tours not found" };
  }
  return {
    props: {
      tours: JSON.parse(JSON.stringify(tours)),
      tour: JSON.parse(JSON.stringify(tour)),
    },
  };
}

const Tour = ({ tour, tours }) => {
  const router = useRouter();
  const tour_id = router.query.tour_id;
  return (
    <>
      <SingleTour totaltours = {tours} tour_data = {tour} />
    </>
  );
};

export default Tour;
