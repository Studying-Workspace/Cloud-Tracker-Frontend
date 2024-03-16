import { Tab, Tabs, tabsClasses } from "@mui/material";

interface Props {
  value : number ; 
  setValue : Function ; 
};

const BlogNavigator = ({value , setValue}:Props) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="px-24">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="visible arrows tabs example"
        sx={{
          "& .MuiTabs-scroller": {
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-between", 
              //borderBottom: "solid 1px gray"
            },
          },
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
          "& .MuiTab-root": {
            //minWidth: "auto", 
            width: "calc(100%/4)", 
            fontSize: "16px",
            textTransform: "capitalize",
          },
          "& .Mui-selected": {
            color: "black !important",
            fontSize: "16px",
            fontWeight: "bold",
            background: "rgba(0,0,0,10%)",
          },
          "& .MuiTabs-indicator": {
            display: "none !important", // Hide the active indicator
          },
        }}
      >
        <Tab label="All" />
        <Tab label="Machine Learning" />
        <Tab label="Web Development" />
        <Tab label="Technology" />
      </Tabs>
    </div>
  );
};

export default BlogNavigator;
