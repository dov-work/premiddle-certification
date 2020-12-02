import { Box } from "@material-ui/core";
import BeerTable from "./components/BeerTable";
import Header from "./components/Header";

const App = () => (
  <Box>
    <Header />
    <BeerTable />
  </Box>
);

export default App;
