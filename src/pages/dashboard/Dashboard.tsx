import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

const CustomCard = styled(Card)({
  height: "100%",
});

const CustomCardHeader = styled(CardHeader)({
  backgroundColor: "#f5f5f5",
});

const CustomCardContent = styled(CardContent)({
  padding: "16px",
});

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <CustomCardHeader
              title="Project Summary"
              subheader="Overview of all projects"
            />
            <CustomCardContent>
              <Typography variant="h6">Total Projects: 10</Typography>
              <Typography variant="body1">Completed: 6</Typography>
              <Typography variant="body1">In Progress: 3</Typography>
              <Typography variant="body1">On Hold: 1</Typography>
            </CustomCardContent>
          </CustomCard>
        </Grid>
        {/* Active Projects Card */}
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <CustomCardHeader
              title="Active Projects"
              subheader="Projects currently in progress"
            />
            <CustomCardContent>
              <Typography variant="h6">Project Alpha</Typography>
              <Typography variant="body1">Status: In Progress</Typography>
              <Divider />
              <Typography variant="h6" style={{ marginTop: "16px" }}>
                Project Beta
              </Typography>
              <Typography variant="body1">Status: In Progress</Typography>
              <Divider />
              <Typography variant="h6" style={{ marginTop: "16px" }}>
                Project Gamma
              </Typography>
              <Typography variant="body1">Status: In Progress</Typography>
            </CustomCardContent>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <CustomCardHeader
              title="Completed Projects"
              subheader="Projects that have been completed"
            />
            <CustomCardContent>
              <Typography variant="h6">Project Delta</Typography>
              <Typography variant="body1">Completed on: 2024-08-20</Typography>
              <Divider />
              <Typography variant="h6" style={{ marginTop: "16px" }}>
                Project Epsilon
              </Typography>
              <Typography variant="body1">Completed on: 2024-07-15</Typography>
              <Divider />
              <Typography variant="h6" style={{ marginTop: "16px" }}>
                Project Zeta
              </Typography>
              <Typography variant="body1">Completed on: 2024-06-10</Typography>
            </CustomCardContent>
          </CustomCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
