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
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JR96XP2');</script>
<!-- End Google Tag Manager -->
